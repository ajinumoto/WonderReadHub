'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Badge } from '../atoms/Badge';

export interface CardHeaderProps {
  icon: string;
  iconBg: string;
  title: string;
  badge: string;
  authorName: string;
  isVerified: boolean;
}

const AuthorInfo: React.FC<{ name: string; verified: boolean }> = ({ name, verified }) => (
  <div className="flex items-center gap-1 text-xs text-[#254339]/65 mt-0.5">
    <span>{name}</span>
    {verified && <CheckCircle2 className="w-3.5 h-3.5 text-[#254339]" />}
  </div>
);

export const CardHeader: React.FC<CardHeaderProps> = ({
  icon,
  iconBg,
  title,
  badge,
  authorName,
  isVerified,
}) => (
  <div className="flex items-start gap-3">
    <div
      className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 shadow-xs"
      style={{ backgroundColor: iconBg }}
    >
      {icon}
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-1.5 flex-wrap">
        <h3 className="text-[15px] font-bold text-[#254339] truncate">{title}</h3>
        <Badge label={badge} />
      </div>
      <AuthorInfo name={authorName} verified={isVerified} />
    </div>
  </div>
);
