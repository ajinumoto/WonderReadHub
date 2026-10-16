'use client';

import React from 'react';
import { BookOpen, ChevronDown } from 'lucide-react';

export interface AccordionHeaderProps {
  title: string;
  count: number;
  isOpen: boolean;
  onToggle: () => void;
}

export const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  title,
  count,
  isOpen,
  onToggle,
}) => (
  <button
    type="button"
    onClick={onToggle}
    className="w-full px-3 py-2 flex items-center justify-between text-xs text-[#254339] hover:bg-[#254339]/4 transition-colors cursor-pointer"
    aria-expanded={isOpen}
  >
    <div className="flex items-center gap-1.5 font-medium">
      <BookOpen className="w-3.5 h-3.5 text-[#95594C]" />
      <span>{title}</span>
      <span className="px-1.5 py-0.5 rounded-full bg-[#254339]/8 text-[10px] font-semibold">
        {count}
      </span>
    </div>
    <ChevronDown className={`w-3.5 h-3.5 text-[#254339]/40 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
  </button>
);
