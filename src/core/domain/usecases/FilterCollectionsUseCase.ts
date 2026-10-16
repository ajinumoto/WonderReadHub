import { StoryCollectionRepoItem } from '../entities/Collection';
import { CollectionCategory } from '../entities/Category';

function matchesCategory(
  item: StoryCollectionRepoItem,
  category: CollectionCategory
): boolean {
  if (category === 'all') return true;
  return item.category.toLowerCase() === category.toLowerCase();
}

function matchesQuery(item: StoryCollectionRepoItem, q: string): boolean {
  const query = q.trim().toLowerCase();
  if (!query) return true;
  return (
    item.name.toLowerCase().includes(query) ||
    item.description.toLowerCase().includes(query) ||
    item.category.toLowerCase().includes(query) ||
    item.supabaseProjectUrl.toLowerCase().includes(query)
  );
}

export class FilterCollectionsUseCase {
  execute(
    items: StoryCollectionRepoItem[],
    query: string,
    category: CollectionCategory
  ): StoryCollectionRepoItem[] {
    return items.filter(
      (item) => matchesCategory(item, category) && matchesQuery(item, query)
    );
  }
}
