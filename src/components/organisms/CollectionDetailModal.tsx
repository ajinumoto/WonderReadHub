'use client';

import React from 'react';
import { X, Download, Database, Copy, Server, Key } from 'lucide-react';
import { StoryCollectionRepoItem } from '@/core/domain/entities/Collection';
import { DeepLinkMapper } from '@/core/data/mappers/DeepLinkMapper';
import { Button } from '../atoms/Button';

export interface CollectionDetailModalProps {
  item: StoryCollectionRepoItem | null;
  onClose: () => void;
  onOpenSql: (item: StoryCollectionRepoItem) => void;
}

const ModalHeaderRow: React.FC<{ name: string; category: string; onClose: () => void }> = ({ name, category, onClose }) => (
  <div className="flex items-start justify-between gap-3 pb-3 border-b border-[#254339]/8">
    <div>
      <div className="flex items-center gap-2">
        <h2 className="text-base font-bold text-[#254339]">{name}</h2>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#E4BD78]/25 text-[#254339] uppercase">{category}</span>
      </div>
      <p className="text-xs text-[#254339]/65">WonderRead Collection Repository</p>
    </div>
    <button type="button" onClick={onClose} className="w-7 h-7 rounded-full bg-[#254339]/6 hover:bg-[#254339]/12 flex items-center justify-center text-[#254339]/60 hover:text-[#254339] transition-colors cursor-pointer" title="Close">
      <X className="w-4 h-4" />
    </button>
  </div>
);

const CredentialsBox: React.FC<{ url: string; anonKey: string }> = ({ url, anonKey }) => (
  <div className="flex flex-col gap-2 p-3 rounded-xl bg-[#254339]/4 border border-[#254339]/8 font-sans text-xs">
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-1.5 text-[#254339]/70 truncate font-mono text-[11px]">
        <Server className="w-3.5 h-3.5 text-[#95594C] shrink-0" />
        <span className="truncate">{url}</span>
      </div>
      <button type="button" onClick={() => navigator.clipboard.writeText(url)} className="p-1 rounded hover:bg-[#254339]/8 text-[#254339]" title="Copy URL">
        <Copy className="w-3 h-3" />
      </button>
    </div>
    <div className="flex items-center justify-between gap-2 pt-1 border-t border-[#254339]/6">
      <div className="flex items-center gap-1.5 text-[#254339]/70 truncate font-mono text-[11px]">
        <Key className="w-3.5 h-3.5 text-[#95594C] shrink-0" />
        <span className="truncate">{anonKey.slice(0, 32)}...</span>
      </div>
      <button type="button" onClick={() => navigator.clipboard.writeText(anonKey)} className="p-1 rounded hover:bg-[#254339]/8 text-[#254339]" title="Copy Anon Key">
        <Copy className="w-3 h-3" />
      </button>
    </div>
  </div>
);

const ModalFooterActions: React.FC<{ deepLink: string; onOpenSql: () => void; onClose: () => void }> = ({ deepLink, onOpenSql, onClose }) => (
  <div className="flex items-center justify-between gap-2 pt-3 border-t border-[#254339]/8">
    <div className="flex items-center gap-2">
      <a href={deepLink} className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#254339] text-[#FEFCF7] text-xs font-semibold hover:bg-[#1c332b] active:scale-95 transition-all">
        <Download className="w-3.5 h-3.5" />
        <span>Install in App</span>
      </a>
      <button type="button" onClick={onOpenSql} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#254339]/6 hover:bg-[#254339]/10 text-xs font-semibold text-[#254339] active:scale-95 transition-all cursor-pointer">
        <Database className="w-3.5 h-3.5 text-[#95594C]" />
        <span>SQL Seed</span>
      </button>
    </div>
    <Button onClick={onClose} variant="ghost" className="text-xs py-1.5">Close</Button>
  </div>
);

export const CollectionDetailModal: React.FC<CollectionDetailModalProps> = ({ item, onClose, onOpenSql }) => {
  if (!item) return null;
  const deepLink = DeepLinkMapper.toInstallUrl(item);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md">
      <div className="apple-glass-card border border-[#254339]/12 rounded-3xl max-w-xl w-full p-6 apple-sheet-shadow flex flex-col gap-4">
        <ModalHeaderRow name={item.name} category={item.category} onClose={onClose} />
        <p className="text-xs text-[#254339]/80 leading-relaxed">{item.description}</p>
        <CredentialsBox url={item.supabaseProjectUrl} anonKey={item.supabaseAnonKey} />
        <ModalFooterActions deepLink={deepLink} onOpenSql={() => onOpenSql(item)} onClose={onClose} />
      </div>
    </div>
  );
};
