"use client";

import React, { useEffect, useRef, useState } from "react";

function Assetes() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
    >
      {/* ================= BACKGROUND ================= */}

      {/* Base */}
      <div className="absolute inset-0 bg-black" />

      {/* Stars Background */}
      <div
        className={`
          absolute inset-0 bg-[url('/Images/assetsbg.jpg')] bg-cover bg-center
          transition-all duration-[1200ms] ease-out
          ${isVisible ? "opacity-80 translate-y-0" : "opacity-0 translate-y-[100px]"}
        `}
      />

      {/* FULL WIDTH BOTTOM PRIMARY GRADIENT */}
      <div className="absolute bottom-0 left-0 w-full h-[420px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-[#00C2FF]/60 via-[#00C2FF]/30 to-transparent" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-[1200px] w-full px-6 flex flex-col lg:flex-row items-center justify-between gap-16 py-10">
        {/* ================= GLOBE ================= */}
        <div
          className={`
            relative flex-1 flex items-center justify-center
            transition-all duration-[1000ms] ease-out
            ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-[180px]"}
          `}
        >
          <div className="relative w-[300px] h-[300px] md:w-[440px] md:h-[440px]">

            {/* Subtle glow around globe */}

            {/* ORBIT ARC (SVG SEMI-CIRCLE) - put above globe */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none orbit-arc -top-0 left-0 z-20"
              viewBox="0 0 100 100"
            >
              <defs>
                <linearGradient
                  id="orbitGradient"
                  x1="0%"
                  y1="50%"
                  x2="100%"
                  y2="50%"
                >
                  <stop offset="0%" stopColor="rgba(0, 194, 255, 0)" />
                  <stop offset="25%" stopColor="rgba(0, 194, 255, 0.5)" />
                  <stop offset="50%" stopColor="rgba(0, 194, 255, 1)" />
                  <stop offset="75%" stopColor="rgba(0, 194, 255, 0.5)" />
                  <stop offset="100%" stopColor="rgba(0, 194, 255, 0)" />
                </linearGradient>
              </defs>
              {/* top semi-circle arc (slightly above globe) */}
              <path
                d="M 10 50 A 40 40 0 0 1 90 50"
                fill="none"
                stroke="url(#orbitGradient)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            {/* Globe */}
            <img
              src="/Images/assetsglobe.png"
              alt="Globe"
              className="relative w-full h-full object-contain z-10"
            />
          </div>
        </div>

        {/* ================= TEXT ================= */}
        <div
          className={`
            flex-1 max-w-[560px] text-white
            transition-all duration-[1000ms] ease-out
            ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[180px]"}
          `}
        >
          <h2 className="text-[48px] font-bold leading-tight mb-6">
            Your Assets. <span className="text-[#00C2FF]">Your Control.</span>
          </h2>

          <p className="text-lg text-white/80 leading-relaxed mb-4">
            Built around user control — not platform custody.
          </p>

          <p className="text-lg text-white/80 leading-relaxed">
          Designed so users retain control of their assets rather than handing them over to the platform, Fuutura’s ethos is to reduce risk, improve transparency, and reflect how modern financial infrastructure should work.
          </p>
        </div>
      </div>

      {/* ================= ORBIT ANIMATION ================= */}
      <style jsx>{`
        @keyframes orbitSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .orbit-arc {
          animation: orbitSpin 30s linear infinite;
          transform-origin: 50% 50%;
        }
      `}</style>
    </section>
  );
}

export default Assetes;
