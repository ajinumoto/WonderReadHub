'use client';

import React from 'react';
import { Folder, ChevronRight, Home } from 'lucide-react';
import { CollectionCategory } from '@/types/repo';
import { buildBreadcrumbs, BreadcrumbSegment } from '@/lib/mappers/RepoPathMapper';

interface Props {
  category: CollectionCategory;
  onSelectCategory: (cat: CollectionCategory) => void;
}

const BreadcrumbItem: React.FC<{
  crumb: BreadcrumbSegment;
  isLast: boolean;
  onSelect: (cat: CollectionCategory) => void;
}> = ({ crumb, isLast, onSelect }) => (
  <button
    type="button"
    onClick={() => onSelect(crumb.category)}
    className={`flex items-center gap-1 px-1.5 py-0.5 rounded-md transition-colors cursor-pointer shrink-0 ${
      isLast
        ? 'font-semibold text-[#254339] bg-[#254339]/6'
        : 'text-[#254339]/60 hover:text-[#254339] hover:bg-[#254339]/4'
    }`}
  >
    <Folder className="w-3.5 h-3.5 text-[#95594C]" />
    <span>{crumb.label}</span>
  </button>
);

const VolumesPrefix: React.FC = () => (
  <div className="flex items-center gap-1 px-1.5 py-0.5 text-[#254339]/50 shrink-0">
    <Home className="w-3.5 h-3.5" />
    <span className="font-sans text-[11px] font-medium">Volumes</span>
  </div>
);

export const RepoDirectoryBreadcrumb: React.FC<Props> = ({ category, onSelectCategory }) => {
  const crumbs = buildBreadcrumbs(category);

  return (
    <nav aria-label="Directory Path" className="flex items-center gap-1 text-xs font-mono-code overflow-x-auto py-1">
      <VolumesPrefix />
      {crumbs.map((crumb, idx) => (
        <React.Fragment key={crumb.label}>
          <ChevronRight className="w-3 h-3 text-[#254339]/30 shrink-0" />
          <BreadcrumbItem crumb={crumb} isLast={idx === crumbs.length - 1} onSelect={onSelectCategory} />
        </React.Fragment>
      ))}
    </nav>
  );
};
