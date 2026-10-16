'use client';

import React from 'react';
import { Loader2 } from 'lucide-react';
import { StoryCollectionRepoItem } from '@/core/domain/entities/Collection';
import { ViewMode } from '@/core/domain/entities/Category';
import { CollectionCard } from '../organisms/CollectionCard';
import { FolderTableView } from '../organisms/FolderTableView';
import { EmptyState } from '../organisms/EmptyState';

export interface RepoExplorerTemplateProps {
  navbar: React.ReactNode;
  hero: React.ReactNode;
  toolbar: React.ReactNode;
  sidebar: React.ReactNode;
  items: StoryCollectionRepoItem[];
  viewMode: ViewMode;
  isLoading?: boolean;
  onOpenSqlModal: (item: StoryCollectionRepoItem) => void;
  onOpenDetailModal: (item: StoryCollectionRepoItem) => void;
  footer: React.ReactNode;
  modals: React.ReactNode;
}

const LoadingState: React.FC = () => (
  <div className="p-12 flex flex-col items-center justify-center gap-2 text-[#254339]/60">
    <Loader2 className="w-6 h-6 animate-spin text-[#95594C]" />
    <span className="text-xs">Loading repositories...</span>
  </div>
);

const ContentList: React.FC<{
  items: StoryCollectionRepoItem[];
  viewMode: ViewMode;
  isLoading?: boolean;
  onOpenSql: (item: StoryCollectionRepoItem) => void;
  onOpenDetail: (item: StoryCollectionRepoItem) => void;
}> = ({ items, viewMode, isLoading, onOpenSql, onOpenDetail }) => {
  if (isLoading) return <LoadingState />;
  if (items.length === 0) return <EmptyState />;
  if (viewMode === 'table') {
    return <FolderTableView items={items} onOpenSqlModal={onOpenSql} onOpenDetailModal={onOpenDetail} />;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((it) => (
        <CollectionCard key={it.id} item={it} onOpenSqlModal={onOpenSql} onOpenDetailModal={onOpenDetail} />
      ))}
    </div>
  );
};

export const RepoExplorerTemplate: React.FC<RepoExplorerTemplateProps> = ({
  navbar,
  hero,
  toolbar,
  sidebar,
  items,
  viewMode,
  isLoading,
  onOpenSqlModal,
  onOpenDetailModal,
  footer,
  modals,
}) => (
  <div className="min-h-screen flex flex-col bg-[#F6F3EC]">
    {navbar}
    {hero}
    <main className="max-w-6xl w-full mx-auto px-4 pb-12 flex-1 flex flex-col gap-4">
      {toolbar}
      <section className="flex flex-col lg:flex-row items-start gap-5 pt-1">
        {sidebar}
        <div className="flex-1 w-full min-w-0">
          <ContentList items={items} viewMode={viewMode} isLoading={isLoading} onOpenSql={onOpenSqlModal} onOpenDetail={onOpenDetailModal} />
        </div>
      </section>
    </main>
    {footer}
    {modals}
  </div>
);
