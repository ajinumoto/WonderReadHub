'use client';

import React from 'react';
import { BookOpen, Database, Download, Eye } from 'lucide-react';
import { StoryCollectionRepoItem } from '@/core/domain/entities/Collection';
import { DeepLinkMapper } from '@/core/data/mappers/DeepLinkMapper';

export interface FolderTableRowProps {
  item: StoryCollectionRepoItem;
  onOpenSqlModal: (item: StoryCollectionRepoItem) => void;
  onOpenDetailModal: (item: StoryCollectionRepoItem) => void;
}

const TableFileCell: React.FC<{ name: string; description: string; onClick: () => void }> = ({ name, description, onClick }) => (
  <td className="py-2.5 px-3 cursor-pointer group max-w-md" onClick={onClick}>
    <div className="flex items-center gap-2">
      <BookOpen className="w-4 h-4 text-[#95594C] shrink-0" />
      <span className="font-semibold text-[#254339] group-hover:underline truncate">{name}</span>
    </div>
    <p className="text-[11px] text-[#254339]/60 line-clamp-1 pl-6 pt-0.5">{description}</p>
  </td>
);

const TableActions: React.FC<{
  deepLink: string;
  onOpenSql: () => void;
  onOpenDetail: () => void;
}> = ({ deepLink, onOpenSql, onOpenDetail }) => (
  <div className="flex items-center justify-end gap-1.5 font-sans">
    <button type="button" onClick={onOpenDetail} className="p-1.5 rounded-lg bg-[#254339]/5 hover:bg-[#254339]/10 active:scale-95 text-[#254339] transition-all cursor-pointer" title="View Details">
      <Eye className="w-3.5 h-3.5" />
    </button>
    <a href={deepLink} className="p-1.5 rounded-lg bg-[#254339] text-[#FEFCF7] hover:bg-[#1c332b] active:scale-95 transition-all" title="Install directly into WonderRead">
      <Download className="w-3.5 h-3.5" />
    </a>
    <button type="button" onClick={onOpenSql} className="p-1.5 rounded-lg bg-[#254339]/5 hover:bg-[#254339]/10 active:scale-95 text-[#254339] transition-all cursor-pointer" title="View SQL seed script">
      <Database className="w-3.5 h-3.5 text-[#95594C]" />
    </button>
  </div>
);

export const FolderTableRow: React.FC<FolderTableRowProps> = ({ item, onOpenSqlModal, onOpenDetailModal }) => {
  const deepLink = DeepLinkMapper.toInstallUrl(item);

  return (
    <tr className="border-b border-[#254339]/6 hover:bg-[#254339]/3 transition-colors text-xs">
      <TableFileCell name={item.name} description={item.description} onClick={() => onOpenDetailModal(item)} />
      <td className="py-2.5 px-3 text-[#254339]/70 whitespace-nowrap">
        <span className="px-2 py-0.5 rounded-md bg-[#254339]/6 text-[10px] uppercase font-bold text-[#254339]">{item.category}</span>
      </td>
      <td className="py-2.5 px-3 whitespace-nowrap text-right">
        <TableActions deepLink={deepLink} onOpenSql={() => onOpenSqlModal(item)} onOpenDetail={() => onOpenDetailModal(item)} />
      </td>
    </tr>
  );
};
