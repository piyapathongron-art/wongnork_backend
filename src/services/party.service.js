import { prisma } from "../lib/prisma.js";
import createHttpError from "http-errors";
import { createMessageService } from "./socket.service.js";

// Helper: send a SYSTEM type chat message
const sendSystemMessage = (partyId, userId, text) => {
  return createMessageService({
    partyId,
    userId,
    text,
    imageUrl: null,
    type: "SYSTEM"
  });
};

const checkPartyConstraints = async (tx, userId, targetRestaurantId, targetMeetupTime) => {
  const activeParties = await tx.partyMember.findMany({
    where: {
      userId: userId,
      party: {
        status: { in: ["OPEN", "FULL", "PENDING_SETTLEMENT"] }
      }
    },
    include: {
      party: true
    }
  });

  for (const mp of activeParties) {
    if (mp.party.restaurantId === targetRestaurantId) {
      throw createHttpError(400, "คุณกำลังอยู่ในปาร์ตี้ของร้านนี้ที่ยังไม่จบ");
    }

    const mpTime = new Date(mp.party.meetupTime).getTime();
    const targetTime = new Date(targetMeetupTime).getTime();
    const diff = Math.abs(mpTime - targetTime);

    if (diff < 1 * 60 * 60 * 1000) {
      throw createHttpError(400, "คุณมี party ที่มีระยะเวลาใกล้กันอยู่");
    }
  }
};

const checkAndTransitionExpiredParties = async () => {
  const fiveHoursAgo = new Date(Date.now() - 5 * 60 * 60 * 1000);

  // Find parties that should be transitioned
  const expiredParties = await prisma.party.findMany({
    where: {
      status: { in: ["OPEN", "FULL"] },
      meetupTime: { lt: fiveHoursAgo }
    }
  });

  if (expiredParties.length > 0) {
    // Update OPEN/FULL parties that are older than 5 hours to PENDING_SETTLEMENT
    await prisma.party.updateMany({
      where: {
        id: { in: expiredParties.map(p => p.id) }
      },
      data: {
        status: "PENDING_SETTLEMENT"
      }
    });

    // Send system message for each
    expiredParties.forEach(p => {
      sendSystemMessage(p.id, p.leaderId, "--- มื้ออาหารผ่านไป 5 ชม. แล้ว รบกวนหัวหน้าสรุปยอดบิลด้วยครับ ---");
    });
  }
};

export const getAllPartiesService = async () => {
  await checkAndTransitionExpiredParties();
  return await prisma.party.findMany({
    where: { status: { in: ["OPEN", "FULL"] } },
    include: {
      restaurant: { include: { images: { where: { isCover: true } } } },
      _count: {
        select: { members: true }
      },
      leader: {
        select: { id: true, name: true, avatarUrl: true }
      },
      members: {
        include: {
          user: { select: { id: true, name: true, avatarUrl: true } }
        }
      }
    },
    orderBy: { meetupTime: "asc" }
  });
};

export const getPartiesWithPaginationService = async (page = 1, limit = 10) => {
  await checkAndTransitionExpiredParties();
  const skip = (page - 1) * limit;

  const [parties, totalItems] = await prisma.$transaction([
    // 1. ตัวดึงข้อมูล
    prisma.party.findMany({
      where: {
        status: { in: ["OPEN", "FULL"] }
      },
      skip: skip,
      take: limit,
      include: {
        restaurant: true,
        _count: {
          select: { members: true }
        },
        leader: {
          select: { id: true, name: true, avatarUrl: true }
        },
        members: {
          include: {
            user: {
              select: { id: true, name: true, avatarUrl: true }
            }
          }
        }
      },
      orderBy: { meetupTime: "asc" }
    }),

    // 2. ตัวนับจำนวน (นับหน้า)
    prisma.party.count({
      where: {
        status: { in: ["OPEN", "FULL"] }
      }
    })
  ]);

  return {
    data: parties,
    meta: {
      totalItems,
      itemCount: parties.length,
      itemsPerPage: limit,
      totalPages: Math.ceil(totalItems / limit),
      currentPage: page
    }
  };
};

