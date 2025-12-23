import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import AppError from "../utils/appError.js";
import asyncHandler from "../utils/asyncHandler.js";

/*
  Auth Middleware

  Responsibilities:
  - read JWT from Authorization header
  - verify token
  - fetch user
  - attach user to req
*/

const protect = asyncHandler(async (req, res, next) => {
    // TODO 1: get token from Authorization header - Bearer <token>
    const header = req.headers.authorization

    // TODO 2: if no token, throw AppError (401)
    if (!header || !header.startsWith("Bearer")) throw new AppError("No token found", 401)
    const token = header.split(" ")[1]

    // 3. Verify token (this throws if invalid)
    const decoded = jwt.verify(token,process.env.JWT_SECRET)
    
    // 4. Find user from DB
    const user = User.findById(decoded.userId)
    if (!user) throw new AppError("User not found", 401)

    // TODO 5: attach user to req and call next()
    req.user = user
    next()
});

export default protect;
