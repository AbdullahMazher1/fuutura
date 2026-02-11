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
      <div className="relative z-10 max-w-[1200px] w-full px-6 flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* ================= GLOBE ================= */}
        <div
          className={`
            relative flex-1 flex items-center justify-center
            transition-all duration-[1000ms] ease-out
            ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-[180px]"}
          `}
        >
          <div className="relative w-[440px] h-[440px]">
            {/* Subtle glow around globe */}
            <div className="absolute inset-0 rounded-full ring-2 ring-[#00C2FF]/30 blur-[1px]" />

            {/* THIN ORBIT */}
            {/* ORBIT ARC */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="orbit-arc w-full h-full" />
            </div>

            {/* Globe */}
            <img
              src="/Images/assetsglobe.png"
              alt="Globe"
              className="relative w-full h-full object-contain"
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
            Fuutura is designed so users retain control of their assets rather
            than handing them over to the platform. This reduces risk, improves
            transparency, and reflects how modern financial infrastructure
            should work.
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
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          animation: orbitSpin 18s linear infinite;

          /* This creates only a partial arc */
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            transparent 220deg,
            rgba(0, 194, 255, 0.9) 250deg,
            rgba(0, 194, 255, 1) 280deg,
            rgba(0, 194, 255, 0.9) 310deg,
            transparent 340deg
          );

          /* Mask to make it thin like a ring */
          -webkit-mask: radial-gradient(
            farthest-side,
            transparent calc(100% - 2px),
            black calc(100% - 2px)
          );
          mask: radial-gradient(
            farthest-side,
            transparent calc(100% - 2px),
            black calc(100% - 2px)
          );
        }
      `}</style>
    </section>
  );
}

export default Assetes;
