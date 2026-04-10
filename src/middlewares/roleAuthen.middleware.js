import createHttpError from "http-errors";

export function adminAuthen(req, res, next) {
    const userRole = req.user.role
    if (userRole !== "ADMIN") {
        throw createHttpError(401, "admin role only")
    }
    next()
}

export function ownerAuthen(req, res, next) {
    const userRole = req.user.role
    if (userRole !== "ADMIN" || "OWENER") {
        throw createHttpError(401, "admin or owner only")
    }
    next()
}