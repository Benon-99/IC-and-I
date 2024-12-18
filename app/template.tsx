"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { usePathname } from 'next/navigation';
import QueryProvider from '@/components/providers/QueryProvider';

export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith('/admin');

  return (
    <QueryProvider>
      <div className="flex flex-col min-h-screen bg-gray-50">
        {!isAdminPage && <Navbar />}
        <main className="flex-grow">{children}</main>
        {!isAdminPage && <Footer />}
      </div>
    </QueryProvider>
  );
}