import prisma from "../lib/prisma.js";

// ดึงรายการเมนูทั้งหมดของร้านอาหาร
export const getMenusByRestaurantService = async (restaurantId) => {
  return await prisma.menu.findMany({
    where: { restaurantId },
    orderBy: { createdAt: "desc" },
  });
};

// ค้นหาเมนูตาม ID (เพื่อตรวจสอบว่ามีจริงไหม)
export const getMenuByIdService = async (menuId) => {
  return await prisma.menu.findUnique({
    where: { id: menuId },
  });
};

// สร้างเมนูใหม่
export const createMenuService = async (restaurantId, data) => {
  return await prisma.menu.create({
    data: {
      ...data,
      restaurantId,
    },
  });
};

// อัปเดตเมนู
export const updateMenuService = async (menuId, data) => {
  return await prisma.menu.update({
    where: { id: menuId },
    data,
  });
};

// ลบเมนู
export const deleteMenuService = async (menuId) => {
  return await prisma.menu.delete({
    where: { id: menuId },
  });
};
