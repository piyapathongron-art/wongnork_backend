import express from "express";
import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";

const cloudinaryRoute = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

cloudinaryRoute.get("/get-signature", (req, res) => {
  try {
    // 1. สร้าง Timestamp ปัจจุบัน
    const timestamp = Math.round(new Date().getTime() / 1000);

    // 2. สร้าง Signature โดยใช้ Secret Key (ซึ่งอยู่ใน Backend อย่างปลอดภัย)
    // หมายเหตุ: หากคุณต้องการระบุโฟลเดอร์ ให้เพิ่ม folder: 'ชื่อโฟลเดอร์' ลงใน object แรก
    const signature = cloudinary.utils.api_sign_request(
      {
        timestamp: timestamp,
      },
      process.env.CLOUDINARY_API_SECRET,
    );

    // 3. ส่งข้อมูลกลับไปให้ Frontend
    res.json({
      timestamp,
      signature,
      api_key: process.env.CLOUDINARY_API_KEY,
    });
  } catch (error) {
    console.error("Error generating signature:", error);
    res.status(500).json({ error: "Failed to generate signature" });
  }
});

export default cloudinaryRoute;
