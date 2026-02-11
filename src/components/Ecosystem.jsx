"use client";
import { GimIcon } from '../assets/Svg';
import React from 'react';

function Ecosystem() {
    return (
        /* Removed py-20 and replaced with pt-32 to push only the top down */
        <section className="relative w-full flex flex-col items-center justify-start overflow-hidden bg-black text-white pt-32 pb-0">
            
            {/* 1. Background Video */}
            <video
                autoPlay loop muted playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
            >
                <source src="/Videos/Rectangle.mp4" type="video/mp4" />
            </video>

            {/* 2. Content Overlay */}
            <div className="relative z-20 flex flex-col items-center px-6 max-w-4xl space-y-6 text-center">
                <div className="flex flex-col items-center gap-2">
                    <div className='flex flex-row items-center gap-2 text-white/80 font-futura tracking-widest uppercase text-sm'>
                        <GimIcon />
                        Ecosystem
                    </div>
                    <h1 className="font-futura text-5xl md:text-6xl font-bold tracking-[0.05em] mt-4">
                        Explore the <span className="text-[#00C2FF]">Ecosystem</span>
                    </h1>
                </div>

                <p
                    className="max-w-3xl px-4 md:px-16"
                    style={{
                        color: 'rgba(255, 255, 255, 0.90)',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '22px',
                        fontWeight: 500,
                        lineHeight: '1.6',
                        backdropFilter: 'blur(25px)',
                        WebkitBackdropFilter: 'blur(25px)',
                    }}
                >
                    Explore how the Exchange Connects with supporting Tools, Services and Infrastructure built around long-term trust.
                </p>

                <button
                    className="px-10 py-3 bg-transparent backdrop-blur-md transition-all duration-300 font-futura text-lg text-white hover:shadow-[0_0_20px_rgba(10,124,255,0.4)] active:scale-95"
                    style={{
                        borderRadius: '12px',
                        border: '1px solid #0A7CFF',
                    }}
                >
                    Explore Ecosystem
                </button>
            </div>

            {/* 3. The Globe Video - Fixed to the Bottom Edge */}
            <div className="relative z-10 w-full flex justify-center -mt-20 md:-mt-40">
                <div className="relative w-full h-[500px] md:w-full md:h-[600px] overflow-hidden">
                    <video
                        autoPlay loop muted playsInline
                        className="w-full h-full object-cover object-top pointer-events-none"
                    >
                        <source src="/Videos/globe1.webm" type="video/webm" />
                        <source src="/Videos/globe1.mp4" type="video/mp4" />
                    </video>
                    
                    {/* Subtle Glow concentrated at the bottom edge */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-blue-500/20 blur-[120px] -z-10 rounded-full" />
                </div>
            </div>

            {/* No bottom gradient here to ensure a sharp "collision" with the next section */}
        </section>
    );
}

export default Ecosystem;