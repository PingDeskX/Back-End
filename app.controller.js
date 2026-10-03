import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import authRouter from './modules/auth/auth.router.js';
import { connectDb } from './DB/connectionDb.js';
import { createMessagesTable } from './DB/models/message.model.js';
import { createAttachmentsTable } from './DB/models/attachment.model.js';
import { createNotificationsTable } from './DB/models/notification.model.js';

export const bootstrap = async () => {
  const app = express();
  const PORT = process.env.PORT || 3000;

  try {
    await connectDb();

    await createMessagesTable();
    await createAttachmentsTable();
    await createNotificationsTable();
    console.log("🚀 All your tables created successfully on Neon!");

  } catch (error) {
    console.error("❌ Database initialization error:", error.message);
  }

  app.use(helmet());
  app.use(cors());
  app.use(express.json());

  app.get('/', (req, res) => {
    return res.status(200).json({ message: "Welcome to PingdeskX" });
  });

  app.use('/auth', authRouter);

  app.use('/demo', (req, res) => {
    return res.status(404).json({ message: "404 Page Not Found" });
  });

  app.use((err, req, res, next) => {
    return res.status(err.cause || 500).json({
      message: err.message || "Internal Server Error",
      error: err
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};