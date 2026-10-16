'use client';

import React from 'react';
import { BookMarked, ShieldCheck } from 'lucide-react';

const RepoFooterDisclaimer: React.FC = () => (
  <p className="text-[10px] text-[#254339]/55 leading-relaxed text-center sm:text-left pt-2.5 border-t border-[#254339]/6">
    <strong className="font-semibold text-[#254339]/70">Disclaimer:</strong> WonderRead Collection Hub is an independent, community-driven directory. We do not host, store, or distribute any copyrighted stories or media files. All story collections and Supabase repositories listed here are maintained by third parties and are strictly not part of the WonderRead application.
  </p>
);

const RepoFooterTopBar: React.FC = () => (
  <div className="flex flex-col md:flex-row items-center justify-between gap-3">
    <div className="flex items-center gap-2">
      <BookMarked className="w-4 h-4 text-[#95594C]" />
      <span className="font-semibold text-[#254339]">WonderRead Collection Hub</span>
      <span className="text-[#254339]/30">•</span>
      <span className="text-xs text-[#254339]/60">Independent Supabase Directory</span>
    </div>
    <div className="flex items-center gap-1 text-[11px] text-[#254339]/70 font-medium">
      <ShieldCheck className="w-3.5 h-3.5 text-[#254339]" />
      <span>100% Zero Tracking</span>
    </div>
  </div>
);

export const RepoFooter: React.FC = () => (
  <footer className="mt-auto border-t border-[#254339]/8 bg-[#FEFCF7]/70 py-6 px-4 text-xs text-[#254339]/70">
    <div className="max-w-6xl mx-auto flex flex-col gap-3">
      <RepoFooterTopBar />
      <RepoFooterDisclaimer />
    </div>
  </footer>
);
