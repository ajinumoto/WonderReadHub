'use client';

import React from 'react';
import { FileJson, Copy, Database, Download } from 'lucide-react';
import { StoryCollectionRepoItem } from '@/types/repo';
import { formatCollectionStats, formatShortDate } from '@/lib/mappers/RepoPathMapper';
import { buildInstallDeepLink } from '@/lib/mappers/RepoDeepLinkMapper';

interface Props {
  item: StoryCollectionRepoItem;
  onOpenSqlModal: (item: StoryCollectionRepoItem) => void;
}

const TableRowFileCell: React.FC<{ slug: string; title: string }> = ({ slug, title }) => (
  <td className="py-2.5 px-3 flex items-center gap-2.5">
    <FileJson className="w-4 h-4 text-[#95594C] shrink-0" />
    <div className="min-w-0">
      <p className="font-semibold text-[#254339] truncate">{slug}.json</p>
      <p className="text-[11px] font-sans text-[#254339]/60 truncate">{title}</p>
    </div>
  </td>
);

const TableRowCategoryBadge: React.FC<{ category: string }> = ({ category }) => (
  <td className="py-2.5 px-3 text-[#254339]/70 whitespace-nowrap">
    <span className="px-2 py-0.5 rounded-md bg-[#254339]/6 text-[10px] uppercase font-bold text-[#254339]">
      {category}
    </span>
  </td>
);

const TableDownloadBtn: React.FC<{ link: string }> = ({ link }) => (
  <a
    href={link}
    className="p-1.5 rounded-lg bg-[#254339] text-[#FEFCF7] hover:bg-[#1c332b] active:scale-95 transition-all"
    title="Install directly into WonderRead"
  >
    <Download className="w-3.5 h-3.5" />
  </a>
);

const TableSqlBtn: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="p-1.5 rounded-lg bg-[#254339]/5 hover:bg-[#254339]/10 active:scale-95 text-[#254339] transition-all cursor-pointer"
    title="View SQL seed script"
  >
    <Database className="w-3.5 h-3.5 text-[#95594C]" />
  </button>
);

const TableCopyBtn: React.FC<{ url: string }> = ({ url }) => (
  <button
    type="button"
    onClick={() => navigator.clipboard.writeText(url)}
    className="p-1.5 rounded-lg bg-[#254339]/5 hover:bg-[#254339]/10 active:scale-95 text-[#254339] transition-all cursor-pointer"
    title="Copy direct REST endpoint URL"
  >
    <Copy className="w-3.5 h-3.5" />
  </button>
);

const TableRowActionsGroup: React.FC<{
  item: StoryCollectionRepoItem;
  deepLink: string;
  onOpenSql: (item: StoryCollectionRepoItem) => void;
}> = ({ item, deepLink, onOpenSql }) => (
  <div className="flex items-center justify-end gap-1.5 font-sans">
    <TableDownloadBtn link={deepLink} />
    <TableSqlBtn onClick={() => onOpenSql(item)} />
    <TableCopyBtn url={item.directInstallUrl} />
  </div>
);

export const RepoFolderTableRow: React.FC<Props> = ({ item, onOpenSqlModal }) => {
  const stats = formatCollectionStats(item.chaptersCount, item.wordCount);
  const dateStr = formatShortDate(item.updatedAt);
  const deepLink = buildInstallDeepLink(item);

  return (
    <tr className="border-b border-[#254339]/6 hover:bg-[#254339]/3 transition-colors text-xs font-mono-code">
      <TableRowFileCell slug={item.slug} title={item.title} />
      <TableRowCategoryBadge category={item.category} />
      <td className="py-2.5 px-3 text-[#254339]/75 whitespace-nowrap">{stats}</td>
      <td className="py-2.5 px-3 text-[#254339]/55 whitespace-nowrap">{dateStr}</td>
      <td className="py-2.5 px-3 whitespace-nowrap text-right">
        <TableRowActionsGroup item={item} deepLink={deepLink} onOpenSql={onOpenSqlModal} />
      </td>
    </tr>
  );
};
