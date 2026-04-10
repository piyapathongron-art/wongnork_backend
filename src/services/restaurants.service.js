import { prisma } from "../lib/prisma.js";
import createHttpError from "http-errors";

export const getAllRestaurantService = async () => {
    const restaurant = await prisma.restaurant.findMany({
        where:{
            deletedAt:null
        }
    });

    return restaurant
}

export const createRestaurantService = async (data) => {
    const checkExistRestaurant = await findRestaurantBy("name",data.name)
    if(checkExistRestaurant){
        throw createHttpError[409]("This restaurant name already exist")
    }
    const newRestaurant = await prisma.restaurant.create({
        data
    })
    return newRestaurant
}

export const findRestaurantBy = async(findBy,value) => {
    const restaurant = await prisma.restaurant.findFirst({
        where:{
            [findBy]:value
        }
    })
    return restaurant
} 

export const updateRestaurantService = async (id,data) => {
    const checkExistRestaurant = await findRestaurantBy("id",id)
    if(!checkExistRestaurant){
        throw createHttpError[404]("This restaurant does not exist")
    }
    const restaurant = await prisma.restaurant.update({
        where:{
            id:id
        },
        data
    })
    return restaurant
}

export const deleteRestaurantService = async (id) => {
    const checkExistRestaurant = await findRestaurantBy("id",id)
    if(!checkExistRestaurant){
        throw createHttpError[404]("This restaurant does not exist")
    }
    const restaurant = await prisma.restaurant.update({
        where:{
            id
        },
        data:{
            deletedAt:new Date()
        }
    })
    return restaurant
}