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

//  Nested Routes: เมนูของร้าน
restaurantsRoute.use("/:restaurantId/menus", menuRoute);

// Nested Routes: รีวิวของร้าน
restaurantsRoute.use("/:restaurantId/reviews", reviewRoute);

// Nested Routes: ปาร์ตี้ของร้าน
// POST: /api/restaurants/:restaurantId/parties
restaurantsRoute.post("/:restaurantId/parties", authUserCheck, createPartyController);

// Restaurant Endpoints
restaurantsRoute.get("/", getAllRestaurantController);
restaurantsRoute.get("/:id", getRestaurantByIdController);

// Protected Routes (ต้อง Login)
restaurantsRoute.post("/", authUserCheck, createRestaurantController);
restaurantsRoute.put("/:id", authUserCheck, updateRestaurantController);
restaurantsRoute.delete("/:id", authUserCheck, deleteRestaurantController);

export default restaurantsRoute;
