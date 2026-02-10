import React from 'react'
import SvgIcons from '../assets/Svg'

function Operate() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#0a0d14] via-[#050608] to-[#050608] text-white font-futura overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0d14] via-[#050608] to-[#050608]" />
      
      <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-10 px-6 py-20 md:flex-row md:gap-16 lg:px-0">
        {/* Left side - Shield graphic placeholder */}
        <div className="relative flex w-full items-center justify-center md:w-1/2">
          {/* Icon at the top */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0">
            <SvgIcons.AIIcon />
          </div>
          
          {/* Shield placeholder - will be replaced with image */}
          <div className="relative flex h-72 w-72 items-center justify-center md:h-80 md:w-80">
            {/* Shield shape */}
            <div className="relative h-full w-full">
              <div className="absolute inset-0 rounded-t-[45%] rounded-b-[15%] border-2 border-cyan-500/40 bg-gradient-to-b from-cyan-500/10 via-cyan-500/5 to-transparent shadow-[0_0_60px_rgba(16,185,255,0.45)] backdrop-blur-sm" />
              
              {/* Dollar sign placeholder */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-bold text-cyan-400/60">
                $
              </div>
              
              {/* Red teardrop marker with A */}
              <div className="absolute bottom-20 right-16 flex h-8 w-8 items-center justify-center rounded-full bg-red-500 shadow-lg">
                <span className="text-sm font-bold text-white">A</span>
              </div>
            </div>
            
            {/* Globe/Network dots background */}
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute left-1/4 top-1/4 h-2 w-2 rounded-full bg-white/20" />
              <div className="absolute right-1/4 top-1/3 h-1.5 w-1.5 rounded-full bg-white/15" />
              <div className="absolute bottom-1/4 left-1/3 h-1.5 w-1.5 rounded-full bg-white/15" />
              <div className="absolute right-1/3 bottom-1/3 h-2 w-2 rounded-full bg-white/20" />
            </div>
            
            {/* Binary code effect */}
            <div className="pointer-events-none absolute -left-8 top-8 text-xs font-mono text-cyan-400/40">
              0101
            </div>
          </div>
        </div>

        {/* Right side - content */}
        <div className="w-full md:w-1/2">
          <h2 className="mb-4 text-3xl font-bold tracking-wide md:text-4xl">
            KYC <span className="text-kyc-blue">&amp; AML</span>
          </h2>

          <p className="mb-3 text-sm leading-relaxed text-white md:text-base">
            Fuutura integrates identity verification, transaction monitoring,
            and risk-based controls to support transparent and responsible
            market access.
          </p>

          <p className="mb-3 text-sm leading-relaxed text-white md:text-base">
            Verification processes are designed to work with local systems while
            supporting oversight, reporting, and alignment with regulatory
            expectations.
          </p>

          <p className="text-sm leading-relaxed text-white md:text-base">
            Strong AML controls help protect users, maintain market integrity,
            and encourage long-term participation in formal financial markets.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Operate
