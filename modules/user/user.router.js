import { Router } from "express";
import { validation } from "../../common/middleware/validation.js";
import { createUserController } from "./user.controller.js";
import { registerUserSchema } from "./user.validation.js";

const router = Router();

router.post("/signup", validation(registerUserSchema), createUserController);

export default router;
