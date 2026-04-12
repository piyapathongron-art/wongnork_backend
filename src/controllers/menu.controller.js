import createHttpError from "http-errors";
import { createMenuSchema, updateMenuSchema } from "../validations/schema.js";
import {
  createMenuService,
  deleteMenuService,
  getMenuByIdService,
  getMenusByRestaurantService,
  updateMenuService,
} from "../services/menu.service.js";

// ดึงเมนูทั้งหมดของร้าน
export const getMenusController = async (req, res, next) => {
  try {
    const { restaurantId } = req.params;
    const menus = await getMenusByRestaurantService(restaurantId);
    res.json({ message: "Success", data: menus });
  } catch (error) {
    next(error);
  }
};

// สร้างเมนูใหม่ (จำกัดเฉพาะ OWNER ของร้านนั้นๆ - หรือผ่าน Middleware ตรวจสิทธิ์)
export const createMenuController = async (req, res, next) => {
  try {
    const { restaurantId } = req.params;
    const data = createMenuSchema.parse(req.body);

    const newMenu = await createMenuService(restaurantId, data);
    res.status(201).json({ message: "Menu created successfully", data: newMenu });
  } catch (error) {
    next(error);
  }
};

// อัปเดตเมนู
export const updateMenuController = async (req, res, next) => {
  try {
    const { menuId } = req.params;
    const data = updateMenuSchema.parse(req.body);

    const existingMenu = await getMenuByIdService(menuId);
    if (!existingMenu) {
      throw createHttpError(404, "Menu not found");
    }

    const updatedMenu = await updateMenuService(menuId, data);
    res.json({ message: "Menu updated successfully", data: updatedMenu });
  } catch (error) {
    next(error);
  }
};

// ลบเมนู
export const deleteMenuController = async (req, res, next) => {
  try {
    const { menuId } = req.params;

    const existingMenu = await getMenuByIdService(menuId);
    if (!existingMenu) {
      throw createHttpError(404, "Menu not found");
    }

    await deleteMenuService(menuId);
    res.json({ message: "Menu deleted successfully" });
  } catch (error) {
    next(error);
  }
};
