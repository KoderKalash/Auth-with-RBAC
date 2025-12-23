import express from "express";
import protect from "../middleware/auth.middleware.js";
import restrictTo from "../middleware/role.midddleware.js";

const router = express.Router()

// router.get("/reports",protect,restrictTo("admin","manager"),getReports)

export default router