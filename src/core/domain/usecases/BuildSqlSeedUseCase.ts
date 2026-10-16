import { StoryCollectionRepoItem } from '../entities/Collection';

function escapeSql(value: string): string {
  return (value || '').replace(/'/g, "''");
}

function buildInsertStatement(item: StoryCollectionRepoItem): string {
  const id = escapeSql(item.id);
  const name = escapeSql(item.name);
  const desc = escapeSql(item.description);
  const cat = escapeSql(item.category);
  const url = escapeSql(item.supabaseProjectUrl);
  const key = escapeSql(item.supabaseAnonKey);
  return `INSERT INTO public.collection_repositories (\n    id, name, description, category, supabase_project_url, supabase_anon_key\n)\nVALUES (\n    '${id}', '${name}', '${desc}', '${cat}', '${url}', '${key}'\n)\nON CONFLICT (id) DO UPDATE SET\n    name = EXCLUDED.name, description = EXCLUDED.description,\n    category = EXCLUDED.category, supabase_project_url = EXCLUDED.supabase_project_url,\n    supabase_anon_key = EXCLUDED.supabase_anon_key;`;
}

export class BuildSqlSeedUseCase {
  execute(item: StoryCollectionRepoItem): string {
    const header = `-- ==============================================================================\n-- Supabase Seed: ${item.name}\n-- Run in your Supabase Dashboard SQL Editor\n-- ==============================================================================`;
    const insert = buildInsertStatement(item);
    return `${header}\n\n${insert}\n\nSELECT 'Repository ${escapeSql(item.name)} initialized!' AS status;`;
  }
}
