import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import messageRoutes from "./routes/messages.js";
import prisma from './lib/prisma.js';
import createSubmission from "./repositories/messageRepo.js";

dotenv.config();

const app = express();

// Test database connection
async function testDbConnection() {
  try {
    console.log('[Server] Testing database connection...');
    await prisma.$connect();
    console.log('[Server] Successfully connected to database');
    
    // Test query to verify connection
    const testQuery = await prisma.$queryRaw`SELECT 1`;
    console.log('[Server] Database query test successful:', testQuery);
  } catch (error) {
    console.error('[Server] Failed to connect to database:', {
      name: error.name,
      message: error.message,
      code: error.code,
      stack: error.stack
    });
    process.exit(1);
  }
}

testDbConnection();

app.use(helmet());
// Enable CORS
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json()); // Middleware to parse JSON requests

// Mount message routes
app.use('/message', messageRoutes);

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`[Server] Running on port ${PORT}`);
  console.log('[Server] Environment:', process.env.NODE_ENV);
  console.log('[Server] Database URL:', process.env.DATABASE_URL ? 'Set' : 'Not set');
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('[Server] Unhandled Rejection:', {
    reason: reason instanceof Error ? {
      name: reason.name,
      message: reason.message,
      stack: reason.stack
    } : reason,
    promise
  });
});

process.on('uncaughtException', (error) => {
  console.error('[Server] Uncaught Exception:', {
    name: error.name,
    message: error.message,
    stack: error.stack
  });
});
