import React from 'react';
import { GimIcon } from '@/assets/Svg';

function Philosophy() {
    return (
        <div className="relative flex flex-col md:flex-row items-center justify-center pt-16 px-6 md:px-24 gap-16">
            
            {/* Background overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/60 backdrop-blur-sm z-0"></div>

            {/* LEFT COLUMN */}
            <div className="relative z-10 flex flex-col gap-6 md:gap-8 max-w-xl items-center md:items-start justify-center text-center md:text-left">
                <div className="inline-flex w-fit items-center justify-center rounded-[32px] border border-[#3A7BFF] px-[24px] py-[8px] bg-white/5 backdrop-blur-sm">
                    <GimIcon className="w-4 h-4 mr-2" />
                    <span className="text-white font-futura text-sm font-medium uppercase tracking-widest">
                        The Platform
                    </span>
                </div>

                <h2 className="font-futura text-white text-[30px] md:text-[38px] font-bold leading-tight">
                    Platform <span className="text-[#00A3FF]">Philosophy</span>
                </h2>

                <p className="font-futura text-white/60 text-lg md:text-xl leading-relaxed">
                    Our platform is designed for people, not complexity. Whether its digital assets, market-linked instruments, or — where permitted — regulated products, Fuutura puts you in control, with built in safeguards to protect your security.
                </p>
            </div>

            {/* RIGHT COLUMN */}
            <div className="relative z-10 w-full md:w-1/2 flex items-center justify-center">
                <img 
                    className="w-3/4 md:w-full opacity-50" 
                    src="/Images/Ellipse1.png" 
                    alt="Ellipse Background" 
                />
                <img
                    className="absolute w-full md:w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    src="/Videos/4.gif"
                    alt="Platform GIF"
                />
            </div>
        </div>
    );
}

export default Philosophy;
