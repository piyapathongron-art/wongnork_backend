import express from "express";
import authUserCheck from "../middlewares/userAuthen.middleware.js";
import {
  createMenuController,
  deleteMenuController,
  getMenusController,
  updateMenuController,
} from "../controllers/menu.controller.js";

// mergeParams: true ช่วยให้ดึง :restaurantId จาก Parent Route (restaurantsRoute) ได้
const menuRoute = express.Router({ mergeParams: true });

// ดึงรายการเมนูทั้งหมดของร้านอาหารนั้นๆ
// GET: /api/restaurants/:restaurantId/menus
menuRoute.get("/", getMenusController);

// เพิ่มเมนูใหม่ในร้านอาหาร
// POST: /api/restaurants/:restaurantId/menus
menuRoute.post("/", authUserCheck, createMenuController);

// แก้ไขข้อมูลเมนู (สามารถใช้ ID เมนูตรงๆ ได้เลย)
// PUT: /api/menus/:menuId (หรือผ่านร้านเดิมก็ได้)
menuRoute.put("/:menuId", authUserCheck, updateMenuController);

// ลบเมนูออกจากร้านอาหาร
// DELETE: /api/menus/:menuId
menuRoute.delete("/:menuId", authUserCheck, deleteMenuController);

export default menuRoute;
