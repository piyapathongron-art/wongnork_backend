import { prisma } from "../lib/prisma.js";

// ดึงรีวิวทั้งหมดของร้าน
export const getReviewsByRestaurantService = async (restaurantId) => {
  return await prisma.review.findMany({
    where: { restaurantId },
    include: {
      user: {
        select: { id: true, name: true, avatarUrl: true }
      }
    },
    orderBy: { createdAt: "desc" }
  });
};

// สร้างรีวิวใหม่
export const createReviewService = async (restaurantId, userId, data) => {
  return await prisma.review.create({
    data: {
      ...data,
      restaurantId,
      userId,
    }
  });
};

// ลบรีวิว
export const deleteReviewService = async (reviewId) => {
  return await prisma.review.delete({
    where: { id: reviewId }
  });
};

// ค้นหารีวิวตาม ID
export const getReviewByIdService = async (id) => {
  return await prisma.review.findUnique({
    where: { id }
  });
};
