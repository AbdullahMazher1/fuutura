'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CoreLayersRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/ecosystem/core-layers/wallet');
  }, [router]);

  return null;
}
