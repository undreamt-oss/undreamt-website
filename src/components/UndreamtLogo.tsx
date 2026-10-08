import React from 'react';

interface UndreamtLogoProps {
  className?: string;
  variant?: 'full' | 'mark' | 'capsule';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const UndreamtLogo: React.FC<UndreamtLogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md'
}) => {
  // SVG emblem
  const Emblem = ({ svgClass = 'w-full h-full' }: { svgClass?: string }) => (
    <svg
      viewBox="0 0 560 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={svgClass}
    >
      {/* Outer Stadium Capsule */}
      <rect
        width="560"
        height="320"
        rx="160"
        fill="#371569"
      />
      
      {/* Left small circular node */}
      <circle
        cx="140"
        cy="160"
        r="20"
        fill="#9d4edd"
      />

      {/* Right larger glowing circle */}
      <circle
        cx="398"
        cy="160"
        r="127"
        fill="#9d4edd"
      />

      {/* Center 4-pointed radiant sparkle star */}
      <path
        d="M 398 92 C 398 136 432 160 466 160 C 432 160 398 184 398 228 C 398 184 364 160 330 160 C 364 160 398 136 398 92 Z"
        fill="#FFFFFF"
      />
    </svg>
  );

  if (variant === 'capsule') {
    const heightClass = {
      sm: 'h-6',
      md: 'h-8',
      lg: 'h-12',
      xl: 'h-24 sm:h-32'
    }[size];

    return (
      <div className={`inline-flex items-center ${className}`}>
        <div className={`${heightClass} aspect-[560/320]`}>
          <Emblem />
        </div>
      </div>
    );
  }

  if (variant === 'mark') {
    return (
      <div className={`relative inline-flex items-center justify-center ${className}`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <circle cx="50" cy="50" r="50" fill="#9d4edd" />
          <path
            d="M 50 14 C 50 38 68 50 86 50 C 68 50 50 62 50 86 C 50 62 32 50 14 50 C 32 50 50 38 50 14 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    );
  }

  // Full lockup with wordmark
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <div className="w-8 h-[18px] shrink-0">
        <Emblem />
      </div>
      <span className="text-base font-semibold tracking-tight text-white">
        undreamt
      </span>
    </div>
  );
};
