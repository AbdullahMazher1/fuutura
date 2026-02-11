import React from 'react'
import { GimIcon } from '@/assets/Svg';

function Why() {
    return (
        <div className='flex flex-col items-center justify-center pt-24 pb-24 px-6 md:px-24 bg-black'>
            <h2 className="font-futura text-white text-[30px] md:text-[38px] font-bold leading-tight">
                Why Fuutura <span className="text-[#00A3FF]">Exists</span>
            </h2>
            <div className='bg-animated-border bg-[#ffffff41] p-[1px] max-w-[1000px] mx-auto rounded-3xl !my-20'>
                <div className='rounded-3xl p-5 bg-[#151A24] bg-center bg-no-repeat bg-cover' style={{ backgroundImage: "url('/ll.png')" }}>
                    <div className='bg-center bg-no-repeat bg-cover h-[360px] w-full flex items-center gap-6 rounded-3xl' style={{ backgroundImage: "url('/hhhh.png')" }}>
                        <div className='flex flex-row space-x-2 p-8'>
                            <div className="flex flex-col gap-4">
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
                        <div className='flex flex-row space-x-2 p-8'>
                            <div className="flex flex-col gap-4">
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
                        <div className='flex-1 w-full flex justify-center items-center'>
                            <img
                                src="/Videos/loader.gif"
                                alt=""
                                className="w-full h-[300px] object-cover rounded-xl"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Why
