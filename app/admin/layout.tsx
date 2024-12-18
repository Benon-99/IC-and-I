'use client';

import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminHeader from '@/components/admin/AdminHeader';
import AdminFooter from '@/components/admin/AdminFooter';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0a0b2e] flex flex-col">
      <AdminHeader />
      <div className="flex flex-1">
        <AdminSidebar />
        <main className="flex-1 p-8 animate-fade-in">{children}</main>
      </div>
      <AdminFooter />
    </div>
  );
}