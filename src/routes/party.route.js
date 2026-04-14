import express from "express";
import authUserCheck from "../middlewares/userAuthen.middleware.js";
import {
  getAllPartiesController,
  getPartyByIdController,
  joinPartyController,
  leavePartyController,
} from "../controllers/party.controller.js";

const partyRoute = express.Router();

// ดึงรายการปาร์ตี้ทั้งหมด (OPEN)
// GET: /api/parties
partyRoute.get("/", getAllPartiesController);

// ดูรายละเอียดตี้รายอัน
// GET: /api/parties/:id
partyRoute.get("/:id", getPartyByIdController);

// เข้าร่วมตี้
// POST: /api/parties/:id/join
partyRoute.post("/:id/join", authUserCheck, joinPartyController);

// ออกจากตี้
// DELETE: /api/parties/:id/leave
partyRoute.delete("/:id/leave", authUserCheck, leavePartyController);

export default partyRoute;
