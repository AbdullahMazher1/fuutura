"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Hero() {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: false,
    });

    // Generate small random translate values (max 4px)
    const randomOffset = () => Math.floor(Math.random() * 9) - 4;

    const iconOffsets = useMemo(() => {
        return [
            { x: randomOffset(), y: randomOffset() },
            { x: randomOffset(), y: randomOffset() },
            { x: randomOffset(), y: randomOffset() },
            { x: randomOffset(), y: randomOffset() },
        ];
    }, [inView]);

    return (
        <div
            ref={ref}
            className="relative flex flex-col text-center items-center justify-center overflow-hidden h-screen bg-black pt-16"
        >
            {/* Background Video */}
            <video
                src="/Videos/light2.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/50 -z-10" />

            {/* LEFT ICONS */}
            <motion.img
                src="/Images/icon (3).png"
                className="absolute left-[15%] top-[15%] w-14 md:w-40 opacity-50"
                initial={{ opacity: 0, x: 0, y: 0, rotate: -10 }}
                animate={
                    inView
                        ? { opacity: 0.5, x: iconOffsets[0].x, y: iconOffsets[0].y, rotate: -10 }
                        : { opacity: 0, x: 0, y: 0, rotate: -10 }
                }
                transition={{ duration: 0.8 }}
            />

            <motion.img
                src="/Images/icon (4).png"
                className="absolute left-[15%] bottom-[30%] w-14 md:w-40 opacity-50"
                initial={{ opacity: 0, x: 0, y: 0, rotate: 10 }}
                animate={
                    inView
                        ? { opacity: 0.5, x: iconOffsets[1].x, y: iconOffsets[1].y, rotate: 10 }
                        : { opacity: 0, x: 0, y: 0, rotate: 10 }
                }
                transition={{ duration: 0.8 }}
            />

            {/* RIGHT ICONS */}
            <motion.img
                src="/Images/icon (1).png"
                className="absolute right-[15%] top-[30%] w-20 md:w-40 opacity-50"
                initial={{ opacity: 0, x: 0, y: 0, rotate: 10 }}
                animate={
                    inView
                        ? { opacity: 0.5, x: iconOffsets[2].x, y: iconOffsets[2].y, rotate: 10 }
                        : { opacity: 0, x: 0, y: 0, rotate: 10 }
                }
                transition={{ duration: 0.8 }}
            />

            <motion.img
                src="/Images/icon (2).png"
                className="absolute right-[10%] bottom-[30%] w-14 md:w-40 opacity-50"
                initial={{ opacity: 0, x: 0, y: 0, rotate: -10 }}
                animate={
                    inView
                        ? { opacity: 0.5, x: iconOffsets[3].x, y: iconOffsets[3].y, rotate: -10 }
                        : { opacity: 0, x: 0, y: 0, rotate: -10 }
                }
                transition={{ duration: 0.8 }}
            />


            {/* TITLE */}
            <h2 className="pt-20 font-futura text-white text-[30px] md:text-[38px] font-bold mb-6 leading-tight z-10 relative">
                Market <span className="text-[#00A3FF]">infrastructure</span> Build For
                Scale, <br />
                Oversight, And{" "}
                <span className="text-[#00A3FF]">Durability</span>.
            </h2>

            {/* DESCRIPTION */}
            <p className="font-futura text-white/60 text-xl max-w-2xl mx-auto leading-relaxed z-10 relative">
                Fuutura is an exchange-first platform designed to modernise access to
                markets in a responsible, regulation-aligned way.
            </p>

            {/* GLOBE */}
            <motion.div
                className="mt-10 z-10 relative"
                initial={{ opacity: 0, y: 100 }}
                animate={
                    inView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 100 }
                }
                transition={{ duration: 1 }}
            >
                <motion.img
                    src="/Images/Earth.png"
                    alt="Earth"
                    className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] object-contain"
                    animate={inView ? { rotate: 360 } : { rotate: 0 }}
                    transition={{
                        repeat: inView ? Infinity : 0,
                        duration: 15,
                        ease: "linear",
                    }}
                />
            </motion.div>
        </div>
    );
}

export default Hero;
