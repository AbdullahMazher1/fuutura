"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { GimIcon } from '../assets/Svg';

const platformData = [
    {
        id: 0,
        tag: "Exchange",
        title: "Exchange",
        description: "Access a range of markets through a single, unified trading platform.",
        gif: "/Videos/Exchange.gif",
        cardTitle: "Fuutura Exchange"
    },
    {
        id: 1,
        tag: "Messaging",
        title: "Secure Chat",
        description: "Communicate directly with institutional partners in a secure, encrypted environment.",
        gif: "/Videos/Chat.gif",
        cardTitle: "Encrypted Messaging"
    },
    {
        id: 2,
        tag: "Identity",
        title: "Digital ID",
        description: "Verified on-chain identity for seamless compliance and instant onboarding.",
        gif: "/Videos/Id.gif",
        cardTitle: "Identity Verification"
    },
    {
        id: 3,
        tag: "Assets",
        title: "Wallet",
        description: "Manage your digital assets with enterprise-grade security and multi-sig support.",
        gif: "/Videos/Wallet.gif",
        cardTitle: "Fuutura Wallet"
    }
];

function Capabilities() {
    const [index, setIndex] = useState(0);

    // Function to cycle through 0, 1, 2, 3 and back to 0
    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex + 1) % platformData.length);
    };

    const current = platformData[index];

    return (
        <section
            onClick={handleNext}
            className='relative z-[10] font-futura flex flex-col lg:flex-row gap-24 bg-black p-12 md:p-24 min-h-screen items-center overflow-hidden cursor-pointer select-none'
        >
            {/* --- The Background Glow --- */}
            <div
                key={`glow-${index}`} // Key forces re-animation on click
                className="absolute pointer-events-none z-0 blur-[100px] opacity-70 transition-all duration-700"
                style={{
                    width: '832.422px',
                    height: '465.091px',
                    borderRadius: '832.422px',
                    background: 'linear-gradient(180deg, rgba(58, 123, 255, 0.70) 0%, rgba(58, 123, 255, 0.00) 86.35%)',
                    transform: 'rotate(12.921deg)',
                    top: '20%',
                    right: '-10%',
                }}
            />

            {/* Left Column: Text Content */}
            <div className='relative z-10 flex flex-col gap-4 max-w-xl animate-fade-in'>
                <div className="inline-flex w-fit items-center justify-center rounded-[32px] border border-[#3A7BFF] px-[24px] py-[8px] bg-white/5 backdrop-blur-sm">
                    <div className="flex flex-row items-center gap-3">
                        <GimIcon className="w-4 h-4" />
                        <span className="text-white font-futura text-sm font-medium uppercase tracking-widest">
                            Platform — {current.tag}
                        </span>
                    </div>
                </div>

                <h1 className="flex flex-row flex-wrap items-center gap-3">
                    <span className="text-[#FFF] font-futura text-[48px] md:text-[64px] font-bold leading-tight">
                        The
                    </span>
                    <span className="bg-[linear-gradient(90deg,#3486FF_0%,#14C7FF_87.66%)] font-futura bg-clip-text text-transparent text-[48px] md:text-[64px] font-bold leading-tight">
                        {current.title}
                    </span>
                </h1>

                <p className="text-[#FFF] font-futura text-[20px] md:text-[24px] font-normal leading-[140%] opacity-80">
                    {current.description}
                </p>

                <span className="text-white/30 text-xs mt-4 uppercase tracking-tighter">Click anywhere to switch module</span>
            </div>

            {/* Right Column: Featured Card */}
            <div className='relative z-10 w-full max-w-[530px] mx-auto lg:mx-0'>
                <div className='relative w-full aspect-[16/10] md:aspect-[4/3] rounded-[32px] border border-blue-500/30 overflow-hidden shadow-[0_0_50px_rgba(58,123,255,0.2)] flex flex-col items-center p-8'>

                    {/* The "Glass" Overlays */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-br from-blue-900/40 to-black/70" />
                    <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_50%_0%,rgba(58,123,255,0.3)_0%,transparent_70%)]" />

                    {/* Content */}
                    <h2 className="font-futura text-[#00C2FF] text-xl md:text-2xl font-bold relative z-40 tracking-wide mt-auto">
                        {current.cardTitle}
                    </h2>
                    {/* GIF Image */}
                    <div className="relative z-30 w-full h-full flex items-center justify-center p-4">
                        <Image
                            src={current.gif}
                            alt={current.title}
                            fill
                            className="object-contain p-8 transition-transform duration-500"
                            unoptimized
                        />
                    </div>



                    {/* Bottom Decorative Glow */}
                    <div className="absolute bottom-0 w-[120%] h-1/3 bg-blue-600/20 blur-[80px] rounded-full z-20 translate-y-1/2" />
                </div>
            </div>

            {/* Simple CSS for fade-in effect */}
            <style jsx>{`
                .animate-fade-in {
                    animation: fadeIn 0.5s ease-out forwards;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </section>
    );
}

export default Capabilities;