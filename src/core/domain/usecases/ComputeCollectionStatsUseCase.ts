import { StoryCollectionRepoItem, CollectionStats } from '../entities/Collection';

export class ComputeCollectionStatsUseCase {
  execute(items: StoryCollectionRepoItem[]): CollectionStats {
    const categories = new Set(items.map((it) => it.category));
    return {
      totalRepos: items.length,
      totalCategories: categories.size,
    };
  }
}
