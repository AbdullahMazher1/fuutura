"use client";
import React from 'react';
import { useInView } from 'react-intersection-observer';

const Model = () => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Triggers at 20% visibility
    triggerOnce: false, // Reverses animation on scroll away
  });

  const listItems = [
    "Efficiency Replaces Complexity",
    "Transparency Replaces Opacity",
    "Long-Term Alignment Replaces Short-Term Cycles"
  ];

  return (
    <section ref={ref} className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

      {/* --- 1. BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Images/Model.png"
          alt="Model Background"
          className="w-full h-full object-cover"
        />
        {/* Subtle radial overlay for depth */}
      </div>
      <div className="absolute top-50 left-[5%] z-10 w-[65%] h-auto opacity-90">
        <img
          src="/Videos/circals.gif"
          alt="Animated Overlay"
          className="w-full h-full object-contain"
        />
      </div>


      {/* --- 2. CONTENT CONTAINER --- */}
      <div className="relative z-10 w-full max-w-7xl px-6 md:px-8 py-24 flex flex-col lg:flex-row items-center gap-16 lg:gap-60">

        {/* LEFT COLUMN: Trade Image Slide */}
        <div className={`flex-1 transition-all duration-1000 ease-out transform ${inView ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-20 scale-95'
          }`}>
          <div className="relative rounded-[24px] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,163,255,0.15)]">
            <img
              src="/Images/Trade.jpg"
              alt="Trading Platform"
              className="w-full h-full object-cover border border-[#00CCFF] rounded-[24px]"
            />
            {/* Inner glass overlay for the image */}
            <div className="absolute inset-0 border border-white/5 rounded-[24px]" />
          </div>
        </div>

        {/* RIGHT COLUMN: Typography Slide */}
        <div className={`flex-1 transition-all duration-1000 ease-out transform ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}>
          <h2 className="font-futura text-white text-[30px] md:text-[38px] font-bold mb-6 leading-tight">
            Why This Model Is <span className="text-[#00A3FF]">Different</span>
          </h2>

          <p className="font-futura text-white/80 text-[18px] md:text-[20px] leading-[1.6] mb-12 max-w-lg">
            Rather Than Pursuing Growth Through Incentives, Leverage, Or Short-Term Optimisation, Fuutura Is Designed To Scale Through Trust And Participation.
          </p>

          {/* Staggered List Items */}
          <div className="flex flex-col gap-5">
            {listItems.map((item, index) => (
              <div
                key={index}
                style={{ transitionDelay: inView ? `${(index + 2) * 200}ms` : '0ms' }}
                className={`flex items-center gap-4 transition-all duration-700 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
              >
                {/* Custom Bullet/Icon as seen in Figma */}
                {/* <div className="w-2 h-2 rounded-full bg-[#00A3FF] shadow-[0_0_10px_#00A3FF]" /> */}

                <span className="font-futura text-white text-[16px] md:text-[24px] tracking-wide">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Model;