import { prisma } from "../lib/prisma.js";
import createHttpError from "http-errors";

const checkPartyConstraints = async (tx, userId, targetRestaurantId, targetMeetupTime) => {
  const activeParties = await tx.partyMember.findMany({
    where: {
      userId: userId,
      party: {
        status: { in: ["OPEN", "FULL"] }
      }
    },
    include: { party: true }
  });

  const targetTime = new Date(targetMeetupTime).getTime();
  const overlapWindowMs = 60 * 60 * 1000;

  for (const member of activeParties) {
    const existingParty = member.party;
    if (existingParty.restaurantId === targetRestaurantId) {
      throw createHttpError(400, "คุณกำลังอยู่ในปาร์ตี้ของร้านนี้ที่ยังไม่จบ");
    }
    const existingTime = new Date(existingParty.meetupTime).getTime();
    if (Math.abs(targetTime - existingTime) <= overlapWindowMs) {
      throw createHttpError(400, "คุณมี party ที่มีระยะเวลาใกล้กันอยู่");
    }
  }
};

export const getAllPartiesService = async () => {
  return await prisma.party.findMany({
    where: { status: "OPEN" },
    include: {
      restaurant: true,
      _count: { select: { members: true } },
      leader: { select: { id: true, name: true, avatarUrl: true } },
      members: {
        include: {
          user: { select: { id: true, name: true, avatarUrl: true } }
        }
      }
    },
    orderBy: { meetupTime: "asc" }
  });
};

export const getPartyByIdService = async (id) => {
  return await prisma.party.findUnique({
    where: { id },
    include: {
      restaurant: true,
      orderItems: {
        include: {
          menu: true,
          addedBy: { select: { id: true, name: true, avatarUrl: true } },
          sharers: {
            include: {
              user: { select: { id: true, name: true, avatarUrl: true } }
            }
          }
        }
      },
      leader: { select: { id: true, name: true, avatarUrl: true } },
      members: {
        include: {
          user: { select: { id: true, name: true, avatarUrl: true } }
        }
      }
    }
  });
};

export const createPartyService = async (restaurantId, leaderId, data) => {
  return await prisma.$transaction(async (tx) => {
    await checkPartyConstraints(tx, leaderId, restaurantId, data.meetupTime);
    const newParty = await tx.party.create({
      data: {
        ...data,
        restaurantId,
        leaderId,
      }
    });
    await tx.partyMember.create({
      data: { partyId: newParty.id, userId: leaderId }
    });
    return newParty;
  });
};

export const joinPartyService = async (partyId, userId) => {
  return await prisma.$transaction(async (tx) => {
    const party = await tx.party.findUnique({
      where: { id: partyId },
      include: { _count: { select: { members: true } } }
    });
    if (!party) throw createHttpError(404, "Party not found");
    if (party.status !== "OPEN") throw createHttpError(400, "Party is not open for joining");
    if (party._count.members >= party.maxParticipants) {
      throw createHttpError(400, "Party is already full");
    }
    await checkPartyConstraints(tx, userId, party.restaurantId, party.meetupTime);
    const newMember = await tx.partyMember.create({ data: { partyId, userId } });
    if (party._count.members + 1 === party.maxParticipants) {
      await tx.party.update({ where: { id: partyId }, data: { status: "FULL" } });
    }
    return newMember;
  });
};

export const leavePartyService = async (partyId, userId) => {
  return await prisma.$transaction(async (tx) => {
    const party = await tx.party.findUnique({
      where: { id: partyId },
      include: { members: { orderBy: { joinedAt: "asc" } } },
    });
    if (!party) throw createHttpError(404, "Party not found");
    const isLeader = party.leaderId === userId;
    const remainingMembers = party.members.filter((m) => m.userId !== userId);

    await tx.partyOrderItemSharer.deleteMany({
      where: { partyOrderItem: { partyId }, userId }
    });

    await tx.partyMember.deleteMany({
      where: { partyId: partyId, userId: userId }
    });

    if (isLeader) {
      if (remainingMembers.length > 0) {
        const newLeader = remainingMembers[0];
        await tx.party.update({ where: { id: partyId }, data: { leaderId: newLeader.userId } });
      } else {
        await tx.party.update({ where: { id: partyId }, data: { status: "CANCELLED" } });
      }
    }
    if (party.status === "FULL" && remainingMembers.length > 0) {
      await tx.party.update({ where: { id: partyId }, data: { status: "OPEN" } });
    }
  });
};

