import React, { useState } from 'react';
import { Eye } from 'lucide-react';

interface VisualMediaProps {
  src: string;
  alt: string;
  aspectRatio?: '4/3' | '3/4' | '16/9' | '16/10' | '1/1' | 'auto';
  className?: string;
  imgClassName?: string;
}

const aspectMap = {
  '4/3': 'aspect-[4/3]',
  '3/4': 'aspect-[3/4]',
  '16/9': 'aspect-video',
  '16/10': 'aspect-[16/10]',
  '1/1': 'aspect-square',
  auto: '',
};

export const VisualMedia: React.FC<VisualMediaProps> = ({
  src,
  alt,
  aspectRatio = '4/3',
  className = '',
  imgClassName = 'object-cover object-center',
}) => {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-[#C9CDD6]/80 dark:border-[#2B354A] bg-[#F5F4F1] dark:bg-[#171E2C] ${aspectMap[aspectRatio]} ${className}`}
    >
      {failed ? (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center gap-2 bg-gradient-to-br from-[#F5F4F1] to-[#E5E8EF] dark:from-[#171E2C] dark:to-[#1D2433]">
          <Eye className="w-6 h-6 text-[#5B8FB9] dark:text-[#7EB2DB]" aria-hidden="true" />
          <p className="text-xs font-medium text-[#1D2433]/75 dark:text-[#C9CDD6] max-w-xs">
            {alt}
          </p>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onError={() => setFailed(true)}
          className={`w-full h-full ${imgClassName}`}
        />
      )}
    </div>
  );
};
