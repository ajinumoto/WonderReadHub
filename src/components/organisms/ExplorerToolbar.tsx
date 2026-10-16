'use client';

import React from 'react';
import { LayoutGrid, Table } from 'lucide-react';
import { ViewMode } from '@/core/domain/entities/Category';
import { SearchBar } from '../molecules/SearchBar';
import { ViewSwitcherSegment } from '../molecules/ViewSwitcherSegment';

export interface ExplorerToolbarProps {
  search: string;
  onSearchChange: (s: string) => void;
  viewMode: ViewMode;
  onViewModeChange: (v: ViewMode) => void;
}

const ViewSwitcherControl: React.FC<{
  mode: ViewMode;
  onChange: (v: ViewMode) => void;
}> = ({ mode, onChange }) => (
  <div className="flex items-center bg-[#254339]/6 rounded-xl p-1 border border-[#254339]/8 shrink-0">
    <ViewSwitcherSegment
      active={mode === 'table'}
      onClick={() => onChange('table')}
      icon={<Table className="w-3.5 h-3.5" />}
      label="List"
      tooltip="List View"
    />
    <ViewSwitcherSegment
      active={mode === 'cards'}
      onClick={() => onChange('cards')}
      icon={<LayoutGrid className="w-3.5 h-3.5" />}
      label="Cards"
      tooltip="Card Grid View"
    />
  </div>
);

export const ExplorerToolbar: React.FC<ExplorerToolbarProps> = ({
  search,
  onSearchChange,
  viewMode,
  onViewModeChange,
}) => (
  <section className="bg-[#FEFCF7] border border-[#254339]/10 rounded-xl p-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 shadow-xs">
    <SearchBar value={search} onChange={onSearchChange} placeholder="Search collections, stories, shortcodes..." />
    <ViewSwitcherControl mode={viewMode} onChange={onViewModeChange} />
  </section>
);
