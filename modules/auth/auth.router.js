import { Router } from "express";
import * as authController from "./auth.controller.js";
import { validation } from "../../common/middleware/validation.js";
import { loginSchema, registerSchema } from "./auth.validation.js";

const router = Router();

router.post("/register", validation(registerSchema), authController.register);
router.post("/login", validation(loginSchema), authController.login);

export default router;
