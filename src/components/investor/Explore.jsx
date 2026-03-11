import Link from 'next/link';
import React from 'react'

function Explore() {
    return (
        <section className="relative w-full bg-black/20 flex flex-col items-center justify-start overflow-hidden bg-black text-white pt-36 pb-36">

            {/* 1. Background Video */}
            <video
                autoPlay loop muted playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
            >
                <source src="/Videos/Rectangle.mp4" type="video/mp4" />
            </video>
            <div>
                <h2 className="font-futura text-white text-[30px] md:text-[38px] font-bold mb-6 leading-tight z-10 relative">
                    EXPLORE THE <span className="text-[#00A3FF]">ECOSYSTEM</span>
                </h2>
            </div>
            <div className='mt-20'>
                <Link
                    href={'/ecosystem'}
                    className="px-10 py-3 bg-transparent backdrop-blur-md transition-all duration-300 font-futura text-lg text-white hover:shadow-[0_0_20px_rgba(10,124,255,0.4)] active:scale-95"
                    style={{
                        borderRadius: '12px',
                        border: '1px solid #0A7CFF',
                    }}
                >
                    Explore ECOSYSTEM
                </Link>
            </div>
        </section>
    )
}

export default Explore
