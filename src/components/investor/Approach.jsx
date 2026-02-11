"use client";
import React from 'react';
import { useInView } from 'react-intersection-observer';

const Approach = () => {
    // Trigger animation when 20% of the section is visible
    const { ref, inView } = useInView({
        threshold: 0.2, // 20% in view
        triggerOnce: false,
    });

    const cards = [
        {
            title: "Clear Execution",
            description:
                "Trades are executed with precision, speed, and full clarity, ensuring users always understand how and when their orders are filled."
        },
        {
            title: "Transparent Operations",
            description:
                "Every action, flow, and outcome is fully visible and traceable, removing opacity and building long-term trust."
        },
        {
            title: "Institutional Readiness",
            description:
                "Built on robust, compliant infrastructure that meets the operational, regulatory, and scale demands of institutional participants."
        }
    ];

    return (
        <section
            ref={ref}
            className="relative w-full min-h-screen bg-black flex items-center justify-center overflow-hidden"
        >
            {/* --- BACKGROUND LAYER --- */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/Images/Approach.png"
                    alt="Approach Background"
                    className="w-full h-full object-cover"
                />
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background:
                            'radial-gradient(89.9% 95.19% at 0% 0%, rgba(167, 167, 167, 0.1) 0%, rgba(0, 89, 112, 0.1) 100%)'
                    }}
                />
            </div>

            {/* --- CONTENT LAYER --- */}
            <div className="relative z-10 w-full max-w-7xl px-6 py-24 flex flex-col items-center">

                {/* Header Section - Animates based on view */}
                <div
                    className={`text-center mb-20 transition-all duration-700 ease-out transform ${inView
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 -translate-y-20'
                        }`}
                >
                    <h2 className="font-futura text-white text-[40px] md:text-[40px] font-bold mb-6 tracking-tight">
                        The Fuutura Approach
                    </h2>
                    <p className="font-futura text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
                        Fuutura brings execution, payments, and market access together into a single, unified platform.
                    </p>
                </div>

                {/* Cards Grid Container */}
                <div className="flex flex-col md:flex-row gap-8 w-full justify-center items-center">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            style={{
                                transitionDelay: inView ? `${index * 200}ms` : '0ms'
                            }}
                            className={`group relative h-[360px] w-full max-w-[380px] transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'
                                }`}
                        >
                            <div className="h-full w-full transition-transform duration-500 ease-out cursor-pointer hover:-translate-y-5">
                                <div
                                    className="relative h-full w-full rounded-[8px] flex flex-col items-center justify-center p-10 text-center overflow-hidden shadow-2xl transition-opacity duration-500"
                                    style={{
                                        background:
                                            'radial-gradient(100% 60% at 20% 100%, rgba(0, 89, 112, 1) 0%, rgba(11, 11, 13, 0.1) 100%)'
                                    }}
                                >
                                    {/* Glow effect */}
                                    <div
                                        className="absolute bottom-[-20%] left-0 w-full h-[60%] blur-[50px] pointer-events-none opacity-50"
                                        style={{
                                            background:
                                                'radial-gradient(50% 50% at 50% 100%, #00A3FF 0%, transparent 100%)'
                                        }}
                                    />

                                    <h3 className="font-futura text-white text-[28px] font-bold mb-6">
                                        {card.title}
                                    </h3>
                                    <p className="font-futura text-white/70 text-[18px] leading-[1.6]">
                                        {card.description}
                                    </p>

                                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-blue-500/5 to-transparent pointer-events-none" />

                                    <div className="absolute inset-0 border border-transparent group-hover:border-blue-500/80 rounded-[8px] transition-colors duration-500" />
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Approach;