export const getPartyByIdService = async (partyId) => {
  return await prisma.party.findUnique({
    where: { id: partyId },
    include: {
      restaurant: {
        include: {
          images: true,
          reviews: {
            include: {
              user: { select: { id: true, name: true, avatarUrl: true } }
            }
          }
        }
      },
      leader: {
        select: { id: true, name: true, avatarUrl: true, promptPayNumber: true, promptPayName: true }
      },
      members: {
        include: {
          user: { select: { id: true, name: true, avatarUrl: true } }
        }
      },
      orderItems: {
        include: {
          menu: true,
          addedBy: true,
          sharers: { include: { user: true } }
        }
      }
    }
  });
};

export const createPartyService = async (restaurantId, leaderId, data) => {
  return await prisma.$transaction(async (tx) => {
    // 1. Check constraints
    await checkPartyConstraints(tx, leaderId, restaurantId, data.meetupTime);

    // 2. Create party
    const newParty = await tx.party.create({
      data: {
        ...data,
        restaurant: { connect: { id: restaurantId } },
        leader: { connect: { id: leaderId } }
      }
    });

    // 3. Add leader as first member
    await tx.partyMember.create({
      data: {
        partyId: newParty.id,
        userId: leaderId
      }
    });

    return newParty;
  });
};

export const joinPartyService = async (partyId, userId) => {
  return await prisma.$transaction(async (tx) => {
    const party = await tx.party.findUnique({
      where: { id: partyId },
      include: {
        _count: { select: { members: true } }
      }
    });

    if (!party) throw createHttpError(404, "Party not found");
    if (party.status !== "OPEN") throw createHttpError(400, "Party is not open for joining");
    if (party._count.members >= party.maxParticipants) {
      throw createHttpError(400, "Party is already full");
    }

    // Check overlaps
    await checkPartyConstraints(tx, userId, party.restaurantId, party.meetupTime);

    const newMember = await tx.partyMember.create({
      data: {
        partyId: party.id,
        userId: userId
      }
    });

    // Update status to FULL if reached limit
    if (party._count.members + 1 >= party.maxParticipants) {
      await tx.party.update({
        where: { id: partyId },
        data: { status: "FULL" }
      });
    }

    return newMember;
  });
};

export const leavePartyService = async (partyId, userId) => {
  return await prisma.$transaction(async (tx) => {
    const party = await tx.party.findUnique({
      where: { id: partyId },
      include: { members: true }
    });

    if (!party) throw createHttpError(404, "Party not found");

    // ถ้าเป็น Leader และเป็นคนสุดท้าย ให้ยกเลิกตี้
    if (party.leaderId === userId && party.members.length === 1) {
      await tx.party.update({
        where: { id: partyId },
        data: { status: "CANCELLED" }
      });
    } else if (party.leaderId === userId) {
      // ถ้าเป็น Leader แต่ยังมีคนอื่น ให้โอนสิทธิ์
      const nextLeader = party.members.find(m => m.userId !== userId);
      await tx.party.update({
        where: { id: partyId },
        data: { leaderId: nextLeader.userId }
      });
    }

    await tx.partyMember.delete({
      where: { partyId_userId: { partyId, userId } }
    });

    // ถ้าตี้เคย FULL ให้กลับมา OPEN
    if (party.status === "FULL") {
      await tx.party.update({
        where: { id: partyId },
        data: { status: "OPEN" }
      });
    }
  });
};

export const kickMemberService = async (partyId, leaderId, memberUserId) => {
  const party = await prisma.party.findUnique({
    where: { id: partyId }
  });

  if (!party) throw createHttpError(404, "Party not found");
  if (party.leaderId !== leaderId) throw createHttpError(403, "Only leader can kick members");
  if (leaderId === memberUserId) throw createHttpError(400, "Leader cannot kick themselves");

  await prisma.partyMember.delete({
    where: { partyId_userId: { partyId, userId: memberUserId } }
  });

  if (party.status === "FULL") {
    await prisma.party.update({
      where: { id: partyId },
      data: { status: "OPEN" }
    });
  }
};

