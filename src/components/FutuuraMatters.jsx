"use client";
import React from 'react';
import Image from 'next/image';

const scrollingData = [
  { id: 1, title: 'Transparent Process', icon: '/Images/1.png' },
  { id: 2, title: 'Built to last', icon: '/Images/2.png' },
  { id: 3, title: 'Secure Transactions', icon: '/Images/1.png' },
  { id: 4, title: 'Global Connectivity', icon: '/Images/2.png' },
  { id: 5, title: '24/7 Support', icon: '/Images/1.png' },
];

function FutuuraMatters() {
  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 py-20">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="/Videos/Futurua.mp4" type="video/mp4" />
      </video>

      {/* Floating Top Notch Image */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
        <div className="relative w-[140px] h-[70px] sm:w-[220px] sm:h-[110px] md:w-[320px] md:h-[160px] flex items-center justify-center">
          <div className="absolute w-full h-full bg-black rounded-b-full border border-white/10" />

          <div className="relative w-full h-full -mt-[35%] z-50 scale-110">
            <Image
              src="/Images/Rectangle.png"
              alt="Futuura Core"
              fill
              className="object-contain drop-shadow-[0_0_15px_rgba(0,194,255,0.3)]"
              priority
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-[1400px] mt-16 sm:mt-20">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

          {/* Left Text */}
          <div className="lg:col-span-5 flex flex-col gap-4 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <span className="w-2 h-2 bg-[#00C2FF] rotate-45" />
              <span className="text-white/60 text-xs tracking-widest">
                Fuutura Matters in Pakistan
              </span>
            </div>

            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Why Fuutura <br />
              Matters in <span className="text-[#00C2FF]">Pakistan</span>
            </h1>

            <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-md mx-auto lg:mx-0 mt-2">
              Because market access should not be limited by complexity or cost.
              Fuutura is designed to lower friction and encourage broader participation.
            </p>
          </div>

          {/* Right Box */}
          <div
            className="lg:col-span-7 relative w-full border border-white/10 shadow-2xl backdrop-blur-xl rounded-xl sm:rounded-2xl"
            style={{
              background: 'linear-gradient(180deg, rgba(94, 58, 255, 0.05) 0%, rgba(0, 204, 255, 0.05) 100%)',
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 h-full">

              {/* Scrolling List */}
              <div className="relative overflow-hidden h-[220px] sm:h-[260px] md:h-[300px]">
                <div className="absolute w-full flex flex-col gap-8 p-6 animate-slow-scroll">
                  {[...scrollingData, ...scrollingData].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                        <Image src={item.icon} alt={item.title} fill className="object-contain" />
                      </div>
                      <span className="text-white text-sm sm:text-base font-medium">
                        {item.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* GIF Side */}
              <div className="relative flex items-center justify-center p-6">
                <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64">
                  <Image
                    src="/Videos/loder.gif"
                    alt="Loading Ecosystem"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Scroll Animation */}
      <style jsx>{`
        @keyframes slowScroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-slow-scroll {
          animation: slowScroll 25s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default FutuuraMatters;
