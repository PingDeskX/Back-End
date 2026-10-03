import { sql } from '../connectionDb.js';

export const createAttachmentsTable = async () => {
  await sql`
    CREATE TABLE IF NOT EXISTS attachments (
        id SERIAL PRIMARY KEY,
        file_name VARCHAR(255) NOT NULL,
        file_url TEXT NOT NULL,
        public_id VARCHAR(255) NOT NULL,
        mime_type VARCHAR(100),
        size INT,
        message_id INT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

        CONSTRAINT fk_message FOREIGN KEY (message_id) REFERENCES messages(id) ON DELETE CASCADE
    );
  `;
  console.log("Attachments table created successfully!");
};