"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { IoClose } from 'react-icons/io5';
import OTPInput from 'react-otp-input';

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

  // OTP Screen States
  const [showOTPScreen, setShowOTPScreen] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');
  const [otpLoading, setOtpLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);

  const isValidEmail = (value) => /\S+@\S+\.\S+/.test(value);

  const handleSendEmail = async () => {
    if (!isValidEmail(email) || isSending) return;
    setIsSending(true);
    setSendError(null);
    setSendSuccess(null);

    try {
      const res = await fetch("https://fuutura.com/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Failed to send verification email.");
      }

      // Show OTP screen when OTP is sent successfully
      setSendSuccess("OTP sent successfully to your email.");
      setShowOTPScreen(true);
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


  // Handle OTP Verification
  const handleVerifyOTP = async (otpValue) => {
    setOtpLoading(true);
    setOtpError('');
    try {
      const res = await fetch('https://fuutura.com/api/verify-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp: otpValue }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Invalid OTP');
      }

      // On success, close OTP screen and proceed with verification
      setShowOTPScreen(false);
      setOtp('');
      setIsVerified(true);
      setVerifying(false);
      
      // Show welcome section after a short delay
      setTimeout(() => {
        setShowWelcomeSection(true);
      }, 2000);
    } catch (error) {
      setOtpError(error.message || 'Invalid OTP. Please try again.');
    } finally {
      setOtpLoading(false);
    }
  };

  // Handle Resend OTP
  const handleResendOTP = async () => {
    setResendLoading(true);
    setOtpError('');
    setOtp('');
    try {
      const res = await fetch('https://fuutura.com/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || 'Failed to resend OTP');
      }
    } catch (error) {
      setOtpError(error.message || 'Failed to resend OTP. Please try again.');
    } finally {
      setResendLoading(false);
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
        const res = await fetch("https://fuutura.com/api/verify-token", {
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

  // Auto-transition to second section after 3 seconds
  useEffect(() => {
    if (!showSecondSection) {
      const timer = setTimeout(() => {
        setShowSecondSection(true);
      }, 3000); // 3 seconds

      return () => clearTimeout(timer);
    }
  }, [showSecondSection]);

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
        className={`h-screen w-full flex flex-col items-center justify-center
  bg-cover bg-center bg-no-repeat
  bg-[url('/Images/MobileScreen.gif')]
  md:bg-[url('/Images/step1.gif')]
  transition-opacity duration-[1200ms] ease-in-out
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
              {!verifying && !isVerified && verificationError && "Verification Failed"}
            </h1>

            <p className="text-[#E5EAEC] text-base md:text-lg">
              {verifying && "We are verifying your email. Please wait..."}
              {!verifying && isVerified &&
                "Your access is now verified. Welcome To The FUUTURA Ecosystem."}
              {!verifying && verificationError && verificationError}
            </p>

            {!verifying && isVerified && (
              <p className="mt-4 text-sm text-[#00C2FF] animate-pulse cursor-pointer">
                Click to Continue →
              </p>
            )}
          </div>
        </div>

      </section>

      {/* OTP Screen Popup */}
      {showOTPScreen && (
        <div className="fixed inset-0 z-[111111111] flex items-center justify-center bg-[#1111119f] bg-opacity-70 backdrop-blur-sm">
          <div
            className="backdrop-blur-md p-6 md:p-8 rounded-2xl text-center max-w-[340px] md:max-w-[420px] w-full mx-4 border border-[#00C2FF]/30 shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(26, 31, 58, 0.95) 0%, rgba(0, 194, 255, 0.1) 50%, rgba(26, 31, 58, 0.95) 100%)',
            }}
          >
            {/* Close Button */}
            <div className="flex items-center justify-end mb-4">
              <button
                onClick={() => {
                  setShowOTPScreen(false);
                  setOtp('');
                  setOtpError('');
                }}
                className="text-white/60 hover:text-white transition-colors p-1"
              >
                <IoClose className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-6">
              {/* Title and Email Message */}
              <div className="space-y-2">
                <h2 className="text-xl md:text-2xl text-white font-medium">Enter Your OTP</h2>
                <p className="text-[#9CA3AF] text-xs md:text-sm">
                  OTP sent successfully to this email
                </p>
                <p className="text-[#00C2FF] text-xs md:text-sm font-medium break-all">
                  {email}
                </p>
              </div>

              {/* OTP Input */}
              <div className="space-y-2 mx-auto">
                {/* <p className="text-xs text-[#E0E0E0]">Enter OTP</p> */}
                <OTPInput
                  value={otp}
                  onChange={(val) => {
                    setOtp(val);
                    if (otpError) setOtpError('');
                  }}
                  numInputs={6}
                  inputType="text"
                  shouldAutoFocus
                  renderInput={(props) => (
                    <input
                      {...props}
                      className="w-8 h-8 md:w-12 md:h-12 rounded-lg text-center text-white text-sm md:text-lg font-semibold bg-[#1a1f3a]/90 border-2 focus:outline-none focus:border-[#00C2FF] transition-all"
                      style={{
                        borderColor: otpError ? '#ef4444' : 'rgba(0, 194, 255, 0.3)',
                        marginRight: '12px',
                      }}
                    />
                  )}
                />
                {otpError && (
                  <p className="text-[10px] md:text-xs text-red-500 mt-2">{otpError}</p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <button
                  onClick={() => handleVerifyOTP(otp)}
                  disabled={otpLoading || otp.length !== 6}
                  className={`flex items-center justify-center bg-gradient-to-r from-[#00CCFF] to-[#064A99] text-white cursor-pointer py-2.5 text-xs md:text-sm px-4 w-full rounded-md transition-all shadow-[0_0_20px_rgba(10,124,255,0.5)] ${otpLoading || otp.length !== 6
                      ? "opacity-70 pointer-events-none"
                      : "hover:from-[#00D9FF] hover:to-[#0755B3]"
                    }`}
                >
                  {otpLoading ? "Verifying..." : "Continue"}
                </button>
                {/* <button
                  onClick={() => {
                    setShowOTPScreen(false);
                    setOtp('');
                    setOtpError('');
                  }}
                  className="text-xs text-[#E0E0E0] hover:text-[#00C2FF] cursor-pointer  transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Cancel
                </button> */}
              </div>
            </div>
          </div>
        </div>
      )}
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