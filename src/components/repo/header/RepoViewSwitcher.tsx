'use client';

import React from 'react';
import { LayoutGrid, Table } from 'lucide-react';
import { ViewMode } from '@/types/repo';

interface Props {
  mode: ViewMode;
  onModeChange: (m: ViewMode) => void;
}

const SwitcherSegment: React.FC<{
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
  tooltip: string;
}> = ({ active, onClick, icon, label, tooltip }) => (
  <button
    type="button"
    onClick={onClick}
    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-all cursor-pointer ${
      active ? 'bg-[#FEFCF7] text-[#254339] font-semibold apple-card-shadow' : 'text-[#254339]/65 hover:text-[#254339] font-medium'
    }`}
    title={tooltip}
  >
    {icon}
    <span>{label}</span>
  </button>
);

export const RepoViewSwitcher: React.FC<Props> = ({ mode, onModeChange }) => (
  <div className="flex items-center bg-[#254339]/6 rounded-xl p-1 border border-[#254339]/8 shrink-0">
    <SwitcherSegment
      active={mode === 'cards'}
      onClick={() => onModeChange('cards')}
      icon={<LayoutGrid className="w-3.5 h-3.5" />}
      label="Cards"
      tooltip="Card Grid View"
    />
    <SwitcherSegment
      active={mode === 'table'}
      onClick={() => onModeChange('table')}
      icon={<Table className="w-3.5 h-3.5" />}
      label="Folder"
      tooltip="Directory Table View"
    />
  </div>
);
