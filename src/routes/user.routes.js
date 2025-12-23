import express from "express";
import { createUser } from "../controllers/user.controllers.js";
import protect from "../middleware/auth.middleware.js";
import restrictTo from "../middleware/role.midddleware.js";
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
//getALLUsers -> placeholder controller
// router.get("/users",protect,restrictTo("admin"),getALLUsers)
// router.delete("/users/:id",protect,restrictTo("admin"),deleteUser)

export default router;
