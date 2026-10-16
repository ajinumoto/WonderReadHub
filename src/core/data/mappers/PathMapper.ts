import { CollectionCategory } from '../../domain/entities/Category';
import { BreadcrumbSegment } from '../../domain/entities/Collection';
import { BuildBreadcrumbsUseCase } from '../../domain/usecases/BuildBreadcrumbsUseCase';

export class PathMapper {
  private static breadcrumbsUseCase = new BuildBreadcrumbsUseCase();

  static toBreadcrumbs(category: CollectionCategory): BreadcrumbSegment[] {
    return this.breadcrumbsUseCase.execute(category);
  }

  static formatBookStats(booksCount: number, chaptersCount: number): string {
    const bookLabel = booksCount === 1 ? '1 Book' : `${booksCount} Books`;
    const chapterLabel = chaptersCount === 1 ? '1 Chapter' : `${chaptersCount} Chapters`;
    return `${bookLabel} • ${chapterLabel}`;
  }

  static formatShortDate(isoString: string): string {
    return new Date(isoString).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  }
}
