'use client';

import React from 'react';
import { Folder, FolderOpen } from 'lucide-react';

export interface SidebarItemRowProps {
  keyId: string;
  label: string;
  badge?: string;
  isActive: boolean;
  onSelect: (keyId: string) => void;
}

const ItemBadge: React.FC<{ badge?: string; isActive: boolean }> = ({ badge, isActive }) => {
  if (!badge) return null;
  const cls = isActive ? 'bg-white/20 text-[#FEFCF7]' : 'bg-[#254339]/8 text-[#254339]/70';
  return <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${cls}`}>{badge}</span>;
};

export const SidebarItemRow: React.FC<SidebarItemRowProps> = ({
  keyId,
  label,
  badge,
  isActive,
  onSelect,
}) => (
  <button
    type="button"
    onClick={() => onSelect(keyId)}
    className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-left transition-all cursor-pointer ${
      isActive
        ? 'bg-[#254339] text-[#FEFCF7] font-semibold apple-card-shadow'
        : 'text-[#254339]/75 hover:bg-[#254339]/5 font-medium'
    }`}
  >
    <div className="flex items-center gap-2 truncate">
      {isActive ? (
        <FolderOpen className="w-4 h-4 text-[#E4BD78] shrink-0" />
      ) : (
        <Folder className="w-4 h-4 text-[#95594C]/70 shrink-0" />
      )}
      <span className="truncate text-xs">{label}</span>
    </div>
    <ItemBadge badge={badge} isActive={isActive} />
  </button>
);
