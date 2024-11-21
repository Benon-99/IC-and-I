import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

import createSubmission from "./repositories/messageRepo.js";
import helmet from "helmet";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(helmet());
// Enable CORS
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json()); // Middleware to parse JSON requests

// Email sending function
const sendEmail = async (name, email, subject, message) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // Gmail SMTP server
    port: 465, // Secure port for SMTP
    secure: true, // Use SSL
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_USER}>`, // Client's email is now allowed as the sender
    to: process.env.EMAIL_USER, // Your email address
    replyTo: email, // Ensures replies go to the client's email
    subject: `${name}: ${subject}`, // Professional subject line
    text: `You have received a new contact request from your website:\n\n
  Name: ${name}
  Email: ${email}
  Subject: ${subject}\n
  Message : ${message}\n\n
  This message was sent via your website.`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    return info.response;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

// API route to send email
app.post("/api/send-email", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    await createSubmission({ email, name, message });
    const response = await sendEmail(name, email, subject, message);
    res.status(200).json({ message: "Email sent successfully!", response });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to send email", error: error.message });
  }
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
