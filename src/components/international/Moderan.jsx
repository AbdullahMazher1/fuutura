import React from 'react'

function Moderan() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#0a0e1a]">
      {/* Background image with specific properties */}
      <div 
        className="absolute z-0"
        style={{
          width: '1392px',
          height: '759px',
          opacity: 0.2,
          top: '150.5px',
          left: '214px',
          mixBlendMode: 'screen',
          backgroundImage: "url('/Images/moderanbackground.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Content container */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-20 lg:px-0">
        {/* Top center - Heading and subtitle */}
        <div className="text-center text-white pt-[150px] mb-16">
          <h1 className="font-futura font-medium text-[48px] leading-[100%] align-middle text-white mb-6">
            Simple Access to Modern Markets
          </h1>
          <h2 className="font-futura font-normal text-xl text-white/90">
            Markets shouldn't feel complicated
          </h2>
        </div>

        {/* Bottom section - Left text and right graphic */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left side - Text content */}
          <div className="flex-1 max-w-[600px] text-white">
            {/* Descriptive paragraphs */}
            <div className="space-y-4 font-futura text-white">
              <p className="font-futura font-normal text-[20px] leading-[42px] align-middle">
                Fuutura brings trading, payments, and market access together in one calm, easy-to-use platform. Built to be fast and cost-efficient — without unnecessary complexity or hidden layers.
              </p>
              <p className="font-futura font-normal text-[20px] leading-[42px] align-middle">
                Just clear, straightforward access to markets.
              </p>
            </div>
          </div>

          {/* Right side - Graphic element */}
          <div className="flex-1 flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[600px] h-[600px]">
              <img
                src="/Images/modernleft.jpg"
                alt="Network graphic"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Moderan
