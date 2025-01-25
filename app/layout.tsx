import { Inter } from 'next/font/google';
import './globals.css';
import QueryProvider from '@/components/providers/QueryProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  console.log("Rendering RootLayout");
  return (
    <html lang="en" className={inter.className}>
      <body>
        <QueryProvider>
          <div className="flex flex-col min-h-screen bg-gray-50">
            <Navbar />
            <main className="flex-grow">{children}</main>
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
