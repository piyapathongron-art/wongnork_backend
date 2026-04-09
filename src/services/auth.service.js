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
