import AppError from "../utils/appError.js"

const restrictTo = (...allowedRoles) => {
    return (req, res, next) => {
        // req.user is set by auth middleware
        // check if user's role is in allowedRoles
        if (!req.user || !allowedRoles.includes(req.user.role)) throw new AppError("Forbidden Request: Access Denied", 403)
        next()
    }
}

export default restrictTo