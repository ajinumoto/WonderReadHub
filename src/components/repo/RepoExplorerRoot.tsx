'use client';

import React, { useState, useMemo } from 'react';
import { CollectionCategory, ViewMode, StoryCollectionRepoItem } from '@/types/repo';
import { MOCK_COLLECTIONS } from '@/data/mockCollections';
import { filterCollections } from '@/lib/mappers/RepoFilterMapper';
import { RepoNavbar } from './header/RepoNavbar';
import { RepoHeroHeader } from './header/RepoHeroHeader';
import { RepoDirectoryBreadcrumb } from './header/RepoDirectoryBreadcrumb';
import { RepoSearchInput } from './header/RepoSearchInput';
import { RepoFilterPills } from './header/RepoFilterPills';
import { RepoViewSwitcher } from './header/RepoViewSwitcher';
import { RepoCollectionCard } from './cards/RepoCollectionCard';
import { RepoFolderTableView } from './table/RepoFolderTableView';
import { RepoFolderTreeSidebar } from './sidebar/RepoFolderTreeSidebar';
import { RepoSqlSeedModal } from './modals/RepoSqlSeedModal';
import { RepoInstallGuideModal } from './modals/RepoInstallGuideModal';
import { RepoFooter } from './footer/RepoFooter';
import { SearchX } from 'lucide-react';

const RepoToolbar: React.FC<{
  category: CollectionCategory;
  onSelectCategory: (c: CollectionCategory) => void;
  search: string;
  onSearchChange: (s: string) => void;
  viewMode: ViewMode;
  onViewModeChange: (v: ViewMode) => void;
}> = ({ category, onSelectCategory, search, onSearchChange, viewMode, onViewModeChange }) => (
  <section className="apple-glass-card border border-[#254339]/8 rounded-2xl p-3 sm:p-4 apple-card-shadow flex flex-col gap-3">
    <RepoDirectoryBreadcrumb category={category} onSelectCategory={onSelectCategory} />
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
      <RepoSearchInput value={search} onChange={onSearchChange} />
      <RepoViewSwitcher mode={viewMode} onModeChange={onViewModeChange} />
    </div>
    <RepoFilterPills activeCategory={category} onSelect={onSelectCategory} />
  </section>
);

const RepoEmptyState: React.FC = () => (
  <div className="apple-glass-card border border-[#254339]/8 rounded-2xl p-12 text-center flex flex-col items-center justify-center gap-2 apple-card-shadow">
    <div className="w-12 h-12 rounded-full bg-[#95594C]/10 flex items-center justify-center text-[#95594C] mb-1">
      <SearchX className="w-6 h-6" />
    </div>
    <h4 className="font-serif-ny font-bold text-base text-[#254339]">No Collections Found</h4>
    <p className="text-xs text-[#254339]/65 max-w-sm leading-relaxed">
      Try adjusting your search query, clearing filters, or exploring other categories in the sidebar.
    </p>
  </div>
);

const RepoContentArea: React.FC<{
  items: StoryCollectionRepoItem[];
  viewMode: ViewMode;
  onOpenSqlModal: (item: StoryCollectionRepoItem) => void;
}> = ({ items, viewMode, onOpenSqlModal }) => {
  if (items.length === 0) return <RepoEmptyState />;
  if (viewMode === 'table') {
    return <RepoFolderTableView items={items} onOpenSqlModal={onOpenSqlModal} />;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item) => (
        <RepoCollectionCard key={item.id} item={item} onOpenSqlModal={onOpenSqlModal} />
      ))}
    </div>
  );
};

const RepoMainSection: React.FC<{
  category: CollectionCategory;
  onSelectCategory: (c: CollectionCategory) => void;
  filtered: StoryCollectionRepoItem[];
  viewMode: ViewMode;
  onOpenSql: (item: StoryCollectionRepoItem) => void;
}> = ({ category, onSelectCategory, filtered, viewMode, onOpenSql }) => (
  <section className="flex flex-col lg:flex-row items-start gap-5 pt-1">
    <RepoFolderTreeSidebar activeCategory={category} onSelect={onSelectCategory} />
    <div className="flex-1 w-full min-w-0">
      <RepoContentArea items={filtered} viewMode={viewMode} onOpenSqlModal={onOpenSql} />
    </div>
  </section>
);

function useRepoExplorerState() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<CollectionCategory>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('cards');
  const [sqlItem, setSqlItem] = useState<StoryCollectionRepoItem | null>(null);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const filtered = useMemo(() => filterCollections(MOCK_COLLECTIONS, search, category), [search, category]);
  return { search, setSearch, category, setCategory, viewMode, setViewMode, sqlItem, setSqlItem, isGuideOpen, setIsGuideOpen, filtered };
}

function computeRepoStats() {
  return {
    chapters: MOCK_COLLECTIONS.reduce((acc, it) => acc + it.chaptersCount, 0),
    official: MOCK_COLLECTIONS.filter((it) => it.author.verified).length,
    community: MOCK_COLLECTIONS.filter((it) => !it.author.verified).length,
  };
}

export const RepoExplorerRoot: React.FC = () => {
  const s = useRepoExplorerState();
  const stats = useMemo(() => computeRepoStats(), []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EC]">
      <RepoNavbar totalRepos={MOCK_COLLECTIONS.length} totalChapters={stats.chapters} onOpenGuide={() => s.setIsGuideOpen(true)} />
      <RepoHeroHeader totalRepos={MOCK_COLLECTIONS.length} totalChapters={stats.chapters} officialCount={stats.official} communityCount={stats.community} />
      <main className="max-w-6xl w-full mx-auto px-4 pb-12 flex-1 flex flex-col gap-4">
        <RepoToolbar category={s.category} onSelectCategory={s.setCategory} search={s.search} onSearchChange={s.setSearch} viewMode={s.viewMode} onViewModeChange={s.setViewMode} />
        <RepoMainSection category={s.category} onSelectCategory={s.setCategory} filtered={s.filtered} viewMode={s.viewMode} onOpenSql={s.setSqlItem} />
      </main>
      <RepoFooter />
      <RepoSqlSeedModal item={s.sqlItem} onClose={() => s.setSqlItem(null)} />
      <RepoInstallGuideModal isOpen={s.isGuideOpen} onClose={() => s.setIsGuideOpen(false)} />
    </div>
  );
};
