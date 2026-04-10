import { prisma } from "../lib/prisma.js";
import createHttpError from "http-errors";

export const getAllRestaurantService = async () => {
    const restaurant = await prisma.restaurant.findMany({
        where: {
            deletedAt: null
        }
    });

    return restaurant
}

export const createRestaurantService = async (data, ownerId) => {
    const checkExistRestaurant = await findRestaurantBy("name", data.name)
    if (checkExistRestaurant) {
        throw createHttpError[409]("This restaurant name already exist")
    }
    const newRestaurant = await prisma.restaurant.create({
        data: {
            ...data,
            ownerId
        }
    })
    return newRestaurant
}

export const findRestaurantBy = async (findBy, value) => {
    const restaurant = await prisma.restaurant.findFirst({
        where: {
            [findBy]: value
        }
    })
    return restaurant
}

export const updateRestaurantService = async (id, data, ownerId) => {
    const checkExistRestaurant = await findRestaurantBy("id", id)
    if (!checkExistRestaurant) {
        throw createHttpError[404]("This restaurant does not exist")
    }
    if (checkExistRestaurant.ownerId !== ownerId) {
        throw createHttpError[403]("You are not authorized to update this restaurant")
    }
    const restaurant = await prisma.restaurant.update({
        where: {
            id: id
        },
        data
    })
    return restaurant
}

export const deleteRestaurantService = async (id, ownerId) => {
    const checkExistRestaurant = await findRestaurantBy("id", id)
    if (!checkExistRestaurant) {
        throw createHttpError[404]("This restaurant does not exist")
    }
    if (checkExistRestaurant.ownerId !== ownerId) {
        throw createHttpError[403]("You are not authorized to delete this restaurant")
    }
    const restaurant = await prisma.restaurant.update({
        where: {
            id
        },
        data: {
            deletedAt: new Date()
        }
    })
    return restaurant
}