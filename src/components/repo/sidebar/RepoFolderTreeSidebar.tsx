'use client';

import React from 'react';
import { Folder, FolderOpen, Sparkles } from 'lucide-react';
import { CollectionCategory } from '@/types/repo';

interface NavItem {
  key: CollectionCategory;
  label: string;
  badge?: string;
}

const TREE_ITEMS: { section: string; items: NavItem[] }[] = [
  {
    section: 'Library',
    items: [
      { key: 'all', label: 'All Collections', badge: '6' },
      { key: 'official', label: 'Official Curated', badge: '⭐' },
    ],
  },
  {
    section: 'Languages',
    items: [
      { key: 'id', label: 'Indonesian 🇮🇩', badge: '4' },
      { key: 'en', label: 'English 🇬🇧', badge: '2' },
    ],
  },
  {
    section: 'Categories',
    items: [
      { key: 'fable', label: 'Fables & Tales' },
      { key: 'folktale', label: 'Folklore & Myths' },
      { key: 'bedtime', label: 'Bedtime Stories' },
      { key: 'community', label: 'Community Shared' },
    ],
  },
];

interface Props {
  activeCategory: CollectionCategory;
  onSelect: (cat: CollectionCategory) => void;
}

const SidebarItemIcon: React.FC<{ active: boolean }> = ({ active }) => (
  active ? <FolderOpen className="w-4 h-4 text-[#E4BD78] shrink-0" /> : <Folder className="w-4 h-4 text-[#95594C]/70 shrink-0" />
);

const SidebarItemBadge: React.FC<{ badge?: string; active: boolean }> = ({ badge, active }) => {
  if (!badge) return null;
  const cls = active ? 'bg-white/20 text-[#FEFCF7]' : 'bg-[#254339]/8 text-[#254339]/70';
  return <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono-code ${cls}`}>{badge}</span>;
};

const SidebarItemRow: React.FC<{
  item: NavItem;
  isActive: boolean;
  onSelect: (cat: CollectionCategory) => void;
}> = ({ item, isActive, onSelect }) => (
  <button
    type="button"
    onClick={() => onSelect(item.key)}
    className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-left transition-all cursor-pointer ${
      isActive ? 'bg-[#254339] text-[#FEFCF7] font-semibold apple-card-shadow' : 'text-[#254339]/75 hover:bg-[#254339]/5 font-medium'
    }`}
  >
    <div className="flex items-center gap-2 truncate">
      <SidebarItemIcon active={isActive} />
      <span className="truncate text-xs">{item.label}</span>
    </div>
    <SidebarItemBadge badge={item.badge} active={isActive} />
  </button>
);

const SidebarGroup: React.FC<{
  group: { section: string; items: NavItem[] };
  activeCategory: CollectionCategory;
  onSelect: (cat: CollectionCategory) => void;
}> = ({ group, activeCategory, onSelect }) => (
  <div className="flex flex-col gap-0.5">
    <p className="text-[10px] uppercase font-bold text-[#254339]/45 tracking-wider px-2 pt-1.5 pb-0.5">
      {group.section}
    </p>
    {group.items.map((item) => (
      <SidebarItemRow
        key={item.key}
        item={item}
        isActive={activeCategory === item.key}
        onSelect={onSelect}
      />
    ))}
  </div>
);

export const RepoFolderTreeSidebar: React.FC<Props> = ({ activeCategory, onSelect }) => (
  <aside className="w-full lg:w-56 shrink-0 apple-glass-card border border-[#254339]/8 rounded-2xl p-3 flex flex-col gap-3 font-sans text-xs apple-card-shadow">
    <div className="flex items-center gap-2 pb-2 border-b border-[#254339]/8 text-[#254339] px-1">
      <Sparkles className="w-4 h-4 text-[#E4BD78]" />
      <span className="font-bold text-xs uppercase tracking-wider text-[#254339]/70">Explorer</span>
    </div>
    {TREE_ITEMS.map((group) => (
      <SidebarGroup
        key={group.section}
        group={group}
        activeCategory={activeCategory}
        onSelect={onSelect}
      />
    ))}
  </aside>
);
