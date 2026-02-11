"use client";

import React, { useEffect, useRef, useState } from 'react';

function Assetes() {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-[960px] overflow-hidden"
    >
      {/* Background image - animates from bottom to top */}
      <div
        className="absolute z-0 transition-all duration-[1200ms] ease-out"
        style={{
          width: '1440px',
          height: '960px',
          opacity: isVisible ? 0.69 : 0,
          top: isVisible ? '-30px' : '100px',
          backgroundImage: "url('/Images/assetsbg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backdropFilter: 'blur(0px)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-20 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 min-h-[800px]">
          
          {/* Left side - Globe image - animates from left to right */}
          <div className="flex-1 flex items-center justify-start">
            <div
              className="relative transition-all duration-[1000ms] ease-out"
              style={{
                width: '443.26px',
                height: '444px',
                opacity: isVisible ? 1 : 0,
                top: '74.05px',
                left: '107.67px',
                transform: isVisible ? 'translateX(0) rotate(16.03deg)' : 'translateX(-200px) rotate(16.03deg)',
                transformOrigin: 'center',
                boxShadow: '-26.68px 121px 123.7px 0px #051E43CC',
              }}
            >
              <img
                src="/Images/assetsglobe.png"
                alt="Globe"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right side - Text content - animates from right to left */}
          <div 
            className="flex-1 max-w-[600px] text-white transition-all duration-[1000ms] ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(100px)',
            }}
          >
            <h2 className="font-futura text-[48px] font-bold leading-none tracking-normal align-middle mb-6">
              Your Assets, <span className="text-[#00C2FF]">Your Control</span>
            </h2>

            <p className="mb-4 text-lg leading-relaxed text-white/80">
              Fuutura is designed to prioritise user control and transparency.
              This approach reduces risk and supports responsible
              participation in both domestic and international markets.
            </p>

            <p className="text-lg leading-relaxed text-white/80">
              Verification processes are designed to work with local systems while
              supporting oversight, reporting, and alignment with regulatory
              expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Assetes;

