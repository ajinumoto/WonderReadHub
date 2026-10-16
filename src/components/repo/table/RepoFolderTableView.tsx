'use client';

import React from 'react';
import { StoryCollectionRepoItem } from '@/types/repo';
import { RepoFolderTableRow } from './RepoFolderTableRow';

interface Props {
  items: StoryCollectionRepoItem[];
  onOpenSqlModal: (item: StoryCollectionRepoItem) => void;
}

const TableHeaderRow: React.FC = () => (
  <thead>
    <tr className="border-b border-[#254339]/8 bg-[#254339]/4 text-[11px] font-mono-code uppercase tracking-wider text-[#254339]/65">
      <th className="py-2.5 px-3 font-semibold">Filename / Collection</th>
      <th className="py-2.5 px-3 font-semibold">Category</th>
      <th className="py-2.5 px-3 font-semibold">Chapters / Words</th>
      <th className="py-2.5 px-3 font-semibold">Last Modified</th>
      <th className="py-2.5 px-3 font-semibold text-right">Actions</th>
    </tr>
  </thead>
);

export const RepoFolderTableView: React.FC<Props> = ({ items, onOpenSqlModal }) => (
  <div className="apple-glass-card border border-[#254339]/8 rounded-2xl overflow-hidden apple-card-shadow">
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <TableHeaderRow />
        <tbody>
          {items.map((item) => (
            <RepoFolderTableRow key={item.id} item={item} onOpenSqlModal={onOpenSqlModal} />
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
