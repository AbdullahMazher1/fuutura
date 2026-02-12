import React from 'react'

function Opportunity() {
    return (
        <div className="flex flex-row bg-black items-center justify-center gap-8 flex-wrap pt-32 pb-32">
            {/* Left Content */}
            <div className="text-white flex flex-col max-w-[350px]">
                <h2 className="font-futura text-white text-[35px] mb-8 leading-none">
                    Market Opportunity
                </h2>
                <p className="font-futura text-[18px] leading-[35px] text-gray-100">
                    Emerging markets represent significant demand for accessible, lower-cost trading infrastructure.
                    Fuutura sits at the intersection of:

                </p>
            </div>

            {/* Center GIF */}
            <div className="flex justify-center items-center">
                <img
                    src="/Videos/1.21.gif"
                    alt="Background GIF"
                    className="w-[400px] h-auto object-contain"
                />
            </div>

            {/* Right Content */}
            <div className="font-futura text-white text-[24px] flex flex-col items-start gap-4">
                <div>Responsible financial innovation</div>
                <div>Traditional market access</div>
                <div>Digital participation</div>
            </div>
        </div>
    )
}

export default Opportunity
