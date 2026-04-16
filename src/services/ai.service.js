import { GoogleGenerativeAI } from '@google/generative-ai';
import { prisma } from '../lib/prisma.js';
import "dotenv/config"

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const getAiRecommendationService = async (userPrompt, userId, userLocation = null) => {
    // 1. ดึงข้อมูลร้านอาหาร
    const restaurants = await prisma.restaurant.findMany({
        where: { deletedAt: null },
        include: {
            images: { where: { isCover: true }, take: 1 },
            operatingHours: true,
            menus: true
        }
    });

    const savedRestaurants = await prisma.savedRestaurant.findMany({
        where: { userId: userId },
        include: { restaurant: true }
    });

    // 2. เตรียม Model
    const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
    });

    // 3. เตรียม Prompt
    const userLocationContext = userLocation?.lat && userLocation?.lng
        ? `ตำแหน่งปัจจุบันของผู้ใช้คือ: พิกัด lat: ${userLocation.lat}, lng: ${userLocation.lng}`
        : "ไม่ทราบตำแหน่งปัจจุบันของผู้ใช้";

    const systemContext = `
      คุณคือผู้ช่วย AI "Wongnork" หน้าที่ของคุณคือแนะนำร้านอาหารที่เหมาะสมที่สุด
      
      [CONTEXT]
      - ${userLocationContext}
      - ข้อมูลร้านอาหารในระบบ: ${JSON.stringify(restaurants)}
      - ร้านที่ผู้ใช้เคยบันทึกไว้: ${JSON.stringify(savedRestaurants)}

      [RULES]
      1. หากผู้ใช้ถามหาร้าน "ใกล้ฉัน" หรือไม่ระบุสถานที่ ให้ใช้พิกัดที่ให้ไว้คำนวณหาร้านที่ใกล้ที่สุด (เปรียบเทียบ lat/lng)
      2. หากผู้ใช้ไม่มีประวัติบันทึกร้านและคำถามกว้างเกินไป ให้ถามประเภทอาหารที่ชอบ
      3. วิเคราะห์เมนูอาหาร (menus) ของแต่ละร้านเพื่อให้ตรงกับความต้องการ (เช่น ถ้าอยากกิน "เนื้อ" ให้ดูร้านที่มีเมนูเนื้อ)
      4. ตอบกลับเป็น JSON เท่านั้น ห้ามมี Markdown หรือข้อความอื่น

      [RESPONSE FORMAT]
      {
        "recommendations": [
          {
            "restaurantId": "UUID",
            "name": "ชื่อร้าน",
            "reason": "อธิบายเหตุผล (เช่น ใกล้ผู้ใช้มากที่สุด หรือ มีเมนูที่คุณชอบ)",
            "highlightMenu": ["เมนูแนะนำ 1", "เมนูแนะนำ 2"]
          }
        ],
        "aiMessage": "ข้อความทักทายภาษาไทยที่เป็นกันเอง"
      }
    `;

    // 4. ส่งคำขอ
    const result = await model.generateContent([systemContext, userPrompt]);
    const response = await result.response;
    let text = response.text();

    text = text.replace(/```json/g, "").replace(/```/g, "").trim();

    return JSON.parse(text);
};
