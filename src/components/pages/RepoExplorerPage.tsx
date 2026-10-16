'use client';

import React from 'react';
import { useRepoExplorerPresenter } from '../hooks/useRepoExplorerPresenter';
import { RepoExplorerTemplate } from '../templates/RepoExplorerTemplate';
import { Navbar } from '../organisms/Navbar';
import { HeroSection } from '../organisms/HeroSection';
import { ExplorerToolbar } from '../organisms/ExplorerToolbar';
import { FolderTreeSidebar } from '../organisms/FolderTreeSidebar';
import { Footer } from '../organisms/Footer';
import { SqlSeedModal } from '../organisms/SqlSeedModal';
import { InstallGuideModal } from '../organisms/InstallGuideModal';
import { CollectionDetailModal } from '../organisms/CollectionDetailModal';

const ModalsSlot: React.FC<{
  sqlItem: Parameters<typeof SqlSeedModal>[0]['item'];
  onCloseSql: () => void;
  detailItem: Parameters<typeof CollectionDetailModal>[0]['item'];
  onCloseDetail: () => void;
  onOpenSqlFromDetail: (item: NonNullable<Parameters<typeof CollectionDetailModal>[0]['item']>) => void;
  isGuideOpen: boolean;
  onCloseGuide: () => void;
}> = ({ sqlItem, onCloseSql, detailItem, onCloseDetail, onOpenSqlFromDetail, isGuideOpen, onCloseGuide }) => (
  <>
    <CollectionDetailModal item={detailItem} onClose={onCloseDetail} onOpenSql={onOpenSqlFromDetail} />
    <SqlSeedModal item={sqlItem} onClose={onCloseSql} />
    <InstallGuideModal isOpen={isGuideOpen} onClose={onCloseGuide} />
  </>
);

export const RepoExplorerPage: React.FC = () => {
  const p = useRepoExplorerPresenter();

  return (
    <RepoExplorerTemplate
      navbar={<Navbar onOpenGuide={() => p.setIsGuideOpen(true)} isLive={p.isLive} />}
      hero={<HeroSection />}
      toolbar={<ExplorerToolbar search={p.search} onSearchChange={p.setSearch} viewMode={p.viewMode} onViewModeChange={p.setViewMode} />}
      sidebar={<FolderTreeSidebar activeCategory={p.category} onSelect={p.setCategory} />}
      items={p.filteredItems}
      viewMode={p.viewMode}
      isLoading={p.isLoading}
      onOpenSqlModal={p.setSqlItem}
      onOpenDetailModal={p.setDetailItem}
      footer={<Footer />}
      modals={
        <ModalsSlot
          sqlItem={p.sqlItem}
          onCloseSql={() => p.setSqlItem(null)}
          detailItem={p.detailItem}
          onCloseDetail={() => p.setDetailItem(null)}
          onOpenSqlFromDetail={(it) => {
            p.setDetailItem(null);
            p.setSqlItem(it);
          }}
          isGuideOpen={p.isGuideOpen}
          onCloseGuide={() => p.setIsGuideOpen(false)}
        />
      }
    />
  );
};
