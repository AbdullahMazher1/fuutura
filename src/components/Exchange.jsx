import React from 'react'
import { GimIcon } from '../assets/Svg'

function Exchange() {
    return (
        <div className='relative font-futura flex flex-col lg:flex-row gap-24 bg-black p-12 md:p-24 min-h-screen items-center overflow-hidden'>

            {/* --- The Background Glow (Right Column Area) --- */}
            <div
                className="absolute pointer-events-none z-0 blur-[100px] opacity-70"
                style={{
                    width: '832.422px',
                    height: '465.091px',
                    borderRadius: '832.422px',
                    background: 'linear-gradient(180deg, rgba(58, 123, 255, 0.70) 0%, rgba(58, 123, 255, 0.00) 86.35%)',
                    transform: 'rotate(12.921deg)',
                    top: '20%',
                    right: '-10%', // Adjust based on how much "bleed" you want off-screen
                }}
            />

            {/* Left Column: Text Content */}
            <div className='relative z-10 flex flex-col gap-4 max-w-xl'>
                <div className="inline-flex w-fit items-center justify-center rounded-[32px] border border-[#3A7BFF] px-[24px] py-[8px] bg-[radial-gradient(70.71%_70.71%_at_50%_50%,rgba(11,11,13,0.50)_50.03%,#3A7BFF_100%)] bg-white/10">
                    <div className="flex flex-row items-center gap-3">
                        <GimIcon className="w-4 h-4" />
                        <span className="text-white font-futura text-sm font-medium whitespace-nowrap">
                            The Platform — Core Capabilities
                        </span>
                    </div>
                </div>

                <h1 className="flex flex-row items-center gap-3">
                    <span className="text-[#FFF] font-futura text-[48px] font-bold leading-normal">
                        The
                    </span>
                    <span className="bg-[linear-gradient(90deg,#3486FF_0%,#14C7FF_87.66%)] font-futura bg-clip-text text-transparent text-[48px] font-bold leading-normal">
                        Exchange
                    </span>
                </h1>

                <p className="text-[#FFF] font-futura font-['Inter'] text-[24px] font-normal leading-[134%] opacity-80">
                    Access a range of markets through a single, unified trading platform.
                </p>
            </div>

            {/* Right Column: Featured Card */}
            <div className='relative z-10 w-full max-w-[530px] mx-auto lg:mx-0'>
                <div className='relative w-full aspect-[16/10] md:aspect-[4/3] rounded-[32px] border border-blue-500/30 overflow-hidden shadow-[0_0_50px_rgba(58,123,255,0.2)] flex flex-col items-center p-8 md:p-12'>

                    {/* The "Glass" Overlays */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-br from-blue-900/40 to-black/70" />
                    <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_50%_0%,rgba(58,123,255,0.3)_0%,transparent_70%)]" />

                    {/* Content */}
                    <h2 className="font-futura text-[#00C2FF] text-2xl md:text-3xl font-bold relative z-30 tracking-wide">
                        Fuutura Exchange
                    </h2>

                    {/* Bottom Decorative Glow */}
                    <div className="mt-auto w-[120%] h-1/3 bg-blue-600/20 blur-[80px] rounded-full relative z-20 translate-y-1/2" />
                </div>
            </div>
        </div>
    )
}

export default Exchange