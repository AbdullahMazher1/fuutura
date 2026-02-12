"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

// Inner component that actually uses search params, wrapped in Suspense by the page
const EcosystemPageInner = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [showSecondSection, setShowSecondSection] = useState(false);
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState(null);
  const [sendSuccess, setSendSuccess] = useState(null);

  const [isVerified, setIsVerified] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [verificationError, setVerificationError] = useState(null);
  const [showWelcomeSection, setShowWelcomeSection] = useState(false);

  const isValidEmail = (value) => /\S+@\S+\.\S+/.test(value);

  const handleSendEmail = async () => {
    if (!isValidEmail(email) || isSending) return;
    setIsSending(true);
    setSendError(null);
    setSendSuccess(null);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Failed to send verification email.");
      }

      setSendSuccess("Verification link sent. Please check your email.");
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong while sending email.";
      setSendError(message);
    } finally {
      setIsSending(false);
    }
  };

  // If user comes back with token in URL, verify on this same page
  useEffect(() => {
    const token = searchParams.get("token");
    if (!token) return;

    setShowSecondSection(true);
    setVerifying(true);
    setVerificationError(null);
    setSendError(null);
    setSendSuccess(null);

    const verify = async () => {
      try {
        const res = await fetch("/api/verify-token", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        });
        const data = await res.json();
        if (!res.ok || !data.success) {
          throw new Error(data.message || "Verification failed.");
        }
        // mark as verified and keep the green pill visible for a moment
        setIsVerified(true);
        setVerifying(false);
        // after 5 seconds, show the full-screen verified overlay
        setTimeout(() => {
          setShowWelcomeSection(true);
        }, 5000);
      } catch (err) {
        setVerifying(false);
        const message =
          err instanceof Error ? err.message : "Verification failed.";
        setVerificationError(message);
      }
    };

    verify();
  }, [router, searchParams]);

  return (
    <div className="relative h-[100vh] w-full overflow-hidden">
      {/* <section
        onClick={() => setShowSecondSection(true)}
        className={`h-full w-full flex flex-col items-center justify-center bg-cover bg-center cursor-pointer transition-opacity duration-[1200ms] ease-in-out ${showSecondSection ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        style={{ backgroundImage: "url('/Images/step1.gif')" }}
        aria-hidden={showSecondSection}
      >
      </section> */}
      <section
        onClick={() => setShowSecondSection(true)}
        className={`h-screen w-full flex flex-col items-center justify-center
  bg-cover bg-center bg-no-repeat
  bg-[url('/Images/MobileScreen.gif')]
  md:bg-[url('/Images/step1.gif')]
  cursor-pointer transition-opacity duration-[1200ms] ease-in-out
  ${showSecondSection ? "opacity-0 pointer-events-none" : "opacity-100"}
  `}
        aria-hidden={showSecondSection}
      ></section>

      {/* Second section - Ecosystem Layer Verification (full h & w) */}
      <section
        className={`absolute inset-0 flex flex-col h-[100vh] w-full items-center justify-center transition-opacity duration-[1200ms] ease-in-out delay-300 ${showSecondSection ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        aria-hidden={!showSecondSection}
      >
        <div
          className="h-full w-full flex items-center justify-center bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: "url('/Images/55.png')" }}
        >
          <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-lg px-6">
            {/* Glowing block icon */}
            <div className="mb-8 flex items-center justify-center">
              <img src="/Images/ecologo.png" alt="" />
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-bold text-white text-center mb-2 !leading-snug">
              This{" "}
              <span
                className="text-[#00C2FF]"
                style={{ textShadow: "0 0 20px rgba(0,194,255,0.5)" }}
              >
                Ecosystem
              </span>{" "}
              Layer Requires Verification.
            </h1>
            <p className="text-white text-sm md:text-base text-center mb-10">
              Verify your email to unlock this section.
            </p>

            <div className="relative w-full">
              {/* Email input + Verify button bar */}
              <div
                className={`w-full flex p-[6px] items-stretch rounded-full overflow-hidden 
  border border-[#386bda] 
  shadow-[inset_0_0_20px_rgba(0,194,255,0.4)] 
  transition-all duration-500 
  opacity-100
  `}
              >
                <div className="flex-1 flex items-center gap-2 pl-4 pr-2 py-2">
                  <img className="h-[24px]" src="/Images/Messages.png" alt="" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 min-w-0 bg-transparent text-white placeholder-white/50 outline-none text-sm md:text-base"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleSendEmail}
                  disabled={!isValidEmail(email) || isSending}
                  className={`px-9 py-2.5 rounded-full text-white font-semibold text-sm transition-colors shadow-[0_0_20px_rgba(10,124,255,0.5)] ${!isValidEmail(email) || isSending
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-gradient-to-r from-[#00CCFF] to-[#064A99] cursor-pointer"
                    }`}
                >
                  {isSending ? "Sending..." : "Verify"}
                </button>
              </div>
              {sendError && (
                <p className="mt-4 text-sm text-red-400 text-center">
                  {sendError}
                </p>
              )}
              {sendSuccess && (
                <p className="mt-4 text-sm text-[#9BADB3] text-center">
                  {sendSuccess}
                </p>
              )}
              {isVerified && (
                <div className="mt-4 flex items-center gap-4 rounded-full px-4 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-[0_0_20px_rgba(16,185,129,0.6)] border border-emerald-300/70">
                  <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center border border-[#34d399]/60 bg-[#0d9488]/80 shadow-[0_0_12px_rgba(52,211,153,0.4)]">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-white font-medium text-sm md:text-base">
                    Your access is now verified.
                  </span>
                </div>
              )}
              {verificationError && !verifying && !isVerified && (
                <p className="mt-4 text-sm text-red-400 text-center">
                  {verificationError}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Third section - full-screen verifying / verified overlay (same page). Click when verified to go forward. */}
      <section
        className={`absolute inset-0 flex items-center justify-center h-[100vh] w-full z-50 bg-center bg-cover transition-opacity duration-[1200ms] ease-in-out ${verifying || showWelcomeSection
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
          }`}
        style={{ backgroundImage: "url('/Images/55.png')" }}
        onClick={() => {
          if (!verifying && isVerified) {
            // go to ecosystem dashboard when user clicks the verified screen
            window.location.href = "/ecosystem/getting-started";
          }
        }}
        aria-hidden={!(verifying || showWelcomeSection)}
      >
        <div className="bg-[#00000080] h-full w-full flex items-center justify-center px-6">
          <div className="max-w-xl text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {verifying && "Verifying Email"}
              {!verifying && isVerified && "Email Verified"}
              {!verifying &&
                !isVerified &&
                verificationError &&
                "Verification Failed"}
            </h1>
            <p className="text-[#E5EAEC] text-base md:text-lg">
              {verifying && "We are verifying your email. Please wait..."}
              {!verifying &&
                isVerified &&
                "Your access is now verified. Welcome To The FUUTURA Ecosystem."}
              {!verifying && verificationError && verificationError}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

const Page = () => {
  return (
    <Suspense fallback={<div className="h-screen w-full bg-black" />}>
      <EcosystemPageInner />
    </Suspense>
  );
};

export default Page;