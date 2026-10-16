'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { CollectionCategory, ViewMode } from '@/core/domain/entities/Category';
import { StoryCollectionRepoItem, CollectionStats } from '@/core/domain/entities/Collection';
import { CollectionRepositoryImpl } from '@/core/data/repositories/CollectionRepositoryImpl';

function useFilterState() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<CollectionCategory>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('table');
  return { search, setSearch, category, setCategory, viewMode, setViewMode };
}

function useModalState() {
  const [sqlItem, setSqlItem] = useState<StoryCollectionRepoItem | null>(null);
  const [detailItem, setDetailItem] = useState<StoryCollectionRepoItem | null>(null);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  return { sqlItem, setSqlItem, detailItem, setDetailItem, isGuideOpen, setIsGuideOpen };
}

function useRepoData(repo: CollectionRepositoryImpl, search: string, category: CollectionCategory) {
  const [items, setItems] = useState<StoryCollectionRepoItem[]>([]);
  const [stats, setStats] = useState<CollectionStats>({ totalRepos: 0, totalCategories: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [version, setVersion] = useState(0);

  useEffect(() => {
    let ignore = false;
    Promise.all([repo.getFilteredCollections(search, category), repo.getStats()])
      .then(([filtered, s]) => {
        if (ignore) return;
        setItems(filtered);
        setStats(s);
        setIsLoading(false);
      });
    return () => { ignore = true; };
  }, [repo, search, category, version]);

  const reload = useCallback(() => {
    setIsLoading(true);
    setVersion((v) => v + 1);
  }, []);

  return { items, stats, isLoading, reload };
}

export function useRepoExplorerPresenter(repoInstance?: CollectionRepositoryImpl) {
  const repo = useMemo(() => repoInstance || new CollectionRepositoryImpl(), [repoInstance]);
  const filters = useFilterState();
  const modals = useModalState();
  const data = useRepoData(repo, filters.search, filters.category);

  return {
    ...filters,
    ...modals,
    filteredItems: data.items,
    stats: data.stats,
    isLoading: data.isLoading,
    isLive: repo.isLive(),
    refresh: data.reload,
  };
}
