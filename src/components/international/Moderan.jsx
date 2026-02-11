'use client'

const Moderan = () => {

  return (
    <section className="group relative w-full pt-16 overflow-hidden">
      {/* Base background - no hover state */}
      <div 
        className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-20"
        style={{ backgroundImage: `url('/Images/nothoverbg.jpg')` }}
      />
      
      {/* Globe background - comes from below on hover */}
      <div 
        className="absolute inset-0 bg-center bg-no-repeat bg-cover transition-all duration-[4000ms] ease-in-out opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0"
        style={{ backgroundImage: `url('/Images/globebg.png')` }}
      />
      <div className="relative z-10 max-w-[1300px] mx-auto space-y-7">
        <div className="text-center space-y-4 transition-transform duration-[4000ms] ease-in-out group-hover:translate-y-4">
          <h2 className="text-4xl text-white font-semibold">Simple Access to Modern Markets</h2>
          <p className="text-sm font-medium text-white">Markets shouldn’t feel complicated</p>
        </div>

        <div className="flex items-center gap-6 mt-10">
          <div className="flex-1">
            <div className="flex items-center gap-6 text-white text-lg !leading-loose transition-opacity duration-[2000ms] ease-in-out opacity-100 group-hover:opacity-0">
              <h3>
                Fuutura brings trading, payments, and market <br /> access together in one calm, easy-to-use platform. <br /> Built to be fast and cost-efficient — without <br /> unnecessary complexity or hidden layers. <br /> Just clear, straightforward access to markets.
              </h3>
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="relative h-[400px] overflow-hidden flex items-center justify-center w-full">

              <img
                src="/Images/moderan.png"
                alt=""
                className="
        absolute h-[400px]
        transition-all duration-[4000ms] ease-in-out
        transform-gpu will-change-transform will-change-opacity
        translate-y-0 opacity-100
        group-hover:translate-y-[50%] group-hover:opacity-0
      "
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Moderan