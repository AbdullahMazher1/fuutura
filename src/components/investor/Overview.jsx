"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Overview() {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: false,
    });

    const cardBase =
        "font-futura backdrop-blur-md bg-white/5 border border-white/10 rounded-[8px] p-8 pt-12 pb-12 w-[260px] max-h-[280px] text-white shadow-xl";

    const cardSurface = {
        background:
            "radial-gradient(100% 60% at 20% 100%, rgba(0, 89, 112, 0.01) 0%, rgba(11, 11, 13, 0.01) 100%)",
    };

    return (
        <div
            className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat font-futura"
            style={{ backgroundImage: "url('/Images/Overview.png')" }}
        >
            <div className="absolute inset-0 bg-black/5" />

            <div
                ref={ref}
                className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20 px-6 lg:px-20 py-20 lg:py-32 items-center justify-center"
            >
                {/* LEFT SECTION */}
                <div className="flex flex-col gap-6 max-w-xl text-center lg:text-left px-4 lg:px-0">
                    <h2 className="font-futura text-3xl sm:text-4xl font-semibold text-white">
                        Platform Overview
                    </h2>
                    <p className="font-futura text-gray-300 leading-relaxed text-base sm:text-lg">
                        A unified trading platform designed to deliver secure access,
                        transparent execution, and scalable market infrastructure in one place.
                    </p>
                </div>

                {/* RIGHT SECTION (Cards) */}
                <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* GIF Background */}
                    <div className="absolute left-[10%] top-[10%] inset-0 -z-10">
                        <img
                            src="/Videos/glow.gif"
                            alt="Stars Background"
                            className="w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] object-cover opacity-50"
                        />
                    </div>

                    {/* Cards */}
                    {[
                        { title: "Unified Exchange Layer", desc: "A single execution layer built to support multiple asset types. Designed to deliver consistency, performance, and operational simplicity.", initial: { x: -80, y: -80 } },
                        { title: "Markets & Products", desc: "Access to digital assets and tokenized instruments. Connected to regulated markets, subject to required approvals.", initial: { x: 80, y: -80 } },
                        { title: "Unified Exchange Layer", desc: "A single execution layer built to support multiple asset types. Designed to deliver consistency, performance, and operational simplicity.", initial: { x: -80, y: 80 } },
                        { title: "Payments & Settlement", desc: "Efficient capital movement in and out of markets. Structured for operational clarity, reliability, and control.", initial: { x: 80, y: 80 } },
                    ].map((card, index) => (
                        <motion.div
                            key={index}
                            style={cardSurface}
                            className={cardBase + " mx-auto sm:mx-0"}
                            initial={{ opacity: 0, ...card.initial }}
                            animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <h3 className="font-futura text-lg font-semibold mb-3 text-center sm:text-left">
                                {card.title}
                            </h3>
                            <p className="font-futura text-sm text-gray-300 leading-relaxed text-center sm:text-left">
                                {card.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Overview;
