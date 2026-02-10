import React from 'react'

const Second = () => {
    return (
        <div className='bg-animated-border bg-[#ffffff41] p-[1px] max-w-[1000px] mx-auto rounded-3xl !my-20'>
            <div className='rounded-3xl p-5 bg-[#151A24] bg-center bg-no-repeat bg-cover' style={{ backgroundImage: "url('/ll.png')" }}>
                <div className='bg-center bg-no-repeat bg-cover h-[360px] w-full flex items-center gap-6 rounded-3xl' style={{ backgroundImage: "url('/hhhh.png')" }}>
                    <div className='space-y-2 flex-1 p-8'>
                        <h2 className="text-4xl font-bold text-white">
                            WHAT <span className="bg-gradient-to-r from-[#3A7BFF] to-[#00F0FF] bg-clip-text text-transparent"> FUUTURA
                            </span>{" "}
                            IS
                        </h2>
                        <p className='text-base text-white'>Fuutura is an exchange at its core.Everything around it exists to make market access easier, safer, and more reliable for users in Pakistan.</p>
                    </div>
                    <div className='flex-1 w-full flex justify-center items-center'>
                        <img
                            src="/x.gif"
                            alt=""
                            className="w-full h-[600px] object-cover rounded-xl"
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Second
