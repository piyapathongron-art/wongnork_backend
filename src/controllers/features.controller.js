import * as aiService from '../services/ai.service.js';

export const getAiRecommendation = async (req, res, next) => {
  try {
    const { prompt, lat, lng } = req.body;
    const userId = req.user.id;

    if (!prompt) {
      return res.status(400).json({ message: "กรุณาระบุ prompt สำหรับการแนะนำ" });
    }

    // Call service to get AI data with user location
    const result = await aiService.getAiRecommendationService(prompt, userId, { lat, lng });

    return res.status(200).json(result);
  } catch (error) {
    console.error("AI Recommendation Error:", error);
    next(error);
  }
};
