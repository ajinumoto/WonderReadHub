'use client';

import React, { useState } from 'react';
import { X, Database, Copy, Check } from 'lucide-react';
import { StoryCollectionRepoItem } from '@/types/repo';
import { buildFullSqlSeed } from '@/lib/mappers/SqlSeedMapper';

interface Props {
  item: StoryCollectionRepoItem | null;
  onClose: () => void;
}

const SqlModalHeader: React.FC<{ item: StoryCollectionRepoItem; onClose: () => void }> = ({
  item,
  onClose,
}) => (
  <div className="flex items-center justify-between pb-3 border-b border-[#254339]/8">
    <div className="flex items-center gap-2">
      <Database className="w-5 h-5 text-[#95594C]" />
      <div>
        <h3 className="font-serif-ny text-base font-bold text-[#254339]">Supabase SQL Seed</h3>
        <p className="text-[11px] text-[#254339]/60">{item.title} ({item.slug})</p>
      </div>
    </div>
    <button
      type="button"
      onClick={onClose}
      className="w-7 h-7 rounded-full bg-[#254339]/6 hover:bg-[#254339]/12 flex items-center justify-center text-[#254339]/60 hover:text-[#254339] transition-colors cursor-pointer"
      title="Close"
    >
      <X className="w-4 h-4" />
    </button>
  </div>
);

const CopySqlButton: React.FC<{ copied: boolean; onCopy: () => void }> = ({ copied, onCopy }) => (
  <button
    type="button"
    onClick={onCopy}
    className={`absolute top-2.5 right-2.5 px-2.5 py-1 rounded-lg text-xs font-medium flex items-center gap-1 apple-card-shadow transition-all cursor-pointer active:scale-95 ${
      copied ? 'bg-[#254339] text-[#FEFCF7]' : 'bg-[#FEFCF7] text-[#254339] border border-[#254339]/10'
    }`}
  >
    {copied ? <Check className="w-3.5 h-3.5 text-[#E4BD78]" /> : <Copy className="w-3.5 h-3.5" />}
    <span>{copied ? 'Copied!' : 'Copy SQL'}</span>
  </button>
);

const SqlModalCodeBlock: React.FC<{ sqlCode: string }> = ({ sqlCode }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(sqlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  return (
    <div className="relative">
      <pre className="p-3.5 rounded-xl bg-[#254339]/5 border border-[#254339]/8 font-mono-code text-[11px] text-[#254339] overflow-x-auto max-h-56 leading-relaxed">
        {sqlCode}
      </pre>
      <CopySqlButton copied={copied} onCopy={handleCopy} />
    </div>
  );
};

const CloseModalButton: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <button
    type="button"
    onClick={onClose}
    className="w-full py-2 rounded-xl bg-[#254339]/8 hover:bg-[#254339]/14 text-[#254339] text-xs font-semibold transition-colors cursor-pointer"
  >
    Close
  </button>
);

export const RepoSqlSeedModal: React.FC<Props> = ({ item, onClose }) => {
  if (!item) return null;
  const sqlCode = buildFullSqlSeed(item);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/35 backdrop-blur-md">
      <div className="apple-glass-card border border-[#254339]/10 rounded-3xl max-w-xl w-full p-6 apple-sheet-shadow flex flex-col gap-4">
        <SqlModalHeader item={item} onClose={onClose} />
        <p className="text-xs text-[#254339]/75">
          Execute this idempotent SQL script in your Supabase dashboard&apos;s <span className="font-semibold font-mono-code">SQL Editor</span>:
        </p>
        <SqlModalCodeBlock sqlCode={sqlCode} />
        <CloseModalButton onClose={onClose} />
      </div>
    </div>
  );
};
