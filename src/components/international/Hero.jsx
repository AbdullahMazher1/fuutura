import React from 'react'

function Hero() {
  return (
    <div className="relative w-full h-[600px] sm:h-[700px] lg:h-[800px] overflow-hidden">
      {/* Base background image with wave animation */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-[0.43] animate-wave z-0"
        style={{ backgroundImage: "url('/Images/internationalhero.png')" }}
      />

      {/* Blurred Component 67 image above base background */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center blur-sm z-10"
        style={{ backgroundImage: "url('/Images/Component 67.png')" }}
      />

      {/* Glassy blue gradient moving animation */}
      <div className="absolute inset-0 w-full h-full z-20 animate-gradient-slide">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0A7CFF]/30 to-transparent w-[200%] h-full" />
      </div>

      {/* Hero GIF - Responsive positioning */}
      <img
        src="/Videos/hero.gif"
        alt="Hero animation"
        className="absolute left-1/2 -translate-x-1/2 top-[180px] sm:top-[220px] lg:top-[260px] -translate-y-1/2 w-[300px] h-[150px] sm:w-[400px] sm:h-[200px] lg:w-[600px] lg:h-[300px] object-contain z-30"
      />

      {/* Main heading - Responsive positioning and sizing - Always centered */}
      <div
        className="absolute w-[90%] max-w-[600px] sm:max-w-[667px] lg:max-w-[667px] h-auto opacity-100 z-30 left-1/2 -translate-x-1/2 top-[320px] sm:top-[360px] lg:top-[430px] px-4 flex items-center justify-center gap-4"
      >
        <h1 className="font-futura font-semibold text-2xl sm:text-3xl md:text-3xl lg:text-[32px] leading-tight text-center text-white">
          A Modern <span className="text-[#00C2FF] ">Exchange</span> Built For Real <br />
          <span className="text-[#00C2FF]">Markets</span> And Real <span className="">People</span>
        </h1>

      </div>

      {/* Description text - Responsive positioning and sizing - Always centered */}
      <div
        className=" absolute w-[90%] max-w-[650px] sm:max-w-[738px] lg:max-w-[738px] h-auto lg:h-[86px] opacity-100 z-30 left-1/2 -translate-x-1/2 top-[420px] sm:top-[460px] lg:top-[550px] px-4"
      >
        <br />
        <p className="font-futura font-normal text-sm sm:text-base md:text-lg lg:text-[20px] leading-[134%] text-center text-white">
          Designed for transparency, oversight, and long-term trust.
          {/* Trade across digital assets, market-linked products, and regulated markets — all in one place.  */}
        </p>
      </div>
    </div>
  )
}

export default Hero
