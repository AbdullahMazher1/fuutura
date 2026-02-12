'use client'

const Moderan = () => {

  return (
    <section className="group relative w-full min-h-screen overflow-hidden" style={{ backgroundColor: '#00030A' }}>
      {/* Base background color #00030A when not hovered */}
      {/* Globe background - comes from below on hover */}
      <div 
        className="absolute inset-0 bg-center bg-no-repeat bg-cover transition-all duration-[4000ms] ease-in-out opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0"
        style={{ backgroundImage: `url('/Images/globebg.png')` }}
      />
      
      {/* Moderan image - positioned on right side, full height, starts from middle */}
      <img
        src="/Images/moderan1.jpg"
        alt=""
        className="
          absolute
          h-full
          w-full
          left-1/2
          right-0
          top-0
          bottom-0
          object-contain
          object-right
          transition-all duration-[4000ms] ease-in-out
          transform-gpu will-change-transform will-change-opacity
          translate-y-0 opacity-100
          translate-x-[-45%]
          group-hover:translate-y-[50%] group-hover:opacity-0
          z-20

        "
        style={{
          minWidth: '50%',
          width: 'full',
        }}
      />
      
      <div className="relative z-[9999999] max-w-[1300px] mx-auto space-y-7 pt-16">
        <div className="text-center space-y-4 transition-transform duration-[4000ms] ease-in-out group-hover:translate-y-4">
          <h2 className="text-4xl text-white font-semibold z-[9999999]">Simple Access to Modern Markets</h2>
          <p className="text-sm font-medium text-white">Markets shouldn't feel complicated</p>
        </div>
      </div>

      {/* Text positioned exactly in the middle left side */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-[9999999] pl-6 lg:pl-12 max-w-[50%]">
        <div className="flex items-center gap-6 text-white text-lg !leading-loose transition-opacity duration-[2000ms] ease-in-out opacity-100 group-hover:opacity-0">
          <h3>
            Fuutura brings trading, payments, and market <br /> access together in one calm, easy-to-use platform. <br /> Built to be fast and cost-efficient — without <br /> unnecessary complexity or hidden layers. <br /> Just clear, straightforward access to markets.
          </h3>
        </div>
      </div>
    </section>
  )
}

export default Moderan