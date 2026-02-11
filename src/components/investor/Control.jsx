import React from 'react';

function Control() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center justify-center pt-32 pb-32 px-6 sm:px-12 lg:px-32 bg-black">

            {/* LEFT COLUMN: Title + Description */}
            <div className="flex flex-col items-center lg:items-start justify-center max-w-md mx-auto lg:mx-0 text-center lg:text-left">
                <h2 className="font-futura text-white text-[26px] sm:text-[30px] md:text-[38px] font-bold mb-6 leading-tight">
                    Asset Control & <br /> Risk <span className="text-[#00A3FF]">Management</span>
                </h2>
                <p className="font-futura text-white/60 text-base sm:text-lg md:text-xl leading-relaxed">
                    Fuutura is designed to minimise custodial risk and improve
                    transparency. By reducing balance-sheet exposure and
                    improving asset visibility, the platform supports
                </p>
            </div>

            {/* RIGHT COLUMN: GIF + Feature List */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-0">

                {/* GIF Container */}
                <div className="relative w-[250px] sm:w-[300px] md:w-[350px] lg:w-full flex justify-center items-center">
                    <video
                        src="/Videos/Circle.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-contain"
                    />
                    {/* Inner GIF Overlay (optional) */}
                    {/* <img
                        src="/Videos/Inner.gif"
                        alt="Inner GIF"
                        className="absolute w-[50%] sm:w-[40%] md:w-[35%] object-contain top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    /> */}
                </div>

                {/* Feature List */}
                <div className="font-futura text-white text-[15px] sm:text-[18px] md:text-[20px] flex flex-col items-center sm:items-start gap-4 text-center sm:text-left">
                    <div className="whitespace-nowrap">Lower Optional Risk</div>
                    <div className="whitespace-nowrap">Clearer Governance</div>
                    <div className="whitespace-nowrap">Stronger Regulatory Alignment</div>
                </div>

            </div>
        </div>
    );
}

export default Control;
