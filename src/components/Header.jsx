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
      // Changed bg opacity slightly for a more "decent" glass look
      className="relative w-[165px] h-11 flex items-center bg-transparent backdrop-blur-md border border-[#569FFF]/40 rounded-full p-1 cursor-pointer overflow-hidden group shadow-[0_0_15px_rgba(0,0,0,0.5)]"
    >
      <div className="relative w-full h-full flex items-center">
        
        {/* The Text Label - Balanced spacing */}
        <span className={`absolute text-[11px] font-bold uppercase tracking-widest transition-all duration-700 ease-in-out ${
          isInvestor 
          ? 'left-6 opacity-100 text-[#569FFF]' // Moved right slightly to clear the left edge
          : 'left-12 opacity-100 text-[#569FFF]' // Moved left slightly to get closer to the ball
        }`}>
          {isInvestor ? 'Customers' : 'Investors'}
        </span>

        {/* The Glowing Ball - Adjusted for breathing room */}
        <div 
          className={`absolute h-8 w-8 bg-gradient-to-tr from-[#569FFF] to-[#a2c9ff] rounded-full transition-all duration-900 ease-in-out flex items-center justify-center ${
            // 118px keeps it perfectly centered within the right "slot" of the padding
            isInvestor ? 'left-[118px]' : 'left-1'
          }`}
        >
          {/* Subtle Inner Glow */}
          <div className="h-1.5 w-1.5 bg-white rounded-full opacity-60 blur-[0.5px]" />
        </div>
      </div>
    </Link>
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
          <Link href="/" className={`text-[13px] font-medium tracking-wide transition-all ${pathname === '/' ? 'text-[#569FFF]' : 'text-white/60 hover:text-white'}`}>HOME</Link>
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