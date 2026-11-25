import React from 'react';
import { Image as ImageIcon } from 'lucide-react';
import { WaveBackdrop } from './WaveBackdrop';

interface PlaceholderFrameProps {
  label: string;
  aspectRatio?: '4/3' | '3/4' | '16/9' | '9/16' | '1/1';
  className?: string;
}

const ratioClassMap = {
  '4/3': 'aspect-[4/3]',
  '3/4': 'aspect-[3/4]',
  '16/9': 'aspect-video',
  '9/16': 'aspect-[9/16]',
  '1/1': 'aspect-square',
};

export const PlaceholderFrame: React.FC<PlaceholderFrameProps> = ({
  label,
  aspectRatio = '4/3',
  className = '',
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-[#C9CDD6]/80 dark:border-[#2B354A] bg-gradient-to-br from-[#F5F4F1] via-white to-[#E9ECF2] dark:from-[#171E2C] dark:via-[#1D2433] dark:to-[#141B29] flex flex-col items-center justify-center p-6 text-center ${ratioClassMap[aspectRatio]} ${className}`}
    >
      <WaveBackdrop variant="corner" className="absolute inset-0 w-full h-full opacity-50" />
      <div className="relative z-10 flex flex-col items-center gap-3 max-w-xs">
        <div className="w-11 h-11 rounded-xl border border-[#C9CDD6] dark:border-[#2B354A] bg-white/80 dark:bg-[#171E2C]/80 flex items-center justify-center text-[#5B8FB9] dark:text-[#7EB2DB]">
          <ImageIcon className="w-5 h-5" aria-hidden="true" />
        </div>
        <p className="text-xs font-medium text-[#1D2433]/75 dark:text-[#C9CDD6] leading-relaxed">
          {label}
        </p>
      </div>
    </div>
  );
};
