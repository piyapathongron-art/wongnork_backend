import "dotenv/config";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export function socketAuthMiddleware(socket, next) {
    const token = socket.handshake.auth.token;
    if (!token) {
        next(new Error("Unauthorized"))
        return;
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET)
        socket.data.user = decoded
        console.log(decoded)
        next()
    } catch (error) {
        next(new Error("Invalid Token"))
        return;
    }
}