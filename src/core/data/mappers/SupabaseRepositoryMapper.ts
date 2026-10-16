import { StoryCollectionRepoItem } from '../../domain/entities/Collection';

export interface SupabaseRepoRow {
  id: string;
  name: string;
  description: string | null;
  category: string;
  supabase_project_url: string;
  supabase_anon_key: string;
  created_at?: string;
}

export class SupabaseRepositoryMapper {
  static toEntity(row: SupabaseRepoRow): StoryCollectionRepoItem {
    return {
      id: row.id,
      name: row.name,
      description: row.description || '',
      category: row.category || 'general',
      supabaseProjectUrl: row.supabase_project_url,
      supabaseAnonKey: row.supabase_anon_key,
      createdAt: row.created_at,
    };
  }
}
