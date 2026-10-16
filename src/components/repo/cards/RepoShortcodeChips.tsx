'use client';

import React, { useState } from 'react';
import { KeyRound, Check } from 'lucide-react';

interface Props {
  shortcodes: string[];
}

function useCopiedCode() {
  const [copied, setCopied] = useState<string | null>(null);
  const copy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(code);
    setTimeout(() => setCopied(null), 1800);
  };
  return { copied, copy };
}

const ShortcodeChipButton: React.FC<{
  code: string;
  isCopied: boolean;
  onCopy: (c: string) => void;
}> = ({ code, isCopied, onCopy }) => {
  const cls = isCopied ? 'bg-[#254339] text-[#FEFCF7]' : 'bg-[#254339]/6 text-[#254339] hover:bg-[#254339]/12';
  return (
    <button
      type="button"
      onClick={() => onCopy(code)}
      className={`px-2 py-0.5 rounded-md font-mono-code text-[11px] font-semibold transition-all cursor-pointer flex items-center gap-1 active:scale-95 ${cls}`}
      title={`Click to copy '${code}'`}
    >
      {isCopied && <Check className="w-3 h-3 text-[#E4BD78]" />}
      <span>{isCopied ? 'Copied!' : code}</span>
    </button>
  );
};

export const RepoShortcodeChips: React.FC<Props> = ({ shortcodes }) => {
  const { copied, copy } = useCopiedCode();

  return (
    <div className="flex items-center gap-2 py-1.5 border-y border-[#254339]/6 text-xs">
      <div className="flex items-center gap-1 text-[#254339]/55 shrink-0">
        <KeyRound className="w-3.5 h-3.5 text-[#95594C]" />
        <span className="font-medium text-[11px]">Shortcodes:</span>
      </div>
      <div className="flex items-center gap-1.5 flex-wrap">
        {shortcodes.map((code) => (
          <ShortcodeChipButton key={code} code={code} isCopied={copied === code} onCopy={copy} />
        ))}
      </div>
    </div>
  );
};