export const kickMemberService = async (partyId, leaderId, memberUserId) => {
  return await prisma.$transaction(async (tx) => {
    const party = await tx.party.findUnique({ where: { id: partyId } });
    if (!party) throw createHttpError(404, "Party not found");
    if (party.leaderId !== leaderId) throw createHttpError(403, "คุณไม่ใช่หัวหน้าปาร์ตี้นี้");
    if (memberUserId === leaderId) throw createHttpError(400, "หัวหน้าปาร์ตี้ไม่สามารถเตะตัวเองได้");

    await tx.partyOrderItemSharer.deleteMany({
      where: { partyOrderItem: { partyId }, userId: memberUserId }
    });
    await tx.partyMember.deleteMany({ where: { partyId, userId: memberUserId } });
    if (party.status === "FULL") {
      await tx.party.update({ where: { id: partyId }, data: { status: "OPEN" } });
    }
  });
};

// ------------------------------------------------------------------
// Split Bill / Party Order Items Logic (Hybrid Opt-in Flow)
// ------------------------------------------------------------------

const checkIsMemberActive = async (partyId, userId) => {
  const member = await prisma.partyMember.findUnique({ where: { partyId_userId: { partyId, userId } } });
  if (!member) throw createHttpError(403, "คุณไม่ใช่สมาชิกในปาร์ตี้นี้");

  const party = await prisma.party.findUnique({ where: { id: partyId } });
  if (party.status === "COMPLETED" || party.status === "CANCELLED") {
    throw createHttpError(400, "ไม่สามารถแก้ไขรายการอาหารในปาร์ตี้ที่จบหรือยกเลิกแล้วได้");
  }
  return { member, party };
};

export const addPartyOrderItemService = async (partyId, userId, orderData) => {
  await checkIsMemberActive(partyId, userId);

  return await prisma.$transaction(async (tx) => {
    if (!orderData.isCustom && orderData.menuId) {
      const existingItem = await tx.partyOrderItem.findFirst({
        where: { partyId, menuId: orderData.menuId, isCustom: false }
      });
      if (existingItem) {
        const updated = await tx.partyOrderItem.update({
          where: { id: existingItem.id },
          data: { quantity: { increment: orderData.quantity || 1 } }
        });

        const existingSharer = await tx.partyOrderItemSharer.findUnique({
          where: { partyOrderItemId_userId: { partyOrderItemId: existingItem.id, userId } }
        });
        if (!existingSharer) {
          await tx.partyOrderItemSharer.create({
            data: { partyOrderItemId: existingItem.id, userId }
          });
        }
        return updated;
      }
    }

    let price = orderData.price;
    if (!orderData.isCustom && orderData.menuId) {
      const menu = await tx.menu.findUnique({ where: { id: orderData.menuId } });
      if (!menu) throw createHttpError(404, "ไม่พบเมนูในร้านนี้");
      price = menu.price;
    }

    const newItem = await tx.partyOrderItem.create({
      data: {
        partyId,
        addedById: userId,
        menuId: orderData.menuId || null,
        isCustom: orderData.isCustom,
        name: orderData.name || null,
        price: price,
        quantity: orderData.quantity || 1
      }
    });

    await tx.partyOrderItemSharer.create({
      data: { partyOrderItemId: newItem.id, userId }
    });

    return newItem;
  });
};

export const updatePartyOrderItemQuantityService = async (partyId, userId, itemId, action) => {
  await checkIsMemberActive(partyId, userId);

  return await prisma.$transaction(async (tx) => {
    const item = await tx.partyOrderItem.findUnique({ where: { id: itemId } });
    if (!item) throw createHttpError(404, "ไม่พบรายการในบิล");
    if (item.partyId !== partyId) throw createHttpError(400, "ไอเท็มนี้ไม่ได้อยู่ในปาร์ตี้นี้");

    if (action === "increment") {
      return await tx.partyOrderItem.update({
        where: { id: itemId },
        data: { quantity: { increment: 1 } }
      });
    } else if (action === "decrement") {
      if (item.quantity <= 1) {
        await tx.partyOrderItem.delete({ where: { id: itemId } });
        return { deleted: true };
      } else {
        return await tx.partyOrderItem.update({
          where: { id: itemId },
          data: { quantity: { decrement: 1 } }
        });
      }
    }
  });
};

export const togglePartyOrderItemSharerService = async (partyId, userId, itemId, action) => {
  await checkIsMemberActive(partyId, userId);

  const item = await prisma.partyOrderItem.findUnique({ where: { id: itemId } });
  if (!item || item.partyId !== partyId) throw createHttpError(404, "ไม่พบรายการในบิล");

  if (action === "join") {
    try {
      return await prisma.partyOrderItemSharer.create({
        data: { partyOrderItemId: itemId, userId }
      });
    } catch (e) {
      if (e.code === 'P2002') return { alreadyJoined: true };
      throw e;
    }
  } else {
    try {
      await prisma.partyOrderItemSharer.delete({
        where: {
          partyOrderItemId_userId: { partyOrderItemId: itemId, userId }
        }
      });
      return { success: true };
    } catch (e) {
      if (e.code === 'P2025') return { success: true };
      throw e;
    }
  }
};

