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
      role: data.role
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

const restaurantSchema = z.object({
  name: z.string()
    .min(1, "กรุณากรอกชื่อร้าน")
    .max(255, "ชื่อร้านต้องไม่เกิน 255 ตัวอักษร"),

  description: z.string()
    .max(255, "รายละเอียดร้านต้องไม่เกิน 255 ตัวอักษร")
    .optional(),

  category: z.string()
    .min(1, "กรุณากรอกประเภทร้าน")
    .max(255, "ประเภทร้านต้องไม่เกิน 255 ตัวอักษร"),

  lat: z.number({ required_error: "กรุณากรอกละติจูด", invalid_type_error: "ละติจูดต้องเป็นตัวเลข" })
    .min(-90, "ละติจูดต้องไม่ต่ำกว่า -90")
    .max(90, "ละติจูดต้องไม่เกิน 90"),

  lng: z.number({ required_error: "กรุณากรอกลองจิจูด", invalid_type_error: "ลองจิจูดต้องเป็นตัวเลข" })
    .min(-180, "ลองจิจูดต้องไม่ต่ำกว่า -180")
    .max(180, "ลองจิจูดต้องไม่เกิน 180"),

  operatingHours: z.array(z.object({
    day: z.enum(['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY']),
    openTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "รูปแบบเวลาไม่ถูกต้อง (HH:mm)"),
    closeTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "รูปแบบเวลาไม่ถูกต้อง (HH:mm)"),
    isClosed: z.boolean().default(false)
  })).optional()
});

// สำหรับ Create สามารถดึง Schema ตัวหลักไปใช้ได้เลย
export const createRestaurantSchema = restaurantSchema;

// สำหรับ Update ใช้ .partial() เพื่อให้สามารถส่งมาแค่อย่างใดอย่างหนึ่งได้
export const updateRestaurantSchema = restaurantSchema.partial();

// --- Menu Validation Schema ---
const menuSchema = z.object({
  name: z.string()
    .min(1, "กรุณากรอกชื่อเมนู")
    .max(255, "ชื่อเมนูต้องไม่เกิน 255 ตัวอักษร"),

  description: z.string()
    .max(500, "รายละเอียดเมนูต้องไม่เกิน 500 ตัวอักษร")
    .optional()
    .nullable(),

  price: z.number({
    required_error: "กรุณากรอกราคา",
    invalid_type_error: "ราคาต้องเป็นตัวเลข"
  }).min(0, "ราคาต้องไม่ต่ำกว่า 0"),

  category: z.string()
    .default("others"),

  imageUrl: z.string()
    .url("รูปแบบ URL ของรูปภาพไม่ถูกต้อง")
    .optional()
    .nullable(),
});

export const createMenuSchema = menuSchema;
export const updateMenuSchema = menuSchema.partial();

// --- Party Validation Schema ---
export const createPartySchema = z.object({
  name: z.string()
    .min(1, "กรุณากรอกชื่อปาร์ตี้")
    .max(255, "ชื่อปาร์ตี้ต้องไม่เกิน 255 ตัวอักษร")
    .optional()
    .nullable(),

  details: z.string()
    .max(1000, "รายละเอียดปาร์ตี้ต้องไม่เกิน 1000 ตัวอักษร")
    .optional()
    .nullable(),

  meetupTime: z.string()
    .refine((val) => !isNaN(Date.parse(val)), "รูปแบบวันที่และเวลาไม่ถูกต้อง")
    .transform((val) => new Date(val)),

  maxParticipants: z.number({
    required_error: "กรุณากรอกจำนวนคนรับ",
    invalid_type_error: "จำนวนคนต้องเป็นตัวเลข"
  }).min(2, "จำนวนคนต้องมีอย่างน้อย 2 คน"),

  contactInfo: z.string()
    .min(1, "กรุณากรอกช่องทางติดต่อ")
    .max(255, "ช่องทางติดต่อต้องไม่เกิน 255 ตัวอักษร"),

  serviceCharge: z.number().min(0).optional().default(0),
  vat: z.number().min(0).optional().default(0),
});

export const updatePartySettingsSchema = z.object({
  name: z.string().min(2, "ชื่อต้องมีอย่างน้อย 2 ตัวอักษร").optional(),
  details: z.string().max(1000, "รายละเอียดต้องไม่เกิน 1000 ตัวอักษร").optional(),
  meetupTime: z.string().transform((val) => new Date(val)).optional(),
  maxParticipants: z.number().min(2, "จำนวนคนต้องมีอย่างน้อย 2 คน").optional(),
  contactInfo: z.string().min(1, "กรุณากรอกช่องทางติดต่อ").optional(),
  vat: z.number().min(0).optional(),
  serviceCharge: z.number().min(0).optional(),
  status: z.enum(["OPEN", "FULL", "COMPLETED", "CANCELLED"]).optional(),
});

// --- Review Validation Schema ---
export const createReviewSchema = z.object({
  rating: z.number({
    required_error: "กรุณาให้คะแนน",
    invalid_type_error: "คะแนนต้องเป็นตัวเลข"
  }).min(1, "คะแนนต่ำสุดคือ 1").max(5, "คะแนนสูงสุดคือ 5"),

  comment: z.string()
    .max(1000, "คอมเมนต์ต้องไม่เกิน 1000 ตัวอักษร")
    .optional()
    .nullable(),
  partyId: z.string().uuid("รูปแบบ Party ID ไม่ถูกต้อง").optional().nullable(),
});

// --- Profile Validation Schema ---
export const updateProfileSchema = z.object({
  name: z.string().min(2, "ชื่อต้องมีอย่างน้อย 2 ตัวอักษร").transform((val) => val.trim()).optional(),
  avatarUrl: z.string().url("รูปแบบ URL ของรูปภาพไม่ถูกต้อง").optional().nullable(),
});

// --- Split Bill / Party Order Item Schema ---
export const createPartyOrderItemSchema = z.object({
  menuId: z.string().uuid("รูปแบบ Menu ID ไม่ถูกต้อง").optional().nullable(),
  isCustom: z.boolean().optional().default(false),
  name: z.string().max(255).optional().nullable(),
  price: z.number().min(0).optional().nullable(),
  quantity: z.number().min(1).optional().default(1),
}).refine(data => {
  if (!data.isCustom && !data.menuId) return false;
  if (data.isCustom && (!data.name || data.price === undefined || data.price === null)) return false;
  return true;
}, {
  message: "ข้อมูลเมนูไม่ครบถ้วน (ระบุ menuId หรือระบุ name และ price สำหรับเมนูพิเศษ)",
});

export const updatePartyOrderItemQuantitySchema = z.object({
  action: z.enum(["increment", "decrement"])
});

export const toggleSharerSchema = z.object({
  action: z.enum(["join", "leave"])
});