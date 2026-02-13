'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header.jsx";
import { usePathname } from "next/navigation";
import Link from "next/link";

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

        {!hideLayout && (
          <footer className="w-full bg-[#000000] py-8">
            <div className="w-full max-w-[1300px] mx-auto sm:space-y-20 px-4">
              <img className="w-full h-auto" src="/Images/footerF.png" alt="" />
              <div className="flex sm:items-center sm:flex-row flex-col justify-between gap-14 sm:gap-4 py-5">
                <div className="flex items-center gap-14">
                  <Link className="text-white max-w-max text-sm" href='/'>
                    Home
                  </Link>
                  <Link className="text-white max-w-max text-sm" href='/blogs'>
                    Blog
                  </Link>
                  <Link className="text-white max-w-max text-sm" href='/about'>
                    About
                  </Link>
                </div>
                <p className="text-white max-w-max text-sm">
                  © 2026 Fuutura. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        )}

      </body>
    </html>
  );
}
