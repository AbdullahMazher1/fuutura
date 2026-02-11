import React from 'react'

const Hero = () => {
  return (
    <div
      className="bg-cover bg-top w-full 
      h-[700px] sm:h-[760px] md:h-[820px] lg:h-[840px]"
      style={{ backgroundImage: "url('/hero11.gif')" }}
    >
      <div className="max-w-[800px] mx-auto flex flex-col gap-4 
      pt-16 sm:pt-20 md:pt-24 lg:pt-28 px-4">

        {/* Badge */}
        <div className="mx-auto rounded-full px-4 py-2 sm:px-6 sm:py-2.5 
        border border-[#ffffff80] text-white bg-transparent backdrop-blur-md text-sm sm:text-base">
          A New Market Exists
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
        font-bold text-white text-center leading-tight">
          A modern exchange{" "}
          <span className="bg-gradient-to-r from-[#3A7BFF] to-[#00F0FF] bg-clip-text text-transparent">
            built in Pakistan
          </span>{" "}
          for real markets and real people.
        </h2>

        {/* Paragraph */}
        <p className="text-sm sm:text-base md:text-lg text-white text-center max-w-xl mx-auto">
          Connecting people in Pakistan to modern markets, responsibly and transparently. Designed for oversight, trust, and long-term growth.
        </p>

        {/* Button */}
        <div className="flex items-center max-w-max rounded-lg mx-auto 
        justify-center px-5 py-2.5 sm:px-6 sm:py-3 text-white cursor-pointer 
        text-sm bg-gradient-to-r from-[#3A7BFF] to-[#00F0FF]">
          Explore the Platform
        </div>

        {/* Hero Image */}
        <img
          className="mx-auto -translate-y-[10%] sm:-translate-y-[12%] md:-translate-y-[14%] lg:-translate-y-[16%] 
          w-[90%] sm:w-[80%] md:w-[70%]"
          src="/hero22.gif"
          alt=""
        />
      </div>
    </div>
  )
}

export default Hero
