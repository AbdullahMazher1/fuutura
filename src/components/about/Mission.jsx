import { GimIcon } from '@/assets/Svg'
import React from 'react'

// Starburst/Sparkle icon component
const StarburstIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 0L9.5 5.5L15 7L9.5 8.5L8 14L6.5 8.5L1 7L6.5 5.5L8 0Z" fill="#00d9ff" />
    </svg>
)

function Mission() {
    return (
        <section className="relative w-full bg-black py-12 px-6 md:px-24 flex items-center justify-center">

            <div className="relative w-full max-w-[1400px] aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-[32px] border border-white/5 shadow-2xl flex flex-col items-center justify-center text-center">

                {/* Background video */}
                <video
                    className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/Videos/operate.mp4" type="video/mp4" />
                </video>

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#0B0B0D]/40 backdrop-blur-[2px] z-[1]" />

                {/* Content */}
                <div className="relative z-10 flex flex-col gap-6 items-center px-4 sm:px-8 w-full">

                    {/* Top Label */}
                    {/* Top Label */}
                    <div className="inline-flex w-auto max-w-full flex-shrink-0 items-center justify-center rounded-[32px] border border-[#3A7BFF] px-4 sm:px-6 md:px-[24px] py-2 sm:py-3 bg-white/5 backdrop-blur-sm">
                        <div className="flex flex-row items-center gap-2 sm:gap-3">
                            <GimIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span className="text-white font-futura text-xs sm:text-sm font-medium tracking-widest truncate">
                                Mission
                            </span>
                        </div>
                    </div>

                    {/* Heading */}
                    <h1 className="font-futura font-bold text-2xl sm:text-3xl md:text-[48px] leading-snug md:leading-tight mb-4 sm:mb-6 tracking-tight px-2 sm:px-0 max-w-full">
                        <span className="text-white">Our </span>
                        <span className="text-[#00C2FF]">Mission</span>
                    </h1>

                    {/* Sub-text */}
                    <div className="w-full max-w-full sm:max-w-[700px] px-2 sm:px-4 md:px-6">
                        <p className="text-white font-futura text-base sm:text-lg md:text-[20px] font-normal leading-[1.4] sm:leading-[1.5] opacity-80">
                            Our mission is clear to build a financial platform that is calm, trustworthy, and user-focused —
                            empowering people, creating transparency, and opening access to the markets of today and tomorrow.
                        </p>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Mission
