import express from "express"
import { deleteRestaurantController, getAllRestaurantController, getRestaurantByIdController, postRestaurantController, putRestaurantController } from "../controllers/restaurants.controller.js"

const restaurantsRoute = express.Router()

restaurantsRoute.get('/',getAllRestaurantController)

restaurantsRoute.get('/:id',getRestaurantByIdController)

restaurantsRoute.post('/',postRestaurantController)

restaurantsRoute.put('/:id',putRestaurantController)

restaurantsRoute.delete('/:id',deleteRestaurantController)

 export default restaurantsRoute