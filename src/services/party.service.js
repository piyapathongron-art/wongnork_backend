import { prisma } from "../lib/prisma.js";
import createHttpError from "http-errors";

// Helper function to check if a user can join or create a party
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
  const overlapWindowMs = 60 * 60 * 1000; // 1 ชั่วโมง (1 hour in milliseconds)

  for (const member of activeParties) {
    const existingParty = member.party;

    // กฎข้อที่ 1: ห้าม Join/Create ร้านอาหารซ้ำที่ยังมีปาร์ตี้ค้างอยู่ (OPEN/FULL)
    if (existingParty.restaurantId === targetRestaurantId) {
      throw createHttpError(400, "คุณกำลังอยู่ในปาร์ตี้ของร้านนี้ที่ยังไม่จบ");
    }

    // กฎข้อที่ 2: ห้ามเวลาทับซ้อนกันในระยะ 1 ชั่วโมง
    const existingTime = new Date(existingParty.meetupTime).getTime();
    if (Math.abs(targetTime - existingTime) <= overlapWindowMs) {
      throw createHttpError(400, "คุณมี party ที่มีระยะเวลาใกล้กันอยู่");
    }
  }
};

// ดึงรายการปาร์ตี้ทั้งหมด (ที่ยังเปิดอยู่)
export const getAllPartiesService = async () => {
  return await prisma.party.findMany({
    where: { status: "OPEN" },
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
  });
};

export const getPartiesWithPaginationService = async (page = 1, limit = 10) => {
  const skip = (page - 1) * limit;

  const [parties, totalItems] = await prisma.$transaction([
    // 1. ตัวดึงข้อมูล
    prisma.party.findMany({
      where: { 
        status: { in: ["OPEN", "FULL"] } // 🌟 ยัดเงื่อนไขลงไปตรงๆ
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
        status: { in: ["OPEN", "FULL"] } // 🌟 ยัดเงื่อนไขลงไปตรงๆ (ต้องเหมือนตัวบนเป๊ะๆ)
      }
    })
  ]);

  return {
    data: parties,
    meta: {
      totalItems: totalItems,
      currentPage: page,
      itemsPerPage: limit,
      totalPages: Math.ceil(totalItems / limit)
    }
  };
};

// ดึงรายละเอียดปาร์ตี้รายอัน
export const getPartyByIdService = async (id) => {
  return await prisma.party.findUnique({
    where: { id },
    include: {
      restaurant: true,
      customItems: true, // 🌟 เพิ่มข้อมูลเมนูพิเศษของตี้
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
    }
  });
};

// สร้างปาร์ตี้ใหม่
export const createPartyService = async (restaurantId, leaderId, data) => {
  return await prisma.$transaction(async (tx) => {
    // 1. ตรวจสอบเงื่อนไขการสร้างปาร์ตี้ของ Leader (ทับซ้อนเวลา / ร้านเดียวกัน)
    await checkPartyConstraints(tx, leaderId, restaurantId, data.meetupTime);

    // 2. สร้าง Party
    const newParty = await tx.party.create({
      data: {
        ...data,
        restaurantId,
        leaderId,
      }
    });

    // 3. เพิ่ม Leader เข้าเป็น Member คนแรกอัตโนมัติ
    await tx.partyMember.create({
      data: {
        partyId: newParty.id,
        userId: leaderId
      }
    });

    return newParty;
  });
};

// เข้าร่วมปาร์ตี้
export const joinPartyService = async (partyId, userId) => {
  return await prisma.$transaction(async (tx) => {
    // 1. เช็คว่าปาร์ตี้ยังมีที่ว่างไหม
    const party = await tx.party.findUnique({
      where: { id: partyId },
      include: { _count: { select: { members: true } } }
    });

    if (!party) throw createHttpError(404, "Party not found");
    if (party.status !== "OPEN") throw createHttpError(400, "Party is not open for joining");
    if (party._count.members >= party.maxParticipants) {
      throw createHttpError(400, "Party is already full");
    }

    // 2. ตรวจสอบเงื่อนไขการเข้าร่วมปาร์ตี้ของ Member (ทับซ้อนเวลา / ร้านเดียวกัน)
    await checkPartyConstraints(tx, userId, party.restaurantId, party.meetupTime);

    // 3. เพิ่มสมาชิกใหม่
    const newMember = await tx.partyMember.create({
      data: {
        partyId,
        userId
      }
    });

    // 4. ถ้าคนครบแล้ว ให้เปลี่ยนสถานะเป็น FULL อัตโนมัติ
    if (party._count.members + 1 === party.maxParticipants) {
      await tx.party.update({
        where: { id: partyId },
        data: { status: "FULL" }
      });
    }

    return newMember;
  });
};

