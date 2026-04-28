import { GoogleGenerativeAI } from '@google/generative-ai';
import { prisma } from '../lib/prisma.js';
import "dotenv/config"

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// ฟังก์ชันคำนวณระยะทาง (Haversine formula) คืนค่าเป็นกิโลเมตร
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  if (!lat1 || !lon1 || !lat2 || !lon2) return Infinity;
  const R = 6371; // รัศมีโลก (km)
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

export const getAiRecommendationService = async (userPrompt, userId, userLocation = null) => {

  // 1. ดึงข้อมูลร้านอาหารทั้งหมด (ถ้า DB ใหญ่ ควรเขียน Prisma ให้ filter คร่าวๆ ก่อน)
  const allRestaurants = await prisma.restaurant.findMany({
    where: { deletedAt: null },
    include: {
      images: { where: { isCover: true }, take: 1 },
      operatingHours: true,
      menus: { take: 5 } // จำกัดจำนวนเมนูไม่ให้เยอะเกินไป
    }
  });

  // 2. จัดการเรื่องตำแหน่งและการคัดกรองเบื้องต้น (Pre-filtering)
  let candidateRestaurants = allRestaurants;
  let locationContextStr = "ไม่ทราบตำแหน่งปัจจุบันของผู้ใช้";

  if (userLocation?.lat && userLocation?.lng) {
    locationContextStr = `ตำแหน่งปัจจุบันของผู้ใช้คือ: พิกัด lat: ${userLocation.lat}, lng: ${userLocation.lng}`;

    // ให้ Node.js คำนวณระยะทางให้เลย AI จะได้ไม่ต้องเดา
    candidateRestaurants = allRestaurants.map(restaurant => {
      const distance = calculateDistance(
        userLocation.lat, userLocation.lng,
        restaurant.latitude, restaurant.longitude // สมมติว่าใน DB ชื่อฟิลด์นี้
      );
      return { ...restaurant, distance_km: distance.toFixed(2) };
    });

    // เรียงลำดับจากใกล้ไปไกล แล้วตัดมาแค่ 15 ร้านที่ใกล้ที่สุดเพื่อประหยัด Token
    candidateRestaurants.sort((a, b) => a.distance_km - b.distance_km);
    candidateRestaurants = candidateRestaurants.slice(0, 15);
  } else {
    // ถ้าไม่มีโลเคชั่น ก็สุ่มมาสัก 15 ร้าน หรือดึงร้านเรตติ้งดีๆ มาแทน
    candidateRestaurants = candidateRestaurants.slice(0, 15);
  }

  // ดึงข้อมูลร้านที่เคยเซฟ
  const savedRestaurants = await prisma.savedRestaurant.findMany({
    where: { userId: userId },
    include: { restaurant: { select: { name: true, category: true } } } // เอาแค่ชื่อกับหมวดหมู่พอ
  });

  // 3. เตรียม Model (อัปเดตชื่อและใส่ responseMimeType)
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash-lite",
    generationConfig: {
      responseMimeType: "application/json",
    }
  });

  // 4. เตรียม Prompt
  const systemContext = `
      คุณคือผู้ช่วย AI "Wongnork" หน้าที่ของคุณคือแนะนำร้านอาหารที่เหมาะสมที่สุดจากฐานข้อมูลที่ให้ไว้เท่านั้น
      
      [CONTEXT]
      - ${locationContextStr}
      - ข้อมูลร้านอาหาร Candidate: ${JSON.stringify(candidateRestaurants)}
      - สไตล์ร้านที่ผู้ใช้คนนี้เคยบันทึกไว้: ${JSON.stringify(savedRestaurants)}

      [RULES]
      1. หากผู้ใช้ถามหาร้าน "ใกล้ฉัน" ให้ดูจากฟิลด์ "distance_km" ในข้อมูล Candidate เป็นหลัก เลือกร้านที่ตัวเลขน้อยที่สุด
      2. หากผู้ใช้ไม่มีประวัติบันทึกร้านและคำถามกว้างเกินไป ให้เน้นแนะนำร้านที่ใกล้ที่สุดก่อน
      3. วิเคราะห์เมนูอาหาร (menus) ของแต่ละร้านเพื่อให้ตรงกับความต้องการ
      4. ตอบกลับตามโครงสร้าง JSON ที่กำหนดเท่านั้น

      [RESPONSE FORMAT]
      {
        "recommendations": [
          {
            "restaurantId": "UUID",
            "name": "ชื่อร้าน",
            "reason": "อธิบายสั้นๆ (เช่น ห่างจากคุณเพียง 2 กม. หรือ มีเมนูเนื้อย่างที่คุณชอบ)",
            "highlightMenu": ["เมนูแนะนำ 1", "เมนูแนะนำ 2"],
            "recommendedMenus": [
              {
                "name": "ชื่อเมนู",
                "price": 150.00,
                "imageUrl": "URL รูปภาพเมนู"
              }
            ]
          }
        ],
        "aiMessage": "ข้อความทักทายภาษาไทยที่เป็นกันเอง"
      }
    `;

  // 5. ส่งคำขอ (สามารถใช้ระบบ Retry 3 รอบมาครอบตรงนี้ได้เลย)
  try {
    const result = await model.generateContent([systemContext, userPrompt]);
    const response = await result.response;
    console.log("result", result)
    console.log("response", response)

    // ไม่ต้องใช้ replace แล้ว เพราะ API บังคับตอบเป็น JSON มาให้เลย
    return JSON.parse(response.text());
  } catch (error) {
    console.error("Gemini Error:", error);
    throw new Error("AI Recommendation is currently unavailable.");
  }
};