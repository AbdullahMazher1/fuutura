'use client';

import { usePathname } from 'next/navigation';
import EcosystemSidebar from './EcosystemSidebar';

export default function EcosystemLayout({ children }) {
  const pathname = usePathname();
  const isDocPage = pathname !== '/ecosystem' && pathname.startsWith('/ecosystem');

  // Alternate animation direction based on path so some pages slide from left, others from right
  const slideFromLeft = pathname.length % 2 === 0;

  if (!isDocPage) return <>{children}</>;

  return (
    <div className="flex h-[100vh] w-full overflow-hidden bg-[#0a0e1a]">
      <EcosystemSidebar />
      <main className="flex-1 min-w-0 flex flex-col relative overflow-hidden h-full">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 100% 80% at 50% 50%, rgba(15, 40, 70, 0.4), transparent 50%), radial-gradient(ellipse 100% 100% at 50% 80%, rgba(20, 30, 50, 0.8), #0a0e1a 60%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)`,
            backgroundSize: '22px 22px',
          }}
        />
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background:
              'linear-gradient(to top, rgba(30,40,60,0.9) 0%, transparent 40%), radial-gradient(ellipse 80% 50% at 50% 85%, rgba(10,124,255,0.15), transparent 50%)',
          }}
        />
        <div className="relative z-10 flex-1 overflow-y-auto overflow-x-hidden h-full">
          <div
            key={pathname}
            className={`min-h-full ${slideFromLeft ? 'ecosystem-animate-left' : 'ecosystem-animate-right'}`}
          >
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
