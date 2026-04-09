import jwt from "jsonwebtoken";
import "dotenv/config";
import createError from "http-errors";

const KEY = process.env.JWT_SECRET

export function createToken(payload){
    return jwt.sign(payload, KEY, {algorithm:"HS256", expiresIn: "17d"})
}

export function verifyToken(token){
    try {
        const payload = jwt.verify(token,KEY,{algorithms:["HS256"]})
        return payload
    } catch (error) {
        console.log(`Error at JWT: ${error}`)
        throw createError(401,"Invalid Token")
    }
}