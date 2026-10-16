'use client';

import React from 'react';
import { BookOpen, Layers, CheckCircle2, Users } from 'lucide-react';

interface Props {
  totalRepos: number;
  totalChapters: number;
  officialCount: number;
  communityCount: number;
}

const HeroBadge: React.FC = () => (
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#254339]/6 border border-[#254339]/10 text-xs font-medium text-[#254339]">
    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
    <span className="font-mono-code text-[11px]">Independent Supabase Directory</span>
  </div>
);

const HeroStatItem: React.FC<{ icon: React.ReactNode; label: string; count: number }> = ({
  icon,
  label,
  count,
}) => (
  <div className="apple-glass-card rounded-2xl border border-[#254339]/8 p-3 flex flex-col items-center apple-card-shadow transition-transform hover:-translate-y-0.5">
    <div className="flex items-center gap-1.5 text-xs text-[#254339]/65 font-medium">
      {icon}
      <span>{label}</span>
    </div>
    <span className="text-xl font-bold font-mono-code text-[#254339] mt-0.5">{count}</span>
  </div>
);

const HeroStatsRow: React.FC<Props> = ({ totalRepos, totalChapters, officialCount, communityCount }) => (
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl pt-1">
    <HeroStatItem icon={<BookOpen className="w-3.5 h-3.5 text-[#95594C]" />} label="Collections" count={totalRepos} />
    <HeroStatItem icon={<Layers className="w-3.5 h-3.5 text-[#E4BD78]" />} label="Chapters" count={totalChapters} />
    <HeroStatItem icon={<CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />} label="Official" count={officialCount} />
    <HeroStatItem icon={<Users className="w-3.5 h-3.5 text-[#38BDF8]" />} label="Community" count={communityCount} />
  </div>
);

export const RepoHeroHeader: React.FC<Props> = (props) => (
  <header className="flex flex-col items-center text-center py-6 px-4 gap-3.5">
    <HeroBadge />
    <div className="max-w-2xl flex flex-col gap-1.5">
      <h1 className="font-serif-ny text-3xl sm:text-4xl font-bold tracking-tight text-[#254339]">
        WonderRead Story Collections
      </h1>
      <p className="text-sm text-[#254339]/70 leading-relaxed max-w-xl mx-auto">
        Discover, inspect, and install verified community storybooks directly to your Apple devices. One-click install, offline-ready, and 100% privacy-respecting.
      </p>
    </div>
    <HeroStatsRow {...props} />
  </header>
);
