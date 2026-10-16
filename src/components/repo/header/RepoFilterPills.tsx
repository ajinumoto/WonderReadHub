'use client';

import React from 'react';
import { CollectionCategory } from '@/types/repo';

interface FilterOption {
  key: CollectionCategory;
  label: string;
}

const FILTERS: FilterOption[] = [
  { key: 'all', label: 'All Collections' },
  { key: 'official', label: 'Official ⭐' },
  { key: 'id', label: 'Indonesian 🇮🇩' },
  { key: 'en', label: 'English 🇬🇧' },
  { key: 'fable', label: 'Fables 🦌' },
  { key: 'folktale', label: 'Folklore 🌾' },
  { key: 'bedtime', label: 'Bedtime Calm 🌙' },
  { key: 'community', label: 'Community 👥' },
];

interface Props {
  activeCategory: CollectionCategory;
  onSelect: (cat: CollectionCategory) => void;
}

const FilterPillButton: React.FC<{
  filter: FilterOption;
  active: boolean;
  onSelect: (k: CollectionCategory) => void;
}> = ({ filter, active, onSelect }) => (
  <button
    type="button"
    onClick={() => onSelect(filter.key)}
    className={`px-3 py-1.5 rounded-full text-xs whitespace-nowrap transition-all cursor-pointer ${
      active
        ? 'bg-[#254339] text-[#FEFCF7] font-semibold apple-card-shadow'
        : 'bg-[#254339]/5 text-[#254339]/70 hover:bg-[#254339]/10 hover:text-[#254339] font-medium'
    }`}
  >
    {filter.label}
  </button>
);

export const RepoFilterPills: React.FC<Props> = ({ activeCategory, onSelect }) => (
  <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
    {FILTERS.map((f) => (
      <FilterPillButton
        key={f.key}
        filter={f}
        active={activeCategory === f.key}
        onSelect={onSelect}
      />
    ))}
  </div>
);
