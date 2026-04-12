import createHttpError from "http-errors";
import { createPartySchema } from "../validations/schema.js";
import {
  createPartyService,
  getAllPartiesService,
  getPartyByIdService,
  joinPartyService,
  leavePartyService,
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
    // ถ้า error มาจาก Service ให้ส่ง message ไปที่ Frontend ตรงๆ
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
    next(error);
  }
};
