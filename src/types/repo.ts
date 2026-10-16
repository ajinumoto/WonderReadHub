export type CollectionCategory =
  | 'all'
  | 'official'
  | 'id'
  | 'en'
  | 'fable'
  | 'bedtime'
  | 'folktale'
  | 'community';

export type ViewMode = 'cards' | 'table';

export interface StoryChapterSummary {
  number: number;
  title: string;
  summary: string;
  paragraphsCount: number;
  featured?: boolean;
  illustrationUrl?: string;
}

export interface CollectionAuthor {
  name: string;
  handle?: string;
  verified: boolean;
}

export interface StoryCollectionRepoItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  badgeTone: 'official' | 'emerald' | 'amber' | 'violet' | 'sky';
  language: 'id' | 'en' | 'bilingual';
  category: 'fable' | 'bedtime' | 'folktale' | 'adventure';
  coverImageUrl: string;
  icon: string;
  iconBg: string;
  version: number;
  orderIndex: number;
  shortcodes: string[];
  directInstallUrl: string;
  supabaseEndpoint: string;
  supabaseProjectUrl: string;
  supabaseAnonKey: string;
  webpageUrl: string;
  author: CollectionAuthor;
  chaptersCount: number;
  wordCount: number;
  updatedAt: string;
  chapters: StoryChapterSummary[];
}

export interface RepoDirectoryNode {
  id: string;
  name: string;
  slug: string;
  path: string;
  iconName: string;
  count: number;
}
