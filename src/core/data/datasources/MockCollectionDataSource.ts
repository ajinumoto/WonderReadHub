import { StoryCollectionRepoItem } from '../../domain/entities/Collection';
import { MOCK_COLLECTIONS } from '@/data/mockCollections';

export class MockCollectionDataSource {
  getCollections(): StoryCollectionRepoItem[] {
    return MOCK_COLLECTIONS;
  }
}
