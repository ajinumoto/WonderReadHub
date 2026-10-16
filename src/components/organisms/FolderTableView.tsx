'use client';

import React from 'react';
import { StoryCollectionRepoItem } from '@/core/domain/entities/Collection';
import { FolderTableRow } from '../molecules/FolderTableRow';

export interface FolderTableViewProps {
  items: StoryCollectionRepoItem[];
  onOpenSqlModal: (item: StoryCollectionRepoItem) => void;
  onOpenDetailModal: (item: StoryCollectionRepoItem) => void;
}

const TableHeaderRow: React.FC = () => (
  <thead>
    <tr className="border-b border-[#254339]/8 bg-[#254339]/4 text-[11px] uppercase tracking-wider text-[#254339]/65">
      <th className="py-2.5 px-3 font-semibold">Repository Name</th>
      <th className="py-2.5 px-3 font-semibold">Category</th>
      <th className="py-2.5 px-3 font-semibold text-right">Actions</th>
    </tr>
  </thead>
);

export const FolderTableView: React.FC<FolderTableViewProps> = ({
  items,
  onOpenSqlModal,
  onOpenDetailModal,
}) => (
  <div className="bg-[#FEFCF7] border border-[#254339]/10 rounded-xl overflow-hidden shadow-xs">
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <TableHeaderRow />
        <tbody>
          {items.map((item) => (
            <FolderTableRow
              key={item.id}
              item={item}
              onOpenSqlModal={onOpenSqlModal}
              onOpenDetailModal={onOpenDetailModal}
            />
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
