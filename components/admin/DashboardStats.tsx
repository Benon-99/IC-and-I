// DashboardStats.tsx
'use client';

import { Users, ShoppingCart, DollarSign, TrendingUp } from 'lucide-react';

const stats = [
  {
    name: 'Total Users',
    value: '1,234',
    icon: Users,
    trend: '+12.5%',
    trendUp: true
  },
  {
    name: 'Total Orders',
    value: '587',
    icon: ShoppingCart,
    trend: '+8.2%',
    trendUp: true
  },
  {
    name: 'Revenue',
    value: '$12,345',
    icon: DollarSign,
    trend: '+23.1%',
    trendUp: true
  },
  {
    name: 'Growth',
    value: '18.2%',
    icon: TrendingUp,
    trend: '+4.3%',
    trendUp: true
  }
];

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="bg-[#0f1035] rounded-xl p-6 shadow-lg"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">{stat.name}</p>
              <p className="text-2xl font-semibold text-white mt-1">{stat.value}</p>
            </div>
            <div className="bg-[#2e3267] p-3 rounded-lg">
              <stat.icon className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <span className={`text-sm font-medium ${stat.trendUp ? 'text-green-500' : 'text-red-500'}`}>
              {stat.trend}
            </span>
            <span className="text-sm text-gray-400 ml-2">vs last month</span>
          </div>
        </div>
      ))}
    </div>
  );
}