'use client';

import React from 'react';
import { StoryCollectionRepoItem } from '@/types/repo';
import { RepoCardHeader } from './RepoCardHeader';
import { RepoShortcodeChips } from './RepoShortcodeChips';
import { RepoEndpointRow } from './RepoEndpointRow';
import { RepoChaptersAccordion } from './RepoChaptersAccordion';
import { RepoActionButtons } from './RepoActionButtons';

interface Props {
  item: StoryCollectionRepoItem;
  onOpenSqlModal: (item: StoryCollectionRepoItem) => void;
}

export const RepoCollectionCard: React.FC<Props> = ({ item, onOpenSqlModal }) => (
  <article className="apple-glass-card border border-[#254339]/8 hover:border-[#254339]/20 rounded-2xl p-4 flex flex-col gap-3 apple-card-shadow hover:apple-card-hover transition-all duration-200">
    <RepoCardHeader
      icon={item.icon}
      iconBg={item.iconBg}
      title={item.title}
      badge={item.badge}
      author={item.author}
    />
    <p className="text-xs text-[#254339]/75 leading-relaxed line-clamp-2">
      {item.description}
    </p>
    <RepoShortcodeChips shortcodes={item.shortcodes} />
    <RepoEndpointRow endpointUrl={item.directInstallUrl} />
    <RepoChaptersAccordion chapters={item.chapters} />
    <RepoActionButtons item={item} onOpenSqlModal={onOpenSqlModal} />
  </article>
);
