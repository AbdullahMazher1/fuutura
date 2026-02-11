"use client";

import React, { useEffect, useRef, useState } from "react";

function Platoform() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger when at least 10% is visible
        setInView(entry.intersectionRatio >= 0.1);
      },
      {
        threshold: [0, 0.1, 1],
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Control video playback rate at 0.3x speed when visible
  useEffect(() => {
    if (videoRef.current && inView) {
      videoRef.current.playbackRate = 0.1;
      videoRef.current.play().catch(() => {
        // Video not available, will fallback to GIF
      });
    }
  }, [inView]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden bg-[#0a0e1a] py-24"
    >
      {/* Content */}
      <div className="relative z-20 max-w-[1440px] mx-auto px-6 lg:px-0">
        <div className="text-center text-white mb-16">
          <h1 className="font-futura text-[56px] font-bold leading-tight text-[#00C2FF] mb-6">
            The Platform
          </h1>
          <p className="font-futura text-xl font-normal leading-relaxed text-white/90 max-w-4xl mx-auto">
            FUUTURA Is A Web3 Exchange Built For Simple, Secure, And Reliable Market Access.
          </p>
        </div>
      </div>

      {/* Background container */}
      <div className="absolute inset-0 w-full h-full z-10 flex items-end justify-center">
        
        {/* Platform Image */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 will-change-transform z-10"
          style={{
            opacity: inView ? 1 : 0,
            transform: `translateX(-50%) translateY(${inView ? "0%" : "40%"})`,
            transition: "opacity 3s ease, transform 3s ease",
          }}
        >
          <img
            src="/Images/platform.jpg"
            alt="Platform interface"
            className="w-full max-w-[600px] h-auto object-contain"
          />
        </div>

        {/* Animation Behind - half hidden below, comes up a bit on scroll */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 will-change-transform z-0"
          style={{
            opacity: inView ? 1 : 0,
            transform: `translateX(-50%) translateY(${inView ? "30%" : "50%"})`,
            transition: "opacity 3s ease, transform 3s ease",
          }}
        >
          {/* Try video first for speed control (0.3x), fallback to GIF */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-[900px] h-auto object-contain"
            style={{ display: 'none' }}
            onError={() => {
              // If video fails to load, hide video and show GIF
              if (videoRef.current) {
                videoRef.current.style.display = 'none';
                const gifElement = videoRef.current.nextElementSibling;
                if (gifElement) {
                  gifElement.style.display = 'block';
                }
              }
            }}
            onLoadedData={() => {
              // Video loaded successfully, show it and hide GIF
              if (videoRef.current) {
                videoRef.current.style.display = 'block';
                const gifElement = videoRef.current.nextElementSibling;
                if (gifElement) {
                  gifElement.style.display = 'none';
                }
              }
            }}
          >
            <source src="/Videos/platformanim.mp4" type="video/mp4" />
            <source src="/Videos/platformanim.webm" type="video/webm" />
          </video>
          <img
            src="/Videos/platformanim.gif"
            alt="Platform animation"
            className="w-full max-w-[900px] h-auto object-contain"
            style={{ display: 'block' }}
          />
        </div>
      </div>
    </section>
  );
}

export default Platoform;
