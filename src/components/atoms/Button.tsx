'use client';

import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md';
  title?: string;
  className?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'secondary',
  size = 'md',
  title,
  className = '',
  disabled = false,
}) => {
  const variantCls = {
    primary: 'bg-[#254339] text-[#FEFCF7] hover:bg-[#1c332b]',
    secondary: 'bg-[#254339]/5 hover:bg-[#254339]/10 text-[#254339]',
    ghost: 'hover:bg-[#254339]/8 text-[#254339]/60 hover:text-[#254339]',
  }[variant];

  const sizeCls = size === 'sm' ? 'px-2 py-1 text-xs' : 'px-3 py-2 text-xs font-semibold';

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={`rounded-xl transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-1.5 ${variantCls} ${sizeCls} ${className}`}
    >
      {children}
    </button>
  );
};
