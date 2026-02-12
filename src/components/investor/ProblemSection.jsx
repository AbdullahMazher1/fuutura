"use client";
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const ProblemSection = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: false,
    });

    const problems = [
        "Multiple Platforms",
        "Disconnected Payment Rails",
        "Opaque Execution",
        "Unclear Custody And Risk Exposure"
    ];

    return (
        /* 1. Removed outer margins - Container now spans full width edges */
        <section className="relative w-full bg-black overflow-hidden">
            <div className="relative w-full min-h-[550px] border-y border-white/10 bg-[#0B0B0D] overflow-hidden pt-16 pb-12">

                {/* 3 & 4. Blended Background Layers */}
                {/* Blended Background Layers */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                        src="/Images/secondInvestor.png"
                        alt="Background"
                        className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity"
                        style={{
                            transform: 'scale(1.15)',
                            transformOrigin: 'center'
                        }}
                    />

                    {/* Centered GIF */}
                    <img
                        src="/Videos/secondInvestor.gif"
                        alt="Background GIF"
                        className="absolute 
             top-1/2 left-1/2 
             -translate-x-1/2 -translate-y-1/2
             w-[380px] sm:w-[340px] md:w-[1000px]
             h-auto
             object-contain
             opacity-[0.05]
             mix-blend-screen
             [mask-image:radial-gradient(circle,rgba(0,0,0,1)_60%,rgba(0,0,0,0)_100%)]
             [-webkit-mask-image:radial-gradient(circle,rgba(0,0,0,1)_60%,rgba(0,0,0,0)_100%)]"
                    />
                </div>


                {/* 2. Content Layer - Left Aligned */}
                <div
                    ref={ref}
                    className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center justify-between px-12 lg:px-24 py-24 gap-16"
                >
                    {/* Left Side: Problem Text */}
                    <div className={`flex-1 transition-all duration-1000 transform ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
                        }`}>
                        <h2 className="font-futura text-white text-[48px] font-bold mb-8 leading-none">
                            The Problem
                        </h2>
                        <p style={{
                            fontFamily: '"Futura PT", sans-serif',
                            fontWeight: 400,
                            fontSize: '20px',
                            lineHeight: '39px',
                            color: 'rgba(255, 255, 255, 0.9)',
                            maxWidth: '560px'
                        }}>
                            Access to markets remains fragmented, expensive, and operationally
                            inefficient — particularly in emerging economies. Participants
                            are forced to navigate. This creates friction, limits
                            participation, and constrains market growth.
                        </p>
                    </div>

                    {/* Right Side: Problem Cards with specific alignment and hover */}
                    <div className={`font-futura flex flex-col gap-4 w-full max-w-[420px] transition-all duration-1000 transform ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                        }`}>
                        {problems.map((text, index) => (
                            <ProblemCard key={index} text={text} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

/* 5. Sub-component for Hover Interaction */
const ProblemCard = ({ text }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative cursor-pointer rounded-[12px] border border-white/10 overflow-hidden px-5 py-4 transition-all duration-[1500ms]"
            style={{
                background: `radial-gradient(
            89.9% 95.19% at 0% 0%, 
            rgba(167, 167, 167, 0.2) 0%, 
            rgba(0, 89, 112, 0.1) 100%
        )`
            }}
        >
            {/* Backdrop blur */}
            <div className="absolute inset-0 backdrop-blur-xl -z-10" />

            {/* Default 4px blue left border */}
            <div
                className="absolute left-0 top-0 bottom-0 bg-[#3A7BFF]/20 transition-all duration-[1500ms] ease-in-out z-20"
                style={{
                    width: isHovered ? '0' : '7px'
                }}
            />

            {/* Animated Blue Background on Hover - expands from left */}
            <div
                className="absolute inset-0 bg-[#3A7BFF]/20 transition-all duration-[1500ms] ease-in-out origin-left"
                style={{
                    transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left'
                }}
            />

            <p className={`relative z-10 font-futura text-[18px] md:text-[20px] transition-all duration-100 ${isHovered ? 'text-white' : 'text-white'
                }`}>
                {text}
            </p>
        </div>

    );
};

export default ProblemSection;