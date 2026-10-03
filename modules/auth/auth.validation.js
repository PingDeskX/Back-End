import { z } from 'zod';

export const registerSchema = z.object({
  body: z.object({
    username: z.string().min(3, "must be at least 3 char"),
    email: z.string().email("disabled email"),
    password: z.string().min(6, "must be stronger password"),
  }),
});

export const loginSchema = z.object({
  body: z.object({
    email: z.string().email("wrong email"),
    password: z.string().min(1, "password is required"),
  }),
});