import express from "express";
import authUserCheck from "../middlewares/userAuthen.middleware.js";
import {
  getAllPartiesController,
  getPartyByIdController,
  joinPartyController,
  leavePartyController,
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

export default partyRoute;
