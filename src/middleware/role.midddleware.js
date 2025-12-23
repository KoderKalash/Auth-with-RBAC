import AppError from "../utils/appError.js";

const restrictTo = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req.user || !allowedRoles.includes(req.body.role)) throw new AppError("Forbidden Request: Access Denied", 403)
        next()
    }
}

export default restrictTo