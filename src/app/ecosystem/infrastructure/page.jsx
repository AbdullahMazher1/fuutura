'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function InfrastructureRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/ecosystem/infrastructure/shared-infrastructure');
  }, [router]);

  return null;
}
