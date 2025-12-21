import User from "../models/user.model.js";
import AppError from "../utils/appError.js";
import asyncHandler from "../utils/asyncHandler.js";
import bcrypt from "bcrypt"
import { signToken } from "../utils/jwt.js";

/*
  Signup Controller

  Responsibilities:
  - extract name, email, password
  - validate presence
  - create user
  - return success response
*/

export const signup = asyncHandler(async (req, res) => {
    // TODO 1: extract name, email, password from req.body
    const { name, email, password } = req.body

    // TODO 2: if any field missing, throw AppError (400)
    if (!name || !email || !password) throw new AppError("Missing Entries", 400)

    // TODO 3: create user using User model
    const user = new User({ name, email, password })
    const saveU = await user.save()

    // TODO 4: send success response (201)
    res.status(201).json(saveU)
});


export const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) throw new AppError("Credentials are required", 400)

    const user = await User.findOne({ email })
    if (!user) throw new AppError("User not found", 401)

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) throw new AppError("Invalid Password!", 401)

    //token
    const token = signToken(user._id)

    res.status(200).json({
        status: "success",
        token,
    })
})