"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "IC&I - Information Consultancies & Installations",
//   description:
//     "Leading provider of ICT solutions, specializing in comprehensive consultancy, installation, commissioning, and outsourcing services.",
// };
const queryClient = new QueryClient();
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
      <body className="flex flex-col min-h-screen bg-gray-50">
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  );
}
