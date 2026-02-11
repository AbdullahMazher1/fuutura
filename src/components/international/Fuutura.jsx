/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";

function CardShell({ className = "", children }) {
  return (
    <div
      className={[
        "rounded-[33px] p-[1.75px]",
        "bg-[linear-gradient(169.15deg,rgba(10,124,255,0.3)_0%,rgba(58,123,255,0.15)_96.79%)]",
        className,
      ].join(" ")}
    >
      <div
        className={[
          "h-full w-full rounded-[31px]",
          "bg-[radial-gradient(100%_100%_at_0%_0%,rgba(0,0,0,0.8)_0%,rgba(5,42,119,0)_100%)]",
          "shadow-[inset_-4.38px_-4.38px_218.9px_#FFFFFF05]",
        ].join(" ")}
      >
        {children}
      </div>
    </div>
  );
}

function StackCard({
  width,
  height,
  label,
  imgSrc,
  zIndex,
  openX,
  closedX,
  isOpen,
}) {
  return (
    <div
      className={[
        "absolute right-0 top-1/2 -translate-y-1/2",
        "transition-transform duration-[900ms]",
        "ease-[cubic-bezier(0.22,1,0.36,1)]",
      ].join(" ")}
      style={{
        width,
        height,
        zIndex,
        transform: `translateX(${isOpen ? openX : closedX}px) translateY(-50%)`,
      }}
    >
      <CardShell className="h-full w-full">
        <div className="flex h-full w-full flex-col items-center justify-between px-6 py-10">
          <img
            src={imgSrc}
            alt=""
            className="h-[110px] w-[110px] object-contain drop-shadow-[0_0_30px_rgba(0,194,255,0.35)]"
          />
          <div className="pb-4 font-futura text-[26px] font-normal text-white/95">
            {label}
          </div>
        </div>
      </CardShell>
    </div>
  );
}

function Fuutura() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 250);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#050608] py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-0">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          {/* Left copy */}
          <div className="lg:col-span-5">
            <h2 className="font-futura text-[56px] font-normal leading-[1.05] text-white">
              What <span className="text-[#00C2FF]">FUUTURA</span> Is
            </h2>
            <p className="mt-3 font-futura text-[18px] font-normal text-white/70">
              Fuutura is an exchange at its core.
            </p>

            <div className="mt-14 space-y-2 font-futura text-[22px] font-normal leading-[1.45] text-white/80">
              <p>Everything around it exists to make market</p>
              <p>access No distractions. No unnecessary steps.</p>
              <p>Just execution done right.</p>
            </div>
          </div>

          {/* Right stacked cards */}
          <div className="relative lg:col-span-7">
            <div
              className="relative ml-auto h-[340px] w-full max-w-[760px] overflow-hidden"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
                <StackCard
                width={159}
                height={290}
                label="Easier"
                imgSrc="/Images/rocket.png"
                zIndex={30}
                openX={0}
                closedX={360}
                isOpen={open}
              />
                
             
              <StackCard
                width={198}
                height={290}
                label="Safer"
                imgSrc="/Images/sheildlock.png"
                zIndex={20}
                openX={-180}
                closedX={320}
                isOpen={open}
              />
               <StackCard
                width={299}
                height={290}
                label="More Reliable"
                imgSrc="/Images/setting.png"
                zIndex={10}
                openX={-420}
                closedX={280}
                isOpen={open}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Fuutura;

