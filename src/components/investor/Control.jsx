import React from 'react';

function Control() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center justify-center pt-32 pb-32 px-32 bg-black">

            {/* LEFT COLUMN: Title + Description (aligned left with margin) */}
            <div className="flex flex-col items-start justify-center max-w-md ml-8 lg:ml-16">
                <h2 className="font-futura text-white text-[26px] sm:text-[30px] md:text-[38px] font-bold mb-6 leading-tight">
                    Asset Control & <br /> Risk <span className="text-[#00A3FF]">Management</span>
                </h2>
                <p className="font-futura text-white/60 text-base sm:text-lg md:text-xl leading-relaxed">
                    Fuutura is designed to minimise custodial risk and improve
                    transparency. By reducing balance-sheet exposure and
                    improving asset visibility, the platform supports
                </p>
            </div>

            {/* RIGHT COLUMN: Double GIF + Feature List (centered as a whole) */}
            <div className="flex flex-row items-center justify-center space-y-6">

                {/* GIF Container */}
                <div className="relative flex justify-center items-center">
                    {/* Outer Revolving GIF */}
                    <video
                        src="/Videos/Circle.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-contain"
                    />

                    {/* Inner GIF Overlay */}
                    {/* <img
                        src="/Videos/Inner.gif"
                        alt="Inner GIF"
                        className="absolute w-[50%] h-[50%] sm:w-[40%] sm:h-[40%] md:w-[35%] md:h-[35%] object-contain top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    /> */}
                </div>

                {/* Feature List */}
                <div className="font-futura text-white text-[15px] sm:text-[18px] md:text-[20px] 
flex flex-col items-start gap-4 text-left">
                    <div className="whitespace-nowrap">Lower Optional Risk</div>
                    <div className="whitespace-nowrap">Clearer Governance</div>
                    <div className="whitespace-nowrap">Stronger Regulatory Alignment</div>
                </div>

            </div>
        </div>
    );
}

export default Control;
