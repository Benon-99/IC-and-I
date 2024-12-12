import messageRepo from "../repositories/messageRepo.js";
import prismaClient from "../prisma/database.js";

export const getAllMessages = async (req, res) => {
  try {
    const messages = await prismaClient.submission.findMany();
    // Convert to plain objects (ensure `created_at` is serialized properly)
    const plainMessages = messages.map((message) => ({
      ...message,
      created_at: message.created_at.toISOString(), // Ensure Date is converted to ISO string
    }));
    res.json(plainMessages);
  } catch (error) {
    console.error("Error fetching messages:", error.message); // Log the error for debugging
    res.status(500).json({ error: "Failed to fetch messages" });
  }
};

export const createMessage = async (req, res) => {
  const { email, name, subject, message } = req.body;

  if (!email || !name || !subject || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const newMessage = await messageRepo.createSubmission({
      email,
      name,
      subject,
      message,
    });
    res
      .status(201)
      .json({ message: "Message created successfully!", data: newMessage });
  } catch (error) {
    console.error("Error creating message:", error);
    res.status(500).json({ error: "Failed to create message" });
  }
};
