import React, { useState } from 'react';
import { NavPage } from '../types';
import { UndreamtLogo } from './UndreamtLogo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPage: NavPage;
  onNavigate: (page: NavPage) => void;
  onOpenContributorModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenContributorModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: NavPage; label: string }[] = [
    { id: 'ecosystem', label: 'Ecosystem' },
    { id: 'mission', label: 'Our mission' },
    { id: 'roadmap', label: 'Roadmap' },
    { id: 'community', label: 'Community' },
  ];

  const handleNav = (page: NavPage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#08070d]/90 backdrop-blur-md border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Zone */}
        <button
          onClick={() => handleNav('home')}
          className="flex items-center group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-sm"
        >
          <UndreamtLogo variant="full" />
        </button>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`relative py-1 text-sm transition-colors cursor-pointer ${
                  isActive
                    ? 'text-white font-medium'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-purple-500 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Action */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => handleNav('contribute')}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-purple-600 hover:bg-purple-500 active:bg-purple-700 rounded-lg transition-colors shadow-[0_0_20px_rgba(147,51,234,0.35)] cursor-pointer"
          >
            <span>Become a contributor</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => handleNav('contribute')}
            className="px-3 py-1.5 text-xs font-medium text-white bg-purple-600 rounded-md"
          >
            Contribute
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-400 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#0c0b14] px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`block w-full text-left py-2 px-3 text-sm rounded-md transition-colors ${
                currentPage === item.id
                  ? 'bg-purple-600/15 text-purple-200 font-medium'
                  : 'text-zinc-400 hover:text-white hover:bg-white/[0.03]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => handleNav('contribute')}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-medium text-white bg-purple-600 rounded-lg"
            >
              <span>Become a contributor</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
