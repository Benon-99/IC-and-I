'use client';

import { useEffect, useState } from 'react';
import { FileText, MessageSquare, TrendingUp } from 'lucide-react';
import axios from 'axios';

interface Stats {
    blogs: {
        total: number;
        trend: number;
    };
    messages: {
        total: number;
        trend: number;
    };
}

export default function DashboardStats() {
    const [stats, setStats] = useState<Stats>({
        blogs: { total: 0, trend: 0 },
        messages: { total: 0, trend: 0 }
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/blogs/stats');
                if (response.data.status === 'success') {
                    setStats(response.data.result);
                }
            } catch (error) {
                console.error('Error fetching stats:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    if (loading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2].map((i) => (
                    <div key={i} className="bg-[#0f1035] rounded-lg p-6 animate-pulse">
                        <div className="h-6 bg-gray-700 rounded w-1/3 mb-4"></div>
                        <div className="h-10 bg-gray-700 rounded w-1/2"></div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Blogs Stats */}
            <div className="bg-[#0f1035] rounded-lg p-6 hover:bg-[#161849] transition-colors duration-200">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-gray-400 mb-1 flex items-center">
                            <FileText className="h-4 w-4 mr-2" />
                            Total Blogs
                        </p>
                        <h2 className="text-4xl font-bold text-white">
                            {stats.blogs.total}
                        </h2>
                    </div>
                    <div className="bg-blue-500/10 p-3 rounded-full">
                        <FileText className="h-8 w-8 text-blue-500" />
                    </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                    <TrendingUp className="h-4 w-4 mr-1 text-green-500" />
                    <span className="text-green-500">{stats.blogs.trend}%</span>
                    <span className="text-gray-400 ml-2">vs last month</span>
                </div>
                {stats.blogs.total === 0 && (
                    <p className="mt-4 text-sm text-gray-400 border-t border-gray-800 pt-4">
                        No blogs yet. Start creating your first blog post!
                    </p>
                )}
            </div>

            {/* Messages Stats */}
            <div className="bg-[#0f1035] rounded-lg p-6 hover:bg-[#161849] transition-colors duration-200">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-gray-400 mb-1 flex items-center">
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Total Messages
                        </p>
                        <h2 className="text-4xl font-bold text-white">
                            {stats.messages.total}
                        </h2>
                    </div>
                    <div className="bg-purple-500/10 p-3 rounded-full">
                        <MessageSquare className="h-8 w-8 text-purple-500" />
                    </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                    <TrendingUp className="h-4 w-4 mr-1 text-green-500" />
                    <span className="text-green-500">{stats.messages.trend}%</span>
                    <span className="text-gray-400 ml-2">vs last month</span>
                </div>
                {stats.messages.total === 0 && (
                    <p className="mt-4 text-sm text-gray-400 border-t border-gray-800 pt-4">
                        No messages yet. Your inbox is empty.
                    </p>
                )}
            </div>
        </div>
    );
}