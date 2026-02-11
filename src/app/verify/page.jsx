'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function VerifyPageInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState('verifying');
  const [message, setMessage] = useState('Verifying your email...');

  useEffect(() => {
    const token = searchParams.get('token');
    if (!token) {
      setStatus('error');
      setMessage('Missing verification token.');
      return;
    }

    const verify = async () => {
      try {
        const res = await fetch('/api/verify-token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token }),
        });

        const data = await res.json();

        if (!res.ok || !data.success) {
          throw new Error(data.message || 'Verification failed.');
        }

        setStatus('success');
        setMessage('Your access is now verified. Welcome To The FUUTURA Ecosystem.');

        setTimeout(() => {
          router.replace('/ecosystem/getting-started');
        }, 2000);
      } catch (err) {
        setStatus('error');
        const message = err instanceof Error ? err.message : 'Verification failed.';
        setMessage(message);
      }
    };

    verify();
  }, [router, searchParams]);

  return (
    <div className="h-[100vh] w-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url('/Images/55.png')" }}>
      <div className="bg-[#00000080] h-full w-full flex items-center justify-center px-6">
        <div className="max-w-xl text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {status === 'verifying' && 'Verifying Email'}
            {status === 'success' && 'Email Verified'}
            {status === 'error' && 'Verification Failed'}
          </h1>
          <p className="text-[#E5EAEC] text-base md:text-lg">{message}</p>
        </div>
      </div>
    </div>
  );
}

export default function VerifyPage() {
  return (
    <Suspense fallback={<div className="h-[100vh] w-full bg-black" />}>
      <VerifyPageInner />
    </Suspense>
  );
}

