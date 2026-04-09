import createHttpError from "http-errors"

export function authRegisterController(req,res){
    res.json("register path")
}

export function authLoginController(req,res){
       res.json({
        msg : "login path",
        body : req.body
    })
}

export function authGetmeController(req,res){
    res.json("get me path")
}