import createHttpError from "http-errors";
import {
  createPartySchema,
  createPartyOrderItemSchema,
  updatePartyOrderItemQuantitySchema,
  toggleSharerSchema,
  updatePartySettingsSchema
} from "../validations/schema.js";
import {
  createPartyService,
  getAllPartiesService,
  getPartyByIdService,
  joinPartyService,
  leavePartyService,
  kickMemberService,
  addPartyOrderItemService,
  updatePartyOrderItemQuantityService,
  togglePartyOrderItemSharerService,
  removePartyOrderItemService,
  calculateSplitBillService,
  updatePartySettingsService,
  getPartiesWithPaginationService,
  notifyPaymentService,
  verifyPaymentService
} from "../services/party.service.js";

/**
 * @desc สมาชิกแจ้งชำระเงิน (PAID) และแนบรูปสลิป
 * @route POST /api/parties/:id/payment/notify
 */
export const notifyPaymentController = async (req, res, next) => {
  try {
    const { id: partyId } = req.params;
    const userId = req.user.id;
    const { paymentSlipUrl } = req.body;

    const result = await notifyPaymentService(partyId, userId, paymentSlipUrl);
    res.json({ message: "Payment notified successfully", data: result });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc หัวหน้าปาร์ตี้กดยืนยันยอด (VERIFIED) หลังจากเช็คบัญชีแล้ว
 * @route POST /api/parties/:id/payment/verify/:userId
 */
export const verifyPaymentController = async (req, res, next) => {
  try {
    const { id: partyId, userId: memberUserId } = req.params;
    const leaderId = req.user.id;

    const result = await verifyPaymentService(partyId, leaderId, memberUserId);
    res.json({ message: "Payment verified successfully", data: result });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc อัปเดตการตั้งค่าบิล (VAT, Service Charge) หรือปิดปาร์ตี้ (เฉพาะ Leader)
 * @route PUT /api/parties/:id/settings
 */
export const updatePartySettingsController = async (req, res, next) => {
  try {
    const { id: partyId } = req.params;
    const leaderId = req.user.id;
    const data = updatePartySettingsSchema.parse(req.body);
    console.log(data)

    const updatedParty = await updatePartySettingsService(partyId, leaderId, data);
    res.json({ message: "Party settings updated successfully", data: updatedParty });
  } catch (error) {
    next(error);
  }
};

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

export const paginationPartyController = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const result = await getPartiesWithPaginationService(page, limit);

    res.json({
      message: "Success",
      data: result.data,
      meta: result.meta
    });
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
    if (error.status === 400 && error.message) {
      return next(error);
    }
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
// Split Bill Controllers (PartyOrderItem Flow)
// ------------------------------------------------------------------

/**
 * @desc เพิ่มรายการเมนูเข้าบิลโต๊ะ (Opt-in คนแอดเป็นคนแรกอัตโนมัติ)
 * @route POST /api/parties/:id/items
 */
export const addPartyOrderItemController = async (req, res, next) => {
  try {
    const { id: partyId } = req.params;
    const userId = req.user.id;
    const orderData = createPartyOrderItemSchema.parse(req.body);

    const orderItem = await addPartyOrderItemService(partyId, userId, orderData);
    res.status(201).json({ message: "Added item to party bill successfully", data: orderItem });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc ปรับเพิ่ม/ลด จำนวน Quantity ของเมนูในโต๊ะ
 * @route PUT /api/parties/:id/items/:itemId/quantity
 */
export const updatePartyOrderItemQuantityController = async (req, res, next) => {
  try {
    const { id: partyId, itemId } = req.params;
    const userId = req.user.id;
    const { action } = updatePartyOrderItemQuantitySchema.parse(req.body);

    const result = await updatePartyOrderItemQuantityService(partyId, userId, itemId, action);
    res.json({ message: "Quantity updated successfully", data: result });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc ให้สมาชิกกดเข้าร่วมหาร (Join) หรือออกจากการหาร (Leave) เมนูนั้น
 * @route PUT /api/parties/:id/items/:itemId/sharers
 */
export const togglePartyOrderItemSharerController = async (req, res, next) => {
  try {
    const { id: partyId, itemId } = req.params;
    const userId = req.user.id;
    const { action } = toggleSharerSchema.parse(req.body);

    const result = await togglePartyOrderItemSharerService(partyId, userId, itemId, action);
    res.json({ message: "Toggled sharer status successfully", data: result });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc ลบเมนูนี้ออกจากบิลโต๊ะเลย
 * @route DELETE /api/parties/:id/items/:itemId
 */
export const removePartyOrderItemController = async (req, res, next) => {
  try {
    const { id: partyId, itemId } = req.params;
    const userId = req.user.id;

    await removePartyOrderItemService(partyId, userId, itemId);
    res.json({ message: "Order item removed successfully" });
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
