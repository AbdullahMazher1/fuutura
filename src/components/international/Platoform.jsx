"use client";

import React, { useEffect, useRef, useState } from "react";

function Platform() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      /* Reduced pt-20 to pt-10 on mobile. Reduced min-height on mobile to avoid stretching the gap */
      className="relative w-full min-h-[70vh] lg:min-h-screen bg-[#0a0e1a] pt-10 lg:pt-20 overflow-hidden flex flex-col items-center"
      style={{
        backgroundImage: `url('/Images/tradeBg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* 1. Header Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-[#00C2FF] text-4xl md:text-6xl font-bold mb-4 md:mb-6 tracking-tight">
          The <span className="text-white">Platform</span>
        </h2>
        <p className="text-white/80 text-base md:text-xl max-w-3xl mx-auto leading-relaxed uppercase tracking-wider">
          FUUTURA Is A Web3 Exchange Built For Simple, Secure, And Reliable Market Access.
        </p>
      </div>

      {/* 2. Visual Centerpiece Container - Anchored to bottom */}
      <div className="relative flex-1 w-full flex flex-col justify-end items-center mt-8 lg:mt-0">
        
        {/* Background Animation - Blended from top */}
        <div
          className="absolute bottom-[-5%] transition-all duration-1000 ease-out z-10"
          style={{
            opacity: inView ? 0.6 : 0,
            transform: `translateY(${inView ? "0px" : "100px"})`,
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 40%, black 100%)',
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 40%, black 100%)',
          }}
        >
          <img
            src="/Videos/platformanim.gif"
            alt="glow animation"
            /* Increased mobile width slightly to fill space better */
            className="w-[100vw] md:w-[700px] object-contain"
          />
        </div>

        {/* Platform UI Image - Touches the bottom and hides the bottom 10% */}
        <div 
          className="relative z-20 transition-all duration-1000 delay-200 ease-out flex justify-center"
          style={{
            opacity: inView ? 1 : 0,
            /* Negative bottom value hides the bottom 10% of the image */
            marginBottom: "-80px", 
            transform: `scale(${inView ? 1 : 0.95}) translateY(${inView ? "0px" : "60px"})`,
          }}
        >
          <img
            src="/Images/platform.jpg"
            alt="Platform Interface"
            className="w-[90vw] max-w-[800px] h-auto rounded-t-2xl shadow-[0_-20px_50px_rgba(0,194,255,0.1)] border-t border-x border-white/10"
          />
        </div>
      </div>

      {/* 3. Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#0a0e1a] to-transparent z-40 pointer-events-none" />
    </section>
  );
}

export default Platform;