const checkIsMemberActive = async (partyId, userId) => {
  const member = await prisma.partyMember.findUnique({
    where: { partyId_userId: { partyId, userId } },
    include: { party: true }
  });
  if (!member) throw createHttpError(403, "คุณไม่ได้อยู่ในปาร์ตี้นี้");
  if (member.party.status === "COMPLETED" || member.party.status === "CANCELLED") {
    throw createHttpError(400, "ไม่สามารถแก้ไขรายการอาหารในปาร์ตี้ที่จบแล้วได้");
  }
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

    // 🌟 Send System Message
    const user = await tx.user.findUnique({ where: { id: userId } });
    const itemName = orderData.isCustom ? orderData.name : (await tx.menu.findUnique({ where: { id: orderData.menuId } })).name;
    sendSystemMessage(partyId, userId, `${user.name} ได้เพิ่ม ${itemName} ลงในบิล`);

    return newItem;
  });
};

export const updatePartyOrderItemQuantityService = async (partyId, userId, itemId, action) => {
  await checkIsMemberActive(partyId, userId);

  return await prisma.$transaction(async (tx) => {
    const item = await tx.partyOrderItem.findUnique({ where: { id: itemId } });
    if (!item) throw createHttpError(404, "ไม่พบรายการในบิล");
    if (item.partyId !== partyId) throw createHttpError(400, "ไอเท็มนี้ไม่ได้อยู่ในปาร์ตี้นี้");

    const user = await tx.user.findUnique({ where: { id: userId } });
    const itemName = item.isCustom ? item.name : (await tx.menu.findUnique({ where: { id: item.menuId } })).name;

    if (action === "increment") {
      const updated = await tx.partyOrderItem.update({
        where: { id: itemId },
        data: { quantity: { increment: 1 } }
      });
      sendSystemMessage(partyId, userId, `${user.name} ได้ปรับจำนวน ${itemName} เป็น ${updated.quantity} จาน`);
      return updated;
    } else if (action === "decrement") {
      if (item.quantity <= 1) {
        await tx.partyOrderItem.delete({ where: { id: itemId } });
        sendSystemMessage(partyId, userId, `${user.name} ได้ลบรายการ ${itemName} ออกจากบิล`);
        return { deleted: true };
      } else {
        const updated = await tx.partyOrderItem.update({
          where: { id: itemId },
          data: { quantity: { decrement: 1 } }
        });
        sendSystemMessage(partyId, userId, `${user.name} ได้ปรับจำนวน ${itemName} เป็น ${updated.quantity} จาน`);
        return updated;
      }
    }
  });
};

export const togglePartyOrderItemSharerService = async (partyId, userId, itemId, action) => {
  await checkIsMemberActive(partyId, userId);

  const item = await prisma.partyOrderItem.findUnique({ where: { id: itemId } });
  if (!item || item.partyId !== partyId) throw createHttpError(404, "ไม่พบรายการในบิล");

  const user = await prisma.user.findUnique({ where: { id: userId } });
  const itemName = item.isCustom ? item.name : (await prisma.menu.findUnique({ where: { id: item.menuId } })).name;

  if (action === "join") {
    try {
      const res = await prisma.partyOrderItemSharer.create({
        data: { partyOrderItemId: itemId, userId }
      });
      sendSystemMessage(partyId, userId, `${user.name} ได้เข้าร่วมหาร ${itemName}`);
      return res;
    } catch (e) {
      if (e.code === 'P2002') return { alreadyJoined: true };
      throw e;
    }
  } else {
    try {
      const res = await prisma.partyOrderItemSharer.delete({
        where: {
          partyOrderItemId_userId: { partyOrderItemId: itemId, userId }
        }
      });
      sendSystemMessage(partyId, userId, `${user.name} ได้ถอนตัวจากการหาร ${itemName}`);
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
    const party = await tx.party.findUnique({
      where: { id: partyId },
      include: { _count: { select: { members: true } } }
    });
    if (!party) throw createHttpError(404, "Party not found");
    if (party.leaderId !== leaderId) throw createHttpError(403, "คุณไม่ใช่หัวหน้าปาร์ตี้");
    if (party.status === "COMPLETED" || party.status === "CANCELLED") {
      throw createHttpError(400, "ไม่สามารถแก้ไขปาร์ตี้ที่จบหรือยกเลิกแล้วได้");
    }

    const currentMembersCount = party._count.members;
    const newMaxParticipants = data.maxParticipants !== undefined ? data.maxParticipants : party.maxParticipants;

    let newStatus = data.status || party.status;

    // 🌟 Auto-update status logic:
    if (newStatus === "OPEN" || newStatus === "FULL") {
      if (currentMembersCount >= newMaxParticipants) {
        newStatus = "FULL";
      } else {
        newStatus = "OPEN";
      }
    }

    // 🌟 Send System Message if status changed
    if (data.status === "COMPLETED") {
      sendSystemMessage(partyId, leaderId, "--- ปาร์ตี้นี้จบลงแล้ว สรุปยอดบิลเรียบร้อย ---");
    } else if (data.status === "CANCELLED") {
      sendSystemMessage(partyId, leaderId, "--- ปาร์ตี้นี้ถูกยกเลิกแล้ว ---");
    }

    return await tx.party.update({
      where: { id: partyId },
      data: {
        name: data.name !== undefined ? data.name : party.name,
        details: data.details !== undefined ? data.details : party.details,
        meetupTime: data.meetupTime !== undefined ? data.meetupTime : party.meetupTime,
        maxParticipants: newMaxParticipants,
        vat: data.vat !== undefined ? parseFloat(data.vat) : party.vat,
        serviceCharge: data.serviceCharge !== undefined ? parseFloat(data.serviceCharge) : party.serviceCharge,
        status: newStatus,
        contactInfo: data.contactInfo !== undefined ? data.contactInfo : party.contactInfo,
      }
    });
  });
};

