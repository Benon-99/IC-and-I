import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import prisma from '../prisma/client.js';

export const loginController = async (req, res) => {
    try {
        console.log('Login request received:', { email: req.body.email });
        
        const { email, password } = req.body;

        // For testing purposes - replace with database lookup in production
        if (email === 'icandicompany@gmail.com' && password === 'IC&I@admin2024') {
            const user = {
                userId: '1',
                email,
                role: 'admin',
                name: 'IC&I Admin'
            };

            const token = jwt.sign(user, process.env.JWT_SECRET, {
                expiresIn: '24h'
            });

            // Set token as HTTP-only cookie
            res.cookie('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                maxAge: 24 * 60 * 60 * 1000 // 24 hours
            });

            console.log('Login successful for:', email);
            return res.status(200).json({
                status: 'success',
                user
            });
        }

        console.log('Login failed: Invalid credentials for:', email);
        return res.status(401).json({
            status: 'error',
            message: 'Invalid credentials'
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error'
        });
    }
};

export const getCurrentUser = async (req, res) => {
    try {
        // User info is already attached to req by the auth middleware
        if (!req.user) {
            return res.status(401).json({
                status: 'error',
                message: 'Not authenticated'
            });
        }

        res.json({
            status: 'success',
            user: {
                id: req.user.userId,
                email: req.user.email,
                name: 'IC&I Admin',
                role: 'admin'
            }
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
            sameSite: 'lax'
        });

        return res.status(200).json({
            status: 'success',
            message: 'Logged out successfully'
        });
    } catch (error) {
        console.error('Logout error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error'
        });
    }
};