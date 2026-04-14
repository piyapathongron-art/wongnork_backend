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
    const folder = req.query.folder || "wongnork";

    // 2. สร้าง Signature โดยใช้ Secret Key
    // ต้องรวม parameter ทั้งหมดที่จะส่งจาก Frontend (ยกเว้น file และ api_key)
    const signature = cloudinary.utils.api_sign_request(
      {
        timestamp: timestamp,
        folder: folder,
      },
      process.env.CLOUDINARY_API_SECRET,
    );

    // 3. ส่งข้อมูลกลับไปให้ Frontend
    res.json({
      timestamp,
      signature,
      api_key: process.env.CLOUDINARY_API_KEY,
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      folder: folder
    });
  } catch (error) {
    console.error("Error generating signature:", error);
    res.status(500).json({ error: "Failed to generate signature" });
  }
});

export default cloudinaryRoute;