// ออกจากปาร์ตี้
export const leavePartyService = async (partyId, userId) => {
  return await prisma.$transaction(async (tx) => {
    // ดึงข้อมูลปาร์ตี้เพื่อตรวจสอบว่า user เป็น leader หรือไม่
    const party = await tx.party.findUnique({
      where: { id: partyId },
      include: {
        members: {
          orderBy: { joinedAt: "asc" },
        },
      },
    });

    if (!party) throw createHttpError(404, "Party not found");

    const isLeader = party.leaderId === userId;
    const remainingMembers = party.members.filter((m) => m.userId !== userId);

    // 1. ลบออกจากตาราง Member (ใช้ deleteMany เพื่อป้องกัน P2025 ในกรณีที่ไม่มี Record จาก Seed Data)
    await tx.partyMember.deleteMany({
      where: {
        partyId: partyId,
        userId: userId
      }
    });

    // 2. ถ้าผู้ใช้เป็น Leader ให้โอนตำแหน่งหรือยุบตี้
    if (isLeader) {
      if (remainingMembers.length > 0) {
        // โอนตำแหน่งให้คนที่เข้ามาเป็นลำดับถัดไป
        const newLeader = remainingMembers[0];
        await tx.party.update({
          where: { id: partyId },
          data: { leaderId: newLeader.userId },
        });
      } else {
        // ถ้าไม่มีสมาชิกเหลือเลย ให้เปลี่ยนสถานะเป็น CANCELLED
        await tx.party.update({
          where: { id: partyId },
          data: { status: "CANCELLED" },
        });
      }
    }

    // 3. ถ้าคนออกแล้วสถานะเคย FULL (และตี้ยังไม่ถูก CANCELLED) ให้กลับมาเป็น OPEN
    if (party.status === "FULL" && remainingMembers.length > 0) {
      await tx.party.update({
        where: { id: partyId },
        data: { status: "OPEN" }
      });
    }
  });
};

// เตะสมาชิกออกจากปาร์ตี้ (เฉพาะ Leader)
export const kickMemberService = async (partyId, leaderId, memberUserId) => {
  return await prisma.$transaction(async (tx) => {
    const party = await tx.party.findUnique({
      where: { id: partyId },
    });

    if (!party) throw createHttpError(404, "Party not found");
    if (party.leaderId !== leaderId) {
      throw createHttpError(403, "คุณไม่ใช่หัวหน้าปาร์ตี้นี้");
    }
    if (memberUserId === leaderId) {
      throw createHttpError(400, "หัวหน้าปาร์ตี้ไม่สามารถเตะตัวเองได้ (กรุณากดออกเอง)");
    }

    // ลบออกจากตาราง Member
    await tx.partyMember.delete({
      where: {
        partyId_userId: {
          partyId,
          userId: memberUserId
        }
      }
    });

    if (party.status === "FULL") {
      await tx.party.update({
        where: { id: partyId },
        data: { status: "OPEN" }
      });
    }
  });
};

// ------------------------------------------------------------------
// Split Bill / Order Items Logic
// ------------------------------------------------------------------

// เพิ่มเมนูพิเศษสำหรับปาร์ตี้นี้ (เฉพาะสมาชิกในตี้)
export const addCustomItemService = async (partyId, userId, data) => {
  // เช็คว่าเป็นสมาชิกในตี้ไหม
  const member = await prisma.partyMember.findUnique({
    where: { partyId_userId: { partyId, userId } }
  });
  if (!member) throw createHttpError(403, "คุณไม่ใช่สมาชิกในปาร์ตี้นี้");

  return await prisma.partyCustomItem.create({
    data: {
      name: data.name,
      price: data.price,
      partyId: partyId
    }
  });
};

// เพิ่มเมนูที่เลือกกิน (Order Item) - รองรับทั้งเมนูร้าน และ เมนูพิเศษ
export const addOrderItemService = async (partyId, userId, orderData) => {
  const { menuId, customItemId } = orderData;

  // 1. หา PartyMember ID ของ User คนนี้ในปาร์ตี้
  const member = await prisma.partyMember.findUnique({
    where: {
      partyId_userId: { partyId, userId }
    }
  });

  if (!member) throw createHttpError(403, "คุณไม่ใช่สมาชิกในปาร์ตี้นี้");

  // 2. เช็คว่าตี้ปิดหรือยัง
  const party = await prisma.party.findUnique({ where: { id: partyId } });
  if (party.status === "COMPLETED" || party.status === "CANCELLED") {
    throw createHttpError(400, "ไม่สามารถแก้ไขรายการอาหารในปาร์ตี้ที่จบหรือยกเลิกแล้วได้");
  }

  // 3. เพิ่มลงตาราง (รองรับทั้งคู่)
  return await prisma.memberOrderItem.create({
    data: {
      memberId: member.id,
      menuId: menuId || null,
      customItemId: customItemId || null
    }
  });
};

