'use client';

import React, { useState } from 'react';
import { Package, Copy, Check } from 'lucide-react';

interface Props {
  endpointUrl: string;
}

const CopyEndpointButton: React.FC<{ copied: boolean; onCopy: () => void }> = ({
  copied,
  onCopy,
}) => (
  <button
    type="button"
    onClick={onCopy}
    className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all shrink-0 flex items-center gap-1 cursor-pointer ${
      copied
        ? 'bg-[#254339] text-[#FEFCF7]'
        : 'bg-[#FEFCF7] text-[#254339] border border-[#254339]/10 hover:bg-[#F6F3EC]'
    }`}
    title="Copy endpoint URL"
  >
    {copied ? <Check className="w-3 h-3 text-[#E4BD78]" /> : <Copy className="w-3 h-3" />}
    <span>{copied ? 'Copied' : 'Copy'}</span>
  </button>
);

export const RepoEndpointRow: React.FC<Props> = ({ endpointUrl }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(endpointUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="flex items-center gap-2 p-2 rounded-xl bg-[#254339]/3 border border-[#254339]/8 text-xs">
      <Package className="w-3.5 h-3.5 text-[#95594C] shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="text-[10px] uppercase font-semibold text-[#254339]/45 tracking-wider">REST Endpoint</p>
        <p className="font-mono-code text-[11px] text-[#254339]/75 truncate">{endpointUrl}</p>
      </div>
      <CopyEndpointButton copied={copied} onCopy={handleCopy} />
    </div>
  );
};
