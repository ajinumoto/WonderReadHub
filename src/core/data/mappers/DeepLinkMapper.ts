import { StoryCollectionRepoItem } from '../../domain/entities/Collection';
import { BuildDeepLinkUseCase } from '../../domain/usecases/BuildDeepLinkUseCase';

export class DeepLinkMapper {
  private static useCase = new BuildDeepLinkUseCase();

  static toInstallUrl(item: StoryCollectionRepoItem): string {
    return this.useCase.execute(item);
  }
}
