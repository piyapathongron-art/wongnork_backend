import express from "express";
import authUserCheck from "../middlewares/userAuthen.middleware.js";
import {
  createReviewController,
  deleteReviewController,
  getReviewsController,
} from "../controllers/review.controller.js";

// mergeParams: true สำหรับ Nested Route
const reviewRoute = express.Router({ mergeParams: true });

/**
 * @swagger
 * tags:
 *   name: Reviews
 *   description: Review management API
 */

/**
 * @swagger
 * /api/restaurants/{restaurantId}/reviews:
 *   get:
 *     summary: Get all reviews for a restaurant
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: restaurantId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of reviews
 *   post:
 *     summary: Create a new review
 *     tags: [Reviews]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: restaurantId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - rating
 *               - comment
 *             properties:
 *               rating:
 *                 type: integer
 *                 minimum: 1
 *                 maximum: 5
 *               comment:
 *                 type: string
 *     responses:
 *       201:
 *         description: Review created
 */
reviewRoute.get("/", getReviewsController);
reviewRoute.post("/", authUserCheck, createReviewController);

/**
 * @swagger
 * /api/reviews/{id}:
 *   delete:
 *     summary: Delete a review by ID
 *     tags: [Reviews]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Review deleted
 */
reviewRoute.delete("/:id", authUserCheck, deleteReviewController);

export default reviewRoute;
