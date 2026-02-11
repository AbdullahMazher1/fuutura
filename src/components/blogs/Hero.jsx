"use client";

import React, { useMemo } from 'react';

function Hero() {
  // Fixed positions for dots to avoid re-rendering issues
  const dots = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      size: 2 + (i % 4) * 0.8,
      left: (i * 13.7) % 100,
      top: (i * 23.3) % 100,
      opacity: 0.6 + (i % 3) * 0.15,
      delay: (i * 0.3) % 2,
      duration: 3 + (i % 3) * 0.5,
    }));
  }, []);

  return (
    <section className="relative w-full min-h-[600px] overflow-hidden">
      {/* Background GIF */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="/Videos/blogherobg.gif"
          alt="Background animation"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark blue gradient overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#0a0e1a] via-[#0a1520] to-[#050608] opacity-90 z-10" />

      {/* Bright blue glowing lines and dots effect */}
      <div className="absolute inset-0 w-full h-full z-20 overflow-hidden">
        {/* Radiating lines from left center */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-full">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute left-0 top-1/2 origin-left"
              style={{
                width: '100%',
                height: '1px',
                background: `linear-gradient(90deg, rgba(0, 194, 255, ${0.3 + i * 0.02}) 0%, rgba(0, 194, 255, 0) 100%)`,
                transform: `translateY(-50%) rotate(${-30 + i * 4}deg)`,
                animation: `pulse ${2 + i * 0.2}s ease-in-out infinite`,
              }}
            />
          ))}
        </div>

        {/* Sparkling dots */}
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="absolute rounded-full bg-[#00C2FF]"
            style={{
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              left: `${dot.left}%`,
              top: `${dot.top}%`,
              opacity: dot.opacity,
              animation: `sparkle ${dot.duration}s ease-in-out infinite`,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Content container */}
      <div className="relative flex flex-col mt-10 z-30 max-w-[1200px] mx-auto px-6 lg:px-0 py-24 items-center justify-center">
        {/* Fuutura Blogs label - top left */}
        <div className="mb-12">
          <div className="inline-block px-4 py-2 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm">
            <span className="font-futura text-sm font-medium text-white/90">
              Fuutura Blogs
            </span>
          </div>
        </div>

        {/* Main heading */}
        <div className="text-center mb-8">
          <h1 className="font-futura font-bold text-5xl md:text-6xl lg:text-7xl leading-tight text-white mb-4">
            Stay Ahead in the
            <br />
            <span className="text-[#00C2FF]">Crypto</span>{" "}
            <span className="text-white">World</span>
          </h1>
        </div>

        {/* Descriptive paragraph */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="font-futura text-lg md:text-xl text-white/90 leading-relaxed">
            Get the latest insights, market analysis, and expert opinions on cryptocurrency trends, blockchain technology, and digital asset investments.
          </p>
        </div>

        {/* Call-to-action button */}
        <div className="text-center">
          <a href="#subscribe" className="px-8 py-4 rounded-lg font-futura text-lg font-medium text-white bg-gradient-to-r from-[#0A7CFF] to-[#00C2FF] hover:from-[#0A7CFF]/90 hover:to-[#00C2FF]/90 transition-all duration-300 shadow-lg shadow-[#00C2FF]/20 hover:shadow-[#00C2FF]/40">
            Subscribe to our Newsletter
          </a>
        </div>
      </div>

      {/* CSS animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes sparkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;

