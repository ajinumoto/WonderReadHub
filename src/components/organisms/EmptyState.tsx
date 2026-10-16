'use client';

import React from 'react';
import { SearchX } from 'lucide-react';

export const EmptyState: React.FC = () => (
  <div className="bg-[#FEFCF7] border border-[#254339]/10 rounded-xl p-10 text-center flex flex-col items-center justify-center gap-2 shadow-xs">
    <div className="w-10 h-10 rounded-full bg-[#95594C]/10 flex items-center justify-center text-[#95594C] mb-1">
      <SearchX className="w-5 h-5" />
    </div>
    <h4 className="font-bold text-base text-[#254339]">No Collections Found</h4>
    <p className="text-xs text-[#254339]/65 max-w-sm leading-relaxed">
      Try adjusting your search query or selecting another category from navigation.
    </p>
  </div>
);
