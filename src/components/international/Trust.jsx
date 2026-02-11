import React from 'react'

function Trust() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-[#0a0e1a] to-[#1a1f2e] py-24">
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 min-h-[800px]">
          
          {/* Left side - Text content */}
          <div className="flex-1 max-w-[600px] text-white">
            <h2 className="font-futura text-[56px] font-bold leading-[1.05] text-white mb-8">
              Trust, Oversight & <span className="text-[#00C2FF]">Responsibility</span>
            </h2>

            <div className="space-y-4 font-futura text-lg font-normal leading-relaxed text-white/80">
              <p>
                Fuutura is built with oversight, reporting, and safeguards in mind from the start.
              </p>
              <p>
                The platform is structured to align with regulatory frameworks and market integrity standards as they apply.
              </p>
            </div>
          </div>

          {/* Right side - GIF */}
          <div className="flex-1 flex items-center justify-center lg:justify-end relative">
            <div
              className="relative"
              style={{
                width: '1690px',
                height: '951px',
                top: '-111px',
                left: '100px',
                opacity: 1,
              }}
            >
              <img
                src="/Videos/trustgif.gif"
                alt="Trust graphic"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trust

