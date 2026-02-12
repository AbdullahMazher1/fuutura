"use client";

import React, { useEffect, useRef, useState } from 'react'

function Calm() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      className="relative w-full overflow-hidden bg-gradient-to-br from-[#0a0e1a] via-[#0f1625] to-[#1a1f2e] py-12 sm:py-16 lg:py-24"
    >
      {/* Thin purple line at top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-purple-500/30" />
      
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16">
          
          {/* Left side - Text content - animates from top to bottom */}
          <div 
            className="flex-1 max-w-[700px] w-full text-white transition-all duration-[1000ms] ease-out text-center lg:text-left"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : isMobile ? 'translateY(-20px)' : 'translateY(-50px)',
            }}
          >
            <h1 className="font-futura font-medium text-2xl sm:text-3xl md:text-4xl lg:text-[48px] !leading-tight tracking-normal align-middle text-white mb-4 sm:mb-6 lg:mb-8">
              <span className="text-[#00C2FF]">FUUTURA</span> is building calm, modern market infrastructure designed to last.
            </h1>
            
            <div className="font-futura font-medium text-xs sm:text-sm md:text-base lg:text-[17.06px] leading-[100%] tracking-normal text-center align-middle uppercase text-white/90 flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 lg:gap-4">
              <span>BUILT FOR TRUST</span>
              <span>BUILT FOR CLARITY</span>
              <span>OPEN TO THE FUTURE</span>
            </div>
          </div>

          {/* Right side - GIF - animates from right to left (from screen right edge) */}
          <div 
            className="flex-1 flex items-center justify-center lg:justify-end transition-all duration-[1000ms] ease-out w-full lg:w-auto"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : isMobile ? 'translateX(50px)' : 'translateX(100vw)',
            }}
          >
            <div className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
              <img
                src="/Videos/anim4.gif"
                alt="Calm infrastructure"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Calm

