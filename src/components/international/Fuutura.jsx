/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";

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
  scale = 1,
  isMobile = false,
}) {
  // Calculate transform based on screen size
  const getTransform = () => {
    const baseTransform = `translateY(-50%)`;
    
    if (isMobile) {
      // On mobile, use reduced offsets to keep cards visible
      // Calculate a safe offset that won't overflow
      const maxOffset = 100; // Maximum offset in pixels for mobile
      const rawOffset = (isOpen ? openX : closedX) * scale;
      // Clamp the offset to prevent overflow
      const safeOffset = Math.max(-maxOffset, Math.min(maxOffset, rawOffset * 0.25));
      // Center the card stack and apply safe offset
      return `translateX(calc(-50% + ${safeOffset}px)) ${baseTransform}`;
    }
    
    // Desktop: original positioning from right edge
    return `translateX(${(isOpen ? openX : closedX) * scale}px) ${baseTransform}`;
  };

  // Determine if this card should be blurred (back decks when closed)
  const shouldBlur = !isOpen && !isFirstDeck;
  
  // Calculate clip-path to hide content in overlapping area (behind front deck)
  // Front deck is 299px wide at position 0 (right edge)
  const getContentClipPath = () => {
    if (!shouldBlur || isMobile) return 'none';
    
    const frontDeckWidth = 299 * scale;
    const cardWidth = width * scale;
    const cardOffset = Math.abs(closedX * scale);
    
    // Calculate how much of this card overlaps with front deck from right edge
    const cardRightEdge = cardWidth - cardOffset;
    if (cardRightEdge <= 0) return 'none';
    
    const overlapWidth = Math.min(cardRightEdge, frontDeckWidth);
    if (overlapWidth <= 0) return 'none';
    
    // Clip content: hide the overlapping portion (from right edge)
    // This keeps only the visible edges showing
    const clipLeft = cardWidth - overlapWidth;
    
    return `inset(0 0 0 ${clipLeft}px)`;
  };

  return (
    <div
      className={`absolute ${isMobile ? 'left-1/2' : 'right-0'} top-1/2 transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]`}
      style={{
        width: `${width * scale}px`,
        height: `${height * scale}px`,
        zIndex,
        transform: getTransform(),
      }}
    >
      <CardShell className="h-full w-full rounded-3xl" isHovered={isOpen ? true : !isFirstDeck} isFirstDeck={isFirstDeck}>
        {/* Content - clipped to hide overlapping portion behind front deck */}
        <div 
          className="flex h-full w-full flex-col items-center justify-between px-3 sm:px-4 lg:px-6 py-6 sm:py-8 lg:py-10 relative"
          style={{
            clipPath: getContentClipPath(),
            WebkitClipPath: getContentClipPath(),
            filter: shouldBlur ? 'blur(8px)' : 'none',
          }}
        >
          <img
            src={imgSrc}
            alt=""
            className="h-16 w-16 sm:h-20 sm:w-20 lg:h-[110px] lg:w-[110px] object-contain drop-shadow-[0_0_30px_rgba(0,194,255,0.35)]"
          />
          <div className="pb-2 sm:pb-3 lg:pb-4 font-futura text-lg sm:text-xl lg:text-[26px] font-normal text-white/95 text-center">
            {label}
          </div>
        </div>
      </CardShell>
    </div>
  );
}

function Fuutura() {
  const [open, setOpen] = useState(false);

  // Calculate scale factor for responsive card sizing
  // Desktop (lg): scale = 1 (no scaling)
  // Tablet (md): scale = 0.7
  // Mobile (sm): scale = 0.4
  const getScale = () => {
    if (typeof window === 'undefined') return 1;
    const width = window.innerWidth;
    if (width >= 1024) return 1; // Desktop - exact size
    if (width >= 768) return 0.7; // Tablet
    return 0.4; // Mobile - smaller scale for better fit
  };

  const [scale, setScale] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScale(getScale());
      setIsMobile(width < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative w-full bg-[#050608] py-12 sm:py-16 lg:py-24 overflow-visible">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-0">
        <div className="grid items-center gap-8 sm:gap-12 lg:gap-16 lg:grid-cols-12">

          {/* Left Text */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <h2 className="font-futura text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-normal leading-[1.05] text-white">
              What <span className="text-[#00C2FF]">FUUTURA</span> Is
            </h2>

            <p className="mt-3 font-futura text-base sm:text-lg lg:text-[18px] font-normal text-white/70">
              Fuutura is an exchange at its core.
            </p>

            <div className="mt-8 sm:mt-10 lg:mt-14 space-y-2 font-futura text-lg sm:text-xl lg:text-[22px] font-normal leading-[1.45] text-white/80">
              <p>Everything around it exists to make market</p>
              <p>access. No distractions. No unnecessary steps.</p>
              <p>Just execution done right.</p>
            </div>
          </div>

          {/* Right Stack - Hidden on mobile, visible on tablet and desktop */}
          <div className="hidden md:block relative lg:col-span-7 flex justify-center lg:justify-end mt-8 lg:mt-0 w-full lg:w-auto">
            <div
              className="relative overflow-hidden lg:overflow-visible mx-auto lg:mx-0"
              style={{
                height: `${340 * scale}px`,
                width: isMobile ? '100%' : `${760 * scale}px`,
                maxWidth: isMobile ? '100%' : 'none',
                minHeight: isMobile ? '200px' : 'auto',
                position: 'relative',
              }}
              onMouseEnter={() => !isMobile && setOpen(true)}
              onMouseLeave={() => !isMobile && setOpen(false)}
              onClick={() => isMobile && setOpen(!open)}
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
                scale={scale}
                isMobile={isMobile}
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
                scale={scale}
                isMobile={isMobile}
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
                scale={scale}
                isMobile={isMobile}
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Fuutura;
