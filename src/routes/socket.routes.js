import express from 'express';
import { getMessageService } from '../services/socket.service.js';
import { socketAuthMiddleware } from '../middlewares/authSocket.middleware.js';
import authUserCheck from '../middlewares/userAuthen.middleware.js';
const socketRoute = express.Router();

socketRoute.use(authUserCheck)

socketRoute.get("/messages/:roomId", getMessageService);

export default socketRoute;