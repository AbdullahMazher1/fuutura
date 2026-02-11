"use client";

import React, { useEffect, useRef, useState } from 'react'

function Trust() {
  const [isVisible, setIsVisible] = useState(false);
  const [gifSize, setGifSize] = useState({ width: 400, height: 400, top: -111, right: 10 });
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Trigger animation every time component enters viewport
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            // Reset animation when component leaves viewport
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

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      if (width < 768) {
        // Mobile
        setGifSize({ width: 250, height: 250, top: 0, right: 0 });
      } else if (width < 1024) {
        // Tablet
        setGifSize({ width: 300, height: 300, top: -50, right: 5 });
      } else {
        // Desktop - exact original size
        setGifSize({ width: 400, height: 400, top: -111, right: 10 });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#0a0e1a] to-[#1a1f2e]"
    >
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-0 mt-10 sm:mt-16 lg:mt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16">
          
          {/* Left side - Text content - animates from left to right */}
          <div 
            className="flex-1 max-w-[600px] w-full text-white mt-0 transition-all duration-[1000ms] ease-out text-center lg:text-left"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : isMobile ? 'translateX(-30px)' : 'translateX(-100px)',
            }}
          >
            <h2 className="font-futura text-2xl sm:text-3xl md:text-4xl lg:text-[56px] font-bold leading-[1.05] text-white mb-4 sm:mb-6 lg:mb-8 whitespace-normal lg:whitespace-nowrap">
              Trust, Oversight & <span className="text-[#00C2FF]">Responsibility</span>
            </h2>

            <div className="space-y-3 sm:space-y-4 font-futura text-sm sm:text-base lg:text-lg font-normal leading-relaxed text-white/80">
              <p>
                Fuutura is built with oversight, reporting, and safeguards in mind from the start.
              </p>
              <p>
                The platform is structured to align with regulatory frameworks and market integrity standards as they apply.
              </p>
            </div>
          </div>

          {/* Right side - GIF - animates from right to left */}
          <div className="flex-1 flex items-center justify-center lg:justify-end relative mt-0 lg:mt-20 w-full lg:w-auto">
            <div
              className="relative transition-all duration-[1000ms] ease-out"
              style={{
                width: `${gifSize.width}px`,
                height: `${gifSize.height}px`,
                top: `${gifSize.top}px`,
                right: `${gifSize.right}px`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : isMobile ? 'translateX(50px)' : 'translateX(200px)',
              }}
            >
              <img
                src="/Videos/trustgif.gif"
                alt="Trust graphic"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trust

