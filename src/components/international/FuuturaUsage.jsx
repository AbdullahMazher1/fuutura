"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
  {
    title: "Simple Access",
    icon: "/Images/SimpleAccess.png",
  },
  {
    title: "Transparent Process",
    icon: "/Images/TransparentProcess.png",
  },
  {
    title: "Built To Last",
    icon: "/Images/BuiltToLast.png",
  },
];

const FuuturaUsage = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!videoRef.current) return;

        if (entry.isIntersecting) {
          if (!hasPlayedRef.current) {
            videoRef.current.play();
            hasPlayedRef.current = true;
          }
        } else {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
          hasPlayedRef.current = false;
        }
      },
      { threshold: 0.6 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden text-white"
    >
      {/* ===== VIDEO (DESKTOP ONLY) ===== */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover brightness-125 contrast-110 hidden lg:block"
        src="/beam.mp4"
        muted
        playsInline
        preload="auto"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0" />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= TOP GRID ================= */}
        <div className="pt-24 sm:pt-28 lg:pt-32 pb-20 lg:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-x-12 lg:gap-x-16 gap-y-12 lg:gap-y-14">
            {[
              {
                title: "Fuutura Trade",
                desc: "Access multiple markets through a single, unified trading platform.",
              },
              {
                title: "Markets & Products",
                desc: "Trade digital assets, market-linked instruments, and — where permitted — products connected to regulated markets.",
              },
              {
                title: "Privacy & Security",
                desc: "Built-in verification and controls designed to support transparency, oversight, and responsible participation.",
              },
              {
                title: "Payments & Wallet",
                desc: "Move money in and out smoothly — without giving up control of your assets.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="max-w-[260px] text-center md:text-left space-y-4"
              >
                <h3 className="text-[20px] font-semibold text-white/90">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-[1.8] text-white/60">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= LOWER SECTION ================= */}
        <div className="pb-24 lg:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px_1fr] items-start">
            {/* ===== LEFT ===== */}
            <div
              className="px-4 sm:px-6 lg:px-12 my-8 lg:my-12 space-y-6 text-center lg:text-left"
              data-aos="fade-right"
            >
              {/* FIXED OVERFLOW HERE */}
              <h2 className="font-futura text-white text-[26px] sm:text-[30px] md:text-[36px] lg:text-[40px] font-bold leading-tight">
                Why People Use <span className="text-[#00A3FF]">FUUTURA</span>
              </h2>

              <p className="text-[15px] sm:text-[16px] md:text-[17px] leading-[1.9] text-white/70 max-w-[520px] mx-auto lg:mx-0">
                Because accessing markets shouldn’t require juggling multiple
                apps, platforms, and payment providers. Fuutura reduces
                unnecessary steps, helping lower costs and improve efficiency
                compared to traditional routes.
              </p>
            </div>

            {/* CENTER SPACER (DESKTOP ONLY) */}
            <div className="hidden lg:block" />

            {/* ===== RIGHT ===== */}
            {/* <div
              className="pl-0 lg:pl-12 text-center lg:text-left"
              data-aos="fade-left"
            >
              {features.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-6 justify-center lg:justify-start"
                >
                  <div className="relative w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] lg:w-[88px] lg:h-[88px] flex-shrink-0">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <h4 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-white/90 leading-tight">
                    {item.title}
                  </h4>
                </div>
              ))}
            </div> */}
            <div
              className="pl-0 lg:pl-12 text-center lg:text-left mt-12"
              data-aos="fade-left"
            >
              {features.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-start"
                >
                  <div className="relative w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] lg:w-[88px] lg:h-[88px] flex-shrink-0">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <h4 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-white/90 leading-tight">
                    {item.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuuturaUsage;
