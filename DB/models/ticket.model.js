import {sql} from 'connectionDb.js';

export const createTicketSchema = async () => {
    const ticketSchema = `
        CREATE TABLE IF NOT EXISTS tickets (
            id SERIAL PRIMARY KEY,
            title Varchar(100) NOT NULL,
            description TEXT NOT NULL,
            status ticket_status DEFAULT 'open',
            priority ticket_priority DEFAULT 'medium',
            assigned_to INTEGER REFERENCES users(id),
            category_id INTEGER REFERENCES categories(id),
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            constraint fk_user FOREIGN KEY (assigned_to) REFERENCES users(id) ON DELETE SET NULL,
            constraint fk_category FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL
            constraint  fk_created_by FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE SET NULL
        );
    `;
    console.log("Creating tickets table...");
    await sql.unsafe(ticketSchema);
};