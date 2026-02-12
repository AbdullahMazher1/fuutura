"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const label = pathname.includes('investor') ? 'Customers' : 'Investors';
  const linkHref = label === 'Customers' ? '/' : '/investor';

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full h-[67px] absolute top-0 z-50">
      <div className="grid grid-cols-2 sm:grid-cols-3 max-w-[1300px] mx-auto py-5 px-6 md:px-0">

        {/* Logo Section */}
        <div className="flex items-center gap-2 cursor-pointer max-w-max">
          <img className="h-10" src="/logo1.png" alt="Logo Icon" />
          <img className="h-6" src="/logo.gif" alt="Logo Text" />
        </div>

        {/* Navigation Bar for Desktop */}
        <div className="hidden md:flex font-futura max-w-max mx-auto font-semibold text-white px-12 py-3 flex-row gap-10 border bg-black/20 backdrop-blur-md border-[#569FFF]/50 rounded-full">
          <Link href="/" className={pathname === '/' ? 'text-[#569FFF] cursor-pointer transition-colors' : 'cursor-pointer hover:text-[#569FFF] transition-colors'}>Home</Link>
          {/* <div className={pathname.includes('roadmap') ? 'text-[#569FFF] cursor-pointer' : 'cursor-pointer hover:text-[#569FFF] transition-colors'}>RoadMap</div>
          <div className={pathname.includes('press') ? 'text-[#569FFF] cursor-pointer' : 'cursor-pointer hover:text-[#569FFF] transition-colors'}>Press Section</div> */}
          <Link href="/blogs" className={pathname === '/blogs' ? 'text-[#569FFF] cursor-pointer transition-colors' : 'cursor-pointer hover:text-[#569FFF] transition-colors'}>Blogs</Link>
          <Link href="/about" className={pathname.includes('about') ? 'text-[#569FFF] cursor-pointer transition-colors' : 'cursor-pointer hover:text-[#569FFF] transition-colors'}>About Us</Link>
        </div>

        {/* Investors/Customers Button (Desktop) */}
        <div className='justify-self-end hidden md:block max-w-max'>
          <div className=" rounded-full p-[1px] max-w-max cursor-pointer border border-[#002371] overflow-hidden transition-all hover:bg-[#002371]/30">
            <Link href={linkHref} className="bg-transparent px-8 py-2 flex items-center justify-center text-white font-medium">
              {label}
            </Link>
          </div>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center justify-end">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              // Close X
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md w-full absolute top-[67px] left-0 z-40 flex flex-col items-center py-6 gap-4">
          <Link href="/" className="text-white text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          {/* <div className="text-white text-lg font-medium cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>RoadMap</div>
          <div className="text-white text-lg font-medium cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>Press Section</div> */}
          <Link href="/blogs" className="text-white text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Blogs</Link>
          <Link href="/about" className="text-white text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          <Link href={linkHref} className="mt-2 px-6 py-2 rounded-full border border-[#002371] text-white hover:bg-[#002371]/30 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
            {label}
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
