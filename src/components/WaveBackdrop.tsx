import React from 'react';

interface WaveBackdropProps {
  className?: string;
  variant?: 'hero' | 'section' | 'corner';
}

export const WaveBackdrop: React.FC<WaveBackdropProps> = ({
  className = '',
  variant = 'section',
}) => {
  if (variant === 'corner') {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 600 320"
        fill="none"
        className={`pointer-events-none select-none ${className}`}
      >
        {Array.from({ length: 12 }).map((_, i) => {
          const offset = i * 16;
          return (
            <path
              key={i}
              d={`M-40 ${240 + offset * 0.45} C 120 ${120 + offset * 0.6}, 320 ${290 - offset * 0.3}, 640 ${80 + offset * 0.5}`}
              stroke="currentColor"
              strokeWidth="1"
              className="text-[#C9CDD6]/60 dark:text-[#2B354A]/80"
            />
          );
        })}
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 360"
      preserveAspectRatio="none"
      fill="none"
      className={`pointer-events-none select-none w-full ${className}`}
    >
      {Array.from({ length: variant === 'hero' ? 14 : 9 }).map((_, i) => {
        const yBase = 60 + i * 20;
        const amp = variant === 'hero' ? 48 : 32;
        return (
          <path
            key={i}
            d={`M-80 ${yBase} C 280 ${yBase - amp}, 580 ${yBase + amp}, 940 ${yBase - amp * 0.6} C 1180 ${yBase + amp * 0.5}, 1340 ${yBase - amp * 0.4}, 1520 ${yBase + 10}`}
            stroke="currentColor"
            strokeWidth="1"
            className="text-[#C9CDD6]/55 dark:text-[#2B354A]/70"
          />
        );
      })}
    </svg>
  );
};
