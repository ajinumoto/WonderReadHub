-- ==============================================================================
-- WonderRead Repository Hub - Supabase Setup Script
-- Project: https://ayycglmwmdcouxfjejue.supabase.co
-- Run this script in the SQL Editor on your Supabase Project Dashboard
-- ==============================================================================

-- 1. Create collection_repositories Table
CREATE TABLE IF NOT EXISTS public.collection_repositories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    description TEXT,
    category TEXT NOT NULL DEFAULT 'general',
    supabase_project_url TEXT NOT NULL,
    supabase_anon_key TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2. Performance Indexes
CREATE INDEX IF NOT EXISTS idx_collection_repositories_category
    ON public.collection_repositories(category);

CREATE INDEX IF NOT EXISTS idx_collection_repositories_name
    ON public.collection_repositories(name);

-- 3. Security & Row Level Security (RLS)
ALTER TABLE public.collection_repositories ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public read access for collection_repositories"
    ON public.collection_repositories;
CREATE POLICY "Allow public read access for collection_repositories"
    ON public.collection_repositories FOR SELECT
    TO anon, authenticated
    USING (true);

-- Grant SELECT access to public roles
GRANT SELECT ON public.collection_repositories TO anon, authenticated;

-- 4. Seed First Collection: Wonder Story
INSERT INTO public.collection_repositories (id, name, description, category, supabase_project_url, supabase_anon_key)
VALUES
    (
        'a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d',
        'Wonder Story',
        'A curated treasury of timeless classic fables featuring beloved tales like The Tortoise and the Hare and The Goose that Laid the Golden Eggs, inspiring moral wisdom and imagination.',
        'fable',
        'https://iuhxndjikplntmoyqofh.supabase.co',
        'sb_publishable_H-zNWHkEoQ0EIs-tZ92YYQ_dmHwCoiI'
    ),
    (
        'b2c3d4e5-f6a7-4b8c-9d0e-1f2a3b4c5d6e',
        'Timeless Archipelago Folktales',
        'Curated cultural folktales and moral heritage passed down across generations.',
        'folktale',
        'https://iuhxndjikplntmoyqofh.supabase.co',
        'sb_publishable_H-zNWHkEoQ0EIs-tZ92YYQ_dmHwCoiI'
    ),
    (
        'c3d4e5f6-a7b8-4c9d-0e1f-2a3b4c5d6e7f',
        'Whispers of the Forest & Stars',
        'Gentle, slow-cadence bedtime narratives with peaceful nature imagery.',
        'bedtime',
        'https://iuhxndjikplntmoyqofh.supabase.co',
        'sb_publishable_H-zNWHkEoQ0EIs-tZ92YYQ_dmHwCoiI'
    ),
    (
        'd4e5f6a7-b8c9-4d0e-1f2a-3b4c5d6e7f8a',
        'The Little Stargazer & Lunar Bunny',
        'An imaginative cosmos journey exploring soft constellations and friendly comets.',
        'adventure',
        'https://iuhxndjikplntmoyqofh.supabase.co',
        'sb_publishable_H-zNWHkEoQ0EIs-tZ92YYQ_dmHwCoiI'
    )
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name,
    description = EXCLUDED.description,
    category = EXCLUDED.category,
    supabase_project_url = EXCLUDED.supabase_project_url,
    supabase_anon_key = EXCLUDED.supabase_anon_key;

SELECT count(*) || ' repositories successfully initialized in collection_repositories' AS status
FROM public.collection_repositories;