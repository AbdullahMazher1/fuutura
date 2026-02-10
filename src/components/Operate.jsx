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
      {/* Background gradient - dark navy blue */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1b2d] to-[#050a15]" />
      
      {/* Starry sky effect - white pixel dots */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(150)].map((_, i) => {
          const x = Math.random() * 100
          const y = Math.random() * 70 // Only in upper 70% for sky
          const size = Math.random() * 2 + 0.5
          const opacity = Math.random() * 0.5 + 0.3
          return (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: `${size}px`,
                height: `${size}px`,
                opacity: opacity
              }}
            />
          )
        })}
      </div>
      
      {/* Grid floor - lower third */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 overflow-hidden">
        {/* Bright glow from center-bottom - behind grid */}
        {/* <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(0,217,255,0.8) 0%, rgba(0,217,255,0.4) 25%, rgba(0,217,255,0.2) 50%, transparent 75%)',
            transform: 'translateY(40%)'
          }}
        /> */}
        
        {/* Perspective grid */}
        {/* <svg 
          className="absolute bottom-0 left-0 w-full h-full"
          preserveAspectRatio="none"
          style={{ transform: 'perspective(800px) rotateX(75deg)', transformOrigin: 'center bottom' }}
        > */}
          {/* Horizontal grid lines - receding into distance */}
          {[...Array(15)].map((_, i) => {
            const yPos = 100 - (i * 6)
            const opacity = Math.max(0.2, 1 - (i * 0.06))
            const strokeWidth = i === 0 ? 2.5 : i < 3 ? 2 : 1
            return (
              <line
                key={`h-${i}`}
                x1="0"
                y1={`${yPos}%`}
                x2="100%"
                y2={`${yPos}%`}
                stroke="#00d9ff"
                strokeWidth={strokeWidth}
                strokeOpacity={opacity}
                filter="url(#glow)"
              />
            )
          })}
          
          {/* Vertical grid lines converging to center-bottom */}
          {/* {[...Array(20)].map((_, i) => {
            const xStart = (i * (100 / 21))
            const opacity = 0.7 - Math.abs(i - 10) * 0.05
            const strokeWidth = i === 9 || i === 10 ? 2 : 1
            return (
              <line
                key={`v-${i}`}
                x1={`${xStart}%`}
                y1="0%"
                x2="50%"
                y2="100%"
                stroke="#00d9ff"
                strokeWidth={strokeWidth}
                strokeOpacity={Math.max(0.2, opacity)}
                filter="url(#glow)"
              />
            )
          })}
           */}
          {/* Glow filter definition */}
          {/* <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs> */}
        {/* </svg> */}
      </div>
      
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
