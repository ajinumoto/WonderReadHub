import { StoryCollectionRepoItem } from '@/types/repo';

export function escapeSqlString(value: string): string {
  return value.replace(/'/g, "''");
}

export function buildCollectionSqlInsert(item: StoryCollectionRepoItem): string {
  const title = escapeSqlString(item.title);
  const subtitle = escapeSqlString(item.subtitle);
  const desc = escapeSqlString(item.description);
  const badge = escapeSqlString(item.badge);
  return `INSERT INTO public.story_collections (id, slug, title, subtitle, description, cover_image_url, badge, language, version, order_index)
VALUES ('${item.id}', '${item.slug}', '${title}', '${subtitle}', '${desc}', '${item.coverImageUrl}', '${badge}', '${item.language}', ${item.version}, ${item.orderIndex})
ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, subtitle = EXCLUDED.subtitle;`;
}

export function buildFullSqlSeed(item: StoryCollectionRepoItem): string {
  const collectionSql = buildCollectionSqlInsert(item);
  const chapterComments = `-- Collection '${item.title}' includes ${item.chapters.length} story chapters.`;
  return `-- ==============================================================================
-- Supabase Seed Script: ${item.title} (${item.slug})
-- Execute in your Supabase project SQL Editor
-- ==============================================================================

${collectionSql}

${chapterComments}
SELECT 'Collection ${item.slug} imported successfully!' AS status;`;
}
