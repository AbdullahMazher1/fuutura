"use client";

import Link from 'next/link';
import React, { useState } from 'react';

function Explore() {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    // Navigate to "Start" - you can update this with your actual navigation logic
    // For now, using a smooth scroll or navigation
    window.location.href = '#start';
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/Videos/assets.mov" type="video/quicktime" />
        <source src="/Videos/assets.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay with star particles effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0f1625] to-[#1a1f2e] opacity-80 z-[1]" />
      
      {/* Star particles overlay */}
      <div className="absolute inset-0 z-[2] opacity-60">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(2px 2px at 20% 30%, white, transparent),
                           radial-gradient(2px 2px at 60% 70%, rgba(0, 191, 255, 0.8), transparent),
                           radial-gradient(1px 1px at 50% 50%, white, transparent),
                           radial-gradient(1px 1px at 80% 10%, rgba(0, 191, 255, 0.6), transparent),
                           radial-gradient(2px 2px at 90% 40%, white, transparent),
                           radial-gradient(1px 1px at 33% 60%, rgba(0, 191, 255, 0.7), transparent),
                           radial-gradient(1px 1px at 66% 20%, white, transparent)`,
          backgroundSize: '200% 200%',
          animation: 'twinkle 8s ease-in-out infinite',
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24 max-w-4xl mx-auto">
        {/* Main heading */}
        <h1 className="font-futura text-[56px] md:text-[72px] font-bold leading-tight text-white mb-6">
          EXPLORE THE <span className="text-[#00BFFF]">ECOSYSTEM</span>
        </h1>

        {/* Sub-heading */}
        <p className="font-futura text-lg md:text-xl font-normal leading-relaxed text-white/90 mb-12 max-w-3xl">
          Explore How The Exchange Connects With Supporting Tools, Services, And Infrastructure Built Around Long-Term Trust.
        </p>

        {/* Button */}
        <Link href='/ecosystem'
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`relative px-8 py-4 rounded-lg bg-[#0a0e1a]/80 backdrop-blur-sm transition-all duration-300 ease-out cursor-pointer ${isHovered ? 'explore-button-hover' : 'explore-button'}`}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            color: 'white',
            border: '1.5px solid #00BFFF',
          }}
        >
          Explore ECOSYSTEM
        </Link>
      </div>

      {/* CSS for twinkle animation */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.6;
            transform: translateY(0);
          }
          50% {
            opacity: 1;
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
}

export default Explore;

