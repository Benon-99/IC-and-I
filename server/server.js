import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import messageRoutes from "./routes/messages.js";

// Load environment variables
dotenv.config();

const app = express();

// Configure middleware
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));

// Add request logging middleware
app.use((req, res, next) => {
  console.log(`[Server] ${req.method} request to: ${req.url}`);
  next();
});

// Get allowed origins from environment variable or default to all
const allowedOrigins = process.env.ALLOWED_ORIGINS 
  ? process.env.ALLOWED_ORIGINS.split(',') 
  : ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002'];

console.log('[Server] Allowed CORS origins:', allowedOrigins);

// Enable CORS with configurable origins
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1 || allowedOrigins.includes('*')) {
      callback(null, true);
    } else {
      console.log(`[Server] Origin blocked by CORS: ${origin}`);
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ["GET", "POST", "OPTIONS"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// Parse JSON requests
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// Use the message routes for contact form submissions
app.use('/api/contact', messageRoutes);

// Start the server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`[Server] Email server running on port ${PORT}`);
});