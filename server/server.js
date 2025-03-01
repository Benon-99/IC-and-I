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

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    console.log('Received contact form submission:', { name, email, subject });
    
    // Pass all fields including subject to the createSubmission function
    await createSubmission({ name, email, message, subject });
    
    // Configure email transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
    
    console.log('Email transporter configured');
    
    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to ourselves for testing
      subject: `Contact Form: ${subject || "New Message"}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <h3>New contact form submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || "Not provided"}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    };
    
    console.log('Attempting to send email...');
    
    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info);
    
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error('Error sending email:', {
      message: error.message,
      name: error.name,
      code: error.code,
      response: error.response,
      stack: error.stack
    });
    res.status(500).json({ success: false, message: "Failed to send email: " + error.message });
  }
});

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
