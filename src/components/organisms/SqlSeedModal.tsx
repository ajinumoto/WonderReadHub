'use client';

import React from 'react';
import { X, Database } from 'lucide-react';
import { StoryCollectionRepoItem } from '@/core/domain/entities/Collection';
import { SqlSeedMapper } from '@/core/data/mappers/SqlSeedMapper';
import { CopyButton } from '../atoms/CopyButton';
import { Button } from '../atoms/Button';

export interface SqlSeedModalProps {
  item: StoryCollectionRepoItem | null;
  onClose: () => void;
}

const ModalTitle: React.FC<{ name: string; category: string }> = ({ name, category }) => (
  <div className="flex items-center gap-2">
    <Database className="w-5 h-5 text-[#95594C]" />
    <div>
      <h3 className="text-base font-bold text-[#254339]">Supabase SQL Seed</h3>
      <p className="text-[11px] text-[#254339]/60">{name} ({category})</p>
    </div>
  </div>
);

const CloseBtn: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <button
    type="button"
    onClick={onClose}
    className="w-7 h-7 rounded-full bg-[#254339]/6 hover:bg-[#254339]/12 flex items-center justify-center text-[#254339]/60 hover:text-[#254339] transition-colors cursor-pointer"
    title="Close"
  >
    <X className="w-4 h-4" />
  </button>
);

const CodeSnippetBlock: React.FC<{ code: string }> = ({ code }) => (
  <div className="relative">
    <pre className="p-3.5 rounded-xl bg-[#254339]/5 border border-[#254339]/8 font-mono text-[11px] text-[#254339] overflow-x-auto max-h-56 leading-relaxed">
      {code}
    </pre>
    <div className="absolute top-2.5 right-2.5">
      <CopyButton textToCopy={code} label="Copy SQL" successLabel="Copied!" className="apple-card-shadow" />
    </div>
  </div>
);

export const SqlSeedModal: React.FC<SqlSeedModalProps> = ({ item, onClose }) => {
  if (!item) return null;
  const sqlCode = SqlSeedMapper.toSqlScript(item);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/35 backdrop-blur-md">
      <div className="apple-glass-card border border-[#254339]/10 rounded-3xl max-w-xl w-full p-6 apple-sheet-shadow flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <ModalTitle name={item.name} category={item.category} />
          <CloseBtn onClose={onClose} />
        </div>
        <p className="text-xs text-[#254339]/75">
          Execute this idempotent SQL script in your Supabase dashboard&apos;s <span className="font-semibold font-mono">SQL Editor</span>:
        </p>
        <CodeSnippetBlock code={sqlCode} />
        <Button onClick={onClose} className="w-full py-2">Close</Button>
      </div>
    </div>
  );
};
