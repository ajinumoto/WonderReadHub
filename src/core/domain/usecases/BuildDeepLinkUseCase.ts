import { StoryCollectionRepoItem } from '../entities/Collection';

export class BuildDeepLinkUseCase {
  execute(item: StoryCollectionRepoItem): string {
    const params = new URLSearchParams({
      url: item.supabaseProjectUrl,
      key: item.supabaseAnonKey,
      name: item.name,
    });
    return `wonderread://install-repo?${params.toString()}`;
  }
}
