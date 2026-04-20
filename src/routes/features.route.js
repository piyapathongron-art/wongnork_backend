import { Router } from 'express';
import { getAiRecommendation } from '../controllers/features.controller.js';
import authUserCheck from '../middlewares/userAuthen.middleware.js';

const router = Router();

/**
 * @swagger
 * /api/features/ai-recommend:
 *   post:
 *     summary: แนะนำร้านอาหารด้วย AI (Gemini)
 *     tags: [Features]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               prompt:
 *                 type: string
 *                 example: "อยากกินชาบูแถวลาดพร้าว แนะนำหน่อย"
 *     responses:
 *       200:
 *         description: สำเร็จ
 */
router.post('/ai-recommend', authUserCheck, getAiRecommendation);

export default router;
