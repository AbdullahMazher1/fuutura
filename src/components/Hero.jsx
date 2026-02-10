import React from 'react'

const Hero = () => {
    return (
        <div
            className="bg-cover bg-top h-[840px] w-full"
            style={{ backgroundImage: "url('/hero11.gif')" }}
        >
            <div className="max-w-[800px] mx-auto flex flex-col gap-4 pt-28">

                <div className="mx-auto rounded-full px-6 py-2.5 border border-[#ffffff80] text-white bg-transparent backdrop-blur-md">
                    A New Market Exists
                </div>

                <h2 className="text-6xl font-bold text-white text-center">
                    A modern exchange{" "}
                    <span className="bg-gradient-to-r from-[#3A7BFF] to-[#00F0FF] bg-clip-text text-transparent">
                        built in Pakistan
                    </span>{" "}
                    for real markets and real people.
                </h2>
                <p className='text-lg text-white text-center'>Connecting people in Pakistan to modern markets, responsibly and transparently. Designed for oversight, trust, and long-term growth. Simple access to markets, built for local participation.</p>
                <div className='flex items-center max-w-max rounded-lg mx-auto justify-center px-6 py-3 text-white cursor-pointer text-sm bg-gradient-to-r from-[#3A7BFF] to-[#00F0FF]'>
                    Explore the Platform
                </div>
                <img className='-translate-y-[16%]' src="/hero22.gif" alt="" />
                {/* <div className='flex items-center justify-center gap-2 text-white text-sm'>
                    <img className='h-4' src="/2 11.png" alt="" />
                    Coming Soon
                </div> */}
            </div>
        </div>
    )
}

export default Hero
