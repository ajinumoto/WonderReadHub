'use client';

import React from 'react';
import { Search, X } from 'lucide-react';
import { TextInput } from '../atoms/TextInput';

export interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
}

const ClearSearchBtn: React.FC<{ onClear: () => void }> = ({ onClear }) => (
  <button
    type="button"
    onClick={onClear}
    className="absolute right-2.5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#254339]/10 hover:bg-[#254339]/20 text-[#254339]/60 flex items-center justify-center transition-colors cursor-pointer"
    title="Clear search"
  >
    <X className="w-3 h-3" />
  </button>
);

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = 'Search collections, stories, shortcodes (e.g. kanca, timun, calm)...',
}) => (
  <div className="relative flex-1">
    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#254339]/45 pointer-events-none" />
    <TextInput value={value} onChange={onChange} placeholder={placeholder} className="pl-9.5 pr-9 py-2" />
    {value && <ClearSearchBtn onClear={() => onChange('')} />}
  </div>
);
