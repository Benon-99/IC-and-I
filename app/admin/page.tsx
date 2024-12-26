'use client';

import { useAuth } from '@/lib/hooks/useAuth';
import DashboardStats from '@/components/admin/DashboardStats';
import RecentActivity from '@/components/admin/RecentActivity';
import { CalendarDays, Layout, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

/**
 * The main admin dashboard page.
 * 
 * This page displays the user's name, a link to create a new blog post, and two sections: 
 * the first displays some website statistics, and the second displays the user's recent activity.
 * 
 * The page also displays the current date.
 */
export default function AdminDashboard() {
    const { user } = useAuth();
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0f1035] to-[#2e3267] p-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <div>
                        <h1 className="text-3xl font-bold text-white mb-2">Welcome back, {user?.name}</h1>
                        <p className="text-gray-400">Here's what's happening with your website today.</p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Stats Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/10"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <Layout className="w-5 h-5 text-blue-400" />
                            <h2 className="text-lg font-semibold text-white">Overview</h2>
                        </div>
                        <DashboardStats />
                    </motion.div>

                    {/* Recent Activity Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/10"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-2">
                                <Activity className="w-5 h-5 text-blue-400" />
                                <h2 className="text-lg font-semibold text-white">Recent Activity</h2>
                            </div>
                        </div>
                        <RecentActivity />
                    </motion.div>
                </div>

                {/* Current Date */}
                <div className="mt-8 text-center">
                    <div className="inline-flex items-center space-x-2 text-sm text-gray-400">
                        <CalendarDays className="h-4 w-4" />
                        <span>{new Date().toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                        })}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}