"use client";
import React from 'react';
import Image from 'next/image';

const scrollingData = [
    { id: 1, title: 'Transparent Process', icon: '/Images/1.png' },
    { id: 2, title: 'Built to last', icon: '/Images/2.png' },
    { id: 3, title: 'Secure Transactions', icon: '/Images/1.png' },
    { id: 4, title: 'Global Connectivity', icon: '/Images/2.png' },
    { id: 5, title: '24/7 Support', icon: '/Images/1.png' },
];

function FutuuraMatters() {
    return (
        <section className="relative w-full min-h-screen overflow-hidden bg-black flex items-center justify-center p-6 md:p-24">
            {/* 1. Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-40"
            >
                <source src="/Videos/Futurua.mp4" type="video/mp4" />
            </video>

            {/* 2. The Center Notch/Hole (Semi-Circle Style) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30">
                <div className="relative w-[200px] h-[100px] md:w-[320px] md:h-[160px] flex items-center justify-center">
                    {/* The Cutout Shape: rounded-b-full creates the semi-circle effect */}
                    <div className="absolute top-0 w-full h-full bg-black rounded-b-full border-x border-b border-white/10" />

                    {/* Floating Image */}
                    <div className="relative z-10 w-full h-full mt-[-10%]">
                        <Image
                            src="/Images/Rectangle.png"
                            alt="Futuura Core"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* 3. Main Content Layout */}
            <div className="relative z-20 flex flex-col gap-16 w-full max-w-[1400px] mt-24">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">

                    {/* Left Column: Text (Takes 5/12 of width) */}
                    <div className="lg:col-span-5 flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-[#00C2FF] rotate-45" />
                            <span className="text-white/60 text-xs font-futura tracking-widest">
                                Fuutura Matters in Pakistan
                            </span>
                        </div>

                        <h1 className="text-white font-futura text-5xl md:text-[46px] font-bold leading-[1.1]">
                            Why Fuutura <br />
                            Matters in <span className="text-[#00C2FF]">Pakistan</span>
                        </h1>

                        <p className="font-futura text-[#FFF] text-lg md:text-xl font-normal leading-relaxed opacity-70 max-w-md mt-4">
                            Because market access should not be limited by complexity or cost.
                            Fuutura is designed to lower friction and encourage broader participation.
                        </p>
                    </div>

                    {/* Right Column: Wide Rectangular Box (Takes 7/12 of width) */}
                    <div
                        className="lg:col-span-7 relative h-[300px] w-full overflow-hidden border border-white/10 shadow-2xl"
                        style={{
                            borderRadius: '22px',
                            background: 'linear-gradient(180deg, rgba(94, 58, 255, 0.05) 0%, rgba(0, 204, 255, 0.05) 100%)',
                            backdropFilter: 'blur(14px)',
                        }}
                    >
                        {/* Split inner container: Left for Text, Right for GIF */}
                        <div className="grid grid-cols-2 h-full">

                            {/* Scrolling Text Side */}
                            <div className="relative overflow-hidden">
                                <div className="absolute w-full flex flex-col gap-12 p-10 animate-slow-scroll">
                                    {[...scrollingData, ...scrollingData].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-4 group">
                                            <div className="relative w-12 h-12 flex-shrink-0">
                                                <Image src={item.icon} alt={item.title} fill className="object-contain" />
                                            </div>
                                            <span className="text-[#FFF] font-futura text-[18.514px] font-medium leading-normal [leading-trim:both] [text-edge:cap]">
                                                {item.title}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* GIF / Empty Space Side */}
                            <div className="">


                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Animations */}
            <style jsx>{`
                @keyframes slowScroll {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-50%); }
                }
                .animate-slow-scroll {
                    animation: slowScroll 25s linear infinite;
                }
            `}</style>
        </section>
    );
}

export default FutuuraMatters;