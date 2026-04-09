import { ZodError } from "zod";

export default function errorHandlerMiddleware(err,req,res,next){
    console.log("!!!!!!!!!! ERROR !!!!!!!!!!");
    console.log(err)

    if(err instanceof ZodError){
        const formatError = err.flatten()
        
        return res.status(400).json({
            message:"Validation Error",
            errors: {
                fieldError : formatError.fieldErrors,
                formError : formatError.formErrors
            }
        })
    }

    if(err instanceof Error){
        return res.status(500).json({
            message:"Internal Server Error",
            error: err.message
        })
    }

    const statusCode = err.status || 500;
    const message = err.message || "Internal Server Error";
    
    return res.status(statusCode).json({
        message: message
    })
}