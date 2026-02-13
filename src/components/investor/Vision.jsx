import React from 'react'

function Vision() {

    const cardSurface = {
        background:
            "radial-gradient(100% 60% at 20% 100%, rgba(0, 89, 112, 0.1) 0%, rgba(11, 11, 13, 0.1) 100%)",
    };

    return (
        <div className="relative w-full pt-32 pb-60 flex flex-col gap-12 items-center justify-center bg-black/50">
            {/* Background GIF */}
            <div className="absolute inset-0 -z-10">
                <img
                    src="/Videos/anim1.gif"
                    alt="Background Animation"
                    className="w-full h-full object-cover mix-blend-overlay"
                    style={{
                        // Creates a smooth fade on all edges (Top, Bottom, Left, Right)
                        WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
                        maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
                    }}
                />
                <div className="absolute inset-0 bg-black/80"></div>
            </div>

            {/* Content: Title + Paragraph inline */}
            <div className="flex flex-col items-center justify-center gap-4 max-w-[90%] text-center">
                <div className="flex flex-col flex-wrap items-center justify-center gap-3">
                    <span className="text-white font-futura text-[40px] md:text-[50px] font-bold leading-tight">
                        Long-Term{" "}
                        <span className="bg-[linear-gradient(90deg,#3486FF_0%,#14C7FF_87.66%)] font-futura bg-clip-text text-transparent text-[42px] md:text-[50px] font-bold leading-tight">
                            Vision
                        </span>
                    </span>


                    <p className="font-futura text-[18px] leading-[35px] text-gray-100">
                        Fuutura is not built to chase trends. It is built to become market infrastructure.
                    </p>
                </div>
            </div>


            {/* Buttons */}
            <div className="flex flex-row gap-12 mt-10 flex-wrap justify-center">

                <button
                    className="px-10 py-3 bg-transparent border border-white/20 rounded-[8px] backdrop-blur-md transition-all duration-300 font-futura text-lg text-white hover:shadow-[0_0_20px_rgba(10,124,255,0.4)] active:scale-95"
                    style={cardSurface}
                >
                    Long-term relevance
                </button>
                <button
                    className="px-10 py-3 bg-transparent border border-white/20 rounded-[8px] backdrop-blur-md transition-all duration-300 font-futura text-lg text-white hover:shadow-[0_0_20px_rgba(10,124,255,0.4)] active:scale-95"
                    style={cardSurface}
                >
                    Measured Growth
                </button>
                <button
                    className="px-10 py-3 bg-transparent border border-white/20 rounded-[8px] backdrop-blur-md transition-all duration-300 font-futura text-lg text-white hover:shadow-[0_0_20px_rgba(10,124,255,0.4)] active:scale-95"
                    style={cardSurface}
                >
                    Clear Governance
                </button>
            </div>
        </div>
    )
}

export default Vision