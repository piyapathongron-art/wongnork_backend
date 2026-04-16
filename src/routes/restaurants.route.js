import express from "express";
import {
  createRestaurantController,
  deleteRestaurantController,
  getAllRestaurantController,
  getRestaurantByIdController,
  updateRestaurantController,
} from "../controllers/restaurants.controller.js";
import authUserCheck from "../middlewares/userAuthen.middleware.js";
import menuRoute from "./menu.route.js";
import reviewRoute from "./review.route.js";
import { createPartyController } from "../controllers/party.controller.js";

const restaurantsRoute = express.Router();

/**
 * @swagger
 * tags:
 *   name: Restaurants
 *   description: Restaurant management API
 */

//  Nested Routes: เมนูของร้าน
restaurantsRoute.use("/:restaurantId/menus", menuRoute);

// Nested Routes: รีวิวของร้าน
restaurantsRoute.use("/:restaurantId/reviews", reviewRoute);

/**
 * @swagger
 * /api/restaurants/{restaurantId}/parties:
 *   post:
 *     summary: Create a party for a specific restaurant
 *     tags: [Parties]
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
 *               - name
 *               - maxMembers
 *               - appointmentTime
 *               - contactInfo
 *             properties:
 *               name:
 *                 type: string
 *               details:
 *                 type: string
 *               meetupTime:
 *                 type: string
 *                 format: date-time
 *               maxParticipants:
 *                 type: integer
 *               contactInfo:
 *                 type: string
 *     responses:
 *       201:
 *         description: Party created successfully
 */
restaurantsRoute.post("/:restaurantId/parties", authUserCheck, createPartyController);

/**
 * @swagger
 * /api/restaurants:
 *   get:
 *     summary: Get all restaurants
 *     tags: [Restaurants]
 *     responses:
 *       200:
 *         description: List of all restaurants
 *   post:
 *     summary: Create a new restaurant
 *     tags: [Restaurants]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Restaurant'
 *     responses:
 *       201:
 *         description: Restaurant created successfully
 */
restaurantsRoute.get("/", getAllRestaurantController);
restaurantsRoute.post("/", authUserCheck, createRestaurantController);

/**
 * @swagger
 * /api/restaurants/{id}:
 *   get:
 *     summary: Get restaurant by ID
 *     tags: [Restaurants]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Restaurant details
 *   put:
 *     summary: Update restaurant by ID
 *     tags: [Restaurants]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Restaurant'
 *     responses:
 *       200:
 *         description: Restaurant updated
 *   delete:
 *     summary: Delete restaurant by ID
 *     tags: [Restaurants]
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
 *         description: Restaurant deleted
 */
restaurantsRoute.get("/:id", getRestaurantByIdController);
restaurantsRoute.put("/:id", authUserCheck, updateRestaurantController);
restaurantsRoute.delete("/:id", authUserCheck, deleteRestaurantController);

/**
 * @swagger
 * components:
 *   schemas:
 *     Restaurant:
 *       type: object
 *       required:
 *         - name
 *         - category
 *         - latitude
 *         - longitude
 *       properties:
 *         name:
 *           type: string
 *         category:
 *           type: string
 *         latitude:
 *           type: number
 *         longitude:
 *           type: number
 *         address:
 *           type: string
 *         description:
 *           type: string
 *         operatingHours:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               day:
 *                 type: string
 *                 enum: [MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY]
 *               openTime:
 *                 type: string
 *               closeTime:
 *                 type: string
 *               isClosed:
 *                 type: boolean
 */

export default restaurantsRoute;
