import React from 'react'

const Second = () => {
  return (
    <div className="bg-animated-border bg-[#ffffff41] p-[1px] h-[380px] 
    max-w-[1000px] mx-auto rounded-3xl my-12 sm:my-16 lg:my-20 px-4">

      <div
        className="rounded-3xl p-4 sm:p-5 bg-[#151A24] bg-center bg-no-repeat bg-cover h-full"
        style={{ backgroundImage: "url('/ll.png')" }}
      >
        <div
          className="bg-center bg-no-repeat bg-cover h-full 
          w-full flex flex-col lg:flex-row items-center gap-6 rounded-3xl p-4 sm:p-6"
          style={{ backgroundImage: "url('/hhhh.png')" }}
        >

          {/* Text */}
          <div className="space-y-3 flex-1 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              WHAT{" "}
              <span className="bg-gradient-to-r from-[#3A7BFF] to-[#00F0FF] bg-clip-text text-transparent">
                FUUTURA
              </span>{" "}
              IS
            </h2>

            <p className="text-sm sm:text-base text-white max-w-md mx-auto lg:mx-0">
              Fuutura Trade is at its core. Everything around it exists to make market access easier, safer, and more reliable for users in Pakistan.
            </p>
          </div>

          {/* Image */}
          <div className="flex-1 w-full flex justify-center items-center">
            <img
              src="/Videos/trade.gif"
              alt=""
              className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-full 
              h-auto rounded-xl"
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Second
