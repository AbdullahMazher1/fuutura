'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hideLayout = pathname.includes("/ecosystem");

  return (
    <html lang="en">
      
      {/* ✅ Added Head Section */}
      <head>
        <title>Fuutura</title>
        <link rel="icon" href="Images/favicon.png" />
      </head>

      <body className={`${geistSans.variable} bg-[#0B0B0D] ${geistMono.variable} antialiased`}>

        {!hideLayout && <Header />}

        {children}

        {!hideLayout && <Footer />}

      </body>
    </html>
  );
}
