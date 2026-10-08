import React, { useState } from 'react';
import { CONTRIBUTOR_PATHS } from '../data/content';
import { X, Code, BookOpen, Layout, Microscope, ArrowRight, Check, Sparkles } from 'lucide-react';

interface ContributorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPath?: (pathId: string) => void;
}

export const ContributorModal: React.FC<ContributorModalProps> = ({
  isOpen,
  onClose,
  onSelectPath
}) => {
  const [selectedId, setSelectedId] = useState<string>('code');

  if (!isOpen) return null;

  const currentPath = CONTRIBUTOR_PATHS.find((p) => p.id === selectedId) || CONTRIBUTOR_PATHS[0];

  const getIcon = (id: string) => {
    switch (id) {
      case 'code':
        return <Code className="w-4 h-4" />;
      case 'docs':
        return <BookOpen className="w-4 h-4" />;
      case 'design':
        return <Layout className="w-4 h-4" />;
      case 'research':
        return <Microscope className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#0f0e17] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 text-zinc-200 animate-fade-in">
        
        {/* Header */}
        <div className="flex items-start justify-between pb-6 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-purple-300">
                Participation Pathways
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Start small. Build together.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Choose a way to contribute, understand the context, and make your first step small enough to learn from.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Path Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-6">
          {CONTRIBUTOR_PATHS.map((path) => {
            const isSelected = path.id === selectedId;
            return (
              <button
                key={path.id}
                onClick={() => setSelectedId(path.id)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-purple-950/40 border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.2)]'
                    : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/15'
                }`}
              >
                <div className={`p-1.5 rounded-lg inline-block mb-2 ${isSelected ? 'text-purple-300 bg-purple-900/60' : 'text-zinc-400 bg-white/5'}`}>
                  {getIcon(path.id)}
                </div>
                <div className="text-xs font-semibold text-white truncate">{path.title}</div>
                <div className="text-[10px] text-zinc-400 truncate mt-0.5">{path.subtitle}</div>
              </button>
            );
          })}
        </div>

        {/* Detail Panel */}
        <div className="mt-6 p-5 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-white flex items-center gap-2">
              <span>{currentPath.title}</span>
              <span className="text-xs font-normal text-zinc-400">— {currentPath.subtitle}</span>
            </h3>
            <p className="text-xs text-zinc-300 mt-1.5 leading-relaxed">
              {currentPath.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-white/[0.06] text-xs">
            <div className="space-y-1">
              <span className="font-mono text-[11px] text-purple-300 uppercase">A small starting point</span>
              <p className="text-zinc-400 leading-relaxed">{currentPath.startingPoint}</p>
            </div>
            <div className="space-y-1">
              <span className="font-mono text-[11px] text-purple-300 uppercase">What to bring to review</span>
              <p className="text-zinc-400 leading-relaxed">{currentPath.whatToBring}</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/[0.08]">
          <span className="text-[11px] text-zinc-500">
            Curiosity is a useful qualification.
          </span>
          <button
            onClick={() => {
              if (onSelectPath) onSelectPath(selectedId);
              onClose();
            }}
            className="px-4 py-2 text-xs font-medium text-white bg-purple-600 hover:bg-purple-500 rounded-lg flex items-center gap-1.5 cursor-pointer shadow-[0_0_15px_rgba(147,51,234,0.3)]"
          >
            <span>Explore {currentPath.title} Guide</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
