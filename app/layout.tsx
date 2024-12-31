import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Template from './template';
import QueryProvider from '@/components/QueryProvider';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'IC&I - Information Consultancies & Installations',
  description: 'Leading provider of ICT solutions, specializing in comprehensive consultancy, installation, commissioning, and outsourcing services.',
}; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/ici-favicon.png" type="image/png" />
      </head>
      <body>
        <QueryProvider>
          <Template>{children}</Template>
        </QueryProvider>
      </body>
    </html>
  );
}