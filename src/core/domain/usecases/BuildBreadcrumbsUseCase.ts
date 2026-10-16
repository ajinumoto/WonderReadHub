import { BreadcrumbSegment } from '../entities/Collection';
import { CollectionCategory } from '../entities/Category';

const CATEGORY_PATH_LABELS: Record<CollectionCategory, string> = {
  all: 'all',
  fable: 'categories/fable',
  bedtime: 'categories/bedtime',
  folktale: 'categories/folktale',
  adventure: 'categories/adventure',
};

export class BuildBreadcrumbsUseCase {
  execute(category: CollectionCategory): BreadcrumbSegment[] {
    const root: BreadcrumbSegment[] = [{ label: 'repo.wonderread.org', category: 'all' }];
    if (category === 'all') return root;
    return [...root, { label: CATEGORY_PATH_LABELS[category], category }];
  }
}
