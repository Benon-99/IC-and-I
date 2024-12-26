import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { userRepository } from '../repositories/user-repo.js';

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const { user, storedHashedPassword, error } = await userRepository.loginUser({ email });
        
        if (error || !user) {
            return res.status(401).json({ 
                status: 'error', 
                message: 'Invalid credentials' 
            });
        }

        const isPasswordValid = await bcrypt.compare(password, storedHashedPassword);
        if (!isPasswordValid) {
            return res.status(401).json({ 
                status: 'error', 
                message: 'Invalid credentials' 
            });
        }

        const token = jwt.sign(
            { userId: user.id, email: user.email, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        // Set JWT as HTTP-only cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 24 * 60 * 60 * 1000 // 24 hours
        });

        return res.status(200).json({
            status: 'success',
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ 
            status: 'error', 
            message: 'Internal server error' 
        });
    }
};

export const getCurrentUser = async (req, res) => {
    try {
        const user = await userRepository.getUserByEmail(req.user.email);
        
        if (!user) {
            return res.status(404).json({ 
                status: 'error', 
                message: 'User not found' 
            });
        }

        res.status(200).json({
            status: 'success',
            user
        });
    } catch (error) {
        console.error('Get current user error:', error);
        res.status(500).json({ 
            status: 'error', 
            message: 'Internal server error' 
        });
    }
};

export const logoutController = async (req, res) => {
    try {
        // Clear the token cookie
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict'
        });

        res.status(200).json({
            status: 'success',
            message: 'Successfully logged out'
        });
    } catch (error) {
        console.error('Logout error:', error);
        res.status(500).json({ 
            status: 'error', 
            message: 'Internal server error' 
        });
    }
};