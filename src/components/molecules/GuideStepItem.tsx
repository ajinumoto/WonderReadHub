'use client';

import React from 'react';

export interface GuideStepItemProps {
  step: number;
  title: string;
  children: React.ReactNode;
}

export const GuideStepItem: React.FC<GuideStepItemProps> = ({ step, title, children }) => (
  <div className="flex items-start gap-3">
    <span className="w-6 h-6 rounded-full bg-[#254339] text-[#FEFCF7] flex items-center justify-center font-bold shrink-0 text-xs shadow-xs">
      {step}
    </span>
    <div>
      <p className="font-semibold text-sm text-[#254339]">{title}</p>
      <p className="text-[#254339]/70 text-xs mt-0.5 leading-relaxed">{children}</p>
    </div>
  </div>
);
