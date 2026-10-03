import { neon } from "@neondatabase/serverless";
import { config } from "../config/config.service.js";

if (!config.databaseUrl) {
  throw new Error("DATABASE_URL is missing from .env");
}

export const sql = neon(config.databaseUrl);

export const connectDb = async () => {
  try {
    const result = await sql`SELECT NOW()`;
    console.log("Database connected successfully:", result[0].now);
  } catch (err) {
    console.error("Database connection failed:", err.message);
    throw err;
  }
};
