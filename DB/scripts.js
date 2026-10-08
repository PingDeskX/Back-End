import { sql } from "../../connectionDb.js";
import { createUserTable } from "../models/user.model.js";

const resetDatabase = async () => {
  try {
    console.log("⚠️ Deleting old tables...");
    await sql`DROP TABLE IF EXISTS users CASCADE;`;

    console.log("🛠️ Recreating tables...");
    await createUserTable();

    console.log("✅ Database reset successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error resetting database:", error);
    process.exit(1);
  }
};

resetDatabase();