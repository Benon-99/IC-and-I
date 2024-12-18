import express from 'express';
import { getMessages } from '../repositories/messageRepo.js';

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

export default router;
