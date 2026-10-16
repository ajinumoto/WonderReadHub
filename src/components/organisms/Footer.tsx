'use client';

import React from 'react';
import { BookMarked } from 'lucide-react';

const FooterDisclaimer: React.FC = () => (
  <p className="text-[11px] text-[#254339]/55 leading-relaxed text-center sm:text-left pt-1">
    <strong className="font-semibold text-[#254339]/70">Notice:</strong> WonderRead Collection Hub is an independent directory. Repositories and stories are provided by independent third-party creators and are not part of the WonderRead core application.
  </p>
);

const FooterTopBar: React.FC = () => (
  <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
    <div className="flex items-center gap-2">
      <BookMarked className="w-4 h-4 text-[#95594C]" />
      <span className="font-semibold text-[#254339]">WonderRead Collection Hub</span>
      <span className="text-[#254339]/30">•</span>
      <span className="text-xs text-[#254339]/60">Supabase Repository Directory</span>
    </div>
    <span className="text-xs text-[#254339]/50">v0.1.0</span>
  </div>
);

export const Footer: React.FC = () => (
  <footer className="mt-auto bg-[#FEFCF7] py-6 px-4 text-xs text-[#254339]/70">
    <div className="max-w-6xl w-full mx-auto flex flex-col gap-2">
      <FooterTopBar />
      <FooterDisclaimer />
    </div>
  </footer>
);
