'use client';

import React from 'react';
import { Layers } from 'lucide-react';
import { CollectionCategory } from '@/core/domain/entities/Category';
import { SidebarItemRow } from '../molecules/SidebarItemRow';

interface NavItem {
  key: CollectionCategory;
  label: string;
  badge?: string;
}

const TREE_SECTIONS: { section: string; items: NavItem[] }[] = [
  {
    section: 'Directory',
    items: [{ key: 'all', label: 'All Repositories' }],
  },
  {
    section: 'Categories',
    items: [
      { key: 'fable', label: 'Fables & Lore' },
      { key: 'folktale', label: 'Folktales & Heritage' },
      { key: 'bedtime', label: 'Bedtime & Calm' },
      { key: 'adventure', label: 'Adventures' },
    ],
  },
];

export interface FolderTreeSidebarProps {
  activeCategory: CollectionCategory;
  onSelect: (cat: CollectionCategory) => void;
}

const SidebarGroup: React.FC<{
  group: { section: string; items: NavItem[] };
  activeCategory: CollectionCategory;
  onSelect: (cat: CollectionCategory) => void;
}> = ({ group, activeCategory, onSelect }) => (
  <div className="flex flex-col gap-0.5">
    <p className="text-[10px] uppercase font-bold text-[#254339]/50 tracking-wider px-2 pt-2 pb-0.5">
      {group.section}
    </p>
    {group.items.map((it) => (
      <SidebarItemRow
        key={it.key}
        keyId={it.key}
        label={it.label}
        badge={it.badge}
        isActive={activeCategory === it.key}
        onSelect={(k) => onSelect(k as CollectionCategory)}
      />
    ))}
  </div>
);

export const FolderTreeSidebar: React.FC<FolderTreeSidebarProps> = ({
  activeCategory,
  onSelect,
}) => (
  <aside className="w-full lg:w-52 shrink-0 bg-[#FEFCF7] border border-[#254339]/10 rounded-xl p-2.5 flex flex-col gap-2 font-sans text-xs shadow-xs">
    <div className="flex items-center gap-2 px-2 pt-0.5 text-[#254339]">
      <Layers className="w-3.5 h-3.5 text-[#254339]/60" />
      <span className="font-semibold text-xs text-[#254339]/70">Categories</span>
    </div>
    {TREE_SECTIONS.map((group) => (
      <SidebarGroup
        key={group.section}
        group={group}
        activeCategory={activeCategory}
        onSelect={onSelect}
      />
    ))}
  </aside>
);
