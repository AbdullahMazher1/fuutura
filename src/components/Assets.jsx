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
        Your browser does not support the video tag.
      </video>
      
      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 z-[1]" />
      
      <div className="relative z-10 mx-auto h-[633px] w-[1435px] flex flex-col items-center justify-between gap-10 px-6 py-20 md:flex-row md:gap-16 lg:px-0 opacity-100">
        {/* Left side - video */}
        <div className="relative flex w-full items-center justify-center md:w-1/2">
          <div className="relative h-[559px] w-[599px] overflow-hidden rounded-2xl ">
            <video
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/Videos/KYCAML.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Right side - content */}
        <div className="w-full md:w-1/2">
          <h2 className="mb-4 font-futura font-bold text-[48px] leading-none tracking-normal align-middle">
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
