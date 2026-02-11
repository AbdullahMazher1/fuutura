"use client";

import React, { useEffect, useRef, useState } from 'react';

function Markets() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { 
        threshold: 0.2,
        rootMargin: '0px'
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden py-24 bg-black"
    >
      {/* Background image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/Images/marketsbackground.png')" }}
      />
      
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-0">
        {/* Top heading */}
        <div className="text-center text-white mb-8 sm:mb-12">
          <h1 className="font-futura text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.05] text-white mb-4 sm:mb-8">
            Markets Today — <span className="text-[#00C2FF]">Markets Tomorrow</span>
          </h1>
          <p className="font-futura text-base sm:text-lg font-normal leading-relaxed text-white/90 max-w-4xl mx-auto px-4 sm:px-0">
            Fuutura supports a range of market access models today and is built to expand over time. This includes digital assets, market-linked products, and — subject to approvals.
          </p>
        </div>

        {/* Middle section - Flags and Chart */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-16 h-auto">
          
          {/* Left side - Flags container with animation - comes from left to right */}
          <div 
            className="flex items-center justify-center transition-all duration-[1000ms] ease-out w-full lg:w-auto"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-100px)',
            }}
          >
            <div
              className="relative overflow-hidden rounded-lg border border-[#00C2FF]/30 bg-black/20 w-full max-w-[456px] lg:w-[456px] h-[80px] sm:h-[90px] lg:h-[96px]"
            >
              <div className="flex items-center h-full gap-4 sm:gap-6 lg:gap-[37px] animate-flags-scroll px-4">
                {/* Flags row - duplicated for seamless loop */}
                <div className="flex items-center gap-4 sm:gap-6 lg:gap-[37px] flex-shrink-0">
                  <img src="/Images/Usa.png" alt="USA" className="w-10 h-6 sm:w-12 sm:h-8 object-contain" />
                  <img src="/Images/uk.png" alt="UK" className="w-10 h-6 sm:w-12 sm:h-8 object-contain" />
                  <img src="/Images/germany.png" alt="Germany" className="w-10 h-6 sm:w-12 sm:h-8 object-contain" />
                  <img src="/Images/australia.png" alt="Australia" className="w-10 h-6 sm:w-12 sm:h-8 object-contain" />
                  <img src="/Images/south africa.png" alt="South Africa" className="w-10 h-6 sm:w-12 sm:h-8 object-contain" />
                </div>
                {/* Duplicate for seamless loop */}
                <div className="flex items-center gap-4 sm:gap-6 lg:gap-[37px] flex-shrink-0">
                  <img src="/Images/Usa.png" alt="USA" className="w-10 h-6 sm:w-12 sm:h-8 object-contain" />
                  <img src="/Images/uk.png" alt="UK" className="w-10 h-6 sm:w-12 sm:h-8 object-contain" />
                  <img src="/Images/germany.png" alt="Germany" className="w-10 h-6 sm:w-12 sm:h-8 object-contain" />
                  <img src="/Images/australia.png" alt="Australia" className="w-10 h-6 sm:w-12 sm:h-8 object-contain" />
                  <img src="/Images/south africa.png" alt="South Africa" className="w-10 h-6 sm:w-12 sm:h-8 object-contain" />
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Chart GIF - comes from right to left */}
          <div 
            className="flex items-center justify-center transition-all duration-[1000ms] ease-out w-full lg:w-auto"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(100px)',
            }}
          >
            <div
              className="relative w-full max-w-[400px] lg:w-[400px] h-[200px] sm:h-[250px] lg:h-[300px]"
            >
              <img
                src="/Images/marketsstat.gif"
                alt="Market statistics"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Bottom paragraph */}
        <div className="text-center text-white mt-16 sm:mt-24 lg:mt-32">
          <p className="font-futura text-base sm:text-lg font-normal leading-relaxed text-white/90 max-w-4xl mx-auto px-4 sm:px-0">
            Access connected to regulated exchanges. The goal is not to replace existing markets, but to make them more accessible.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Markets;

