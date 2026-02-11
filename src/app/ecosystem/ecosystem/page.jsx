'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function EcosystemRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/ecosystem/ecosystem/overview');
  }, [router]);

  return null;
}
