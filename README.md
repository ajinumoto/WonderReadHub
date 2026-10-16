# WonderRead Repository Hub

A decentralized repository directory and discovery catalog for **WonderRead** (Lentera) story collections. Designed with a clean directory explorer interface, it allows users to discover, inspect, and install story repositories directly into the WonderRead mobile app via 1-click deep links.

---

## Architecture & Concept

WonderRead decouples the discovery directory from content hosting:

```
┌─────────────────────────────────┐
│     WonderRead Repository Hub   │
│   (Next.js 16 + Clean Arch)     │
└────────────────┬────────────────┘
                 │
                 ▼
┌─────────────────────────────────┐
│      Main Hub Supabase DB       │  (Catalog of repositories)
│   (collection_repositories)     │
└────────┬───────────────┬────────┘
         │               │
         ▼               ▼
┌─────────────────┐  ┌─────────────────┐
│  Wonder Story   │  │ Other Collection│  (Independent Supabase instances
│  (Supabase DB)  │  │ (Supabase DB)   │   hosting books & stories)
└────────┬────────┘  └────────┬────────┘
         │                    │
         └──────────┬─────────┘
                    ▼
       ┌────────────────────────┐
       │   WonderRead iOS App   │
       │ wonderread://install-..│
       └────────────────────────┘
```

- **Central Catalog (`public.collection_repositories`)**: Stores lightweight metadata for each repository (name, description, category, target project URL, and anon key).
- **Decentralized Content**: Each repository maintains its own independent Supabase database with books and story chapters.
- **Native Deep-Link Integration**: Tapping **Install** triggers `wonderread://install-repo` to seamlessly import the collection into the user's mobile app.

---

## Repository Catalog Schema

Each repository entry contains strictly 5 core fields:

| Field | Type | Description |
|---|---|---|
| `name` | `TEXT` | Title of the collection (e.g., `Wonder Story`) |
| `description` | `TEXT` | Summary of content, themes, and featured stories |
| `category` | `TEXT` | Category filter tag (`fable`, `folktale`, `bedtime`, `adventure`) |
| `supabase_project_url` | `TEXT` | Endpoint URL of the collection's Supabase instance |
| `supabase_anon_key` | `TEXT` | Public publishable/anon key of the collection |

---

## Key Features

- **Decentralized Multi-Repo Architecture**: Browse and install story collections hosted across distinct Supabase projects.
- **Dual View Modes**: Switch seamlessly between **Card Grid** and compact **Directory Folder Table**.
- **Real-Time Supabase Integration**: Automatically queries live records from Supabase with graceful fallback to local data if offline.
- **Live Status Indicator**: Dynamic status badge in the navbar indicating `Live Supabase` or `Local Fallback` connection state.
- **Interactive Detail Modal**: Inspect repository metadata, category tags, creation date, and credentials securely.
- **1-Click Mobile App Installation**: Direct deep link generator (`wonderread://install-repo?url=...&key=...&name=...`).
- **Interactive Setup Guide**: Clear in-app guide explaining how to add repositories manually or via QR/URL in WonderRead.
- **SQL Seed Generator**: In-app modal that generates ready-to-run SQL `INSERT` statements for custom deployments.

---

## Quick Start

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/your-username/wonderread-repolist.git
cd "WonderRead RepoList"

npm install
```

### 2. Configure Environment Variables

Create `.env.local` based on `.env.example`:

```bash
cp .env.example .env.local
```

Fill in your main Supabase directory catalog credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://ayycglmwmdcouxfjejue.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_your_key_here
PORT=3003
```

### 3. Initialize Supabase Database

Open your Supabase project's **SQL Editor** and run the setup script located at [`supabase/schema.sql`](file:///Users/iosdeveloper/Documents/Git/WonderRead%20RepoList/supabase/schema.sql):

```sql
-- Creates collection_repositories table, indexes, and RLS policies
CREATE TABLE IF NOT EXISTS public.collection_repositories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    description TEXT,
    category TEXT NOT NULL DEFAULT 'general',
    supabase_project_url TEXT NOT NULL,
    supabase_anon_key TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.collection_repositories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access for collection_repositories"
    ON public.collection_repositories FOR SELECT
    TO anon, authenticated
    USING (true);

GRANT SELECT ON public.collection_repositories TO anon, authenticated;
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3003](http://localhost:3003) to view the web application.

---

## Production Build & Quality Gates

```bash
# Type check and linting
npm run lint

# Production build with Next.js Turbopack
npm run build

# Start production server
npm run start
```

---

## Project Structure

This project strictly adheres to **Clean Architecture** and **Atomic Design**:

```
src/
├── app/                        # Next.js App Router (Layout & Pages)
├── components/
│   ├── atoms/                  # Badge, ActionButton, SearchInput, CategoryPill
│   ├── molecules/              # FolderTableRow, BreadcrumbTrail, ModalHeader
│   ├── organisms/              # Navbar, FolderTableView, CollectionCard, Modals
│   ├── templates/              # RepoExplorerTemplate
│   ├── pages/                  # RepoExplorerPage
│   └── hooks/                  # useRepoExplorerPresenter (Pure Presenter Hook)
├── core/
│   ├── domain/                 # Pure business logic (Entities, Repositories, Use Cases)
│   │   ├── entities/           # Collection, Category
│   │   ├── repositories/       # ICollectionRepository interface
│   │   └── usecases/           # FilterCollections, BuildDeepLink, BuildSqlSeed
│   └── data/                   # Data implementation layer
│       ├── datasources/        # SupabaseClient, SupabaseCollectionDataSource
│       ├── mappers/            # SupabaseRepositoryMapper
│       └── repositories/       # CollectionRepositoryImpl (Live + Fallback)
├── data/                       # Local fallback mock data
└── types/                      # Shared TypeScript definitions
```

---

## Deep Link Specification

The web hub connects with the WonderRead mobile app using the custom URI scheme:

```
wonderread://install-repo?url=<SUPABASE_URL>&key=<ANON_KEY>&name=<COLLECTION_NAME>
```

| Parameter | Description |
|---|---|
| `url` | URL-encoded Supabase Project URL |
| `key` | URL-encoded Supabase Public/Anon API Key |
| `name` | URL-encoded Display Title of the Collection |

---

## Legal & Intellectual Property Notice

> [!IMPORTANT]
> **Independent Directory Notice:**
>
> - **Independent Directory:** WonderRead Collection Hub is an independent, community-driven discovery index. This service does not host, store, or distribute copyrighted literary works, audio, or media files on its servers.
> - **Third-Party Content:** All story collections and external Supabase endpoints listed are operated and maintained strictly by their respective creators.
> - **User Responsibility:** Connecting external story collections is an elective action performed at the sole discretion of the user. Users are responsible for ensuring external content complies with applicable copyright laws in their jurisdiction.
