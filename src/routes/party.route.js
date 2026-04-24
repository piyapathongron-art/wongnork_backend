import express from "express";
import authUserCheck from "../middlewares/userAuthen.middleware.js";
import {
  getAllPartiesController,
  getPartyByIdController,
  joinPartyController,
  leavePartyController,
  kickMemberController,
  addPartyOrderItemController,
  updatePartyOrderItemQuantityController,
  togglePartyOrderItemSharerController,
  removePartyOrderItemController,
  getSplitBillController,
  paginationPartyController,
  updatePartySettingsController,
  notifyPaymentController,
  verifyPaymentController
} from "../controllers/party.controller.js";

const partyRoute = express.Router();

partyRoute.get('/page', paginationPartyController);

// Payment Tracking
partyRoute.post("/:id/payment/notify", authUserCheck, notifyPaymentController);
partyRoute.post("/:id/payment/verify/:userId", authUserCheck, verifyPaymentController);

/**
 * @swagger
 * tags:
 *   name: Parties
 *   description: Party management API
 */

partyRoute.get("/", getAllPartiesController);
partyRoute.get("/:id", getPartyByIdController);
partyRoute.post("/:id/join", authUserCheck, joinPartyController);
partyRoute.delete("/:id/leave", authUserCheck, leavePartyController);
partyRoute.delete("/:id/members/:userId", authUserCheck, kickMemberController);

/**
 * @swagger
 * /api/parties/{id}/settings:
 *   put:
 *     summary: Update party settings (VAT, Service Charge, Status)
 *     tags: [Parties]
 *     security:
 *       - bearerAuth: []
 */
partyRoute.put("/:id/settings", authUserCheck, updatePartySettingsController);

// ---------------------------------------------------------
// Split Bill Routes (Hybrid Opt-in Flow)
// ---------------------------------------------------------

/**
 * @swagger
 * /api/parties/{id}/items:
 *   post:
 *     summary: Add a menu item to the party bill (Adds +1 quantity or creates new)
 *     tags: [Parties, Split Bill]
 *     security:
 *       - bearerAuth: []
 */
partyRoute.post("/:id/items", authUserCheck, addPartyOrderItemController);

/**
 * @swagger
 * /api/parties/{id}/items/{itemId}/quantity:
 *   put:
 *     summary: Increment or decrement quantity of an item
 *     tags: [Parties, Split Bill]
 *     security:
 *       - bearerAuth: []
 */
partyRoute.put("/:id/items/:itemId/quantity", authUserCheck, updatePartyOrderItemQuantityController);

/**
 * @swagger
 * /api/parties/{id}/items/{itemId}/sharers:
 *   put:
 *     summary: Join or leave sharing an item
 *     tags: [Parties, Split Bill]
 *     security:
 *       - bearerAuth: []
 */
partyRoute.put("/:id/items/:itemId/sharers", authUserCheck, togglePartyOrderItemSharerController);

/**
 * @swagger
 * /api/parties/{id}/items/{itemId}:
 *   delete:
 *     summary: Completely remove an item from the bill
 *     tags: [Parties, Split Bill]
 *     security:
 *       - bearerAuth: []
 */
partyRoute.delete("/:id/items/:itemId", authUserCheck, removePartyOrderItemController);

/**
 * @swagger
 * /api/parties/{id}/split-bill:
 *   get:
 *     summary: Get split bill summary for the party
 *     tags: [Parties, Split Bill]
 *     security:
 *       - bearerAuth: []
 */
partyRoute.get("/:id/split-bill", authUserCheck, getSplitBillController);

export default partyRoute;
