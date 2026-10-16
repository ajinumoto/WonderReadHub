'use client';

import React from 'react';
import { Download, Database, ExternalLink } from 'lucide-react';
import { ActionLink } from '../atoms/ActionLink';
import { Button } from '../atoms/Button';

export interface CardActionButtonsProps {
  deepLink: string;
  manifestUrl: string;
  onOpenSql: () => void;
}

export const CardActionButtons: React.FC<CardActionButtonsProps> = ({
  deepLink,
  manifestUrl,
  onOpenSql,
}) => (
  <div className="flex items-center gap-2 pt-1">
    <ActionLink href={deepLink} title="Install directly into WonderRead on Apple devices" className="flex-1">
      <Download className="w-3.5 h-3.5" />
      <span>Install App</span>
    </ActionLink>
    <Button onClick={onOpenSql} title="View and copy Supabase SQL seed script">
      <Database className="w-3.5 h-3.5 text-[#95594C]" />
      <span>SQL Seed</span>
    </Button>
    <ActionLink href={manifestUrl} target="_blank" variant="ghost" title="Open raw JSON manifest" className="p-2">
      <ExternalLink className="w-3.5 h-3.5" />
    </ActionLink>
  </div>
);
