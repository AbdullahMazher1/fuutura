"use client";

import React, { useEffect, useRef, useState } from 'react'

function Trust() {
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
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#0a0e1a] to-[#1a1f2e]"
    >
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-0 mt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Left side - Text content - animates from left to right */}
          <div 
            className="flex-1 max-w-[600px] text-white mb-80 mt-0 transition-all  duration-[1000ms] ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-100px)',
            }}
          >
            <h2 className="font-futura text-[56px] font-bold leading-[1.05] text-white mb-8 whitespace-nowrap">
              Trust, Oversight & <span className="text-[#00C2FF]">Responsibility</span>
            </h2>

            <div className="space-y-4 font-futura text-lg font-normal leading-relaxed text-white/80">
              <p>
                Fuutura is built with oversight, reporting, and safeguards in mind from the start.
              </p>
              <p>
                The platform is structured to align with regulatory frameworks and market integrity standards as they apply.
              </p>
            </div>
          </div>

          {/* Right side - GIF - animates from right to left */}
          <div className="flex-1 flex items-center justify-end relative mt-20">
            <div
              className="relative transition-all duration-[1000ms] ease-out"
              style={{
                width: '400px',
                height: '400px',
                top: '-111px',
                right: '10px',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(200px)',
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

