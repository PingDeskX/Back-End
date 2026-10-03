import {sql} from '../connectionDb.js';

export const createCategorySchema = async () => {
    const categorySchema = `
        CREATE TABLE IF NOT EXISTS categories (
            id SERIAL PRIMARY KEY,
            name Varchar(100) NOT NULL,
            description TEXT,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `;
    console.log("Creating categories table...");
    await sql.unsafe(categorySchema);
};
