"use client";

import { useInView } from "react-intersection-observer";

const Moderan = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <section
      ref={ref}
      className="group relative w-full lg:min-h-screen overflow-hidden"
      style={{ backgroundColor: "#00030A" }}
    >
      {/* ================= DESKTOP GLOBE BACKGROUND (hover) ================= */}
      <div
        className="hidden lg:block absolute inset-0 bg-center bg-no-repeat bg-cover transition-all duration-[4000ms] ease-in-out opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0"
        style={{ backgroundImage: `url('/Images/globebg.png')` }}
      />

      {/* ================= MOBILE GLOBE BACKGROUND (when section in view) ================= */}
      <div
        className={`lg:hidden absolute inset-0 bg-center bg-no-repeat bg-cover transition-all duration-[4000ms] ease-in-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
        }`}
        style={{ backgroundImage: `url('/Images/globebg.png')` }}
      />

      {/* ================= IMAGE ================= */}
      {/* Desktop version (unchanged) */}
      <img
        src="/Images/moderan1.jpg"
        alt=""
        className="
    hidden lg:block
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
    transform-gpu
    translate-y-0 opacity-100
    translate-x-[-35%]
    group-hover:translate-y-[50%] group-hover:opacity-0
    z-10

    [mask-image:linear-gradient(to_right,transparent_0%,black_50%,black_100%)]
    [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_25%,black_100%)]
  "
        style={{
          minWidth: "50%",
        }}
      />


      {/* Mobile background image - fades out when section in view so globe shows */}
      <div
        className={`lg:hidden absolute inset-0 bg-cover bg-center transition-all duration-[4000ms] ease-in-out ${
          inView ? "opacity-0" : "opacity-100"
        }`}
        style={{ backgroundImage: `url('/Images/moderan1.jpg')` }}
      />

      {/* Mobile dark overlay */}
      <div className="lg:hidden absolute inset-0 bg-black/70" />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 max-w-[1300px] mx-auto px-6 lg:px-0 pt-16">
        {/* Heading */}
        <div className="text-center space-y-4 transition-transform duration-[4000ms] ease-in-out lg:group-hover:translate-y-4">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold">
            Simple Access to Modern Markets
          </h2>
          <p className="font-futura text-base sm:text-lg lg:text-[18px] font-normal text-white/70">
            Markets shouldn't feel complicated
          </p>
        </div>
      </div>

      {/* ================= BODY TEXT ================= */}

      {/* Desktop text (unchanged position) */}
      <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 z-10 pl-6 lg:pl-12 max-w-[50%]">
        <div className="text-white text-lg leading-loose transition-opacity duration-[2000ms] ease-in-out opacity-100 group-hover:opacity-0 font-futura text-lg sm:text-xl lg:text-[22px] font-normal">
          <h3 className="font-futura text-lg sm:text-xl lg:text-[22px] font-normal text-white/80 leading-relaxed sm:leading-loose">
            Fuutura brings execution, transfers, and market <br />
            access together in one calm, easy-to-use platform. <br />
            Built to be fast and cost-efficient — without <br />
            unnecessary complexity or hidden layers. <br />
            Just clear, straightforward access to markets.
          </h3>
        </div>
      </div>

      {/* Mobile centered text */}
      <div className="lg:hidden relative z-10 px-6 pt-12 pb-12 text-center text-white">
        <h3 className="text-base sm:text-lg leading-relaxed font-futura text-lg sm:text-xl lg:text-[22px] font-normal text-white/80">
          Fuutura brings trading, payments, and market access together in one
          calm, easy-to-use platform. Built to be fast and cost-efficient —
          without unnecessary complexity or hidden layers. Just clear,
          straightforward access to markets.
        </h3>
      </div>
    </section>
  );
};

export default Moderan;