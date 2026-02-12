"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const isInvestor = pathname.includes('investor');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const ToggleSwitch = () => (
    <div className="flex items-center gap-6">
      {/* Dynamic Label to the left of the toggle */}
      <span className="text-white font-futura text-lg uppercase tracking-[0.2em] min-w-[120px] text-right">
        {isInvestor ? 'Investor' : 'Customer'}
      </span>

      <Link
        href={isInvestor ? "/" : "/investor"}
        className={`relative w-[105px] h-[40px] flex items-center rounded-full p-1 cursor-pointer transition-colors duration-500 ease-in-out overflow-hidden shadow-inner ${isInvestor ? 'bg-[#00113C]' : 'bg-[#D9E4FF]'
          }`}
      >
        <div className="relative w-full h-full flex items-center justify-between px-2">

          {/* Static Icons Layer (Background) */}
          <svg
            className={`w-4 h-4 transition-opacity duration-300 ${!isInvestor ? 'opacity-0' : 'opacity-40'}`}
            viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>

          <svg
            className={`w-4 h-4 transition-opacity duration-300 ${isInvestor ? 'opacity-0' : 'opacity-40'}`}
            viewBox="0 0 24 24" fill="none" stroke="#0025B1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>

          {/* The Animated Sliding Ball (Squircle Shape) */}
          <div
            className="absolute h-[32px] w-[46px] transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) flex items-center justify-center shadow-md"
            style={{
              left: isInvestor ? '55px' : '4px',
              background: 'linear-gradient(180deg, #0025B1 0%, #3A56C0 100%)',
              borderRadius: '16px'
            }}
          >
            {isInvestor ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </div>
        </div>
      </Link>
    </div>
  );

  return (
    <div className="w-full h-[80px] absolute top-0 z-50">
      <div className="max-w-[1300px] mx-auto h-full flex items-center justify-between px-6">

        {/* Logo Section */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img className="h-9" src="/logo1.png" alt="Icon" />
          <img className="h-5 hidden sm:block opacity-90" src="/logo.gif" alt="Text" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 bg-black/30 backdrop-blur-xl border border-white/5 px-10 py-2.5 rounded-full">
          <Link href="/" className={`text-[13px] font-medium tracking-wide transition-all ${!isInvestor ? 'text-[#569FFF]' : 'text-white/60 hover:text-white'}`}>HOME</Link>
          <Link href="/blogs" className={`text-[13px] font-medium tracking-wide transition-all ${pathname === '/blogs' ? 'text-[#569FFF]' : 'text-white/60 hover:text-white'}`}>BLOGS</Link>
          <Link href="/about" className={`text-[13px] font-medium tracking-wide transition-all ${pathname.includes('about') ? 'text-[#569FFF]' : 'text-white/60 hover:text-white'}`}>ABOUT</Link>
        </nav>

        {/* Desktop Toggle */}
        <div className="hidden md:block">
          <ToggleSwitch />
        </div>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 bg-[#569FFF]/5 border border-[#569FFF]/20 rounded-full"
          >
            <div className={`w-5 h-[1.5px] bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <div className={`w-5 h-[1.5px] bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-5 h-[1.5px] bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#070707] transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) z-[100] ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="flex flex-col h-full items-center justify-center px-10">
          <div className="flex flex-col gap-10 text-center">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-5xl font-black text-white tracking-tighter hover:text-[#569FFF] transition-colors">HOME</Link>
            <Link href="/blogs" onClick={() => setIsMobileMenuOpen(false)} className="text-5xl font-black text-white tracking-tighter hover:text-[#569FFF] transition-colors">BLOGS</Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-5xl font-black text-white tracking-tighter hover:text-[#569FFF] transition-colors">ABOUT</Link>
          </div>

          <div className="w-24 h-[1px] bg-[#569FFF]/40 my-16" />

          <div className="scale-[1.4]" onClick={() => setIsMobileMenuOpen(false)}>
            <ToggleSwitch />
          </div>
          <p className="mt-8 text-[10px] tracking-[0.4em] text-white/30 font-bold">MODE SELECT</p>
        </div>
      </div>
    </div>
  );
};

export default Header;