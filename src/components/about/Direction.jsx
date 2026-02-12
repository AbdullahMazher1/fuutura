import React from 'react';

export const Direction = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center px-6 md:px-24 bg-black gap-0 md:gap-16 py-16">

            {/* LEFT COLUMN */}
            <div className="relative w-full md:w-1/2 flex items-center justify-center">
                {/* Ellipse Background */}
                <img
                    className="w-full max-w-[500px] md:w-full md:max-w-none opacity-50"
                    src="/Images/Ellipse1.png"
                    alt="Ellipse Background"
                />
                {/* Center GIF */}
                <img
                    className="absolute w-2/3 max-w-[400px] md:w-1/2 md:max-w-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    src="/Videos/logos.gif"
                    alt="Platform GIF"
                />
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex flex-col gap-6 md:gap-8 max-w-xl w-full items-center md:items-start justify-center text-center md:text-left">
                <h2 className="font-futura text-white text-[28px] sm:text-[30px] md:text-[38px] font-bold leading-tight">
                    Fuuture <span className="text-[#00A3FF]">Direction</span>
                </h2>

                <p className="font-futura text-white/60 text-base sm:text-lg md:text-xl leading-relaxed">
                    Today, we support a wide range of digital and market-linked products. Tomorrow, we aim to expand responsibly to regulated exchanges, such as the Pakistan Stock Exchange, giving more people safe and reliable access to the opportunities of modern finance.
                </p>
            </div>

        </div>
    );
}
