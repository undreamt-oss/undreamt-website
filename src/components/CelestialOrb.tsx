import React from 'react';

interface CelestialOrbProps {
  nodes?: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
  caption?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'star' | 'capsule';
}

export const CelestialOrb: React.FC<CelestialOrbProps> = ({
  nodes,
  caption = 'FROM POSSIBILITY TO OPEN WORK',
  className = '',
  size = 'md',
  variant = 'star'
}) => {
  const sizeClasses = {
    sm: 'w-48 h-48',
    md: 'w-72 h-72 sm:w-80 sm:h-80',
    lg: 'w-80 h-80 sm:w-96 sm:h-96'
  }[size];

  return (
    <div className={`relative flex flex-col items-center justify-center select-none ${className}`}>
      {/* Outer frame container */}
      <div className={`relative ${sizeClasses} flex items-center justify-center`}>
        
        {/* Subtle grid ticks on corners */}
        <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/20" />
        <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/20" />
        <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/20" />
        <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/20" />

        {/* Ambient violet background bloom */}
        <div className="absolute inset-0 bg-radial from-purple-600/30 via-purple-900/10 to-transparent rounded-full blur-2xl pointer-events-none" />

        {/* Concentric orbital rings */}
        <div className="absolute inset-4 rounded-full border border-white/10" />
        <div className="absolute inset-10 rounded-full border border-white/[0.07] border-dashed" />
        <div className="absolute inset-16 rounded-full border border-purple-500/20" />
        <div className="absolute inset-24 rounded-full border border-purple-400/25" />

        {/* Crosshair fine axes */}
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />

        {/* Center Graphic */}
        {variant === 'capsule' ? (
          <div className="relative z-10 w-44 sm:w-56 aspect-[560/320] drop-shadow-[0_0_35px_rgba(168,85,247,0.55)] transition-transform duration-700 hover:scale-105">
            <svg viewBox="0 0 560 320" fill="none" className="w-full h-full">
              <rect width="560" height="320" rx="160" fill="#371569" />
              <circle cx="140" cy="160" r="20" fill="#9d4edd" />
              <circle cx="398" cy="160" r="127" fill="#9d4edd" />
              <path
                d="M 398 92 C 398 136 432 160 466 160 C 432 160 398 184 398 228 C 398 184 364 160 330 160 C 364 160 398 136 398 92 Z"
                fill="#FFFFFF"
              />
            </svg>
          </div>
        ) : (
          <div className="relative z-10 flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-purple-700 via-purple-600 to-fuchsia-500 shadow-[0_0_50px_rgba(168,85,247,0.6)] transition-transform duration-700 hover:scale-105">
            <div className="absolute inset-1 rounded-full bg-gradient-to-b from-white/25 via-transparent to-black/30 pointer-events-none" />
            <svg
              className="w-10 h-10 sm:w-12 sm:h-12 text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C12 7 7 12 0 12C7 12 12 17 12 24C12 17 17 12 24 12C17 12 12 7 12 0Z" />
            </svg>
            <div className="absolute w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
          </div>
        )}

        {/* Peripheral node labels if provided */}
        {nodes?.top && (
          <div className="absolute top-1 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <span className="inline-block px-2.5 py-0.5 text-[10px] tracking-widest font-mono text-zinc-400 bg-[#0d0c15] border border-white/15 rounded">
              {nodes.top}
            </span>
          </div>
        )}

        {nodes?.right && (
          <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 z-20">
            <span className="inline-block px-2.5 py-0.5 text-[10px] tracking-widest font-mono text-zinc-400 bg-[#0d0c15] border border-white/15 rounded">
              {nodes.right}
            </span>
          </div>
        )}

        {nodes?.bottom && (
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 translate-y-1/2 z-20">
            <span className="inline-block px-2.5 py-0.5 text-[10px] tracking-widest font-mono text-zinc-400 bg-[#0d0c15] border border-white/15 rounded">
              {nodes.bottom}
            </span>
          </div>
        )}

        {nodes?.left && (
          <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 z-20">
            <span className="inline-block px-2.5 py-0.5 text-[10px] tracking-widest font-mono text-zinc-400 bg-[#0d0c15] border border-white/15 rounded">
              {nodes.left}
            </span>
          </div>
        )}
      </div>

      {/* Bottom technical caption matching screenshot */}
      {caption && (
        <div className="mt-3 text-[11px] font-mono tracking-widest text-zinc-500 uppercase text-center">
          {caption}
        </div>
      )}
    </div>
  );
};
