"use client";
import React, { useState } from 'react'

function KycAml() {
  const [hoveredImage, setHoveredImage] = useState(null)

  return (
    <section className="w-full bg-kyc-bg py-16 text-white font-futura">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 lg:px-0">
        {/* Top row: two cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Card 1 - Your Assets, Your Control */}
          <div className="bg-animated-border h-[380px] w-full rounded-[32px] overflow-hidden">
            <div className="relative h-full w-full rounded-[30px] bg-[#191B21] overflow-hidden">
              <div className="flex h-full flex-col justify-between px-10 py-10">
              <div>
                <h2 className="mb-3 text-[34px] font-bold leading-none">
                  <span>Your Assets, </span>
                  <span className="text-kyc-blue">Your Control</span>
                </h2>
                <p className="max-w-md text-sm leading-relaxed text-kyc-gray">
                  Fuutura is designed to prioritise user control and transparency.
                  This approach reduces risk and supports responsible
                  participation in both domestic and international markets.
                </p>
              </div>

              {/* Lock icon */}
              <div 
                className="relative mt-6 flex justify-center cursor-pointer"
                onMouseEnter={() => setHoveredImage('lock')}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <div className="relative h-[247px] w-[256px]">
                  <img 
                    src="/images/lock.png" 
                    alt="Lock icon" 
                    className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ease-in-out ${
                      hoveredImage === 'lock' ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  <img 
                    src="/images/lockHover.png" 
                    alt="Lock icon hover" 
                    className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ease-in-out ${
                      hoveredImage === 'lock' ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </div>
              </div>
            </div>
            </div>
          </div>

          {/* Card 2 - Trust, Oversight & Responsibility */}
          <div className="bg-animated-border-reverse h-[380px] w-full rounded-[32px] overflow-hidden">
            <div className="relative h-full w-full rounded-[30px] bg-[#191B21] overflow-hidden">
              <div className="flex h-full flex-row items-start justify-between px-10 py-10">
              <div className="flex-1 pr-6">
                <h2 className="mb-3 text-[34px] font-bold leading-none">
                  <span>Trust, Oversight &amp; </span>
                  <span className="text-kyc-blue">Responsibility</span>
                </h2>
                <p className="mb-2 text-sm leading-relaxed text-kyc-gray">
                  Designed to work with regulation and existing market
                  institutions.
                </p>
                <p className="text-sm leading-relaxed text-kyc-gray">
                  Fuutura is built with oversight, reporting, and safeguards in
                  mind from the start, supporting alignment with Pakistan&apos;s
                  regulatory and market frameworks.
                </p>
              </div>

              {/* Protect/Shield icon - aligned with top of paragraph */}
              <div 
                className="flex-shrink-0 pt-[calc(34px+12px)] cursor-pointer"
                onMouseEnter={() => setHoveredImage('protect')}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <div className="relative h-[300px] w-[350px]">
                  <img 
                    src="/images/protect.png" 
                    alt="Protect shield icon" 
                    className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ease-in-out ${
                      hoveredImage === 'protect' ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  <img 
                    src="/images/protecthover.png" 
                    alt="Protect shield icon hover" 
                    className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ease-in-out ${
                      hoveredImage === 'protect' ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>

        {/* Bottom full-width card */}
        <div className="bg-animated-border h-[380px] w-full rounded-[32px] overflow-hidden">
          <div className="relative h-full w-full rounded-[30px] bg-[#191B21] overflow-hidden">
            <div className="flex h-full flex-col justify-between px-10 py-10 lg:flex-row lg:items-center">
            {/* Text content */}
            <div className="max-w-xl">
              <h2 className="mb-4 font-futura font-bold text-[48px] leading-none tracking-normal">
                <span className="text-white whitespace-nowrap">Markets Today — Markets</span>
                <br />
                <span className="text-kyc-blue">Tomorrow</span>
              </h2>

              <p className="mb-3 text-sm leading-relaxed text-kyc-gray">
                One platform, designed to strengthen local markets. Fuutura is
                built to support responsible access to global and domestic
                markets, including — where permitted — connectivity to regulated
                exchanges such as the Pakistan Stock Exchange.
              </p>
              <p className="text-sm leading-relaxed text-kyc-gray">
                The goal is to expand participation and attract liquidity, not
                to replace existing institutions.
              </p>
            </div>

            {/* Chart image */}
            <div 
              className="mt-8 flex w-full justify-center lg:mt-0 lg:w-auto cursor-pointer"
              onMouseEnter={() => setHoveredImage('up')}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <div className="relative h-[400px] w-[500px]" style={{ transform: 'rotate(9.95deg)' }}>
                <img 
                  src="/images/up.png" 
                  alt="Chart showing upward trend" 
                  className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ease-in-out ${
                    hoveredImage === 'up' ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <img 
                  src="/images/upHover.png" 
                  alt="Chart showing upward trend hover" 
                  className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ease-in-out ${
                    hoveredImage === 'up' ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default KycAml
