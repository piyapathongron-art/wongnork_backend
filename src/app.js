import express from "express";
import helmet from "helmet";
import cors from "cors";

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

export default app;