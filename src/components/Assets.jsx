import React from 'react'

function Assets() {
  return (
    <section className="w-full bg-kyc-bg text-white font-futura">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-10 px-6 py-20 md:flex-row md:gap-16 lg:px-0">
        {/* Left side - image placeholder */}
        <div className="relative flex w-full items-center justify-center md:w-1/2">
          <div className="relative flex h-72 w-72 items-center justify-center rounded-full border border-cyan-500/40 bg-gradient-to-b from-cyan-500/10 via-cyan-500/5 to-transparent shadow-[0_0_60px_rgba(16,185,255,0.45)] md:h-80 md:w-80">
            <div className="h-52 w-40 rounded-3xl border border-cyan-400/50 bg-gradient-to-b from-cyan-500/20 via-cyan-500/5 to-transparent backdrop-blur-md md:h-60 md:w-44" />
           
          </div>
          {/* Subtle dotted background */}
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_#111827_0,_#050608_55%,_#050608_100%)]" />
        </div>

        {/* Right side - content */}
        <div className="w-full md:w-1/2">
          <h2 className="mb-4 text-3xl font-bold tracking-wide md:text-4xl">
            KYC <span className="text-kyc-blue">&amp; AML</span>
          </h2>

          <p className="mb-3 text-sm leading-relaxed text-kyc-gray md:text-base">
            Fuutura integrates identity verification, transaction monitoring,
            and risk-based controls to support transparent and responsible
            market access.
          </p>

          <p className="mb-3 text-sm leading-relaxed text-kyc-gray md:text-base">
            Verification processes are designed to work with local systems while
            supporting oversight, reporting, and alignment with regulatory
            expectations.
          </p>

          <p className="text-sm leading-relaxed text-kyc-gray md:text-base">
            Strong AML controls help protect users, maintain market integrity,
            and encourage long-term participation in formal financial markets.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Assets
