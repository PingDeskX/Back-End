import { createUser } from "./user.service.js";

export const createUserController = async (req, res, next) => {
  try {
    const result = await createUser({ ...req.body, role: "user" });
    return res.status(201).json({
      message: "User created successfully",
      data: result.user,
      token: result.token,
    });
  } catch (error) {
    return next(error);
  }
};
