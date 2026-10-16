import { CollectionCategory } from '@/types/repo';

export interface BreadcrumbSegment {
  label: string;
  category: CollectionCategory;
}

export function buildBreadcrumbs(category: CollectionCategory): BreadcrumbSegment[] {
  const root: BreadcrumbSegment[] = [{ label: 'repo.wonderread.org', category: 'all' }];
  if (category === 'all') return root;
  const labels: Record<CollectionCategory, string> = {
    all: 'all',
    official: 'collections/official',
    id: 'collections/indonesian',
    en: 'collections/english',
    fable: 'genres/fables',
    bedtime: 'genres/bedtime',
    folktale: 'genres/folklore',
    community: 'community/shared',
  };
  return [...root, { label: labels[category], category }];
}

export function formatCollectionStats(chaptersCount: number, wordCount: number): string {
  const wordsFormatted = (wordCount / 1000).toFixed(1);
  return `${chaptersCount} Chapters • ~${wordsFormatted}k Words`;
}

export function formatShortDate(isoString: string): string {
  const date = new Date(isoString);
  return date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}
