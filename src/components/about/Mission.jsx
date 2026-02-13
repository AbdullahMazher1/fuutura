import { GimIcon } from '@/assets/Svg'
import React from 'react'

function Mission() {
    return (
        /* Outer section: Reduced vertical padding on mobile to save space */
        <section className="relative w-full bg-black py-8 md:py-12 px-4 md:px-24 flex items-center justify-center">

            {/* FIXED CONTAINER: 
               1. Removed aspect-[16/9] from mobile (prevents squashing).
               2. Added h-auto and py-12 for mobile.
               3. Kept md:aspect-[21/9] for desktop.
            */}
            <div className="relative w-full max-w-[1400px] h-auto md:aspect-[21/9] overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/5 shadow-2xl flex flex-col items-center justify-center text-center py-12 md:py-0">

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

                {/* Content: Reduced gap for mobile from gap-6 to gap-4 */}
                <div className="relative z-10 flex flex-col gap-4 md:gap-6 items-center px-6 w-full">

                    {/* Top Label - Visible only on Desktop/Tablet */}
                    <div className="hidden sm:inline-flex w-auto items-center justify-center rounded-[32px] border border-[#3A7BFF] px-6 py-2 bg-white/5 backdrop-blur-sm">
                        <div className="flex flex-row items-center gap-3">
                            <GimIcon className="w-4 h-4" />
                            <span className="text-white font-futura text-sm font-medium tracking-widest">
                                Mission
                            </span>
                        </div>
                    </div>

                    {/* Heading: Adjusted margin and size */}
                    <h1 className="font-futura font-bold text-3xl md:text-[48px] leading-tight tracking-tight text-white m-0">
                        Our <span className="text-[#00C2FF]">Mission</span>
                    </h1>

                    {/* Sub-text: Adjusted max-width and leading for mobile */}
                    <div className="w-full max-w-[90%] sm:max-w-[700px]">
                        <p className="text-white font-futura text-base md:text-[20px] font-normal leading-[1.45] md:leading-[1.5] opacity-80">
                            Our mission is clear: to build a financial platform that is calm, trustworthy, and user-focused — 
                            empowering people, creating transparency, and opening access to the markets of today and tomorrow.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Mission