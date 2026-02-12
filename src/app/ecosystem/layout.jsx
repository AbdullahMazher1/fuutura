'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { usePathname } from 'next/navigation';
import EcosystemSidebar from './EcosystemSidebar';

const ECOSYSTEM_DIRECTIONS = ['top', 'bottom', 'left', 'right'];

export default function EcosystemLayout({ children }) {
  const pathname = usePathname();
  const isDocPage = pathname !== '/ecosystem' && pathname.startsWith('/ecosystem');

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [enterDir, setEnterDir] = useState('top');
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const dir = ECOSYSTEM_DIRECTIONS[Math.floor(Math.random() * ECOSYSTEM_DIRECTIONS.length)];
    setEnterDir(dir);
  }, [pathname]);

  /* Preload ecosystem background images so they show immediately (no "image appears only after scroll") */
  useEffect(() => {
    if (!isDocPage) return;
    ['/Images/first1.png', '/Images/first2.png', '/Images/first5.png'].forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, [isDocPage]);

  if (!isDocPage) return <>{children}</>;

  const arr = React.Children.toArray(children);
  const hasSplit = arr.length >= 2;
  const background = hasSplit ? arr.slice(0, -1) : null;
  const content = hasSplit ? arr[arr.length - 1] : children;

  return (
    <div className="relative flex h-[100vh] w-full overflow-hidden bg-[#0a0e1a]">
      {/* Background image + overlay: portal into body so position:fixed never scrolls */}
      {mounted && background && typeof document !== 'undefined' && createPortal(
        <div className="ecosystem-fixed-bg-portal" aria-hidden>
          {background}
        </div>,
        document.body
      )}
      {/* Mobile hamburger button */}
      <button
        type="button"
        className="fixed top-4 left-4 z-50 flex h-10 w-10 items-center justify-center rounded-md border border-white/20 bg-black/70 text-white md:hidden"
        onClick={() => setSidebarOpen((open) => !open)}
        aria-label={sidebarOpen ? 'Close menu' : 'Open menu'}
      >
        <span className="sr-only">Toggle ecosystem menu</span>
        <div className="space-y-1.5">
          <span className={`block h-[2px] w-5 rounded bg-white transition-transform ${sidebarOpen ? 'translate-y-[5px] rotate-45' : ''}`} />
          <span className={`block h-[2px] w-5 rounded bg-white transition-opacity ${sidebarOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`block h-[2px] w-5 rounded bg-white transition-transform ${sidebarOpen ? '-translate-y-[5px] -rotate-45' : ''}`} />
        </div>
      </button>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar container – fixed so main content extends behind it for blur */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-[270px] transform transition-transform duration-300 
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
      >
        <EcosystemSidebar />
      </div>

      <main className="flex-1 min-w-0 flex flex-col relative overflow-hidden h-full w-full">
        {/* Same background as content – full width so it shows behind sidebar (blurred) */}
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
        <div className="relative z-10 flex-1 overflow-y-auto overflow-x-hidden min-h-full h-full overflow-anchor-none" style={{ overflowAnchor: 'none' }}>
          <div key={pathname} className={`z-10 h-[100vh] fixed inset-0 ecosystem-line-enter ecosystem-animate-${enterDir}`}>
            <div className='overflow-auto h-[full]'>
              {content}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
