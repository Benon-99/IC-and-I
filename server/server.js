import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import messageRepo from "./repositories/messageRepo.js";
import helmet from "helmet";
import dotenv from "dotenv";
import messageRouter from "./router/messageRouter.js";

dotenv.config();

const app = express();

app.use(helmet());
// Enable CORS
app.use(cors({ origin: "*" }));

app.use(express.json()); // Middleware to parse JSON requests

// Use the router for other message-related APIs
app.use("/message", messageRouter);

// Email sending function
const sendEmail = async (name, email, subject, message) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `${name}: ${subject}`,
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
    // Save submission using the repository
    await messageRepo.createSubmission({ email, name, message, subject });
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
