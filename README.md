# WonderRead Supabase Collection Repository Hub

Dedicated repository directory for WonderRead (Lentera) storybooks and bedtime story collections hosted on Supabase. Combines a **web folder directory explorer layout** with the **repository catalog mechanics of [cloudstreamrepo.com](https://cloudstreamrepo.com/)**.

## Key Features

- 📁 **Web Folder Directory Navigation**: Breadcrumb path bar, hierarchical folder tree sidebar, and an instant view switcher between **Repository Cards** and **Directory Folder Table**.
- 🔍 **Live Search & Filter Pills**: Instant real-time filtering across collection titles, slugs, shortcodes, and chapter titles. Quick filter pills: *All*, *Official*, *Bahasa Indonesia*, *English*, *Fables*, *Folktales*, *Bedtime*, and *Community*.
- 🔑 **One-Click Shortcodes**: Interactive shortcode chips (e.g., `kanca`, `timun`, `calm`) with instant clipboard copy and feedback badges.
- 📦 **Direct Install & Deep Linking**: One-click install to the native WonderRead application via `wonderread://install-repo?...` and direct Supabase REST endpoints.
- 📖 **Expandable Chapter Accordion**: Collapsible chapter view displaying story summaries and featured indicators (`⭐`).
- 💾 **Idempotent SQL Seed Generator**: Pre-generated SQL `INSERT` scripts ready to run in any self-hosted Supabase SQL editor.
- 📱 **Interactive Setup Guide**: Clear step-by-step modal explaining how to connect repositories into WonderRead.

## Getting Started

```bash
# Navigate to the repo web project
cd repo

# Install dependencies
npm install

# Run the local development server (port 3003)
npm run dev

# Build for production
npm run build
```

---

## Legal Disclaimer & Intellectual Property Notice

> [!IMPORTANT]
> **Independent Directory & Third-Party Content Notice:**
>
> * **Independent Directory:** WonderRead Collection Hub is an independent, community-driven catalog and index. This service does not host, store, index, archive, or distribute any copyrighted literary works, audio, or media files on its servers.
> * **Not Part of the Application:** All story collections, Supabase endpoints, and chapters listed here are operated, hosted, and maintained strictly by independent third-party creators or individual users. They do not constitute part of the WonderRead application or source code.
> * **User Responsibility:** Installing, importing, or connecting external story collections is an elective action performed at the sole discretion of the user. Users are exclusively responsible for verifying that any external content or database they access complies with applicable copyright laws and licensing terms in their jurisdiction.
> * **Trademarks & Copyrights:** All character names, trademarks, book titles, and copyrighted materials belong strictly to their respective copyright holders. Sample collections and schemas are provided solely for technical interoperability and educational purposes, without endorsement or affiliation.
