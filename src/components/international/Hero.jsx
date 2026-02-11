import React from 'react'

function Hero() {
  return (
    <div className="relative w-full h-[800px] overflow-hidden">
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

          <img
            src="/Videos/hero.gif"
            alt="Hero animation"
            className="absolute left-1/2 -translate-x-1/2 top-[260px] -translate-y-1/2 w-[600px] h-[300px] object-contain"
          />
      
      {/* Main heading */}
      <div 
        className="absolute w-[667px] h-[78px] opacity-100 z-30"
        style={{ top: '400px', left: '400px' }}
      >
        <h1 className="font-futura font-semibold text-[40px] leading-[106%] text-center align-middle capitalize text-white">
          A Modern <span className="text-[#0A7CFF]">Exchange</span> Built For Real <span className="text-[#0A7CFF]">Markets</span> And Real People
        </h1>
      </div>

      {/* Description text */}
      <div 
        className="absolute w-[738px] h-[86px] opacity-100 z-30"
        style={{ top: '500px', left: '400px' }}
      >
        <p className="font-futura font-normal text-[20px] leading-[134%] text-center text-white">
          Trade across digital assets, market-linked products, and regulated markets — all in one place. Designed for transparency, oversight, and long-term trust.
        </p>
      </div>
    </div>
  )
}

export default Hero