export const removePartyOrderItemService = async (partyId, userId, itemId) => {
  await checkIsMemberActive(partyId, userId);
  const item = await prisma.partyOrderItem.findUnique({ where: { id: itemId } });
  if (!item || item.partyId !== partyId) throw createHttpError(404, "ไม่พบรายการในบิล");

  await prisma.partyOrderItem.delete({ where: { id: itemId } });
  return { deleted: true };
};

export const updatePartySettingsService = async (partyId, leaderId, data) => {
  return await prisma.$transaction(async (tx) => {
    const party = await tx.party.findUnique({ where: { id: partyId } });
    if (!party) throw createHttpError(404, "Party not found");
    if (party.leaderId !== leaderId) throw createHttpError(403, "คุณไม่ใช่หัวหน้าปาร์ตี้");
    if (party.status === "COMPLETED" || party.status === "CANCELLED") {
      throw createHttpError(400, "ไม่สามารถแก้ไขปาร์ตี้ที่จบหรือยกเลิกแล้วได้");
    }

    return await tx.party.update({
      where: { id: partyId },
      data: {
        name: data.name !== undefined ? data.name : party.name,
        maxParticipants: data.maxParticipants !== undefined ? data.maxParticipants : party.maxParticipants,
        vat: data.vat !== undefined ? parseFloat(data.vat) : party.vat,
        serviceCharge: data.serviceCharge !== undefined ? parseFloat(data.serviceCharge) : party.serviceCharge,
        status: data.status || party.status,
      }
    });
  });
};

export const calculateSplitBillService = async (partyId) => {
  const party = await prisma.party.findUnique({
    where: { id: partyId },
    include: {
      members: {
        include: { user: { select: { id: true, name: true, avatarUrl: true } } }
      },
      orderItems: {
        include: {
          menu: true,
          sharers: { include: { user: { select: { id: true, name: true, avatarUrl: true } } } },
          addedBy: { select: { id: true, name: true, avatarUrl: true } }
        }
      }
    }
  });

  if (!party) throw createHttpError(404, "Party not found");

  const totalMembers = party.members.length;
  // Calculate extra fee per person (VAT and Service Charge shared equally)
  const extraFeePerPerson = totalMembers > 0 ? (party.vat + party.serviceCharge) / totalMembers : 0;

  const memberSummaryMap = {};
  party.members.forEach(m => {
    memberSummaryMap[m.userId] = {
      memberId: m.id,
      user: m.user,
      items: [],
      summary: { subtotal: 0, serviceCharge: 0, vat: 0, netTotal: 0 }
    };
  });

  const tableItems = party.orderItems.map(item => {
    const totalItemPrice = item.price * item.quantity;
    const sharers = item.sharers;
    const sharerCount = sharers.length;

    let costPerPerson = 0;
    if (sharerCount > 0) {
      costPerPerson = totalItemPrice / sharerCount;
      const itemName = item.isCustom ? item.name : item.menu?.name;
      const itemType = item.isCustom ? "CUSTOM" : "OFFICIAL";

      sharers.forEach(sharer => {
        if (memberSummaryMap[sharer.userId]) {
          memberSummaryMap[sharer.userId].items.push({
            itemId: item.id,
            name: itemName,
            imageUrl: item.menu?.imageUrl || null,
            price: totalItemPrice,
            quantity: item.quantity,
            sharedBy: sharerCount,
            costPerPerson: costPerPerson,
            type: itemType
          });
          memberSummaryMap[sharer.userId].summary.subtotal += costPerPerson;
        }
      });
    }

    return {
      id: item.id,
      name: item.isCustom ? item.name : item.menu?.name,
      imageUrl: item.menu?.imageUrl || null,
      price: item.price,
      quantity: item.quantity,
      isCustom: item.isCustom,
      totalPrice: totalItemPrice,
      addedBy: item.addedBy,
      sharers: sharers.map(s => s.user),
      costPerPerson: costPerPerson
    };
  });

  let grandTotal = 0;
  const membersSummary = Object.values(memberSummaryMap).map(memberData => {
    const subtotal = memberData.summary.subtotal;

    // Share VAT and SC equally among all members
    const serviceChargePerPerson = totalMembers > 0 ? party.serviceCharge / totalMembers : 0;
    const vatPerPerson = totalMembers > 0 ? party.vat / totalMembers : 0;

    const netTotal = subtotal + serviceChargePerPerson + vatPerPerson;
    grandTotal += netTotal;

    memberData.summary.serviceCharge = serviceChargePerPerson;
    memberData.summary.vat = vatPerPerson;
    memberData.summary.netTotal = netTotal;

    return memberData;
  });

  return {
    partyId: party.id,
    serviceChargeAmount: party.serviceCharge,
    vatAmount: party.vat,
    grandTotal: grandTotal,
    tableItems: tableItems,
    members: membersSummary
  };
};
