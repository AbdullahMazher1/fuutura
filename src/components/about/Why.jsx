import React from 'react'
import { GimIcon } from '@/assets/Svg';

function Why() {
    return (
        <div className='flex flex-col items-center justify-center pt-24 pb-24 px-6 md:px-24 bg-black'>
            <h2 className="font-futura text-white text-[30px] md:text-[38px] font-bold leading-tight text-center md:text-left">
                Why Fuutura <span className="text-[#00A3FF]">Exists</span>
            </h2>

            <div className='bg-animated-border bg-[#ffffff41] p-[1px] max-w-[1000px] mx-auto rounded-3xl !my-20 w-full'>
                <div className='rounded-3xl p-5 bg-[#151A24] bg-center bg-no-repeat bg-cover' style={{ backgroundImage: "url('/ll.png')" }}>
                    
                    <div className='bg-center bg-no-repeat bg-cover h-auto md:h-[360px] w-full flex flex-col md:flex-row items-center gap-6 rounded-3xl' style={{ backgroundImage: "url('/hhhh.png')" }}>

                        {/* LEFT FEATURE COLUMN */}
                        <div className='flex flex-col md:flex-row md:space-x-2 space-y-4 md:space-y-0 p-4 md:p-8 w-full md:w-auto justify-center items-center'>
                            <div className="flex flex-col gap-4 w-full md:w-auto">
                                <div className="inline-flex w-fit items-center justify-center rounded-[32px] border px-[24px] py-[8px] bg-white/5 backdrop-blur-sm">
                                    <span className="text-white font-futura text-sm font-medium uppercase tracking-widest">
                                        Slow
                                    </span>
                                </div>
                                <div className="inline-flex w-fit items-center justify-center rounded-[32px] border  px-[24px] py-[8px] bg-white/5 backdrop-blur-sm">
                                    <span className="text-white font-futura text-sm font-medium uppercase tracking-widest">
                                        Complex
                                    </span>
                                </div>
                                <div className="inline-flex w-fit items-center justify-center rounded-[32px] border  px-[24px] py-[8px] bg-white/5 backdrop-blur-sm">
                                    <span className="text-white font-futura text-sm font-medium uppercase tracking-widest">
                                        Hidden Fees
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT FEATURE COLUMN */}
                        <div className='flex flex-col md:flex-row md:space-x-2 space-y-4 md:space-y-0 p-4 md:p-8 w-full md:w-auto justify-center items-center'>
                            <div className="flex flex-col gap-4 w-full md:w-auto">
                                <div className="inline-flex w-fit items-center justify-center rounded-[32px] border border-[#3A7BFF] px-[24px] py-[8px] bg-white/5 backdrop-blur-sm">
                                    <GimIcon className="w-4 h-4 mr-2" />
                                    <span className="text-white font-futura text-sm font-medium uppercase tracking-widest">
                                        Fast
                                    </span>
                                </div>
                                <div className="inline-flex w-fit items-center justify-center rounded-[32px] border border-[#3A7BFF] px-[24px] py-[8px] bg-white/5 backdrop-blur-sm">
                                    <GimIcon className="w-4 h-4 mr-2" />
                                    <span className="text-white font-futura text-sm font-medium uppercase tracking-widest">
                                        The Platform
                                    </span>
                                </div>
                                <div className="inline-flex w-fit items-center justify-center rounded-[32px] border border-[#3A7BFF] px-[24px] py-[8px] bg-white/5 backdrop-blur-sm">
                                    <GimIcon className="w-4 h-4 mr-2" />
                                    <span className="text-white font-futura text-sm font-medium uppercase tracking-widest">
                                        Transparent
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* CENTER IMAGE / GIF */}
                        <div className='flex-1 w-full flex justify-center items-center mt-6 md:mt-0'>
                            <img
                                src="/Videos/loader.gif"
                                alt=""
                                className="w-full h-[250px] md:h-[300px] object-cover rounded-xl"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Why
