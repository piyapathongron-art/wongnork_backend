import express from "express";
import helmet from "helmet";
import cors from "cors";
import errorHandlerMiddleware from "./middlewares/error.middleware.js";
import notFoundMiddleware from "./middlewares/notfound.middleware.js";

const app = express();

app.use(express.json())

app.use(cors({
    origin: ["*"],
    method: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))

app.use(helmet())

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

export default app;