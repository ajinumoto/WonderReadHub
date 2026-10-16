'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { CollectionAuthor } from '@/types/repo';

interface Props {
  icon: string;
  iconBg: string;
  title: string;
  badge: string;
  author: CollectionAuthor;
}

const CardAuthorInfo: React.FC<{ author: CollectionAuthor }> = ({ author }) => (
  <div className="flex items-center gap-1 text-xs text-[#254339]/65 mt-0.5">
    <span>{author.name}</span>
    {author.verified && <CheckCircle2 className="w-3.5 h-3.5 text-[#254339]" />}
  </div>
);

export const RepoCardHeader: React.FC<Props> = ({ icon, iconBg, title, badge, author }) => (
  <div className="flex items-start gap-3">
    <div
      className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 shadow-xs"
      style={{ backgroundColor: iconBg }}
    >
      {icon}
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-1.5 flex-wrap">
        <h3 className="font-serif-ny text-[15px] font-bold text-[#254339] truncate">{title}</h3>
        <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#254339]/6 text-[#254339]">
          {badge}
        </span>
      </div>
      <CardAuthorInfo author={author} />
    </div>
  </div>
);
