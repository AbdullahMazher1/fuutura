import React from 'react'
import { GimIcon } from '../assets/Svg' 

function Exchange() {
    return (
        <div className='flex flex-col lg:flex-row gap-12 bg-black p-12 md:p-24 min-h-screen items-center'>
            
            {/* Left Column: Text Content */}
            <div className='flex flex-col gap-6 max-w-xl'>
                {/* Your Radial Tag */}
                <div className="inline-flex w-fit items-center justify-center rounded-[32px] border border-[#3A7BFF] px-[24px] py-[8px] bg-[radial-gradient(70.71%_70.71%_at_50%_50%,rgba(11,11,13,0.50)_50.03%,#3A7BFF_100%)] bg-white/10">
                    <div className="flex flex-row items-center gap-3">
                        <GimIcon className="w-4 h-4" />
                        <span className="text-white text-sm font-medium whitespace-nowrap">
                            The Platform — Core Capabilities
                        </span>
                    </div>
                </div>

                <h1 className='text-5xl md:text-6xl font-bold text-white leading-tight'>
                    The <span className='text-[#00C2FF]'>Exchange</span>
                </h1>

                <p className='text-gray-400 text-lg md:text-xl leading-relaxed'>
                    Access a range of markets through a single, unified trading platform.
                </p>
            </div>

            {/* Right Column: Featured Card */}
            <div className='relative w-full aspect-video lg:aspect-square max-w-[600px]'>
                <div className='w-full h-full rounded-[40px] border border-blue-500/30 bg-gradient-to-br from-blue-900/40 to-black p-12 flex flex-col items-center justify-start overflow-hidden shadow-[0_0_50px_rgba(58,123,255,0.2)]'>
                    {/* Inner Glow Effect */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(58,123,255,0.3)_0%,transparent_70%)]" />
                    
                    <h2 className="text-[#00C2FF] text-3xl font-semibold relative z-10">
                        Fuutura Exchange
                    </h2>
                    
                    {/* Add an image or graphic here if needed */}
                    <div className="mt-auto w-full h-1/2 bg-blue-500/10 blur-3xl rounded-full" />
                </div>
            </div>
            
        </div>
    )
}

export default Exchange