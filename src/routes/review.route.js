import express from "express";
import authUserCheck from "../middlewares/userAuthen.middleware.js";
import {
  createReviewController,
  deleteReviewController,
  getReviewsController,
} from "../controllers/review.controller.js";

// mergeParams: true สำหรับ Nested Route
const reviewRoute = express.Router({ mergeParams: true });

// ดึงรายการรีวิวทั้งหมดของร้าน
// GET: /api/restaurants/:restaurantId/reviews
reviewRoute.get("/", getReviewsController);

// เขียนรีวิวใหม่
// POST: /api/restaurants/:restaurantId/reviews
reviewRoute.post("/", authUserCheck, createReviewController);

// ลบรีวิว
// DELETE: /api/reviews/:id
reviewRoute.delete("/:id", authUserCheck, deleteReviewController);

export default reviewRoute;
