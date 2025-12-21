import User from "../models/user.model.js";
import asyncHandler from "../utils/asyncHandler.js";
// import AppError from "../utils/appError.js";
/*
  createUser controller

  Responsibility:
  - receive name and email
  - create user
  - save to DB
  - return created user
*/

export const createUser = asyncHandler(async(req, res) => {
    /* TODO:
    1. extract name, email from req.body
    2. create User instance
    3. save user
    4. return response
    */

    const {name,email,password} = req.body
    // if (!name || !email ) throw new AppError("Name and email are required",400)
    const user = new User({name,email,password})
    const saveU = await user.save()
    res.json(saveU)
});
