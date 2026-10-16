'use client';

import React from 'react';
import { X, Smartphone, CheckCircle2 } from 'lucide-react';
import { GuideStepItem } from '../molecules/GuideStepItem';
import { Button } from '../atoms/Button';

export interface InstallGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GuideHeader: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <Smartphone className="w-5 h-5 text-[#95594C]" />
      <h3 className="text-lg font-bold text-[#254339]">Setup Guide</h3>
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

const GuideStepsList: React.FC = () => (
  <div className="flex flex-col gap-4">
    <GuideStepItem step={1} title="One-Click Install or Manual Copy">
      Click <strong className="font-semibold text-[#254339]">Install App</strong> to trigger deep link, or copy credentials from the repository card.
    </GuideStepItem>
    <GuideStepItem step={2} title="Confirm in WonderRead App">
      The app prompts to add this repository, or paste the URL in <strong className="font-semibold text-[#254339]">Settings ➔ Supabase Connection</strong>.
    </GuideStepItem>
    <GuideStepItem step={3} title="Automatic Cloud Sync & Offline Reading">
      The app queries stories directly from the repository and caches chapters on-device for offline reading.
    </GuideStepItem>
  </div>
);

export const InstallGuideModal: React.FC<InstallGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/35 backdrop-blur-md">
      <div className="apple-glass-card border border-[#254339]/10 rounded-3xl max-w-md w-full p-6 apple-sheet-shadow flex flex-col gap-5">
        <GuideHeader onClose={onClose} />
        <GuideStepsList />
        <Button onClick={onClose} variant="primary" className="w-full py-2.5">
          <CheckCircle2 className="w-4 h-4 text-[#E4BD78]" />
          <span>Got It, Close Guide</span>
        </Button>
      </div>
    </div>
  );
};
