"use client";
import React from 'react';
import { useInView } from 'react-intersection-observer';

const Approach = () => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: false,
    });

    const cards = [
        {
            title: "Clear Execution",
            description: "Executing with precision, speed, and full clarity, ensuring users always understand how and when their orders are filled.",
            image: "/Images/Safer (1).png",
        },
        {
            title: "Transparent Operations",
            description: "Every action, flow, and outcome is fully visible and traceable, removing opacity and building long-term trust.",
            image: "/Images/Safer (2).png",
        },
        {
            title: "Institutional Readiness",
            description: " Built on robust, compliant infrastructure that meets the operational, regulatory, and scale demands of institutional participants.",
            image: "/Images/Safer (3).png",
        },
    ];

    return (
        <section
            ref={ref}
            className="relative w-full min-h-screen bg-black flex items-center justify-center overflow-hidden"
        >
            <div className="absolute inset-0 z-0">
                <img
                    src="/Images/Approach.png"
                    alt="Approach Background"
                    className="w-full h-full object-cover"
                />
                <div
                    style={{
                        background:
                            'radial-gradient(89.9% 95.19% at 0% 0%, rgba(167, 167, 167, 0.1) 0%, rgba(0, 89, 112, 0.1) 100%)'
                    }}
                    className="absolute inset-0 pointer-events-none"
                />
            </div>

            <div className="relative z-10 w-full max-w-7xl px-6 py-24 flex flex-col items-center">

                <div
                    className={`text-center mb-16 md:mb-28 transition-all duration-700 ease-out transform ${inView
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 -translate-y-20'
                        }`}
                >
                    <h2 className="font-futura text-white text-[32px] md:text-[42px] font-bold mb-3 tracking-tight">
                        The <span className="text-[#00A3FF]">Fuutura</span> Approach
                    </h2>
                    <p className="font-futura text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Fuutura brings execution, payments, and market access together into a single, unified platform.
                    </p>
                </div>

                {/* --- FIX: Added items-center to ensure mobile centering --- */}
                <div className="flex flex-col md:flex-row gap-8 w-full justify-center items-center md:items-stretch">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            style={{
                                transitionDelay: inView ? `${index * 200}ms` : "0ms",
                            }}
                            className={`group relative h-[300px] w-full max-w-[320px] transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] transform ${inView
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-32"
                                }`}
                        >
                            <div className="h-full w-full transition-transform duration-500 ease-out cursor-pointer hover:-translate-y-5">
                                <div className="relative h-full w-full rounded-[12px] overflow-hidden">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />

                                    <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-10">
                                        <div className="flex flex-col items-center gap-[16px] md:gap-[24px] max-w-[280px]">
                                            <h3 className="font-futura text-white text-[20px] md:text-[22px] leading-[27px] font-bold capitalize">
                                                {card.title}
                                            </h3>
                                            <p className="font-futura text-white/80 text-[14px] md:text-[16px] leading-[24px] md:leading-[29px]">
                                                {card.description}
                                            </p>
                                        </div>
                                    </div>
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