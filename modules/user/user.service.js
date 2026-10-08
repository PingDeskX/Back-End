import bcrypt from "bcrypt";
import userModel from "../../DB/models/user.model.js";
import { generateToken } from "../../utils/token.js";

export const createUser = async (userData) => {
  const existingUser = await userModel.findUserByEmail(userData.email);
  if (existingUser) {
    throw new Error("Email already exists");
  }

  const hashedPassword = await bcrypt.hash(userData.password, 10);

  const newUser = await userModel.insertUser({
    firstname: userData.firstname,
    lastname: userData.lastname,
    email: userData.email,
    password: hashedPassword,
    age: userData.age,
    phone: userData.phone,
    address: userData.address,
    role: userData.role,
  });

  const token = generateToken({
    id: newUser.id,
    email: newUser.email,
    role: newUser.role,
  });

  return { user: newUser, token };
};
