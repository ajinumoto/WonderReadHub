import { StoryCollectionRepoItem } from '@/types/repo';

export function buildInstallDeepLink(item: StoryCollectionRepoItem): string {
  const params = new URLSearchParams({
    url: item.supabaseProjectUrl,
    key: item.supabaseAnonKey,
    name: item.title,
    slug: item.slug,
  });
  return `wonderread://install-repo?${params.toString()}`;
}
