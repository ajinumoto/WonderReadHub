'use client';

import React from 'react';
import { BookOpen, HelpCircle } from 'lucide-react';

interface Props {
  totalRepos: number;
  totalChapters: number;
  onOpenGuide: () => void;
}

const NavBrand: React.FC<{ repos: number; chapters: number }> = ({ repos, chapters }) => (
  <div className="flex items-center gap-3">
    <div className="w-8.5 h-8.5 rounded-xl bg-[#254339] text-[#FEFCF7] flex items-center justify-center font-bold text-sm shadow-xs transition-transform hover:scale-105">
      <BookOpen className="w-4.5 h-4.5 text-[#E4BD78]" />
    </div>
    <div>
      <div className="flex items-center gap-2">
        <span className="font-serif-ny font-bold text-[#254339] text-[15px] leading-tight">WonderRead Hub</span>
        <span className="text-[10px] font-mono-code font-bold px-2 py-0.5 rounded-full bg-[#E4BD78]/20 text-[#254339]">
          Supabase v2
        </span>
      </div>
      <p className="text-[11px] text-[#254339]/65 font-mono-code hidden sm:block">
        {repos} Collections • {chapters} Chapters
      </p>
    </div>
  </div>
);

const NavGuideButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="px-3.5 py-1.5 rounded-full bg-[#FEFCF7]/90 border border-[#254339]/10 text-[#254339] text-xs font-semibold hover:bg-[#FEFCF7] hover:border-[#254339]/20 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
  >
    <HelpCircle className="w-3.5 h-3.5 text-[#95594C]" />
    <span>Setup Guide</span>
  </button>
);

export const RepoNavbar: React.FC<Props> = ({ totalRepos, totalChapters, onOpenGuide }) => {
  return (
    <header className="apple-glass-nav sticky top-0 z-40 px-4 py-2.5">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        <NavBrand repos={totalRepos} chapters={totalChapters} />
        <NavGuideButton onClick={onOpenGuide} />
      </div>
    </header>
  );
};
