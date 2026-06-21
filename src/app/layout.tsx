import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/lib/cart-context";

const inter = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "CoverHub Dehradun — Premium iPhone Cases & Covers",
  description: "Premium iPhone cases designed to stand out. Luxury protection with MagSafe compatibility, genuine leather, and military-grade materials. Shop now with same-day delivery in Dehradun.",
  keywords: "iPhone cases, premium phone covers, MagSafe cases, Dehradun, CoverHub",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-[#0A0A0A] text-white">
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
