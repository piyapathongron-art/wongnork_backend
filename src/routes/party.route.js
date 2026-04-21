import express from "express";
import authUserCheck from "../middlewares/userAuthen.middleware.js";
import {
  getAllPartiesController,
  getPartyByIdController,
  joinPartyController,
  leavePartyController,
  kickMemberController,
  addOrderItemController,
  removeOrderItemController,
  getSplitBillController
} from "../controllers/party.controller.js";

const partyRoute = express.Router();

/**
 * @swagger
 * tags:
 *   name: Parties
 *   description: Party management API
 */

/**
 * @swagger
 * /api/parties:
 *   get:
 *     summary: Get all open parties
 *     tags: [Parties]
 *     responses:
 *       200:
 *         description: List of all open parties
 */
partyRoute.get("/", getAllPartiesController);

/**
 * @swagger
 * /api/parties/{id}:
 *   get:
 *     summary: Get party details by ID
 *     tags: [Parties]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Party details
 *       404:
 *         description: Party not found
 */
partyRoute.get("/:id", getPartyByIdController);

/**
 * @swagger
 * /api/parties/{id}/join:
 *   post:
 *     summary: Join a party
 *     tags: [Parties]
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
 *         description: Successfully joined the party
 *       400:
 *         description: Party is full or already joined
 */
partyRoute.post("/:id/join", authUserCheck, joinPartyController);

/**
 * @swagger
 * /api/parties/{id}/leave:
 *   delete:
 *     summary: Leave a party
 *     tags: [Parties]
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
 *         description: Successfully left the party
 */
partyRoute.delete("/:id/leave", authUserCheck, leavePartyController);

/**
 * @swagger
 * /api/parties/{id}/members/{userId}:
 *   delete:
 *     summary: Kick a member from party (Leader only)
 *     tags: [Parties]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully kicked the member
 *       403:
 *         description: Not authorized
 */
partyRoute.delete("/:id/members/:userId", authUserCheck, kickMemberController);

// ---------------------------------------------------------
// Split Bill Routes
// ---------------------------------------------------------

/**
 * @swagger
 * /api/parties/{id}/items:
 *   post:
 *     summary: Select a menu item (Add to bill)
 *     tags: [Parties, Split Bill]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Party ID
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
 *               menuId:
 *                 type: string
 *                 description: ID of the menu to select
 *     responses:
 *       201:
 *         description: Added item successfully
 *       400:
 *         description: Item already selected or party finished
 *       403:
 *         description: Not a member of the party
 */
partyRoute.post("/:id/items", authUserCheck, addOrderItemController);

/**
 * @swagger
 * /api/parties/{id}/items/{menuId}:
 *   delete:
 *     summary: Remove a selected menu item (Remove from bill)
 *     tags: [Parties, Split Bill]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Party ID
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: menuId
 *         description: Menu ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Removed item successfully
 *       403:
 *         description: Not a member of the party
 *       404:
 *         description: Item not found
 */
partyRoute.delete("/:id/items/:menuId", authUserCheck, removeOrderItemController);

/**
 * @swagger
 * /api/parties/{id}/split-bill:
 *   get:
 *     summary: Get split bill summary for the party
 *     tags: [Parties, Split Bill]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Party ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Summary of the bill
 *       403:
 *         description: No permission to view (not a member)
 *       404:
 *         description: Party not found
 */
partyRoute.get("/:id/split-bill", authUserCheck, getSplitBillController);

export default partyRoute;
