'use client';

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export interface CopyButtonProps {
  textToCopy: string;
  label?: string;
  successLabel?: string;
  className?: string;
}

export const CopyButton: React.FC<CopyButtonProps> = ({
  textToCopy,
  label = 'Copy',
  successLabel = 'Copied!',
  className = '',
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all shrink-0 flex items-center gap-1 cursor-pointer active:scale-95 ${
        copied
          ? 'bg-[#254339] text-[#FEFCF7]'
          : 'bg-[#FEFCF7] text-[#254339] border border-[#254339]/10 hover:bg-[#F6F3EC]'
      } ${className}`}
      title={`Copy '${textToCopy}'`}
    >
      {copied ? <Check className="w-3 h-3 text-[#E4BD78]" /> : <Copy className="w-3 h-3" />}
      <span>{copied ? successLabel : label}</span>
    </button>
  );
};
