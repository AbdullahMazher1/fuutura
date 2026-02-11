/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";

function CardShell({ className = "", children, isHovered = false, isFirstDeck = false }) {
  const isFirstDeckNotHovered = !isHovered && isFirstDeck;
  
  return (
    <div
      className={[
        "rounded-[33px] relative",
        isHovered 
          ? "bg-[linear-gradient(169.15deg,rgba(10,124,255,0.3)_0%,rgba(58,123,255,0.15)_96.79%)] p-[1.75px]"
          : isFirstDeckNotHovered
          ? "p-[1.75px]"
          : "bg-transparent p-[1.75px]",
        className,
      ].join(" ")}
      style={
        isFirstDeckNotHovered
          ? {
              borderRadius: "33px",
            }
          : {}
      }
    >
      {/* Blurred background layer - only for first deck when not hovered */}
      {isFirstDeckNotHovered && (
        <div
          className="absolute inset-0 rounded-[33px]"
          style={{
            background: "linear-gradient(169.15deg, rgba(10, 124, 255, 0.3) 0%, rgba(58, 123, 255, 0.15) 96.79%)",
            filter: "blur(25px)",
            zIndex: 0,
          }}
        />
      )}
      <div
        className={[
          "h-full w-full rounded-[31px] relative",
          isHovered
            ? "bg-[radial-gradient(100%_100%_at_0%_0%,rgba(0,0,0,0.8)_0%,rgba(5,42,119,0)_100%)] shadow-[inset_-4.38px_-4.38px_218.9px_#FFFFFF05]"
            : "",
        ].join(" ")}
        style={
          isFirstDeckNotHovered
            ? {
                background: "radial-gradient(100% 100% at 0% 0%, rgba(0, 0, 0, 0.8) 0%, rgba(5, 42, 119, 0) 100%)",
                boxShadow: "-4.38px -4.38px 218.9px 0px #FFFFFF05 inset",
                borderRadius: "31px",
                zIndex: 1,
              }
            : !isHovered
            ? { background: "black" }
            : {}
        }
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
  isFirstDeck = false,
}) {
  return (
    <div
      className="absolute right-0 top-1/2 transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
      style={{
        width,
        height,
        zIndex,
        transform: `translateX(${isOpen ? openX : closedX}px) translateY(-50%)`,
      }}
    >
      <CardShell className="h-full w-full rounded-3xl" isHovered={isOpen ? true : !isFirstDeck} isFirstDeck={isFirstDeck}>
        <div className="flex h-full w-full flex-col items-center justify-between px-6 py-10">
          <img
            src={imgSrc}
            alt=""
            className="h-[110px] w-[110px] object-contain drop-shadow-[0_0_30px_rgba(0,194,255,0.35)]"
          />
          <div className="pb-4 font-futura text-[26px] font-normal text-white/95 text-center">
            {label}
          </div>
        </div>
      </CardShell>
    </div>
  );
}

function Fuutura() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative w-full bg-[#050608] py-24 overflow-visible">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-0">
        <div className="grid items-center gap-16 lg:grid-cols-12">

          {/* Left Text */}
          <div className="lg:col-span-5">
            <h2 className="font-futura text-[56px] font-normal leading-[1.05] text-white">
              What <span className="text-[#00C2FF]">FUUTURA</span> Is
            </h2>

            <p className="mt-3 font-futura text-[18px] font-normal text-white/70">
              Fuutura is an exchange at its core.
            </p>

            <div className="mt-14 space-y-2 font-futura text-[22px] font-normal leading-[1.45] text-white/80">
              <p>Everything around it exists to make market</p>
              <p>access. No distractions. No unnecessary steps.</p>
              <p>Just execution done right.</p>
            </div>
          </div>

          {/* Right Stack */}
          <div className="relative lg:col-span-7 flex justify-end">
            <div
              className="relative h-[340px] w-[760px] overflow-visible"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >

              {/* CLOSED STATE:
                  Reliable on top
                  Safer under
                  Easier bottom
                  RIGHT edges visible
              */}

              {/* Easier (Back when closed, Leftmost when open) */}
              <StackCard
                width={159}
                height={290}
                label="Easier"
                imgSrc="/Images/rocket.png"
                zIndex={open ? 30 : 10}
                openX={-520}   // leftmost when open
                closedX={-200}   // small RIGHT edge visible
                isOpen={open}
              />

              {/* Safer (Middle) */}
              <StackCard
                width={198}
                height={290}
                label="Safer"
                imgSrc="/Images/sheildlock.png"
                zIndex={open ? 20 : 20}
                openX={-310}
                closedX={-140}   // slight RIGHT edge
                isOpen={open}
              />

              {/* More Reliable (Front when closed, Rightmost when open) */}
              <StackCard
                width={299}
                height={290}
                label="More Reliable"
                imgSrc="/Images/setting.png"
                zIndex={open ? 10 : 30}
                openX={0}      // stays rightmost when open
                closedX={0}    // fully visible when closed
                isOpen={open}
                isFirstDeck={true}
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Fuutura;
