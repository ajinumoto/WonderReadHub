'use client';

import React from 'react';

export interface ViewSwitcherSegmentProps {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
  tooltip: string;
}

export const ViewSwitcherSegment: React.FC<ViewSwitcherSegmentProps> = ({
  active,
  onClick,
  icon,
  label,
  tooltip,
}) => {
  const cls = active
    ? 'bg-[#FEFCF7] text-[#254339] font-semibold apple-card-shadow'
    : 'text-[#254339]/65 hover:text-[#254339] font-medium';

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-all cursor-pointer ${cls}`}
      title={tooltip}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};
