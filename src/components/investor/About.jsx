"use client";
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    // Animation Variants - High-end "Slide & Stick"
    const leftContentVariants = {
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const rightContentVariants = {
        hidden: { x: 100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const featureItems = [
        { 
            text: "Secure processing with strong safeguards at every step.",
            icon: "/Images/Shield.png"
        },
        { 
            text: "Designed to align with evolving regulatory and compliance standards.",
            icon: "/Images/Rocket.png"
        },
        { 
            text: "Infrastructure that grows seamlessly with volume, users, and markets.",
            icon: "/Images/Setting.png"
        },
    ];

    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black border-y border-white/10">
            
            {/* --- BACKGROUND LAYER --- */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/Images/About.png" 
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-100"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-100" /> */}
            </div>

            {/* --- MAIN CONTENT GRID --- */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="relative z-10 max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-stretch px-6 md:px-20" 
            >
                {/* LEFT COMPONENT: Slides in from left and sticks */}
                <motion.div 
                    variants={leftContentVariants} 
                    className="flex flex-col justify-center space-y-8 py-32 pr-10"
                >
                    <h2 className="font-futura text-4xl md:text-4xl lg:text-6xl font-futura text-white leading-[1.1] tracking-tight">
                        What Fuutura Is
                    </h2>
                    <div className="font-futura text-gray-400 space-y-5 max-w-md text-base md:text-lg leading-relaxed">
                        <p>Fuutura is built for market access.</p>
                        <p className="font-futura opacity-80">
                            All supporting systems exist to enable this design allows the 
                            platform to operate sustainably across market conditions.
                        </p>
                    </div>
                </motion.div>

                {/* RIGHT COMPONENT: Slides in from right and sticks (Includes the Line) */}
                <motion.div
                    variants={rightContentVariants}
                    className="relative flex flex-col justify-center py-32"
                >
                    {/* THE LINE: Moves with the component and touches edges via overshoot */}
                    <div className="absolute left-0 top-[-500px] bottom-[-500px] w-[1px] bg-blue-500/20" />
                    <div className="absolute left-[-1px] top-[-500px] bottom-[-500px] w-[2px] bg-gradient-to-b from-transparent via-blue-500 to-transparent shadow-[0_0_25px_rgba(59,130,246,0.5)]" />

                    {/* ICONS & TEXT: Icons are centered EXACTLY on the line above */}
                    <div className="flex flex-col space-y-24 pl-16 md:pl-24">
                        {featureItems.map((item, index) => (
                            <div key={index} className="relative flex items-center group">
                                
                                {/* PNG ICON: Positioned absolutely to sit on the moving line */}
                                <div className="absolute left-[-64px] md:left-[-96px] w-14 h-14 md:w-20 md:h-20 flex items-center justify-center translate-x-[-50%]">
                                    {/* Hover Glow Effect */}
                                    <div className="absolute inset-0 bg-blue-500/25 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    
                                    <img 
                                        src={item.icon} 
                                        alt="Feature Icon"
                                        className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_15px_rgba(96,165,250,0.6)] group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                
                                <p className="font-futura text-gray-300 text-sm md:text-base lg:text-lg max-w-sm group-hover:text-white transition-all duration-300 leading-snug">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;