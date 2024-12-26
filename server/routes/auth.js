import express from 'express';
import { loginController, getCurrentUser, logoutController } from '../controllers/authController.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Login route
router.post('/login', loginController);

// Get current user route - protected
router.get('/me', authenticateToken, getCurrentUser);

// Logout route - protected
router.post('/logout', authenticateToken, logoutController);

export default router;