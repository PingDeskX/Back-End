import env from "dotenv";
const path = require("path");

const nodeEnv = process.env.NODE_ENV || "development";
const envPath = path.resolve(__dirname, `../.env.${nodeEnv}`);
env.config({ path: envPath });

export const config = {
  databaseUrl: process.env.DATABASE_URL,
  databaseUrlUnpooled: process.env.DATABASE_URL_UNPOOLED,
    jwtSecret: process.env.JWT_SECRET,
    jwtExpiresIn: process.env.JWT_EXPIRES_IN,
    email: process.env.EMAIL,
    emailPassword: process.env.EMAIL_PASSWORD,
};