import express from "express"
import { authGetmeController, authLoginController, authRegisterController } from "../controllers/auth.controller.js"
import authUserCheck from "../middlewares/userAuthen.middleware.js"
const authRoute = express.Router()

authRoute.post('/register',authRegisterController)

authRoute.post('/login',authLoginController)

authRoute.get('/me',authUserCheck,authGetmeController)

export default authRoute