import { ICollectionRepository } from '../../domain/repositories/ICollectionRepository';
import { StoryCollectionRepoItem, CollectionStats } from '../../domain/entities/Collection';
import { CollectionCategory } from '../../domain/entities/Category';
import { MockCollectionDataSource } from '../datasources/MockCollectionDataSource';
import { SupabaseCollectionDataSource } from '../datasources/SupabaseCollectionDataSource';
import { isSupabaseConfigured } from '../datasources/SupabaseClient';
import { FilterCollectionsUseCase } from '../../domain/usecases/FilterCollectionsUseCase';
import { ComputeCollectionStatsUseCase } from '../../domain/usecases/ComputeCollectionStatsUseCase';

export class CollectionRepositoryImpl implements ICollectionRepository {
  constructor(
    private mockSource = new MockCollectionDataSource(),
    private supabaseSource = new SupabaseCollectionDataSource(),
    private filterUseCase = new FilterCollectionsUseCase(),
    private statsUseCase = new ComputeCollectionStatsUseCase()
  ) {}

  isLive(): boolean {
    return isSupabaseConfigured;
  }

  async getAllCollections(): Promise<StoryCollectionRepoItem[]> {
    if (!this.isLive()) return this.mockSource.getCollections();
    try {
      const live = await this.supabaseSource.getRepositories();
      return live.length > 0 ? live : this.mockSource.getCollections();
    } catch {
      return this.mockSource.getCollections();
    }
  }

  async getFilteredCollections(query: string, category: CollectionCategory): Promise<StoryCollectionRepoItem[]> {
    const all = await this.getAllCollections();
    return this.filterUseCase.execute(all, query, category);
  }

  async getStats(): Promise<CollectionStats> {
    const all = await this.getAllCollections();
    return this.statsUseCase.execute(all);
  }
}
