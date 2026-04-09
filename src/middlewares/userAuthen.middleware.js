import createHttpError from 'http-errors'
import { findUseerByEmail } from '../services/auth.service.js'
import { verifyToken } from '../utils/jwt.js'


async function authUserCheck(req,res,next) {
    const authorization = req.headers.authorization
    
     if (!authorization ) {
        return next((createHttpError[401]('Invalid Token Type')))
    }

    const token = authorization.split(" ")[1]
    
     if (!token) {
        return next((createHttpError[401]('Not have Token')))
    }
    const payload = verifyToken(token)
    const user = await findUseerByEmail(payload.email)
    if(!user){
        return next((createHttpError[401]('Invalid Token')))
    }
    req.user= user
    next()
}

export default authUserCheck