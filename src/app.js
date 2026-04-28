import express from "express";
import helmet from "helmet";
import cors from "cors";
import errorHandlerMiddleware from "./middlewares/error.middleware.js";
import notFoundMiddleware from "./middlewares/notfound.middleware.js";
import authRoute from "./routes/auth.route.js";
import restaurantsRoute from "./routes/restaurants.route.js";
import cloudinaryRoute from "./routes/cloudinary.route.js";
import partyRoute from "./routes/party.route.js";
import reviewRoute from "./routes/review.route.js";
import featuresRoute from "./routes/features.route.js";
import { swaggerDocs } from "./config/swagger.js";
import { Server } from "socket.io";
import "dotenv/config";
import { socketAuthMiddleware } from "./middlewares/authSocket.middleware.js";
import { registerSocketHandler } from "./socket/handlers.js";
import http from "http";
import socketRoute from "./routes/socket.routes.js";

const app = express();
const server = http.createServer(app);

app.use(express.json());

app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    credentials: true,
  }),
);

app.use(helmet());

//socket.io
const FRONTEND_URL = process.env.FRONTEND_URL;
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
})

app.set("io", io);

io.use(socketAuthMiddleware)


io.on('connection', (socket) => {
  registerSocketHandler(io, socket)
})

// Swagger Documentation
swaggerDocs(app);

// Routes
app.use("/api/auth", authRoute);



app.use("/api/restaurants", restaurantsRoute);

app.use("/api/parties", partyRoute);

app.use("/api/reviews", reviewRoute);

app.use("/api/features", featuresRoute);

app.use("/api/cloudinary", cloudinaryRoute);

app.use("/api/socket", socketRoute)

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to WongNork Backend"
  })
})

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

export { server };
export default app;

