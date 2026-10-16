import { CollectionCategory, StoryCollectionRepoItem } from '@/types/repo';

export function matchesCategory(
  item: StoryCollectionRepoItem,
  category: CollectionCategory
): boolean {
  if (category === 'all') return true;
  if (category === 'official') return item.author.verified;
  if (category === 'id' || category === 'en') return item.language === category;
  if (category === 'community') return !item.author.verified;
  return item.category === category;
}

export function matchesQuery(
  item: StoryCollectionRepoItem,
  q: string
): boolean {
  const query = q.trim().toLowerCase();
  if (!query) return true;
  const inMeta = item.title.toLowerCase().includes(query) ||
    item.slug.toLowerCase().includes(query) ||
    item.subtitle.toLowerCase().includes(query) ||
    item.description.toLowerCase().includes(query);
  const inCodes = item.shortcodes.some((c) => c.toLowerCase().includes(query));
  const inChapters = item.chapters.some((c) => c.title.toLowerCase().includes(query));
  return inMeta || inCodes || inChapters;
}

export function filterCollections(
  items: StoryCollectionRepoItem[],
  query: string,
  category: CollectionCategory
): StoryCollectionRepoItem[] {
  return items.filter(
    (item) => matchesCategory(item, category) && matchesQuery(item, query)
  );
}
