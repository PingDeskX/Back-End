import { z } from "zod";

// Register Schema
export const registerUserSchema = z.object({
  body: z.object({
    firstname: z
      .string({ required_error: "First name is required" })
      .min(2, "First name must be at least 2 characters")
      .max(100, "First name cannot exceed 100 characters")
      .trim(),

    lastname: z
      .string({ required_error: "Last name is required" })
      .min(2, "Last name must be at least 2 characters")
      .max(100, "Last name cannot exceed 100 characters")
      .trim(),

    email: z
      .string({ required_error: "Email is required" })
      .email("Invalid email address format")
      .max(100, "Email cannot exceed 100 characters")
      .toLowerCase()
      .trim(),

    password: z
      .string({ required_error: "Password is required" })
      .min(6, "Password must be at least 6 characters")
      .max(100, "Password cannot exceed 100 characters"),

    age: z.number().int().min(0).max(150),

    phone: z
      .string()
      .trim()
      .transform((phone) => phone.replace(/[\s()-]/g, ""))
      .transform((phone) => {
        if (phone.startsWith("0020")) return `+${phone.slice(2)}`;
        if (phone.startsWith("0")) return `+20${phone.slice(1)}`;
        if (phone.startsWith("20")) return `+${phone}`;
        return phone;
      })
      .refine((phone) => /^\+201[0125]\d{8}$/.test(phone), {
        message: "Phone must be a valid Egyptian mobile number",
      }),

    address: z.string().trim().min(5).max(255),
  }),
});

// Login Schema
export const loginUserSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email address format")
    .toLowerCase()
    .trim(),

  password: z
    .string({ required_error: "Password is required" })
    .min(1, "Password cannot be empty"),
});
