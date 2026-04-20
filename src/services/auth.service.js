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
      reviews: true,
      partiesLed: true,
      joinedParties: true,
      ownedRestaurants: true,
      savedRestaurants: {
        include: { restaurant: true }
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