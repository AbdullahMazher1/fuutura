import React from 'react'
import { GimIcon } from '@/assets/Svg';

function Why() {
    return (
        <div className='flex flex-col items-center justify-center pt-24 pb-24 px-6 md:px-24 bg-black'>
            <h2 className="font-futura text-white text-[30px] md:text-[38px] font-bold leading-tight text-center">
                Why Fuutura <span className="text-[#00A3FF]">Exists</span>
            </h2>

            <div className='bg-animated-border bg-[#ffffff41] p-[1px] max-w-[1000px] mx-auto rounded-3xl !my-20 w-full'>
                <div className='rounded-3xl p-5 bg-[#151A24] bg-center bg-no-repeat bg-cover overflow-hidden' style={{ backgroundImage: "url('/ll.png')" }}>

                    <div className='bg-center bg-no-repeat bg-cover h-auto md:h-[380px] w-full flex flex-col p-8 md:p-12 rounded-3xl' style={{ backgroundImage: "url('/hhhh.png')" }}>

                        {/* TOP HEADING ROW: Traditional Market -> Fuutura */}
                        <div className="flex items-center justify-start gap-6 md:gap-12 mb-4 ml-0 md:ml-4">
                            <h3 className="text-white font-futura text-xl md:text-2xl font-bold">
                                Traditional Market
                            </h3>
                            <span className="text-white/60 text-2xl">→</span>
                            <h3 className="text-white font-futura text-xl md:text-2xl font-bold">
                                Fuutura
                            </h3>
                        </div>

                        <div className='flex flex-col md:flex-row items-center justify-between gap-6 md:gap-24'>
                            {/* LEFT FEATURE COLUMN (Traditional) */}
                            <div className="flex flex-col gap-4">
                                <div className="inline-flex w-[160px] items-center justify-center rounded-[32px] border border-white/10 px-[24px] py-[10px] bg-white/5 backdrop-blur-sm">
                                    <span className="text-white/60 font-futura text-sm font-medium uppercase tracking-widest">
                                        Slow
                                    </span>
                                </div>
                                <div className="inline-flex w-[160px] items-center justify-center rounded-[32px] border border-white/10 px-[24px] py-[10px] bg-white/5 backdrop-blur-sm">
                                    <span className="text-white/60 font-futura text-sm font-medium uppercase tracking-widest">
                                        Complex
                                    </span>
                                </div>
                                <div className="inline-flex w-[160px] items-center justify-center rounded-[32px] border border-white/10 px-[24px] py-[10px] bg-white/5 backdrop-blur-sm">
                                    <span className="text-white/60 font-futura text-sm font-medium uppercase tracking-widest">
                                        Hidden Fees
                                    </span>
                                </div>
                            </div>

                            {/* RIGHT FEATURE COLUMN (Fuutura) */}
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center w-full justify-center rounded-[32px] border border-[#3A7BFF] py-[10px] bg-[#3A7BFF]/10 backdrop-blur-sm shadow-[0_0_15px_rgba(58,123,255,0.3)]">
                                    <GimIcon className="" />
                                    <span className="text-white font-futura text-sm font-medium uppercase tracking-widest">
                                        Fast
                                    </span>
                                </div>
                                <div className="inline-flex w-[180px] items-center justify-center rounded-[32px] border border-[#3A7BFF] px-[20px] py-[10px] bg-[#3A7BFF]/10 backdrop-blur-sm shadow-[0_0_15px_rgba(58,123,255,0.3)]">
                                    <GimIcon className="w-4 h-4 mr-3 text-[#3A7BFF]" />
                                    <span className="text-white font-futura text-sm font-medium uppercase tracking-widest">
                                        Simple
                                    </span>
                                </div>
                                <div className="inline-flex w-[180px] items-center justify-center rounded-[32px] border border-[#3A7BFF] px-[20px] py-[10px] bg-[#3A7BFF]/10 backdrop-blur-sm shadow-[0_0_15px_rgba(58,123,255,0.3)]">
                                    <GimIcon className="w-4 h-4 mr-3 text-[#3A7BFF]" />
                                    <span className="text-white font-futura text-sm font-medium uppercase tracking-widest">
                                        Transparent
                                    </span>
                                </div>
                            </div>
                            {/* CENTER IMAGE / GIF */}

                            <div className='w-full flex justify-center items-center mt-0 md:mt-0'>
                                <img
                                    src="/Videos/loader.gif"
                                    alt=""
                                    className="w-full h-[250px] md:h-[250px] object-cover rounded-xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Why