'use client'
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const LoaderBanner = ({ onAnimationComplete }) => {
    const [slideUp, setSlideUp] = useState(false);
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        const handleScroll = () => {
            if (!slideUp) setSlideUp(true);
        };
        window.addEventListener('wheel', handleScroll);
        window.addEventListener('touchmove', handleScroll);
        return () => {
            window.removeEventListener('wheel', handleScroll);
            window.removeEventListener('touchmove', handleScroll);
        };
    }, [slideUp]);
    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: slideUp ? '-120%' : 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                onAnimationComplete={() => {
                    if (slideUp) {
                        document.body.style.overflow = 'auto';
                        if (onAnimationComplete) onAnimationComplete();
                    }
                }}
                className="fixed top-0 left-0 w-full h-[100vh] bg-no-repeat bg-bottom bg-cover
                bg-[url('/LoaderBannerMobile.svg')]
                md:bg-[url('/LoaderBanner.svg')]">
                <div className='h-full w-full flex items-center justify-center flex-col'>
                    <img src="
                    /centericon.gif
                    " className='md:h-[520px]' alt="" />
                    <div onClick={() => setSlideUp(true)} className='md:absolute z-40 right-8 top-[80%] overflow-hidden rounded-full cursor-pointer group p-[1px] custom-gradient'>
                        <div className='hover:bg-[#21242C] backdrop-blur-[50px] flex items-center p-1.5 ounded-full'>
                            <span className='flex items-center justify-center bg-gradient-to-r from-[#3A7BFF] to-[#00F0FF] size-[52px] rounded-full'>
                                <svg width="20" height="20" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.4762 15.5238L12 25.0476M12 25.0476L12 3.14284M12 25.0476L21.5238 15.5238" stroke="white" stroke-width="3.80952" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                            <p className='text-white px-4 text-sm hidden group-hover:block'>
                                Scroll Down
                            </p>
                        </div>
                    </div>
                    <div className='md:hidden h-[80px]'></div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};
export default LoaderBanner;