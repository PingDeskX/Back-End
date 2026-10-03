import {sql} from '../connectionDb.js';

export const createUserTable = async () => {
    const userschema = `
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name Varchar(100) NOT NULL,
        email Varchar(100) UNIQUE NOT NULL,
        password Varchar(100) NOT NULL,
        role user_role enum('user', 'admin', 'moderator') DEFAULT 'user',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
    `;
    console.log("Creating users table...");
    
    await sql.unsafe(userschema);
}
    