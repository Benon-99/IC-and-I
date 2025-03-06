import express from 'express';
import { getMessages, createSubmission } from '../repositories/messageRepo.js';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// Get all messages
router.get('/messages', async (req, res) => {
  try {
    const messages = await getMessages();
    res.json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Post a new message - handle contact form submissions
router.post(['/', ''], async (req, res) => {
  try {
    // Get the form data
    const { name, email, subject, message } = req.body;
    
    // Log received data
    console.log('[Message Route] Request received:', {
      name,
      email,
      subject,
      message: message ? `${message.substring(0, 20)}...` : 'undefined'
    });
    
    // Basic validation
    if (!name || !email || !message) {
      console.log('[Message Route] Validation failed - missing required fields');
      return res.status(400).json({ 
        success: false, 
        message: "Required fields missing" 
      });
    }
    
    // Send acknowledgment response
    res.status(200).json({
      success: true,
      message: "Message received successfully"
    });
    
    // Store in database (async, after response sent)
    try {
      await createSubmission({ 
        name, 
        email, 
        message, 
        subject: subject || "No Subject" 
      });
      console.log('[Message Route] Submission saved to database');
    } catch (dbError) {
      console.error('[Message Route] Database error:', dbError.message);
    }
    
    // Send email if configured
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        console.log('[Message Route] Attempting to send email');
        
        // Create transporter
        const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
          }
        });
        
        // Setup email data
        const mailOptions = {
          from: `"Contact Form" <${process.env.EMAIL_USER}>`,
          to: process.env.EMAIL_USER,
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
        
        // Send email
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error('[Message Route] Email error:', error.message);
          } else {
            console.log('[Message Route] Email sent successfully:', info.messageId);
          }
        });
      } catch (emailError) {
        console.error('[Message Route] Email setup error:', emailError.message);
      }
    } else {
      console.log('[Message Route] Skipping email send - no credentials');
    }
    
  } catch (error) {
    console.error('[Message Route] General error:', error);
    // No need to send response as it was already sent
  }
});

export default router;
