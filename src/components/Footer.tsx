import React from 'react';
import { NavPage } from '../types';
import { UndreamtLogo } from './UndreamtLogo';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: NavPage) => void;
  onOpenContributorModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: NavPage) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#06050a] border-t border-white/[0.08] pt-16 pb-12 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/[0.06]">
          
          {/* Brand lockup */}
          <div className="md:col-span-5 space-y-4">
            <button
              onClick={() => handleNav('home')}
              className="flex items-center group cursor-pointer focus:outline-none"
            >
              <UndreamtLogo variant="full" />
            </button>

            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              An experimental open-source ecosystem.
              <br />
              Building what has never been dreamt.
            </p>

            <div className="pt-2">
              <span className="inline-block px-2.5 py-1 text-[10px] font-mono tracking-wider text-purple-300 bg-purple-950/40 border border-purple-500/20 rounded">
                PUBLIC PLATFORM IN DEVELOPMENT
              </span>
            </div>
          </div>

          {/* Links Column 1: Explore */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-300">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNav('ecosystem')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Ecosystem directions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('mission')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Our mission
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('roadmap')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Platform status
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('roadmap')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Roadmap
                </button>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Contribute */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-300">
              Contribute
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNav('contribute')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Code & engineering
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contribute')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Documentation
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contribute')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Design
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contribute')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Research
                </button>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Community */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-300">
              Community
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNav('community')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Get involved
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('mission')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Our principles
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('community')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Governance expectations
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Frequently asked questions
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            undreamt / OPEN QUESTIONS. SHARED POSSIBILITIES.
          </div>
          <div className="flex items-center gap-6">
            <span>Project licenses and contribution guidance apply per project.</span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
