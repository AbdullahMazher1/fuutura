'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  const [showSecondSection, setShowSecondSection] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [showWelcomeSection, setShowWelcomeSection] = useState(false);

  useEffect(() => {
    if (!isVerified) return;
    const timer = setTimeout(() => setShowWelcomeSection(true), 2000);
    return () => clearTimeout(timer);
  }, [isVerified]);

  return (
    <div className="relative h-[100vh] w-full overflow-hidden">
      {/* First section - click to change */}
      <section
        onClick={() => setShowSecondSection(true)}
        className={`h-full w-full flex flex-col items-center justify-center bg-cover bg-center cursor-pointer transition-opacity duration-[1200ms] ease-in-out ${showSecondSection ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        style={{ backgroundImage: "url('/Images/step1.gif')" }}
        aria-hidden={showSecondSection}
      >
        {/* <img className="h-[100px]" src="/logo.gif" alt="Logo" /> */}
      </section>

      {/* Second section - Ecosystem Layer Verification (full h & w) */}
      <section
        className={`absolute inset-0 flex flex-col h-[100vh] w-full items-center justify-center transition-opacity duration-[1200ms] ease-in-out delay-300 ${showSecondSection ? 'opacity-100' : 'opacity-0 pointer-events-none'
          } ${showWelcomeSection ? 'opacity-0 pointer-events-none' : ''}`}
        aria-hidden={!showSecondSection || showWelcomeSection}
      >
        <div className='h-full w-full flex items-center justify-center bg-center bg-no-repeat bg-cover' style={{ backgroundImage: "url('/Images/55.png')" }}>
          <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-lg px-6">
            {/* Glowing block icon */}
            <div className="mb-8 flex items-center justify-center">
              <img src="/Images/ecologo.png" alt="" />
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-bold text-white text-center mb-2 !leading-snug">
              This{' '}
              <span className="text-[#00C2FF]" style={{ textShadow: '0 0 20px rgba(0,194,255,0.5)' }}>
                Ecosystem
              </span>{' '}
              Layer Requires Verification.
            </h1>
            <p className="text-white text-sm md:text-base text-center mb-10">
              Verify your email to unlock this section.
            </p>

            <div className="relative w-full">
              {/* Email input + Verify button bar (hidden after verify) */}
              <div
                className={`w-full flex p-[6px] items-stretch rounded-full overflow-hidden 
  border border-[#386bda] 
  shadow-[inset_0_0_20px_rgba(0,194,255,0.4)] 
  transition-all duration-500 
  ${isVerified ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100'}
  `}
              >
                <div className="flex-1 flex items-center gap-2 pl-4 pr-2 py-2">
                  <img className='h-[24px]' src="/Images/Messages.png" alt="" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 min-w-0 bg-transparent text-white placeholder-white/50 outline-none text-sm md:text-base"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setIsVerified(true)}
                  className="px-9 py-2.5 bg-gradient-to-r from-[#00CCFF] to-[#064A99] text-white font-semibold text-sm rounded-full transition-colors shadow-[0_0_20px_rgba(10,124,255,0.5)]"
                >
                  Verify
                </button>
              </div>

              {/* Verification completed pill (green animation) - overlays same slot */}
              <div
                className={`absolute inset-0 flex items-center gap-4 rounded-full px-2 py-7 transition-all duration-500 ${isVerified ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                  }`}
                style={
                  isVerified
                    ? {
                      background:
                        'linear-gradient(90deg, rgba(6,95,70,0.9) 0%, rgba(16,185,129,0.95) 50%, rgba(6,95,70,0.9) 100%)',
                      boxShadow:
                        '0 0 30px rgba(16,185,129,0.5), 0 0 60px rgba(16,185,129,0.25), inset 0 1px 0 rgba(255,255,255,0.15)',
                      border: '1px solid rgba(16,185,129,0.5)',
                      animation: 'verifyGreenPulse 2s ease-in-out infinite',
                    }
                    : undefined
                }
              >
                <div
                  className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center border border-[#34d399]/60 bg-[#0d9488]/80 shadow-[0_0_16px_rgba(52,211,153,0.4)]"
                  aria-hidden
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white font-medium text-sm md:text-base text-center flex-1">
                  Your access is now verified.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third section - Welcome title (full h & w, 1 second after verification); click to go to dashboard page */}
      <section
        onClick={() => router.push('/ecosystem/getting-started')}
        className={`absolute inset-0 flex items-center justify-center h-[100vh] w-full z-50 bg-center bg-cover cursor-pointer transition-opacity duration-[1200ms] ease-in-out ${showWelcomeSection ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        style={{ backgroundImage: "url('/Images/55.png')" }}
      >
        <h1 className="relative z-10 text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white px-6">
          Welcome To The{' '}
          <span className="text-[#00CCFF]" style={{ textShadow: '0 0 30px rgba(10,124,255,0.6)' }}>
            FUUTURA
          </span>{' '}
          Ecosystem.
        </h1>
      </section>

    </div>
  );
};

export default Page;
