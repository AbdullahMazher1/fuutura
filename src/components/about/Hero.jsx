import React from 'react';

function Hero() {
    return (
        <div className="relative w-full h-[60vh] md:h-[80vh] flex flex-col items-center justify-center px-6 md:px-24 bg-black overflow-hidden">
            
            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={'/Videos/About.mov'}
                autoPlay
                loop
                muted
            />

            {/* Overlay to darken video for readability */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center max-w-3xl gap-6">
                <button className="text-white border border-white px-4 py-1 rounded-full text-sm md:text-base font-futura">
                    Fuutura About Us
                </button>

                <h2 className="font-futura text-white text-[30px] md:text-[60px] font-bold leading-tight">
                    About <span className="text-[#00A3FF]">Us</span>
                </h2>

                <p className="font-futura text-white/60 text-lg md:text-xl leading-relaxed">
                    At Fuutura, we believe accessing markets should be simple, secure, and built around you. 
                    We set out to create a platform that brings trading, payments, and market access together 
                    in one calm, easy-to-use experience.
                </p>
            </div>
        </div>
    );
}

export default Hero;
