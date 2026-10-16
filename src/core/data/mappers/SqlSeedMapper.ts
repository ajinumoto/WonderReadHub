import { StoryCollectionRepoItem } from '../../domain/entities/Collection';
import { BuildSqlSeedUseCase } from '../../domain/usecases/BuildSqlSeedUseCase';

export class SqlSeedMapper {
  private static useCase = new BuildSqlSeedUseCase();

  static toSqlScript(item: StoryCollectionRepoItem): string {
    return this.useCase.execute(item);
  }
}
