import React, { useState } from 'react';
import { Sparkles, Info, X, ExternalLink } from 'lucide-react';

interface StatusBannerProps {
  onScrollToExplore?: () => void;
  subtext?: string;
  actionText?: string;
}

export const StatusBanner: React.FC<StatusBannerProps> = ({
  onScrollToExplore,
  subtext = 'The public platform is not yet available. No launch date announced.',
  actionText = 'Keep exploring ↓'
}) => {
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <>
      <div className="w-full bg-[#0d0c15] border-y border-white/[0.08] py-2.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2.5 text-zinc-300">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="font-mono uppercase tracking-wider text-[11px] text-purple-300 font-semibold">
              Public Platform In Development
            </span>
            <span className="hidden md:inline text-zinc-600">·</span>
            <span className="hidden md:inline text-zinc-400">{subtext}</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setDetailsOpen(true)}
              className="text-[11px] text-zinc-400 hover:text-purple-300 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Info className="w-3 h-3" />
              <span>Status details</span>
            </button>

            {onScrollToExplore && (
              <button
                onClick={onScrollToExplore}
                className="text-[11px] font-mono text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                {actionText}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Details modal */}
      {detailsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg bg-[#11101a] border border-white/10 rounded-xl p-6 shadow-2xl text-zinc-200">
            <button
              onClick={() => setDetailsOpen(false)}
              className="absolute top-4 right-4 p-1 text-zinc-400 hover:text-white rounded-md"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 rounded-md bg-purple-900/40 text-purple-300">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="text-base font-semibold text-white">Current Platform Status</h3>
            </div>

            <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
              We are shaping the foundation of the undreamt ecosystem. The vision is open, the implementation is evolving, and there is deliberately no announced public launch date.
            </p>

            <div className="space-y-2.5 text-xs border-t border-white/[0.08] pt-4">
              <div className="flex justify-between py-1 border-b border-white/[0.04]">
                <span className="text-zinc-500 font-mono">Stage</span>
                <span className="text-zinc-200 font-medium">Foundations & Inquiry</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/[0.04]">
                <span className="text-zinc-500 font-mono">Public Release</span>
                <span className="text-zinc-200 font-medium">Unscheduled (Intended)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/[0.04]">
                <span className="text-zinc-500 font-mono">Commitment</span>
                <span className="text-zinc-200 font-medium">Directions, not promises</span>
              </div>
            </div>

            <div className="mt-5 p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs text-zinc-400">
              <p className="font-medium text-zinc-300 mb-1">No completion claims</p>
              This website serves as an invitation to frame questions and test small ideas before investing in large platforms.
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setDetailsOpen(false)}
                className="px-4 py-2 text-xs font-medium text-white bg-purple-600 hover:bg-purple-500 rounded-lg cursor-pointer transition-colors"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
