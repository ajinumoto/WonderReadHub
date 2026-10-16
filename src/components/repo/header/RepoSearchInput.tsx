'use client';

import React from 'react';
import { Search, X } from 'lucide-react';

interface Props {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
}

const ClearButton: React.FC<{ onClear: () => void }> = ({ onClear }) => (
  <button
    type="button"
    onClick={onClear}
    className="absolute right-2.5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#254339]/10 hover:bg-[#254339]/20 text-[#254339]/60 flex items-center justify-center transition-colors cursor-pointer"
    title="Clear search"
  >
    <X className="w-3 h-3" />
  </button>
);

export const RepoSearchInput: React.FC<Props> = ({
  value,
  onChange,
  placeholder = 'Search collections, stories, shortcodes (e.g. kanca, timun, calm)...',
}) => (
  <div className="relative flex-1">
    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#254339]/45 pointer-events-none" />
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full pl-9.5 pr-9 py-2 bg-[#FEFCF7] border border-[#254339]/10 rounded-xl text-xs sm:text-sm text-[#254339] placeholder-[#254339]/40 focus:outline-none focus:ring-2 focus:ring-[#254339]/15 focus:border-[#254339]/25 transition-all apple-card-shadow"
    />
    {value && <ClearButton onClear={() => onChange('')} />}
  </div>
);
