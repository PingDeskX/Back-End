import { sql } from "../connectionDb.js";

export const createTicketSchema = async () => {
  const ticketSchema = `
        CREATE TABLE IF NOT EXISTS tickets (
            id SERIAL PRIMARY KEY,
            title VARCHAR(100) NOT NULL,
            description TEXT NOT NULL,
            status VARCHAR(20) NOT NULL DEFAULT 'open',
            priority VARCHAR(20) NOT NULL DEFAULT 'medium',
            assigned_to INTEGER,
            category_id INTEGER,
            created_by INTEGER,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            CONSTRAINT fk_ticket_assigned_user FOREIGN KEY (assigned_to) REFERENCES users(id) ON DELETE SET NULL,
            CONSTRAINT fk_ticket_category FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL,
            CONSTRAINT fk_ticket_created_by FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE SET NULL
        );
    `;
  console.log("Creating tickets table...");
  await sql.unsafe(ticketSchema);
};
