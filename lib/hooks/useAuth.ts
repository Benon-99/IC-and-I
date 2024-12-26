import { create } from 'zustand';
import axios from 'axios';
import { AuthState, User } from '@/types';

const API_URL = 'http://localhost:8000/api';

export const useAuth = create<AuthState>((set) => ({
    user: null,
    isAuthenticated: false,
    isLoading: false,
    
    login: async (email: string, password: string) => {
        try {
            const response = await axios.post(`${API_URL}/auth/login`, {
                email,
                password
            }, {
                withCredentials: true
            });

            if (response.data.status === 'success') {
                set({ 
                    user: response.data.result as User,
                    isAuthenticated: true 
                });
                return true;
            }
            return false;
        } catch (error) {
            console.error('Login error:', error);
            return false;
        }
    },

    logout: async () => {
        try {
            const response = await axios.post(`${API_URL}/auth/logout`, {}, {
                withCredentials: true
            });

            if (response.data.status === 'success') {
                set({ 
                    user: null,
                    isAuthenticated: false 
                });
                return true;
            }
            return false;
        } catch (error) {
            console.error('Logout error:', error);
            return false;
        }
    },

    checkAuth: async () => {
        // No-op since we don't need this functionality
        return Promise.resolve();
    }
}));
