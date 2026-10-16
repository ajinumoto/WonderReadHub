import { StoryCollectionRepoItem, CollectionStats } from '../entities/Collection';
import { CollectionCategory } from '../entities/Category';

export interface ICollectionRepository {
  getAllCollections(): Promise<StoryCollectionRepoItem[]>;
  getFilteredCollections(query: string, category: CollectionCategory): Promise<StoryCollectionRepoItem[]>;
  getStats(): Promise<CollectionStats>;
  isLive(): boolean;
}
