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

const restaurantsRoute = express.Router();

// 🍕 Nested Routes: เชื่อมโยงเมนูเข้ากับร้านอาหาร
// ตัวอย่าง: /api/restaurants/:restaurantId/menus
restaurantsRoute.use("/:restaurantId/menus", menuRoute);

// 🏠 Restaurant Endpoints
restaurantsRoute.get("/", getAllRestaurantController);
restaurantsRoute.get("/:id", getRestaurantByIdController);

// 🔒 Protected Routes (ต้อง Login)
restaurantsRoute.post("/", authUserCheck, createRestaurantController);
restaurantsRoute.put("/:id", authUserCheck, updateRestaurantController);
restaurantsRoute.delete("/:id", authUserCheck, deleteRestaurantController);

export default restaurantsRoute;
