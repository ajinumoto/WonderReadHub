'use client';

import React, { useState } from 'react';
import { BookOpen, ChevronDown } from 'lucide-react';
import { StoryChapterSummary } from '@/types/repo';

interface Props {
  chapters: StoryChapterSummary[];
}

const ChapterChip: React.FC<{ ch: StoryChapterSummary }> = ({ ch }) => {
  const cls = ch.featured
    ? 'bg-[#E4BD78]/20 border border-[#E4BD78]/40 text-[#254339]'
    : 'bg-[#254339]/4 border border-[#254339]/8 text-[#254339]/80';
  return (
    <span className={`text-[11px] px-2.5 py-1 rounded-md font-medium ${cls}`} title={ch.summary}>
      {ch.featured && '⭐ '}Ch. {ch.number}: {ch.title}
    </span>
  );
};

const AccordionToggle: React.FC<{ count: number; isOpen: boolean; onToggle: () => void }> = ({
  count,
  isOpen,
  onToggle,
}) => (
  <button
    type="button"
    onClick={onToggle}
    className="w-full px-3 py-2 flex items-center justify-between text-xs text-[#254339] hover:bg-[#254339]/4 transition-colors cursor-pointer"
    aria-expanded={isOpen}
  >
    <div className="flex items-center gap-1.5 font-medium">
      <BookOpen className="w-3.5 h-3.5 text-[#95594C]" />
      <span>Chapters & Stories</span>
      <span className="px-1.5 py-0.5 rounded-full bg-[#254339]/8 text-[10px] font-mono-code font-semibold">
        {count}
      </span>
    </div>
    <ChevronDown className={`w-3.5 h-3.5 text-[#254339]/40 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
  </button>
);

export const RepoChaptersAccordion: React.FC<Props> = ({ chapters }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#254339]/8 rounded-xl overflow-hidden bg-[#254339]/2">
      <AccordionToggle count={chapters.length} isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <div className="p-2.5 pt-1 border-t border-[#254339]/6 flex flex-wrap gap-1.5 bg-[#FEFCF7]/90">
          {chapters.map((ch) => <ChapterChip key={ch.number} ch={ch} />)}
        </div>
      )}
    </div>
  );
};
