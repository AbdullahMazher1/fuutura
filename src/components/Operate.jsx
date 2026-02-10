import React from 'react'

// Starburst/Sparkle icon component - four-pointed star
const StarburstIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 0L9.5 5.5L15 7L9.5 8.5L8 14L6.5 8.5L1 7L6.5 5.5L8 0Z" fill="#00d9ff" />
  </svg>
)

function Operate() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden font-futura flex flex-col items-center justify-center">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/Videos/operate.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 z-[1]" />
      
      {/* Content container - centered */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 w-full max-w-4xl mx-auto">
        {/* Top Label - "A Market Shift" with starburst icon */}
        <div className="mb-8 rounded-[32px] p-[1px] bg-[linear-gradient(90deg,#3A7BFF,#3A7BFF00)] shadow-[0_0_20px_rgba(58,123,255,0.4)]">
          <div className="flex items-center gap-2 rounded-[30px] px-4 py-2 bg-[radial-gradient(circle_at_50%_50%,#0B0B0D80_50%,#3A7BFF_100%)] backdrop-blur-sm">
            <StarburstIcon />
            <span className="text-sm font-medium text-white">A Market Shift</span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="mb-6">
          <h1 className="font-futura font-bold text-[48px] leading-none tracking-normal text-center">
            <span className="text-white">Built and operated </span>
            <span className="text-kyc-blue">from</span>
            <br />
            <span className="text-kyc-blue">Pakistan</span>
          </h1>
        </div>

        {/* Sub-text */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-base text-white md:text-lg">
            Designed to earn trust.
          </p>
          <p className="text-base text-white md:text-lg">
            Focused on long-term market growth.
          </p>
        </div>

        {/* Call to Action Button */}
        <button className="relative rounded-lg bg-gradient-to-r from-[#0A7CFF] via-[#0066cc] to-[#003d7a] px-8 py-4 text-base font-medium text-white shadow-[0_0_30px_rgba(10,124,255,0.5)] transition-all hover:shadow-[0_0_40px_rgba(10,124,255,0.7)] hover:scale-105">
          Enter the New Market
        </button>
      </div>
    </section>
  )
}

export default Operate
