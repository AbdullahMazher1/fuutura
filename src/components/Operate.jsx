import { GimIcon } from '../assets/Svg'
import React from 'react'

const StarburstIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 0L9.5 5.5L15 7L9.5 8.5L8 14L6.5 8.5L1 7L6.5 5.5L8 0Z" fill="#00d9ff" />
  </svg>
)

function Operate() {
  return (
    /* Outer section: Added responsive py to handle mobile spacing */
    <section className="relative w-full bg-black py-8 md:py-12 px-4 md:px-24 flex items-center justify-center">

      {/* FIXED CONTAINER: 
          - Mobile: h-auto (let content breathe) + py-16
          - Desktop: md:aspect-[21/9] (keep Figma look)
      */}
      <div className="relative w-full max-w-[1400px] h-auto md:aspect-[21/9] overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/5 shadow-2xl flex flex-col items-center justify-center text-center py-16 md:py-0">

        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/Videos/operate.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0B0B0D]/40 backdrop-blur-[2px] z-[1]" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center px-6 md:px-4 w-full">

          {/* Top Label */}
          <div className="inline-flex w-fit items-center justify-center rounded-[32px] border border-[#3A7BFF] px-[20px] md:px-[24px] py-[6px] md:py-[8px] bg-white/5 backdrop-blur-sm">
            <div className="flex flex-row items-center gap-3">
              <GimIcon className="w-4 h-4" />
              <span className="text-white font-futura text-xs md:text-sm font-medium tracking-widest uppercase">
                A Market Shift
              </span>
            </div>
          </div>

          {/* Heading: Adjusted text sizes for mobile */}
          <h2 className="font-futura font-bold text-3xl sm:text-4xl md:text-[54px] lg:text-[64px] leading-[1.1] md:leading-[1.2] my-8 tracking-tight">
            <span className="text-white">Built and operated </span>
            <span className="text-[#00C2FF]">from</span>
            <br />
            <span className="text-[#00C2FF]">Pakistan</span>
          </h2>

          {/* Sub-text: Adjusted text sizes for mobile */}
          <div className="mb-8 space-y-1">
            <p className="text-[#FFF] font-futura text-[16px] md:text-[24px] font-normal leading-[140%] opacity-80">
              Designed to earn trust.
            </p>
            <p className="text-[#FFF] font-futura text-[16px] md:text-[24px] font-normal leading-[140%] opacity-80">
              Focused on long-term market growth.
            </p>
          </div>

          {/* CTA Button */}
          <button
            className="px-6 md:px-8 py-3 text-white font-medium text-sm md:text-base transition-all duration-300 hover:brightness-125 shadow-[0_0_25px_rgba(10,124,255,0.4)] hover:scale-105 active:scale-95"
            style={{
              borderRadius: '12px',
              border: '1px solid #0A7CFF',
              background: 'linear-gradient(90deg, #0080FF 0%, #003067 100%)',
            }}
          >
            Enter the New Market
          </button>
        </div>
      </div>
    </section>
  )
}

export default Operate;