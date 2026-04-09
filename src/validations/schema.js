import { z } from "zod";
import { hashPassword } from "../utils/bcryptUtils.js";

export const registerSchema = z.object({
  name: z.string()
    .min(2, "ชื่อต้องมีอย่างน้อย 2 ตัวอักษร")
    .transform(val => val.trim()),
  email: z
    .email("รูปแบบอีเมลไม่ถูกต้อง")
    .transform(val => val.trim().toLowerCase()),
  password: z.string()
    .min(6, "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร"),
  confirmPassword: z.string()
    .min(1, "กรุณายืนยันรหัสผ่าน"),
})
.refine((input) => input.password === input.confirmPassword, {
  message: "รหัสผ่านและการยืนยันรหัสผ่านไม่ตรงกัน",
  path: ["confirmPassword"],
})
.transform(async (data) => {
  return {
    name: data.name,
    email: data.email,
    password: hashPassword(data.password), 
    role : data.role
  };
});


export const loginSchema = z.object({
  email: z
    .email("รูปแบบอีเมลไม่ถูกต้อง")
    .min(1, "กรุณากรอกอีเมล")
    .transform(val => val.trim().toLowerCase()), // คลีนช่องว่างและพิมพ์เล็ก

  password: z.string()
    .min(1, "กรุณากรอกรหัสผ่าน")
}).transform(data => ({
  email: data.email, // 👈 ส่งไปตรงๆ แบบนี้เลย
  password: data.password
}));


