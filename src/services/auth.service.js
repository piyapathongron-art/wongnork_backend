import { prisma } from "../lib/prisma.js";

export const findUseerByEmail = async (email) => {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  return user;
};

export const createNewUser = async (data) => {
  const newUser = await prisma.user.create({
    data,
  });
  return newUser;
};

export const findUserBy = async (col, val) => {
  const user = await prisma.user.findUnique({
    where: {
      [col]: val,
    },
    include: {
      reviews: {
        include: {
          restaurant: {
            include: { images: true }
          }
        }
      },
      partiesLed: {
        include: {
          restaurant: {
            include: { images: true }
          },
          members: {
            include: {
              user: true
            }
          }
        }
      },
      joinedParties: {
        include: {
          party: {
            include: {
              restaurant: {
                include: { images: true }
              },
              members: {
                include: {
                  user: true
                }
              }
            }
          }
        }
      },
      ownedRestaurants: true,
      savedRestaurants: {
        include: {
          restaurant:
            { include: { images: true } }
        }
      },
    }
  });
  return user;
};

export const updateUserService = async (id, data) => {
  const user = await prisma.user.update({
    where: { id },
    data,
  });
  return user;
};

export const upsertGoogleUser = async (email, name, googleId, avatarUrl) => {
  const user = await prisma.user.upsert({
    where: { email },
    update: {
      googleId,
      avatarUrl, // อัปเดตรูปโปรไฟล์ล่าสุดจาก Google เสมอ
      provider: 'GOOGLE',
    },
    create: {
      email,
      name,
      googleId,
      avatarUrl,
      provider: 'GOOGLE',
      // password ไม่จำเป็นต้องใส่เพราะ Schema กำหนดเป็น String? ไว้แล้ว
    },
  });
  return user;
};