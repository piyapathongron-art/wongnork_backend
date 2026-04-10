import express from "express"
import { createRestaurantController, deleteRestaurantController, getAllRestaurantController, getRestaurantByIdController, updateRestaurantController } from "../controllers/restaurants.controller.js"
import authUserCheck from "../middlewares/userAuthen.middleware.js"

const restaurantsRoute = express.Router()

restaurantsRoute.get('/', getAllRestaurantController)

restaurantsRoute.get('/:id', getRestaurantByIdController)

restaurantsRoute.post('/', authUserCheck, createRestaurantController)

restaurantsRoute.put('/:id', authUserCheck, updateRestaurantController)

restaurantsRoute.delete('/:id', authUserCheck, deleteRestaurantController)

export default restaurantsRoute