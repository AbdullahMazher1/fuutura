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
      
      {/* Main heading - Responsive positioning and sizing */}
      <div 
        className="absolute w-[90%] sm:w-[600px] lg:w-[667px] lg:left-[400px] h-auto lg:h-[78px] opacity-100 z-30 left-1/2 -translate-x-1/2 lg:translate-x-0 top-[320px] sm:top-[360px] lg:top-[400px] px-4 lg:px-0"
      >
        <h1 className="font-futura font-semibold text-2xl text-center !leading-tight sm:text-3xl lg:text-[40px] leading-[106%] text-center align-middle capitalize text-white">
          A Modern <span className="text-[#0A7CFF]">Exchange</span> Built For Real <span className="text-[#0A7CFF]">Markets</span> And Real People
        </h1>
      </div>

      {/* Description text - Responsive positioning and sizing */}
      <div 
        className="absolute w-[90%] sm:w-[650px] lg:w-[738px] lg:left-[400px] h-auto lg:h-[86px] opacity-100 z-30 left-1/2 -translate-x-1/2 lg:translate-x-0 top-[420px] sm:top-[460px] lg:top-[500px] px-4 lg:px-0"
      >
        <p className="font-futura font-normal text-sm mt-7 sm:text-base lg:text-[20px] leading-[134%] text-center  text-white">
          Trade across digital assets, market-linked products, and regulated markets — all in one place. Designed for transparency, oversight, and long-term trust.
        </p>
      </div>
    </div>
  )
}

export default Hero
