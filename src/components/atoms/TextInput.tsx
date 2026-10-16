'use client';

import React from 'react';

export interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  placeholder,
  className = '',
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`w-full bg-[#FEFCF7] border border-[#254339]/10 rounded-xl text-xs sm:text-sm text-[#254339] placeholder-[#254339]/40 focus:outline-none focus:ring-2 focus:ring-[#254339]/15 focus:border-[#254339]/25 transition-all apple-card-shadow ${className}`}
    />
  );
};
