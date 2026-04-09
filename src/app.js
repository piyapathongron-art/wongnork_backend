import express from "express";
import helmet from "helmet";
import cors from "cors";
import errorHandlerMiddleware from "./middlewares/error.middleware.js";
import notFoundMiddleware from "./middlewares/notfound.middleware.js";
import authRoute from "./routes/auth.route.js";

const app = express();

app.use(express.json())

app.use(cors({
    origin: ["*"],
    method: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))

app.use(helmet())

app.use('/api/auth',authRoute)

app.use('/api/restaurants',(req,res)=>{
    res.json("restaurants service")
})

app.use('/api/menu',(req,res)=>{
    res.json("menu service")
})

app.use('/api/review',(req,res)=>{
    res.json("review service")
})

app.use('/api/party',(req,res)=>{
    res.json("party service")
})

app.use('/api/feature',(req,res)=>{
    res.json("feature service")
})

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

export default app;