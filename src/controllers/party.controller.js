import createHttpError from "http-errors";
import { createPartySchema, createOrderItemSchema, createCustomItemSchema } from "../validations/schema.js";
import {
  createPartyService,
  getAllPartiesService,
  getPartyByIdService,
  joinPartyService,
  leavePartyService,
  kickMemberService,
  addOrderItemService,
  removeOrderItemService,
  calculateSplitBillService,
  addCustomItemService
} from "../services/party.service.js";

// ดึงรายการปาร์ตี้ทั้งหมด
export const getAllPartiesController = async (req, res, next) => {
  try {
    const parties = await getAllPartiesService();
    res.json({ message: "Success", data: parties });
  } catch (error) {
    next(error);
  }
};

// ดึงรายละเอียดปาร์ตี้รายอัน
export const getPartyByIdController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const party = await getPartyByIdService(id);
    if (!party) throw createHttpError(404, "Party not found");
    res.json({ message: "Success", data: party });
  } catch (error) {
    next(error);
  }
};

// สร้างปาร์ตี้ใหม่ (Nested under Restaurant)
export const createPartyController = async (req, res, next) => {
  try {
    const { restaurantId } = req.params;
    const leaderId = req.user.id;
    const data = createPartySchema.parse(req.body);

    const newParty = await createPartyService(restaurantId, leaderId, data);
    res.status(201).json({ message: "Party created successfully", data: newParty });
  } catch (error) {
    // If it's a known constraint error, pass it directly
    if (error.status === 400 && error.message) {
      return next(error);
    }
    next(error);
  }
};

// เข้าร่วมปาร์ตี้
export const joinPartyController = async (req, res, next) => {
  try {
    const { id: partyId } = req.params;
    const userId = req.user.id;

    const newMember = await joinPartyService(partyId, userId);
    res.json({ message: "Joined party successfully", data: newMember });
  } catch (error) {
    // ส่งผ่าน error message แบบ Custom (เช่น constraint หรือ validation errors) ให้ Frontend ตรงๆ
    if (error.status === 400 && error.message) {
      return next(error);
    }

    // สำหรับ error อื่นๆ ที่อาจจะไม่ได้มาจาก http-errors โดยตรง แต่ต้องการส่ง message เดิม
    if (error.message === "Party is already full" || error.message === "Party is not open for joining") {
      return next(createHttpError(400, error.message));
    }
    next(error);
  }
};

// ออกจากปาร์ตี้
export const leavePartyController = async (req, res, next) => {
  try {
    const { id: partyId } = req.params;
    const userId = req.user.id;

    await leavePartyService(partyId, userId);
    res.json({ message: "Left party successfully" });
  } catch (error) {
    if (error.code === 'P2025') {
      return next(createHttpError(400, "คุณไม่ได้อยู่ในปาร์ตี้นี้"));
    }
    next(error);
  }
};

// เตะออกจากปาร์ตี้ (เฉพาะ Leader)
export const kickMemberController = async (req, res, next) => {
  try {
    const { id: partyId, userId: memberUserId } = req.params;
    const leaderId = req.user.id;

    await kickMemberService(partyId, leaderId, memberUserId);
    res.json({ message: "Kicked member successfully" });
  } catch (error) {
    if (error.code === 'P2025') {
      return next(createHttpError(404, "ไม่พบสมาชิกในปาร์ตี้นี้"));
    }
    next(error);
  }
};

// ------------------------------------------------------------------
// Split Bill Controllers
// ------------------------------------------------------------------

/**
 * @desc เพิ่มรายการเมนูที่สมาชิกเลือก (ติ๊กกิน)
 * @route POST /api/parties/:id/items
 */
export const addOrderItemController = async (req, res, next) => {
  try {
    const { id: partyId } = req.params;
    const userId = req.user.id;
    const orderData = createOrderItemSchema.parse(req.body);

    const orderItem = await addOrderItemService(partyId, userId, orderData);
    res.status(201).json({ message: "Order item added successfully", data: orderItem });
  } catch (error) {
    // ถ้ามีการ add ซ้ำ P2002 Unique Constraint
    if (error.code === 'P2002') {
      return next(createHttpError(400, "คุณได้เลือกรายการนี้ไปแล้ว"));
    }
    next(error);
  }
};

/**
 * @desc ลบรายการเมนูที่สมาชิกเลือก (ติ๊กออก)
 * @route DELETE /api/parties/:id/items/:itemId
 */
export const removeOrderItemController = async (req, res, next) => {
  try {
    const { id: partyId, itemId } = req.params;
    const userId = req.user.id;

    await removeOrderItemService(partyId, userId, { menuId: itemId, customItemId: itemId });
    res.json({ message: "Order item removed successfully" });
  } catch (error) {
    if (error.code === 'P2025') {
      return next(createHttpError(404, "ไม่พบรายการที่ต้องการลบ"));
    }
    next(error);
  }
};

/**
 * @desc เพิ่มเมนูพิเศษ (Manual) เฉพาะในปาร์ตี้
 * @route POST /api/parties/:id/custom-items
 */
export const addCustomItemController = async (req, res, next) => {
  try {
    const { id: partyId } = req.params;
    const userId = req.user.id;
    const data = createCustomItemSchema.parse(req.body);

    const customItem = await addCustomItemService(partyId, userId, data);
    res.status(201).json({ message: "Custom item added to party", data: customItem });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc ดึงข้อมูลสรุปการหารเงิน (Split Bill) ของปาร์ตี้
 * @route GET /api/parties/:id/split-bill
 */
export const getSplitBillController = async (req, res, next) => {
  try {
    const { id: partyId } = req.params;

    // ตรวจสอบสิทธิ์ว่าอยู่ในตี้จริงๆ ไหม (Optional: แต่ควรมี)
    const party = await getPartyByIdService(partyId);
    if (!party) throw createHttpError(404, "Party not found");

    const isMember = party.members.some(m => m.user.id === req.user.id);
    if (!isMember && req.user.role !== "ADMIN") {
      throw createHttpError(403, "คุณไม่มีสิทธิ์ดูบิลของปาร์ตี้นี้");
    }

    const billSummary = await calculateSplitBillService(partyId);
    res.json({ message: "Success", data: billSummary });
  } catch (error) {
    next(error);
  }
};
