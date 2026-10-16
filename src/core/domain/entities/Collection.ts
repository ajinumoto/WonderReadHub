import { CollectionCategory } from './Category';

export interface StoryCollectionRepoItem {
  id: string;
  name: string;
  description: string;
  category: string;
  supabaseProjectUrl: string;
  supabaseAnonKey: string;
  createdAt?: string;
}

export interface CollectionStats {
  totalRepos: number;
  totalCategories: number;
}

export interface BreadcrumbSegment {
  label: string;
  category: CollectionCategory;
}
