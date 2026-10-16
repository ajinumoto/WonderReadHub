'use client';

import React from 'react';

export interface BadgeProps {
  label: string;
  tone?: 'default' | 'official' | 'subtle';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  tone = 'default',
  className = '',
}) => {
  const toneClasses = {
    default: 'bg-[#254339]/6 text-[#254339]',
    official: 'bg-[#E4BD78]/20 text-[#254339]',
    subtle: 'bg-[#254339]/4 text-[#254339]/70',
  }[tone];

  return (
    <span
      className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md ${toneClasses} ${className}`}
    >
      {label}
    </span>
  );
};
