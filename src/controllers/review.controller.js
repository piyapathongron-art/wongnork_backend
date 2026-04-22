import createHttpError from "http-errors";
import { createReviewSchema } from "../validations/schema.js";
import {
  createReviewService,
  deleteReviewService,
  getReviewByIdService,
  getReviewsByRestaurantService,
} from "../services/review.service.js";

// ดึงรีวิวของร้าน
export const getReviewsController = async (req, res, next) => {
  try {
    const { restaurantId } = req.params;
    const reviews = await getReviewsByRestaurantService(restaurantId);
    res.json({ message: "Success", data: reviews });
  } catch (error) {
    next(error);
  }
};

// สร้างรีวิวใหม่
export const createReviewController = async (req, res, next) => {
  try {
    const { restaurantId } = req.params;
    const userId = req.user.id;
    console.log(restaurantId)
    console.log(req.body)

    // 🌟 parse จะได้ object ที่มี partyId รวมอยู่ด้วยแล้วตามที่เราแก้ schema ไป
    const data = createReviewSchema.parse(req.body);

    const newReview = await createReviewService(restaurantId, userId, data);
    res.status(201).json({ message: "Review created successfully", data: newReview });
  } catch (error) {
    next(error);
  }
};

// ลบรีวิว
export const deleteReviewController = async (req, res, next) => {
  try {
    const { id: reviewId } = req.params;
    const userId = req.user.id;
    const role = req.user.role;

    const existingReview = await getReviewByIdService(reviewId);
    if (!existingReview) throw createHttpError(404, "Review not found");

    // เฉพาะเจ้าของรีวิว หรือ ADMIN เท่านั้นที่ลบได้
    if (existingReview.userId !== userId && role !== "ADMIN") {
      throw createHttpError(403, "Forbidden: You are not authorized to delete this review");
    }

    await deleteReviewService(reviewId);
    res.json({ message: "Review deleted successfully" });
  } catch (error) {
    next(error);
  }
};
