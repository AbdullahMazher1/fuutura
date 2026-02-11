// "use client";
// import React, { useEffect } from "react";
// import Image from "next/image";
// import AOS from "aos";
// import "aos/dist/aos.css";

// import { useRef } from "react";

// const features = [
//   {
//     title: "Simple Access",
//     icon: "/images/SimpleAccess.png",
//   },
//   {
//     title: "Transparent Process",
//     icon: "/images/TransparentProcess.png",
//   },
//   {
//     title: "Built To Last",
//     icon: "/images/BuiltToLast.png",
//   },
// ];

// const FuuturaUsage = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       easing: "ease-out-cubic",
//       once: false,
//       mirror: true,
//     });
//   }, []);

//   return (
//     <section className="relative w-full overflow-hidden text-white">
//       {/* ================= BACKGROUND SYSTEM ================= */}

//       {/* Base Dark */}
//       <div className="absolute inset-0 bg-[#050B16]" />

//       {/* Top Atmospheric Glow */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-15%,rgba(0,200,255,0.35),transparent_60%)]" />

//       {/* Smooth Top-to-Bottom Blend */}
//       <div className="absolute inset-0 bg-gradient-to-b from-[#0b2c3f]/50 via-transparent to-transparent" />

//       {/* ================= CONTENT ================= */}
//       <div className="relative z-10 max-w-7xl mx-auto">
//         {/* ================= TOP 4 COLUMNS ================= */}
//         <div className="pt-32 pb-24">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-14">
//             {[
//               {
//                 title: "Exchange",
//                 desc: "Access multiple markets through a single, unified trading platform.",
//               },
//               {
//                 title: "Markets & Products",
//                 desc: "Trade digital assets, market-linked instruments, and — where permitted — products connected to regulated markets.",
//               },
//               {
//                 title: "Identity & Safeguards",
//                 desc: "Built-in verification and controls designed to support transparency, oversight, and responsible participation.",
//               },
//               {
//                 title: "Payments & Wallet",
//                 desc: "Move money in and out smoothly — without giving up control of your assets.",
//               },
//             ].map((item, i) => (
//               <div key={i} className="max-w-[260px] space-y-5">
//                 <h3 className="text-[20px] font-semibold text-white/90">
//                   {item.title}
//                 </h3>
//                 <p className="text-[15px] leading-[1.8] text-white/60">
//                   {item.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ================= LOWER SECTION ================= */}
//         <div className="pb-32">
//           <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px_1fr] items-start">
//             {/* LEFT CONTENT */}
//             <div className="pr-12 space-y-6" data-aos="fade-right">
//               <h2 className="text-[44px] font-semibold leading-[1.15] tracking-tight">
//                 Why People Use{" "}
//                 <span className="text-cyan-400 font-bold">FUUTURA</span>
//               </h2>

//               <p className="text-[17px] leading-[1.9] text-white/70 max-w-[520px]">
//                 Because accessing markets shouldn’t require juggling multiple
//                 apps, platforms, and payment providers. Fuutura reduces
//                 unnecessary steps, helping lower costs and improve efficiency
//                 compared to traditional routes.
//               </p>
//             </div>

//             {/* CENTER SPACE RESERVED FOR BEAM */}
//             <div />

//             <div className="pl-12" data-aos="fade-left">
//               {features.map((item, i) => (
//                 <div key={i} className="flex items-center">
//                   {/* Larger Icon */}
//                   <div className="relative w-[88px] h-[88px] flex-shrink-0">
//                     <Image
//                       src={item.icon}
//                       alt={item.title}
//                       fill
//                       className="object-contain"
//                     />
//                   </div>

//                   {/* Slightly larger text */}
//                   <h4 className="text-[22px] font-medium text-white/90">
//                     {item.title}
//                   </h4>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FuuturaUsage;
"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
  {
    title: "Simple Access",
    icon: "/images/SimpleAccess.png",
  },
  {
    title: "Transparent Process",
    icon: "/images/TransparentProcess.png",
  },
  {
    title: "Built To Last",
    icon: "/images/BuiltToLast.png",
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
          // Play only once per scroll entry
          if (!hasPlayedRef.current) {
            videoRef.current.play();
            hasPlayedRef.current = true;
          }
        } else {
          // Reset when leaving viewport
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
      {/* ===== VIDEO BACKGROUND ===== */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover brightness-125 contrast-110"
        src="/beam.mp4"
        muted
        playsInline
        preload="auto"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0" />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* TOP 4 COLUMNS */}
        <div className="pt-32 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-14">
            {[
              {
                title: "Exchange",
                desc: "Access multiple markets through a single, unified trading platform.",
              },
              {
                title: "Markets & Products",
                desc: "Trade digital assets, market-linked instruments, and — where permitted — products connected to regulated markets.",
              },
              {
                title: "Identity & Safeguards",
                desc: "Built-in verification and controls designed to support transparency, oversight, and responsible participation.",
              },
              {
                title: "Payments & Wallet",
                desc: "Move money in and out smoothly — without giving up control of your assets.",
              },
            ].map((item, i) => (
              <div key={i} className="max-w-[260px] space-y-5">
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

        {/* LOWER SECTION */}
        <div className="pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px_1fr] items-start">
            {/* LEFT */}
            <div className="pr-12 space-y-6" data-aos="fade-right">
              <h2 className="text-[44px] font-semibold leading-[1.15] tracking-tight">
                Why People Use{" "}
                <span className="text-cyan-400 font-bold">FUUTURA</span>
              </h2>

              <p className="text-[17px] leading-[1.9] text-white/70 max-w-[520px]">
                Because accessing markets shouldn’t require juggling multiple
                apps, platforms, and payment providers. Fuutura reduces
                unnecessary steps, helping lower costs and improve efficiency
                compared to traditional routes.
              </p>
            </div>

            <div />

            {/* RIGHT */}
            <div className="pl-12 space-y-6" data-aos="fade-left">
              {features.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="relative w-[88px] h-[88px] flex-shrink-0">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <h4 className="text-[22px] font-medium text-white/90">
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