export const notifyPaymentService = async (partyId, userId, paymentSlipUrl) => {
  const member = await prisma.partyMember.findUnique({
    where: { partyId_userId: { partyId, userId } }
  });
  if (!member) throw createHttpError(404, "คุณไม่ได้อยู่ในปาร์ตี้นี้");

  const updatedMember = await prisma.partyMember.update({
    where: { partyId_userId: { partyId, userId } },
    data: {
      paymentStatus: "PAID",
      paymentSlipUrl,
      paidAt: new Date()
    },
    include: { user: { select: { name: true } } }
  });

  // 🌟 Send System Message
  sendSystemMessage(partyId, userId, `${updatedMember.user.name} ได้แจ้งชำระเงินแล้ว ตรวจสอบสลิปได้ในหน้าสรุปบิล`);

  return updatedMember;
};

export const verifyPaymentService = async (partyId, leaderId, memberUserId) => {
  const party = await prisma.party.findUnique({ where: { id: partyId } });
  if (!party) throw createHttpError(404, "Party not found");
  if (party.leaderId !== leaderId) throw createHttpError(403, "คุณไม่ใช่หัวหน้าปาร์ตี้");

  const updatedMember = await prisma.partyMember.update({
    where: { partyId_userId: { partyId, userId: memberUserId } },
    data: { paymentStatus: "VERIFIED" },
    include: { user: { select: { name: true } } }
  });

  // 🌟 Send System Message
  sendSystemMessage(partyId, leaderId, `หัวหน้ากดยืนยันยอดเงินของ ${updatedMember.user.name} เรียบร้อยแล้ว ✅`);

  return updatedMember;
};

export const cancelPaymentService = async (partyId, userId) => {
  const member = await prisma.partyMember.findUnique({
    where: { partyId_userId: { partyId, userId } }
  });

  if (!member) throw createHttpError(404, "Member not found");
  if (member.paymentStatus === "VERIFIED") {
    throw createHttpError(400, "ไม่สามารถยกเลิกได้เนื่องจากหัวหน้ายืนยันยอดเงินเรียบร้อยแล้ว");
  }

  const updatedMember = await prisma.partyMember.update({
    where: { partyId_userId: { partyId, userId } },
    data: {
      paymentStatus: "PENDING",
      paymentSlipUrl: null,
      paidAt: null
    },
    include: { user: { select: { name: true } } }
  });

  // 🌟 Send System Message
  sendSystemMessage(partyId, userId, `${updatedMember.user.name} ได้ยกเลิกการแจ้งโอนเงิน (กำลังแก้ไขข้อมูล)`);

  return updatedMember;
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
  const memberSummaryMap = {};
  party.members.forEach(m => {
    memberSummaryMap[m.userId] = {
      memberId: m.id,
      user: m.user,
      items: [],
      summary: { subtotal: 0, serviceCharge: 0, vat: 0, netTotal: 0 },
      paymentStatus: m.paymentStatus,
      paymentSlipUrl: m.paymentSlipUrl,
      paidAt: m.paidAt
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
