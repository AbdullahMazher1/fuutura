"use client";
import React, { useState } from 'react'

function KycAml() {
  const [hoveredImage, setHoveredImage] = useState(null)

  return (
    <section className="w-full bg-kyc-bg py-12 md:py-16 text-white font-futura">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4">

        {/* Top Cards */}
        <div className="grid gap-6 lg:grid-cols-2">

          {/* CARD 1 */}
          <div className="bg-animated-border rounded-[32px] overflow-hidden">
            <div className="relative rounded-[30px] bg-[#191B21] p-6 sm:p-8 flex flex-col gap-6">

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
                  Your Assets, <span className="text-kyc-blue">Your Control</span>
                </h2>

                <p className="mt-2 text-sm text-kyc-gray max-w-md">
                  Fuutura is designed to prioritise user control and transparency.
                  This approach reduces risk and supports responsible participation.
                </p>
              </div>

              {/* Lock Image */}
              <div
                className="flex justify-center cursor-pointer"
                onMouseEnter={() => setHoveredImage('lock')}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <div className="relative w-[160px] sm:w-[220px] md:w-[260px] aspect-square">
                  <img
                    src="/images/lock.png"
                    className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                      hoveredImage === 'lock' ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  <img
                    src="/images/lockHover.png"
                    className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                      hoveredImage === 'lock' ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </div>
              </div>

            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-animated-border rounded-[32px]  h-full overflow-hidden">
            <div className="relative rounded-[30px] bg-[#191B21] p-6 h-full sm:p-8 flex flex-col lg:flex-row gap-6">

              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
                  Trust, Oversight & <span className="text-kyc-blue">Responsibility</span>
                </h2>

                <p className="mt-2 text-sm text-kyc-gray">
                  Designed to work with regulation and existing institutions.
                </p>
                <p className="mt-2 text-sm text-kyc-gray">
                  Built with oversight and safeguards in mind from the start.
                </p>
              </div>

              {/* Shield Image */}
              <div
                className="flex justify-center lg:justify-end cursor-pointer"
                onMouseEnter={() => setHoveredImage('protect')}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <div className="relative w-[200px] sm:w-[260px] md:w-[320px] aspect-square">
                  <img
                    src="/images/protect.png"
                    className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                      hoveredImage === 'protect' ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  <img
                    src="/images/protecthover.png"
                    className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                      hoveredImage === 'protect' ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Large Card */}
        <div className="bg-animated-border rounded-[32px] overflow-hidden">
          <div className="relative rounded-[30px] bg-[#191B21] p-6 sm:p-10 flex flex-col lg:flex-row gap-8 items-center">

            {/* Text */}
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Markets Today — Markets <br />
                <span className="text-kyc-blue">Tomorrow</span>
              </h2>

              <p className="mt-4 text-sm text-kyc-gray">
                One platform, designed to strengthen local markets and support global access.
              </p>
              <p className="mt-2 text-sm text-kyc-gray">
                The goal is to expand participation, not replace institutions.
              </p>
            </div>

            {/* Chart Image */}
            <div
              className="cursor-pointer"
              onMouseEnter={() => setHoveredImage('up')}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <div className="relative w-[220px] sm:w-[300px] md:w-[420px] aspect-square rotate-[10deg]">
                <img
                  src="/images/up.png"
                  className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                    hoveredImage === 'up' ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <img
                  src="/images/upHover.png"
                  className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                    hoveredImage === 'up' ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default KycAml
