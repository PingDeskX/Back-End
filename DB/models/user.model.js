import { sql } from "../connectionDb.js";

export const createUserTable = async () => {
  const userschema = `
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        firstname VARCHAR(100) NOT NULL,
       lastname VARCHAR(100) NOT NULL,
fullname VARCHAR(205) GENERATED ALWAYS AS (firstname || ' ' || lastname) STORED,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(100) NOT NULL,
        age INTEGER NOT NULL,
        phone VARCHAR(13) NOT NULL,
        address VARCHAR(255) NOT NULL,
        role VARCHAR(20) NOT NULL DEFAULT 'user'
            CHECK (role IN ('user', 'admin', 'moderator')),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
    `;
  console.log("Creating users table...");

  await sql`${sql.unsafe(userschema)}`;
};

export const insertUser = async ({
  firstname,
  lastname,
  email,
  password,
  age,
  phone,
  address,
  role,
}) => {
  const [user] = await sql`
    INSERT INTO users (firstname, lastname, email, password, age, phone, address, role)
    VALUES (${firstname}, ${lastname}, ${email}, ${password}, ${age}, ${phone}, ${address}, ${role || "user"})
    RETURNING id, firstname, lastname, email, age, phone, address, role, created_at;
  `;
  return user;
};

export const findUserByEmail = async (email) => {
  const [user] = await sql`
    SELECT * FROM users WHERE email = ${email};
  `;
  return user;
};

const userModel = {
  createUserTable,
  insertUser,
  findUserByEmail,
};

export default userModel;
