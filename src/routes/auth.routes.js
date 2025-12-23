import express from "express"
import { signup,login } from "../controllers/auth.controllers.js";
import protect from "../middleware/auth.middleware.js";
import restrictTo from "../middleware/role.midddleware.js";

const router = express.Router();

router.post("/signup",signup)
router.post("/login",login)




export default router;