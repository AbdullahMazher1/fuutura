"use client";

import React, { useEffect, useRef, useState } from "react";

function Trust() {
  const [isVisible, setIsVisible] = useState(false);
  const [gifSize, setGifSize] = useState({ width: 420, height: 420 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.2 },
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setGifSize({ width: 250, height: 250 });
      } else if (width < 1024) {
        setGifSize({ width: 320, height: 320 });
      } else {
        setGifSize({ width: 420, height: 420 });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-gradient-to-b from-[#0a0e1a] to-[#1a1f2e]"
    >
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8 py-10">
        {/* Main Container */}
        {/* <div className="min-h-[80vh] flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 lg:gap-20"> */}
        <div className="min-h-[50vh] lg:min-h-[80vh] flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-20">
          {/* LEFT COLUMN */}
          <div
            className="flex-1 max-w-[600px] w-full text-center lg:text-left transition-all duration-[1000ms] ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-80px)",
            }}
          >
            <h2 className="font-futura text-white text-[28px] sm:text-[32px] md:text-[38px] font-bold mb-6 leading-tight">
              Trust, Oversight &{" "}
              <span className="text-[#00A3FF]">Responsibility</span>
            </h2>

            <div className="space-y-4 text-white/80 text-[15px] sm:text-base lg:text-lg leading-relaxed">
              <p>
                Fuutura is built with oversight, reporting, and safeguards in
                mind from the start.
              </p>
              <p>
                The platform is structured to align with regulatory frameworks
                and market integrity standards as they apply.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div
            className="flex-1 flex items-center justify-center lg:justify-end transition-all duration-[1000ms] ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(80px)",
            }}
          >
            <div
              style={{
                width: gifSize.width,
                height: gifSize.height,
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
  );
}

export default Trust;
