'use client';

import React from 'react';
import { Database, Download, Eye, ExternalLink } from 'lucide-react';
import { StoryCollectionRepoItem } from '@/core/domain/entities/Collection';
import { DeepLinkMapper } from '@/core/data/mappers/DeepLinkMapper';

export interface CollectionCardProps {
  item: StoryCollectionRepoItem;
  onOpenSqlModal: (item: StoryCollectionRepoItem) => void;
  onOpenDetailModal: (item: StoryCollectionRepoItem) => void;
}

const CardTopRow: React.FC<{ name: string; category: string }> = ({ name, category }) => (
  <div className="flex items-start justify-between gap-2">
    <h3 className="font-bold text-sm text-[#254339] leading-snug">{name}</h3>
    <span className="px-2 py-0.5 rounded-md bg-[#254339]/6 text-[10px] uppercase font-bold text-[#254339] shrink-0">
      {category}
    </span>
  </div>
);

const CardEndpointChip: React.FC<{ url: string }> = ({ url }) => (
  <div className="px-2.5 py-1.5 rounded-lg bg-[#254339]/4 border border-[#254339]/6 flex items-center justify-between text-[11px] text-[#254339]/70 font-mono truncate">
    <span className="truncate">{url}</span>
    <ExternalLink className="w-3 h-3 text-[#254339]/40 shrink-0 ml-1.5" />
  </div>
);

const CardActions: React.FC<{
  deepLink: string;
  onOpenSql: () => void;
  onOpenDetail: () => void;
}> = ({ deepLink, onOpenSql, onOpenDetail }) => (
  <div className="flex items-center justify-between gap-2 pt-1 border-t border-[#254339]/6">
    <div className="flex items-center gap-1.5">
      <a href={deepLink} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#254339] text-[#FEFCF7] text-xs font-semibold hover:bg-[#1c332b] active:scale-95 transition-all">
        <Download className="w-3.5 h-3.5" />
        <span>Install App</span>
      </a>
      <button type="button" onClick={onOpenSql} className="p-1.5 rounded-xl bg-[#254339]/6 hover:bg-[#254339]/10 text-[#254339] active:scale-95 transition-all cursor-pointer" title="View Supabase SQL Seed">
        <Database className="w-3.5 h-3.5 text-[#95594C]" />
      </button>
    </div>
    <button type="button" onClick={onOpenDetail} className="inline-flex items-center gap-1 text-xs font-semibold text-[#254339]/75 hover:text-[#254339] transition-colors cursor-pointer">
      <Eye className="w-3.5 h-3.5" />
      <span>Details</span>
    </button>
  </div>
);

export const CollectionCard: React.FC<CollectionCardProps> = ({ item, onOpenSqlModal, onOpenDetailModal }) => (
  <article className="bg-[#FEFCF7] border border-[#254339]/12 hover:border-[#254339]/25 rounded-xl p-4 flex flex-col gap-3 shadow-xs hover:shadow-sm transition-all duration-150">
    <CardTopRow name={item.name} category={item.category} />
    <p className="text-xs text-[#254339]/75 leading-relaxed line-clamp-3">{item.description}</p>
    <CardEndpointChip url={item.supabaseProjectUrl} />
    <CardActions deepLink={DeepLinkMapper.toInstallUrl(item)} onOpenSql={() => onOpenSqlModal(item)} onOpenDetail={() => onOpenDetailModal(item)} />
  </article>
);
