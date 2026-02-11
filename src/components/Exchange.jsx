"use client";
import React, { useState } from 'react';
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

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % platformData.length);
  };

  const current = platformData[index];

  return (
    <section
      onClick={handleNext}
      className="relative z-[10] font-futura flex flex-col lg:flex-row 
      gap-12 lg:gap-24 bg-black pb-12 lg:pb-0 
      px-4 sm:px-8 md:px-12 lg:px-24 
      min-h-screen items-center overflow-hidden cursor-pointer select-none"
    >
      {/* Glow */}
      <div
        key={`glow-${index}`}
        className="absolute pointer-events-none z-0 blur-[100px] opacity-70 transition-all duration-700"
        style={{
          width: '832px',
          height: '465px',
          borderRadius: '999px',
          background: 'linear-gradient(180deg, rgba(58,123,255,.7) 0%, rgba(58,123,255,0) 86%)',
          transform: 'rotate(12deg)',
          top: '20%',
          right: '-30%',
        }}
      />

      {/* Left Text */}
      <div className="relative z-10 flex flex-col gap-4 max-w-xl mx-auto animate-fade-in text-center lg:text-left">
        <div className="inline-flex mx-auto lg:mx-0 w-fit items-center justify-center rounded-[32px] border border-[#3A7BFF] px-4 py-2 bg-white/5 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <GimIcon className="w-4 h-4" />
            <span className="text-white text-xs sm:text-sm uppercase tracking-widest">
              Platform — Core Capabilities
            </span>
          </div>
        </div>

        <h1 className="flex flex-wrap justify-center lg:justify-start gap-2">
          <span className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
            {current.tag}
          </span>
          <span className="bg-gradient-to-r from-[#3486FF] to-[#14C7FF] bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl font-bold">
            {current.title}
          </span>
        </h1>

        <p className="text-white text-sm sm:text-base md:text-lg opacity-80 max-w-md mx-auto lg:mx-0">
          {current.description}
        </p>
      </div>

      {/* Right Card */}
      <div className="relative z-10 w-full max-w-[500px] mx-auto lg:mx-0">
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-[24px] sm:rounded-[32px] 
        border border-blue-500/30 overflow-hidden shadow-[0_0_50px_rgba(58,123,255,0.2)] flex flex-col items-center p-4 sm:p-8">

          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-black/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(58,123,255,0.3)_0%,transparent_70%)]" />

          <h2 className="text-[#00C2FF] text-lg sm:text-xl font-bold relative z-40 tracking-wide mt-auto">
            {current.cardTitle}
          </h2>

          <div className="relative z-30 w-full h-full flex items-center justify-center">
            <Image
              src={current.gif}
              alt={current.title}
              fill
              className="object-contain p-4 sm:p-8"
              unoptimized
            />
          </div>

          <div className="absolute bottom-0 w-[120%] h-1/3 bg-blue-600/20 blur-[80px] rounded-full z-20 translate-y-1/2" />
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

export default Capabilities;
