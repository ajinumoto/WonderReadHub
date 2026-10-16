'use client';

import React from 'react';
import { Download, Database, ExternalLink } from 'lucide-react';
import { StoryCollectionRepoItem } from '@/types/repo';
import { buildInstallDeepLink } from '@/lib/mappers/RepoDeepLinkMapper';

interface Props {
  item: StoryCollectionRepoItem;
  onOpenSqlModal: (item: StoryCollectionRepoItem) => void;
}

const InstallLinkButton: React.FC<{ deepLink: string }> = ({ deepLink }) => (
  <a
    href={deepLink}
    className="flex-1 py-2 px-3.5 rounded-xl bg-[#254339] text-[#FEFCF7] text-xs font-semibold hover:bg-[#1c332b] active:scale-95 transition-all flex items-center justify-center gap-1.5 shadow-xs"
    title="Install directly into WonderRead on Apple devices"
  >
    <Download className="w-3.5 h-3.5" />
    <span>Install App</span>
  </a>
);

const SqlSeedButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="py-2 px-3 rounded-xl bg-[#254339]/5 hover:bg-[#254339]/10 active:scale-95 text-[#254339] text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer"
    title="View and copy Supabase SQL seed script"
  >
    <Database className="w-3.5 h-3.5 text-[#95594C]" />
    <span>SQL Seed</span>
  </button>
);

const ManifestLinkButton: React.FC<{ url: string }> = ({ url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-xl bg-[#254339]/5 hover:bg-[#254339]/10 active:scale-95 text-[#254339]/60 hover:text-[#254339] transition-all flex items-center justify-center cursor-pointer"
    title="Open raw JSON manifest"
  >
    <ExternalLink className="w-3.5 h-3.5" />
  </a>
);

export const RepoActionButtons: React.FC<Props> = ({ item, onOpenSqlModal }) => {
  const deepLink = buildInstallDeepLink(item);

  return (
    <div className="flex items-center gap-2 pt-1">
      <InstallLinkButton deepLink={deepLink} />
      <SqlSeedButton onClick={() => onOpenSqlModal(item)} />
      <ManifestLinkButton url={item.directInstallUrl} />
    </div>
  );
};
