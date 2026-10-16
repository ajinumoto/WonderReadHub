import { supabase } from './SupabaseClient';
import { SupabaseRepositoryMapper, SupabaseRepoRow } from '../mappers/SupabaseRepositoryMapper';
import { StoryCollectionRepoItem } from '../../domain/entities/Collection';

export class SupabaseCollectionDataSource {
  async getRepositories(): Promise<StoryCollectionRepoItem[]> {
    if (!supabase) return [];
    const { data, error } = await supabase
      .from('collection_repositories')
      .select('*')
      .order('created_at', { ascending: true });

    if (error || !data) throw error || new Error('Failed to fetch from Supabase');
    return (data as SupabaseRepoRow[]).map(SupabaseRepositoryMapper.toEntity);
  }
}
