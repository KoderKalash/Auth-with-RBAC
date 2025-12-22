import express from "express"
import { signup,login } from "../controllers/auth.controllers.js";
import protect from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup",signup)
router.post("/login",login)
router.get("/users",protect,login)

export default router;