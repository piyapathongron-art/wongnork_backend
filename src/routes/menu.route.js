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

/**
 * @swagger
 * tags:
 *   name: Menus
 *   description: Menu management API
 */

/**
 * @swagger
 * /api/restaurants/{restaurantId}/menus:
 *   get:
 *     summary: Get all menus for a specific restaurant
 *     tags: [Menus]
 *     parameters:
 *       - in: path
 *         name: restaurantId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of menus
 *   post:
 *     summary: Create a new menu for a restaurant
 *     tags: [Menus]
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
 *               - price
 *               - category
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               description:
 *                 type: string
 *               category:
 *                 type: string
 *               imageUrl:
 *                 type: string
 *     responses:
 *       201:
 *         description: Menu created
 */
menuRoute.get("/", getMenusController);
menuRoute.post("/", authUserCheck, createMenuController);

/**
 * @swagger
 * /api/restaurants/{restaurantId}/menus/{menuId}:
 *   put:
 *     summary: Update a menu
 *     tags: [Menus]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: restaurantId
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: menuId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               category:
 *                 type: string
 *               description:
 *                 type: string
 *               imageUrl:
 *                 type: string
 *     responses:
 *       200:
 *         description: Menu updated
 *   delete:
 *     summary: Delete a menu
 *     tags: [Menus]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: restaurantId
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: menuId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Menu deleted
 */
menuRoute.put("/:menuId", authUserCheck, updateMenuController);
menuRoute.delete("/:menuId", authUserCheck, deleteMenuController);

export default menuRoute;
