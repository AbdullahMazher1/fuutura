"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { GimIcon } from '../assets/Svg';

const platformData = [
  {
    id: 0,
    tag: "The",
    title: "Exchange",
    description: "Access a range of markets through a single, unified trading platform.",
    gif: "/Videos/Exchange.gif",
    cardTitle: "Fuutura Exchange"
  },
  {
    id: 1,
    tag: "Markets &",
    title: "Products",
    description: "Trade digital assets, market-linked instruments, and -where permitted - products connected to regulated markets",
    gif: "/Videos/Chat.gif",
    cardTitle: "Fuutura Chat"
  },
  {
    id: 2,
    tag: "Identity &",
    title: "Safeguards",
    description: "Verification and controls designed to support oversight, transparency, and market integrity.",
    gif: "/Videos/Id.gif",
    cardTitle: "Future Id"
  },
  {
    id: 3,
    tag: "Payments &",
    title: "Wallet",
    description: "Move money in and out smoothly, supporting everyday participation in markets.",
    gif: "/Videos/Wallet.gif",
    cardTitle: "Fuutura Wallet"
  }
];

function Capabilities() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % platformData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const current = platformData[index];

  return (
    <section
      className="relative z-[10] font-futura flex flex-col lg:flex-row gap-12 lg:gap-24 bg-black px-6 sm:px-12 lg:px-24 min-h-screen items-center justify-center overflow-hidden select-none py-20 lg:py-0"
    >
      {/* Glow */}
      <div
        key={`glow-${index}`}
        className="absolute pointer-events-none z-0 blur-[100px] opacity-70 transition-all duration-700"
        style={{
          width: 'min(80vw, 832px)',
          height: '465px',
          borderRadius: '999px',
          background: 'linear-gradient(180deg, rgba(58,123,255,.7) 0%, rgba(58,123,255,0) 86%)',
          transform: 'rotate(12deg)',
          top: '20%',
          right: '-10%',
        }}
      />

      {/* Left Text */}
      <div className="relative z-10 flex flex-col gap-6 w-full lg:w-1/2 animate-fade-in text-center lg:text-left">
        <div className="inline-flex mx-auto lg:mx-0 w-fit items-center justify-center rounded-[32px] border border-[#3A7BFF] px-5 py-2.5 bg-white/5 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <GimIcon className="w-4 h-4" />
            <span className="text-white text-xs sm:text-sm uppercase tracking-[0.2em]">
              Platform — Core Capabilities
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
            <h1 className="flex flex-wrap justify-center lg:justify-start gap-x-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-white">
                {current.tag}
            </span>
            <span className="bg-gradient-to-r from-[#3486FF] to-[#14C7FF] bg-clip-text text-transparent">
                {current.title}
            </span>
            </h1>
        </div>

        <p className="text-white/70 text-base sm:text-lg md:text-xl max-w-md mx-auto lg:mx-0 leading-relaxed">
          {current.description}
        </p>
      </div>

      {/* Right Card */}
      <div className="relative z-10 w-full lg:w-1/2 flex justify-center items-center">
        <div className="relative w-full max-w-[550px] aspect-square sm:aspect-[4/3] rounded-[32px] border border-blue-500/20 overflow-hidden shadow-[0_0_80px_rgba(58,123,255,0.15)] flex flex-col items-center justify-center p-6 transition-all duration-500">
          
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-black/90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(58,123,255,0.15)_0%,transparent_70%)]" />

          {/* Centered Content Container */}
          <div className="relative z-30 flex flex-col items-center justify-center gap-8 w-full h-full">
             <h2 className="text-[#00C2FF] text-xl sm:text-2xl font-bold tracking-[0.1em] text-center drop-shadow-[0_0_10px_rgba(0,194,255,0.3)]">
                {current.cardTitle}
            </h2>
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center">
                <Image
                src={current.gif}
                alt={current.title}
                fill
                className="object-contain"
                unoptimized
                />
            </div>

           
          </div>

          <div className="absolute bottom-0 w-[120%] h-1/3 bg-blue-600/10 blur-[100px] rounded-full z-20 translate-y-1/2" />
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

export default Capabilities;