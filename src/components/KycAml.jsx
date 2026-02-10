import React from 'react'

function KycAml() {
  return (
    <section className="w-full bg-kyc-bg py-16 text-white font-futura">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 lg:px-0">
        {/* Top row: two cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Card 1 - Your Assets, Your Control */}
          <div className="relative h-[380px] w-full rounded-[32px] border border-[#1f2937] bg-gradient-to-br from-[#07111f] via-[#050b18] to-[#02040a] shadow-[0_0_40px_rgba(15,23,42,0.9)] overflow-hidden">
            {/* Top glow */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0A7CFF] via-[#00C2FF] to-transparent opacity-70" />

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
              <div className="relative mt-6 flex justify-center">
                <img 
                  src="/images/lock.png" 
                  alt="Lock icon" 
                  className="h-[247px] w-[256px] object-contain"
                />
              </div>
            </div>
          </div>

          {/* Card 2 - Trust, Oversight & Responsibility */}
          <div className="relative h-[380px] w-full rounded-[32px] border border-[#1f2937] bg-gradient-to-br from-[#07111f] via-[#050b18] to-[#02040a] shadow-[0_0_40px_rgba(15,23,42,0.9)] overflow-hidden">
            {/* Top glow */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#00C2FF] to-[#0A7CFF] opacity-70" />

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
              <div className="flex-shrink-0 pt-[calc(34px+12px)]">
                <img 
                  src="/images/protect.png" 
                  alt="Protect shield icon" 
                  className="h-[300px] w-[350px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom full-width card */}
        <div className="relative h-[380px] w-full rounded-[32px] border border-[#1f2937] bg-gradient-to-br from-[#050b18] via-[#02040a] to-[#01020a] shadow-[0_0_50px_rgba(15,23,42,1)] overflow-hidden">
          {/* Edge glows */}
          <div className="pointer-events-none absolute left-0 top-0 h-1 w-40 bg-gradient-to-r from-[#0A7CFF] to-transparent opacity-80" />
          <div className="pointer-events-none absolute right-0 top-0 h-1 w-40 bg-gradient-to-l from-[#0A7CFF] to-transparent opacity-80" />

          <div className="flex h-full flex-col justify-between px-10 py-10 lg:flex-row lg:items-center">
            {/* Text content */}
            <div className="max-w-xl">
              <h2 className="mb-4 font-futura font-bold text-[48px] leading-none tracking-normal">
                <span className="text-white">Markets Today — </span>
                <br className="block lg:hidden" />
                <span className="text-kyc-blue">Markets Tomorrow</span>
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
            <div className="mt-8 flex w-full justify-center lg:mt-0 lg:w-auto">
              <img 
                src="/images/up.png" 
                alt="Chart showing upward trend" 
                className="h-[400px] w-[500px] object-contain"
                style={{ transform: 'rotate(9.95deg)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default KycAml
