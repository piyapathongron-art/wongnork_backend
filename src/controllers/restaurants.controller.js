import { createRestaurantService, deleteRestaurantService, findRestaurantBy, getAllRestaurantService, updateRestaurantService, toggleSaveRestaurantService, paginationRestaurantService } from "../services/restaurants.service.js";
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

export async function paginationRestaurantController(req, res, next) {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const result = await paginationRestaurantService(page, limit);
        
        res.json({
            message: "Success",
            data: result.data,
            meta: result.meta 
        });
    } catch (error) {
        next(error);
    }
}

export async function createRestaurantController(req, res, next) {
    const ownerId = req.user.id
    if (!req.body) {
        return next(createHttpError[400]("Please provide restaurant data"))
    }
    const data = await createRestaurantSchema.parseAsync(req.body)
    const result = await createRestaurantService(data, ownerId)
    res.json({
        message: "Create Restaurant Successful",
        restaurant: result
    })
}

export async function updateRestaurantController(req, res, next) {
    const id = req.params.id
    const ownerId = req.user.id
    if (!req.body) {
        return next(createHttpError[400]("Please provide restaurant data"))
    }
    const data = await updateRestaurantSchema.parseAsync(req.body)
    const restaurant = await updateRestaurantService(id, data, ownerId)
    res.json({
        message: "Update Restaurant Successful",
        newRestaurant: restaurant
    })
}

export async function deleteRestaurantController(req, res, next) {
    const id = req.params.id;
    const ownerId = req.user.id
    const result = await deleteRestaurantService(id, ownerId)
    res.json({
        message: "Delete Restaurant Successful",
        deletedRestaurant: {
            id: result.id,
            name: result.name,
        }
    })
}

export async function toggleSaveRestaurantController(req, res, next) {
    try {
        const restaurantId = req.params.id;
        const userId = req.user.id;

        const result = await toggleSaveRestaurantService(userId, restaurantId);
        res.json({
            message: result.message,
            isSaved: result.isSaved
        });
    } catch (error) {
        next(error);
    }
}

