import express from "express"
import { authGetmeController, authLoginController, authRegisterController } from "../controllers/auth.controller.js"
const authRoute = express.Router()

authRoute.post('/register',authRegisterController)

authRoute.post('/login',authLoginController)

authRoute.get('/me',authGetmeController)

export default authRoute