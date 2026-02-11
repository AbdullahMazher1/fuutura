'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header.jsx";
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
      <body className={`${geistSans.variable} bg-[#0B0B0D] ${geistMono.variable} antialiased`}>

        {!hideLayout && <Header />}

        {children}

        {!hideLayout && (
          <div className="w-full bg-black">
            <img className="mx-auto" src="/footer.png" alt="footer" />
          </div>
        )}

      </body>
    </html>
  );
}
