import bcrypt from "bcrypt";
import "dotenv/config";


const SALT = 5;

export function hashPassword(password){
    return bcrypt.hashSync(password, SALT)
}

export function comparePassword(password, hash){
    return bcrypt.compareSync(password, hash)
}