// ลบเมนูที่เลือกกิน
export const removeOrderItemService = async (partyId, userId, orderData) => {
  const { menuId, customItemId } = orderData;

  const member = await prisma.partyMember.findUnique({
    where: {
      partyId_userId: { partyId, userId }
    }
  });

  if (!member) throw createHttpError(403, "คุณไม่ใช่สมาชิกในปาร์ตี้นี้");

  const party = await prisma.party.findUnique({ where: { id: partyId } });
  if (party.status === "COMPLETED" || party.status === "CANCELLED") {
    throw createHttpError(400, "ไม่สามารถแก้ไขรายการอาหารในปาร์ตี้ที่จบหรือยกเลิกแล้วได้");
  }

  if (menuId) {
    return await prisma.memberOrderItem.delete({
      where: {
        memberId_menuId: {
          memberId: member.id,
          menuId: menuId
        }
      }
    });
  } else if (customItemId) {
    return await prisma.memberOrderItem.delete({
      where: {
        memberId_customItemId: {
          memberId: member.id,
          customItemId: customItemId
        }
      }
    });
  }
};

// คำนวณหารค่าอาหาร (Split Bill Aggregation)
export const calculateSplitBillService = async (partyId) => {
  // 1. ดึงข้อมูลปาร์ตี้ทั้งหมดพร้อมข้อมูลลูกตี้และเมนูที่เลือก (ทั้งแบบร้าน และ แบบพิเศษ)
  const party = await prisma.party.findUnique({
    where: { id: partyId },
    include: {
      members: {
        include: {
          user: { select: { id: true, name: true, avatarUrl: true } },
          orderItems: {
            include: {
              menu: true,
              customItem: true
            }
          }
        }
      }
    }
  });

  if (!party) throw createHttpError(404, "Party not found");

  // 2. คำนวณว่าแต่ละเมนู (ทั้ง 2 ประเภท) มีคนหารกี่คน
  const menuSharerCount = {}; // { menuId: count }
  const customSharerCount = {}; // { customItemId: count }

  party.members.forEach(member => {
    member.orderItems.forEach(item => {
      if (item.menuId) {
        menuSharerCount[item.menuId] = (menuSharerCount[item.menuId] || 0) + 1;
      } else if (item.customItemId) {
        customSharerCount[item.customItemId] = (customSharerCount[item.customItemId] || 0) + 1;
      }
    });
  });

  // 3. คำนวณยอดของแต่ละคน
  let grandTotal = 0;

  const membersSummary = party.members.map(member => {
    let subtotal = 0;

    // หาค่าอาหารรวมของคนนี้
    const itemsDetail = member.orderItems.map(item => {
      let price = 0;
      let name = "";
      let sharers = 0;
      let id = "";
      let type = "";

      if (item.menu) {
        id = item.menu.id;
        name = item.menu.name;
        price = item.menu.price;
        sharers = menuSharerCount[id];
        type = "OFFICIAL";
      } else if (item.customItem) {
        id = item.customItem.id;
        name = item.customItem.name;
        price = item.customItem.price;
        sharers = customSharerCount[id];
        type = "CUSTOM";
      }

      const costPerPerson = price / sharers;
      subtotal += costPerPerson;

      return {
        itemId: id,
        name: name,
        price: price,
        sharedBy: sharers,
        costPerPerson: costPerPerson,
        type: type
      };
    });

    // 4. คำนวณ Service Charge และ VAT ให้แต่ละคน (แบบทบต้นตามมาตรฐานร้านอาหารไทย)
    const serviceChargeAmount = subtotal * (party.serviceCharge / 100);
    const subtotalWithSc = subtotal + serviceChargeAmount;
    const vatAmount = subtotalWithSc * (party.vat / 100);
    const netTotal = subtotalWithSc + vatAmount;

    grandTotal += netTotal; // สะสมยอดรวมทั้งโต๊ะ

    return {
      memberId: member.id,
      user: member.user,
      items: itemsDetail,
      summary: {
        subtotal: subtotal,
        serviceCharge: serviceChargeAmount,
        vat: vatAmount,
        netTotal: netTotal
      }
    };
  });

  // 5. ส่งกลับผลลัพธ์
  return {
    partyId: party.id,
    serviceChargePercent: party.serviceCharge,
    vatPercent: party.vat,
    grandTotal: grandTotal,
    members: membersSummary
  };
};
