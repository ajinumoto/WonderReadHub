'use client';

import React from 'react';
import { BookOpen, HelpCircle } from 'lucide-react';
import { Button } from '../atoms/Button';
import { ConnectionBadge } from '../atoms/ConnectionBadge';

export interface NavbarProps {
  onOpenGuide: () => void;
  isLive: boolean;
}

const NavBrand: React.FC = () => (
  <div className="flex items-center gap-3">
    <div className="w-8.5 h-8.5 rounded-xl bg-[#254339] text-[#FEFCF7] flex items-center justify-center font-bold text-sm shadow-xs transition-transform hover:scale-105">
      <BookOpen className="w-4.5 h-4.5 text-[#E4BD78]" />
    </div>
    <div className="flex items-center gap-2">
      <span className="font-bold text-[#254339] text-[15px] leading-tight">WonderRead Hub</span>
    </div>
  </div>
);

export const Navbar: React.FC<NavbarProps> = ({ onOpenGuide, isLive }) => (
  <header className="apple-glass-nav sticky top-0 z-40 px-4 py-2.5">
    <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <NavBrand />
        <ConnectionBadge isLive={isLive} />
      </div>
      <Button onClick={onOpenGuide} variant="secondary" className="rounded-full bg-[#FEFCF7]/90 border border-[#254339]/10 shadow-xs">
        <HelpCircle className="w-3.5 h-3.5 text-[#95594C]" />
        <span>Setup Guide</span>
      </Button>
    </div>
  </header>
);
