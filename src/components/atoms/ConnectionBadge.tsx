'use client';

import React from 'react';

export const ConnectionBadge: React.FC<{ isLive: boolean }> = ({ isLive }) => {
  const dotColor = isLive ? 'bg-emerald-500' : 'bg-amber-500';
  const label = isLive ? 'Live Supabase' : 'Local Catalog';
  const textClass = isLive ? 'text-emerald-800' : 'text-amber-800';

  return (
    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#254339]/6 text-[10px] font-semibold">
      <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
      <span className={textClass}>{label}</span>
    </div>
  );
};
