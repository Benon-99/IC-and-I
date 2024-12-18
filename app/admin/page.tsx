'use client';

import DashboardStats from '@/components/admin/DashboardStats';
import RecentActivity from '@/components/admin/RecentActivity';

export default function AdminDashboard() {
  return (
    <div className="flex-1 flex flex-col p-8 bg-[#0a0b2e]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-[#0f1035] rounded-xl p-6 shadow-lg">
          <div className="space-y-2">
            <h3 className="text-gray-400 text-sm">Total Users</h3>
            <div className="flex items-baseline justify-between">
              <p className="text-3xl font-semibold text-white">1,234</p>
              <span className="text-green-500 text-sm">+12.5%</span>
            </div>
          </div>
        </div>
        <div className="bg-[#0f1035] rounded-xl p-6 shadow-lg">
          <div className="space-y-2">
            <h3 className="text-gray-400 text-sm">Total Orders</h3>
            <div className="flex items-baseline justify-between">
              <p className="text-3xl font-semibold text-white">587</p>
              <span className="text-green-500 text-sm">+8.2%</span>
            </div>
          </div>
        </div>
        <div className="bg-[#0f1035] rounded-xl p-6 shadow-lg">
          <div className="space-y-2">
            <h3 className="text-gray-400 text-sm">Revenue</h3>
            <div className="flex items-baseline justify-between">
              <p className="text-3xl font-semibold text-white">$12,426</p>
              <span className="text-green-500 text-sm">+23.1%</span>
            </div>
          </div>
        </div>
        <div className="bg-[#0f1035] rounded-xl p-6 shadow-lg">
          <div className="space-y-2">
            <h3 className="text-gray-400 text-sm">Growth</h3>
            <div className="flex items-baseline justify-between">
              <p className="text-3xl font-semibold text-white">18.2%</p>
              <span className="text-green-500 text-sm">+4.3%</span>
            </div>
            <p className="text-xs text-gray-400">vs last month</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-lg">
        <RecentActivity />
      </div>
    </div>
  );
}