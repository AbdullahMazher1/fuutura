'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const GETTING_STARTED_PAGE = '/ecosystem/getting-started';
const GETTING_STARTED_SUB = [
  { href: '/ecosystem/introduction', label: 'Introduction' },
  { href: '/ecosystem/overview', label: 'Ecosystem Overview' },
];

const ECOSYSTEM_SUB = [
  { href: '/ecosystem/ecosystem/overview', label: 'Overview' },
  { href: '/ecosystem/ecosystem/how-it-works', label: 'How It Works' },
];

const CORE_LAYERS_SUB = [
  { href: '/ecosystem/core-layers/wallet', label: 'Wallet' },
  { href: '/ecosystem/core-layers/identity', label: 'Identity' },
  { href: '/ecosystem/core-layers/finance', label: 'Finance' },
  { href: '/ecosystem/core-layers/communication', label: 'Communication' },
  { href: '/ecosystem/core-layers/privacy', label: 'Privacy' },
];

const INFRASTRUCTURE_SUB = [
  { href: '/ecosystem/infrastructure/shared-infrastructure', label: 'Shared Infrastructure' },
  { href: '/ecosystem/infrastructure/blockchain-foundation', label: 'Blockchain Foundation' },
];

const PARTICIPATION_SUB = [
  { href: '/ecosystem/participation/individuals', label: 'Individuals' },
  { href: '/ecosystem/participation/businesses', label: 'Businesses' },
  { href: '/ecosystem/participation/institutions', label: 'Institutions' },
];

const OTHER_LINKS = [];

export default function EcosystemSidebar() {
  const pathname = usePathname();

  const [dropdownOpen, setDropdownOpen] = useState(
    pathname === GETTING_STARTED_PAGE || GETTING_STARTED_SUB.some(({ href }) => pathname === href)
  );
  const [ecosystemDropdownOpen, setEcosystemDropdownOpen] = useState(
    ECOSYSTEM_SUB.some(({ href }) => pathname === href)
  );
  const [coreLayersDropdownOpen, setCoreLayersDropdownOpen] = useState(
    CORE_LAYERS_SUB.some(({ href }) => pathname === href)
  );
  const [infrastructureDropdownOpen, setInfrastructureDropdownOpen] = useState(
    INFRASTRUCTURE_SUB.some(({ href }) => pathname === href)
  );
  const [participationDropdownOpen, setParticipationDropdownOpen] = useState(
    PARTICIPATION_SUB.some(({ href }) => pathname === href)
  );

  const isActive = (href) => pathname === href;

  const renderDropdown = (items, dropdownState, setDropdownState) => {
    const hasNested = items.links && items.links.length > 0;
    return (
    <div className="rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={() => hasNested && setDropdownState((o) => !o)}
        className={`w-full flex items-center ${hasNested ? 'justify-between' : 'justify-start'} px-4 py-3 rounded-lg text-left text-white text-sm font-medium hover:bg-white/10 transition-colors`}
      >
        {items.title}
        {hasNested && (
        <svg
          className={`w-4 h-4 text-white/60 shrink-0 transition-transform ${dropdownState ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        )}
      </button>
      {hasNested && dropdownState && (
        <div className="pl-4 pb-1 space-y-0.5">
          {items.links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-left text-sm font-medium transition-colors ${
                isActive(href) ? 'bg-[#0A7CFF]/30 text-[#00C2FF]' : 'text-white/90 hover:bg-white/10'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
  };

  return (
    <aside
      className="w-[270px] h-full flex flex-col shrink-0 overflow-auto custom__scrollbar backdrop-blur-sm border-r border-white/10"
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-4 pt-12 pb-6 px-6">
        <img className="h-[34px]" src="/Images/side1.png" alt="Logo" />
      </Link>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-0.5 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
        {/* Getting Started */}
        <div className="rounded-lg overflow-hidden">
          <div className={`w-full flex items-center ${GETTING_STARTED_SUB.length > 0 ? 'justify-between' : ''} px-4 py-3 rounded-lg ${pathname === GETTING_STARTED_PAGE ? 'bg-[#0A7CFF]/30' : ''}`}>
            <Link
              href={GETTING_STARTED_PAGE}
              className={`flex-1 flex items-center text-left text-sm font-medium transition-colors hover:opacity-90 ${
                pathname === GETTING_STARTED_PAGE ? 'text-[#00C2FF]' : 'text-white'
              }`}
            >
              Getting Started
            </Link>
            {GETTING_STARTED_SUB.length > 0 && (
            <button
              type="button"
              onClick={() => setDropdownOpen((o) => !o)}
              className="p-1 rounded hover:bg-white/10 transition-colors text-white/60"
              aria-label={dropdownOpen ? 'Collapse' : 'Expand'}
            >
              <svg
                className={`w-4 h-4 shrink-0 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            )}
          </div>
          {GETTING_STARTED_SUB.length > 0 && dropdownOpen && (
            <div className="pl-4 pb-1 space-y-0.5">
              {GETTING_STARTED_SUB.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-left text-sm font-medium transition-colors my-1 ${
                    isActive(href) ? 'bg-[#0A7CFF]/30 text-[#00C2FF]' : 'text-white/90 hover:bg-white/10'
                  }`}
                >
                  {label}
                  {/* <svg
                    className="w-4 h-4 text-white/60 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg> */}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Other dropdowns */}
        {renderDropdown({ title: 'Ecosystem', links: ECOSYSTEM_SUB }, ecosystemDropdownOpen, setEcosystemDropdownOpen)}
        {renderDropdown({ title: 'Core Layers', links: CORE_LAYERS_SUB }, coreLayersDropdownOpen, setCoreLayersDropdownOpen)}
        {renderDropdown({ title: 'Infrastructure', links: INFRASTRUCTURE_SUB }, infrastructureDropdownOpen, setInfrastructureDropdownOpen)}
        {renderDropdown({ title: 'Participation', links: PARTICIPATION_SUB }, participationDropdownOpen, setParticipationDropdownOpen)}

        {/* Other links */}
        {OTHER_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`flex items-center justify-between px-4 py-3 rounded-lg text-left text-white text-sm font-medium transition-colors ${
              isActive(href) ? 'bg-[#0A7CFF]/30 text-[#00C2FF]' : 'hover:bg-white/10'
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
