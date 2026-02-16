"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const isInvestor = pathname.includes('investor');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const ToggleSwitch = () => (
    <Link
      href={isInvestor ? "/" : "/investor"}
      className="relative w-[160px] h-12 flex items-center bg-transparent backdrop-blur-md border border-[#569FFF]/30 rounded-full p-1.5 cursor-pointer overflow-hidden group shadow-inner"
    >
      <div className="relative w-full h-full flex items-center px-4">

        {/* The Text Label */}
        {/* Reduced translate-x from 90px to 45px to keep it closer to the ball */}
        <span className={`text-[12px] font-bold uppercase tracking-wider transition-all duration-500 ease-in-out z-10 ${isInvestor
            ? 'translate-x-0 opacity-100 text-[#569FFF]'
            : 'translate-x-[45px] opacity-100 text-[#569FFF]'
          }`}>
          {isInvestor ? 'USERS' : 'PARTNERS'}
        </span>

        {/* The Glowing Ball */}
        {/* Adjusted the 'left' position when isInvestor is true to bring it inward */}
        <div
          className={`absolute h-9 w-9 bg-gradient-to-tr from-[#569FFF] to-[#80B3FF] rounded-full shadow-[0_0_20px_rgba(86,159,255,0.7)] transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) flex items-center justify-center ${isInvestor ? 'left-[105px]' : 'left-1.5'
            }`}
        >
          <div className="h-2 w-2 bg-white rounded-full opacity-50 blur-[1px]" />
        </div>
      </div>
    </Link>
  );

  return (
    <div className="w-full h-[80px] absolute top-0 z-50">
      <div className="max-w-[1300px] mx-auto h-full flex items-center justify-between px-6">

        {/* Logo Section */}
        <div className="flex items-center gap-3 cursor-pointer w-[220px]">
          <img className="h-10" src="/logo1.png" alt="Icon" />
          <img className="h-6 hidden sm:block" src="/logo.gif" alt="Text" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden flex-1 max-w-max mx-auto md:flex items-center gap-10 bg-white/5 backdrop-blur-lg border border-white/10 px-10 py-2.5 rounded-full">
          <Link href="/" className={`text-[18px] tracking-wide ${pathname === '/' ? 'text-[#569FFF]' : 'text-white text-bold hover:text-white transition-colors'}`}>Home</Link>
          <Link href="/roadmap.html" className={`text-[18px] tracking-wide ${pathname === '/roadmap.html' ? 'text-[#569FFF]' : 'text-white text-bold hover:text-white transition-colors'}`}>RoadMap</Link>
          {/* <Link href="/press-section" className={`text-[18px] tracking-wide ${pathname === '/press-section' ? 'text-[#569FFF]' : 'text-white text-bold hover:text-white transition-colors'}`}>Press Section</Link> */}
          <Link href="/blogs" className={`text-[18px] tracking-wide ${pathname === '/blogs' ? 'text-[#569FFF]' : 'text-white text-bold hover:text-white transition-colors'}`}>Blogs</Link>
          <Link href="/about" className={`text-[18px] tracking-wide ${pathname.includes('about') ? 'text-[#569FFF]' : 'text-white text-bold hover:text-white transition-colors'}`}>About Us</Link>
          {/* <Link href="/news" className={`text-[18px] tracking-wide ${pathname.includes('news') ? 'text-[#569FFF]' : 'text-white text-bold hover:text-white transition-colors'}`}>News</Link> */}
        </nav>

        {/* Desktop Toggle */}
        <div className='w-[220px] hidden md:block text-end'>
          <div className="ml-auto w-[160px]">
            <ToggleSwitch />
          </div>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-10 h-10 flex items-center justify-center bg-[#569FFF]/10 border border-[#569FFF]/30 rounded-full"
          >
            <div className="space-y-1.5">
              <div className={`w-5 h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <div className={`w-5 h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <div className={`w-5 h-0.5 bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Impressive UI Overlay */}
      <div className={`fixed inset-0 bg-[#050505] transition-all duration-700 ease-in-out z-[100] ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col h-full pt-24 items-center px-10">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-8 right-8 text-white/40 text-sm tracking-tighter"
          >
            X
          </button>

          <div className="flex flex-col gap-8 text-center mb-16">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-white tracking-tighter">HOME</Link>
            <Link href="/roadmap.html" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-white tracking-tighter">ROADMAP</Link>
            {/* <Link href="/press-section" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-white tracking-tighter">PRESS SECTION</Link> */}
            <Link href="/blogs" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-white tracking-tighter">BLOGS</Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-white tracking-tighter">ABOUT</Link>
            {/* <Link href="/news" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-white tracking-tighter">NEWS</Link> */}
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#569FFF]/40 to-transparent mb-16" />

          <p className="text-[#569FFF] text-[10px] tracking-[0.3em] font-bold mb-6">SWITCH MODE</p>
          <div className="scale-125" onClick={() => setIsMobileMenuOpen(false)}>
            <ToggleSwitch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;