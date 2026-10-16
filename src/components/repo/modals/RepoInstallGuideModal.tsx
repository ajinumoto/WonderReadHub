'use client';

import React from 'react';
import { X, Smartphone, CheckCircle2 } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const GuideModalHeader: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="flex items-center justify-between pb-3 border-b border-[#254339]/8">
    <div className="flex items-center gap-2">
      <Smartphone className="w-5 h-5 text-[#95594C]" />
      <h3 className="font-serif-ny text-lg font-bold text-[#254339]">Setup Guide</h3>
    </div>
    <button
      type="button"
      onClick={onClose}
      className="w-7 h-7 rounded-full bg-[#254339]/6 hover:bg-[#254339]/12 flex items-center justify-center text-[#254339]/60 hover:text-[#254339] transition-colors cursor-pointer"
      title="Close guide"
    >
      <X className="w-4 h-4" />
    </button>
  </div>
);

const GuideStepItem: React.FC<{ step: number; title: string; children: React.ReactNode }> = ({
  step,
  title,
  children,
}) => (
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

const GuideStepsList: React.FC = () => (
  <div className="flex flex-col gap-4">
    <GuideStepItem step={1} title="One-Click Install or Shortcode">
      Tap <strong className="font-semibold text-[#254339]">Install App</strong> to trigger deep link, or click any shortcode chip to copy it.
    </GuideStepItem>
    <GuideStepItem step={2} title="Open WonderRead on Apple Devices">
      The app prompts to switch repositories, or paste the URL in <strong className="font-semibold text-[#254339]">Settings ➔ Supabase</strong>.
    </GuideStepItem>
    <GuideStepItem step={3} title="Automatic Offline Reading">
      Opened stories are automatically cached on device for seamless bedtime and travel reading.
    </GuideStepItem>
  </div>
);

const GuideDismissButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="w-full py-2.5 rounded-xl bg-[#254339] text-[#FEFCF7] text-xs font-semibold hover:bg-[#1c332b] active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
  >
    <CheckCircle2 className="w-4 h-4 text-[#E4BD78]" />
    <span>Got It, Close Guide</span>
  </button>
);

export const RepoInstallGuideModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/35 backdrop-blur-md">
      <div className="apple-glass-card border border-[#254339]/10 rounded-3xl max-w-md w-full p-6 apple-sheet-shadow flex flex-col gap-5">
        <GuideModalHeader onClose={onClose} />
        <GuideStepsList />
        <GuideDismissButton onClick={onClose} />
      </div>
    </div>
  );
};
