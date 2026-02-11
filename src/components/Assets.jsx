import React from 'react'

function Assets() {
  return (
    <section className="relative w-full text-white font-futura overflow-hidden">

      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/Videos/assets.mov" type="video/quicktime" />
        <source src="/Videos/assets.mov" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 z-[1]" />

      {/* Content Wrapper */}
      <div className="relative z-10 mx-auto max-w-[1435px] min-h-[633px] flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-16 lg:px-0">

        {/* Left GIF */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="relative w-[280px] sm:w-[380px] md:w-[480px] lg:w-[599px] aspect-[1/1] rounded-2xl overflow-hidden">
            <img
              src="/Videos/KYCAML.gif"
              alt="KYC AML animation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 text-center md:text-left md:pr-10">

          <h2 className="mb-4 font-bold text-3xl sm:text-4xl md:text-[48px] leading-tight">
            KYC <span className="text-kyc-blue">&amp; AML</span>
          </h2>

          <p className="mb-3 text-sm md:text-base text-kyc-gray leading-relaxed">
            Fuutura integrates identity verification, transaction monitoring,
            and risk-based controls to support transparent and responsible
            market access.
          </p>

          <p className="mb-3 text-sm md:text-base text-kyc-gray leading-relaxed">
            Verification processes are designed to work with local systems while
            supporting oversight, reporting, and alignment with regulatory expectations.
          </p>

          <p className="text-sm md:text-base text-kyc-gray leading-relaxed">
            Strong AML controls help protect users, maintain market integrity,
            and encourage long-term participation in formal financial markets.
          </p>

        </div>
      </div>
    </section>
  )
}

export default Assets
