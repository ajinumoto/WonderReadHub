'use client';

import React from 'react';

export interface ActionLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'ghost';
  title?: string;
  target?: string;
  className?: string;
}

export const ActionLink: React.FC<ActionLinkProps> = ({
  href,
  children,
  variant = 'primary',
  title,
  target,
  className = '',
}) => {
  const variantCls = variant === 'primary'
    ? 'bg-[#254339] text-[#FEFCF7] hover:bg-[#1c332b]'
    : 'bg-[#254339]/5 text-[#254339]/60 hover:text-[#254339]';

  return (
    <a
      href={href}
      title={title}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      className={`py-2 px-3.5 rounded-xl text-xs font-semibold active:scale-95 transition-all flex items-center justify-center gap-1.5 shadow-xs ${variantCls} ${className}`}
    >
      {children}
    </a>
  );
};
