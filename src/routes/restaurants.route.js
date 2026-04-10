import express from "express"
import { createRestaurantController, deleteRestaurantController, getAllRestaurantController, getRestaurantByIdController, updateRestaurantController } from "../controllers/restaurants.controller.js"

const restaurantsRoute = express.Router()

restaurantsRoute.get('/',getAllRestaurantController)

restaurantsRoute.get('/:id',getRestaurantByIdController)

restaurantsRoute.post('/',createRestaurantController)

restaurantsRoute.put('/:id',updateRestaurantController)

restaurantsRoute.delete('/:id',deleteRestaurantController)

 export default restaurantsRoute