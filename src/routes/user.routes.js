import express from "express";
import { createUser } from "../controllers/user.controllers.js";
const router = express.Router();

/*
  TODO 1:
  Create a POST route at "/users"
  It should:
  - read name and email from req.body
  - create a new User
  - save it to the database
  - return the saved user as JSON
*/

router.post("/users", createUser)

export default router;
