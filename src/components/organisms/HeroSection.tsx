'use client';

import React from 'react';

export const HeroSection: React.FC = () => (
  <header className="pt-6 pb-2 px-4 max-w-6xl w-full mx-auto flex flex-col gap-1">
    <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#254339]">
      WonderRead Repository Catalog
    </h1>
    <p className="text-xs sm:text-sm text-[#254339]/70">
      Directory of Supabase-powered story repositories. Install directly into the WonderRead app via one-click deep link.
    </p>
  </header>
);
