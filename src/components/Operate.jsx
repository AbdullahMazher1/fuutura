import { GimIcon } from '@/assets/Svg'
import React from 'react'

// Starburst/Sparkle icon component
const StarburstIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 0L9.5 5.5L15 7L9.5 8.5L8 14L6.5 8.5L1 7L6.5 5.5L8 0Z" fill="#00d9ff" />
  </svg>
)

function Operate() {
  return (
    /* Outer section: Dark background to allow the rounded card to stand out */
    <section className="relative w-full bg-black py-12 px-6 md:px-24 flex items-center justify-center">

      {/* The Container (The Card): This creates the rounded, contained look from Figma */}
      <div className="relative w-full max-w-[1400px] aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-[32px] border border-white/5 shadow-2xl flex flex-col items-center justify-center text-center">

        {/* Background video - Moved inside the rounded container */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/Videos/operate.mp4" type="video/mp4" />
        </video>

        {/* Dull/Dark Overlay to match Figma's background style */}
        <div className="absolute inset-0 bg-[#0B0B0D]/40 backdrop-blur-[2px] z-[1]" />

        {/* Content - Lifted with z-10 */}
        <div className="relative z-10 flex flex-col items-center px-4 w-full">

          {/* Top Label */}
          <div className="inline-flex w-fit items-center justify-center rounded-[32px] border border-[#3A7BFF] px-[24px] py-[8px] bg-white/5 backdrop-blur-sm">
            <div className="flex flex-row items-center gap-3">
              <GimIcon className="w-4 h-4" />
              <span className="text-white font-futura text-sm font-medium uppercase tracking-widest">
                A Market Shift
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="font-futura font-bold text-3xl md:text-[48px] leading-tight mb-6 tracking-tight">
            <span className="text-white">Built and operated </span>
            <span className="text-[#00C2FF]">from</span>
            <br />
            <span className="text-[#00C2FF]">Pakistan</span>
          </h1>

          {/* Sub-text */}
          <div className="mb-8 opacity-80">
            <p className="text-[#FFF] font-futura text-[20px] md:text-[24px] font-normal leading-[140%] opacity-80">
              Designed to earn trust.
            </p>
            <p className="text-[#FFF] font-futura text-[20px] md:text-[24px] font-normal leading-[140%] opacity-80">
              Focused on long-term market growth.
            </p>
          </div>

          {/* CTA Button */}
          <button
            className="px-8 py-3 text-white font-medium text-sm md:text-base transition-all duration-300 hover:brightness-125 shadow-[0_0_25px_rgba(10,124,255,0.4)] hover:scale-105 active:scale-95"
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

export default Operate