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
      restaurant: {
        select: { id: true, name: true, category: true, images: true }
      },
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

// ดึงรายละเอียดปาร์ตี้รายอัน
export const getPartyByIdService = async (id) => {
  return await prisma.party.findUnique({
    where: { id },
    include: {
      restaurant: true,
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
    // ลบออกจากตาราง Member
    await tx.partyMember.delete({
      where: {
        partyId_userId: {
          partyId,
          userId
        }
      }
    });

    // ถ้าคนออกแล้วสถานะเคย FULL ให้กลับมาเป็น OPEN
    const party = await tx.party.findUnique({
      where: { id: partyId },
      select: { status: true }
    });

    if (party.status === "FULL") {
      await tx.party.update({
        where: { id: partyId },
        data: { status: "OPEN" }
      });
    }
  });
};
