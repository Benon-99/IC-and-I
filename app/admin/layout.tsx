'use client';

import AdminHeader from '@/components/admin/AdminHeader';
import AdminSidebar from '@/components/admin/AdminSidebar';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-[#070817]">
            <AdminHeader />
            <div className="flex">
                <AdminSidebar />
                <main className="flex-1">{children}</main>
            </div>
        </div>
    );
}