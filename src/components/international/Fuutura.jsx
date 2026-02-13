"use client";

import React, { useState, useEffect } from "react";
// Import the hook from the library
import { useInView } from "react-intersection-observer";

/* ================= CARD SHELL ================= */
function CardShell({
  className = "",
  children,
  isHovered = false,
  isFirstDeck = false,
}) {
  return (
    <div
      className={[
        "relative rounded-[33px] p-[3px]",
        "bg-[linear-gradient(169.15deg,rgba(10,124,255,0.45)_0%,rgba(58,123,255,0.25)_86.79%)]",
        className,
      ].join(" ")}
    >
      <div
        className="h-full w-full rounded-[31px] overflow-hidden"
        style={{
          background:
            "radial-gradient(120% 120% at 0% 0%, rgb(7, 16, 41) 0%, rgb(1, 12, 32) 100%)",
        }}
      >
        {children}
      </div>
    </div>
  );
}

/* ================= STACK CARD ================= */

function StackCard({
  width,
  height,
  label,
  imgSrc,
  zIndex,
  openX,
  closedX,
  isOpen,
  isFirstDeck = false,
  scale = 1,
  isMobile = false,
}) {
  const getTransform = () => {
    return `translateX(${(isOpen ? openX : closedX) * scale}px) translateY(-50%)`;
  };

  return (
    <div
      className={
        isMobile
          ? "relative w-full max-w-[320px] mx-auto"
          : "absolute right-0 top-1/2 transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
      }
      style={
        isMobile
          ? { height: "200px" }
          : {
              width: `${width * scale}px`,
              height: `${height * scale}px`,
              zIndex,
              transform: getTransform(),
            }
      }
    >
      <CardShell
        className="h-full w-full"
        isHovered={isMobile ? true : isOpen}
        isFirstDeck={isFirstDeck}
      >
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 lg:gap-6 px-4">
          <img
            src={imgSrc}
            alt=""
            className="h-16 w-16 lg:h-[110px] lg:w-[110px] object-contain drop-shadow-[0_0_30px_rgba(0,194,255,0.35)]"
          />
          <div className="pb-2 font-futura text-lg lg:text-[26px] text-white/95 text-center">
            {label}
          </div>
        </div>
      </CardShell>
    </div>
  );
}

/* ================= MAIN COMPONENT ================= */

function Fuutura() {
  const [scale, setScale] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  // Setup the Intersection Observer
  // threshold: 0.2 means trigger 'inView' when 20% visible
  // We use the inView boolean directly to control the 'open' state
  const { ref, inView } = useInView({
    threshold: [0.1, 0.2], // We track both 10% and 20%
    initialInView: false,
  });

  // Derived state: Open if inView (at 20% threshold)
  // To strictly meet "10% out of view go back", we calculate it based on the hook's entry/exit
  const isOpen = inView;

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) setScale(1);
      else if (width >= 768) setScale(0.7);
      else setScale(0.6);
      setIsMobile(width < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section 
      ref={ref} // Attach observer to the section
      className="relative w-full bg-[#050608] py-16 lg:py-24 overflow-x-hidden"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid items-center gap-12 lg:gap-16 lg:grid-cols-12">
          
          {/* ================= LEFT TEXT ================= */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <h2 className="font-futura text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.05] text-white">
              What <span className="text-[#00C2FF]">FUUTURA</span> Is
            </h2>

            <p className="mt-4 text-base sm:text-lg lg:text-[18px] text-white/70">
              Fuutura is an exchange at its core.
            </p>

            <div className="mt-8 lg:mt-10 space-y-2 text-lg sm:text-xl lg:text-[22px] leading-[1.45] text-white/80">
              <p>Everything around it exists to make market</p>
              <p>access. No distractions. No unnecessary steps.</p>
              <p>Just execution done right.</p>
            </div>
          </div>

          {/* ================= RIGHT CARDS ================= */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div
              className={`relative w-full ${
                isMobile ? "flex flex-col items-center gap-6" : ""
              }`}
              style={
                isMobile
                  ? {}
                  : {
                      height: `${340 * scale}px`,
                      width: `${760 * scale}px`,
                    }
              }
              // Hover events removed as requested
            >
              {isMobile ? (
                <>
                  <StackCard
                    label="More Reliable"
                    imgSrc="/Images/setting.png"
                    isMobile={true}
                  />
                  <StackCard
                    label="Safer"
                    imgSrc="/Images/sheildlock.png"
                    isMobile={true}
                  />
                  <StackCard
                    label="Easier"
                    imgSrc="/Images/rocket.png"
                    isMobile={true}
                  />
                </>
              ) : (
                <>
                  <StackCard
                    width={159}
                    height={290}
                    label="Easier"
                    imgSrc="/Images/rocket.png"
                    zIndex={isOpen ? 30 : 10}
                    openX={-520}
                    closedX={-200}
                    isOpen={isOpen}
                    scale={scale}
                  />

                  <StackCard
                    width={198}
                    height={290}
                    label="Safer"
                    imgSrc="/Images/sheildlock.png"
                    zIndex={isOpen ? 20 : 20}
                    openX={-310}
                    closedX={-140}
                    isOpen={isOpen}
                    scale={scale}
                  />

                  <StackCard
                    width={299}
                    height={290}
                    label="More Reliable"
                    imgSrc="/Images/setting.png"
                    zIndex={isOpen ? 10 : 30}
                    openX={0}
                    closedX={0}
                    isOpen={isOpen}
                    isFirstDeck={true}
                    scale={scale}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Fuutura;