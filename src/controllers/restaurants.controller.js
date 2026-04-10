import { createRestaurantService, deleteRestaurantService, findRestaurantBy, getAllRestaurantService, updateRestaurantService } from "../services/restaurants.service.js";
import { createRestaurantSchema, updateRestaurantSchema } from "../validations/schema.js";
import createHttpError from "http-errors";

export async function getAllRestaurantController(req, res, next) {
    const result = await getAllRestaurantService()
    res.json({
        total: result.length,
        restaurants: result
    })
}

export async function getRestaurantByIdController(req, res, next) {
    const id = req.params.id
    const result = await findRestaurantBy("id", id)
    if (!result) {
        return next(createHttpError[404]("This restaurant does not exist"))
    }
    res.json({
        restaurant: result
    })
}


export async function createRestaurantController(req, res, next) {
    if (!req.body) {
        return next(createHttpError[400]("Please provide restaurant data"))
    }
    const data = await createRestaurantSchema.parseAsync(req.body)
    const result = await createRestaurantService(data)
    res.json({
        message: "Create Restaurant Successful",
        restaurant: result
    })
}

export async function updateRestaurantController(req, res, next) {
    const id = req.params.id
    if (!req.body) {
        return next(createHttpError[400]("Please provide restaurant data"))
    }
    const data = await updateRestaurantSchema.parseAsync(req.body)
    const restaurant = await updateRestaurantService(id, data)
    res.json({
        message: "Update Restaurant Successful",
        newRestaurant: restaurant
    })
}

export async function deleteRestaurantController(req, res, next) {
    const id = req.params.id;
    const result = await deleteRestaurantService(id)
    res.json({
        message: "Delete Restaurant Successful",
        deletedRestaurant: {
            id: result.id,
            name: result.name,
        }
    })
}

