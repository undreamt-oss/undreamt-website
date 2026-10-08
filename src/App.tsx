import React, { useState, useEffect } from 'react';
import { NavPage } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { EcosystemView } from './views/EcosystemView';
import { MissionView } from './views/MissionView';
import { RoadmapView } from './views/RoadmapView';
import { CommunityView } from './views/CommunityView';
import { ContributeView } from './views/ContributeView';
import { ExperimentModal } from './components/ExperimentModal';
import { ContributorModal } from './components/ContributorModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavPage>('home');
  const [experimentModalOpen, setExperimentModalOpen] = useState(false);
  const [experimentDirectionId, setExperimentDirectionId] = useState<string | undefined>();
  const [contributorModalOpen, setContributorModalOpen] = useState(false);

  // Sync with window.location.hash for shareable URLs and browser history
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as NavPage;
      const validPages: NavPage[] = ['home', 'ecosystem', 'mission', 'roadmap', 'community', 'contribute'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: NavPage) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenExperiment = (directionId?: string) => {
    setExperimentDirectionId(directionId);
    setExperimentModalOpen(true);
  };

  const handleOpenContributorModal = () => {
    setContributorModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#08070d] text-zinc-100 font-sans selection:bg-purple-600/30 selection:text-purple-200">
      {/* Top Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenContributorModal={handleOpenContributorModal}
      />

      {/* Main View Router */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenExperimentModal={handleOpenExperiment}
            onOpenContributorModal={handleOpenContributorModal}
          />
        )}

        {currentPage === 'ecosystem' && (
          <EcosystemView
            onNavigate={handleNavigate}
            onOpenExperimentModal={handleOpenExperiment}
            onOpenContributorModal={handleOpenContributorModal}
          />
        )}

        {currentPage === 'mission' && (
          <MissionView
            onNavigate={handleNavigate}
            onOpenContributorModal={handleOpenContributorModal}
          />
        )}

        {currentPage === 'roadmap' && (
          <RoadmapView
            onNavigate={handleNavigate}
            onOpenExperimentModal={handleOpenExperiment}
            onOpenContributorModal={handleOpenContributorModal}
          />
        )}

        {currentPage === 'community' && (
          <CommunityView
            onNavigate={handleNavigate}
            onOpenExperimentModal={handleOpenExperiment}
            onOpenContributorModal={handleOpenContributorModal}
          />
        )}

        {currentPage === 'contribute' && (
          <ContributeView
            onNavigate={handleNavigate}
            onOpenExperimentModal={handleOpenExperiment}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenContributorModal={handleOpenContributorModal}
      />

      {/* Modals */}
      <ExperimentModal
        isOpen={experimentModalOpen}
        onClose={() => setExperimentModalOpen(false)}
        defaultDirectionId={experimentDirectionId}
      />

      <ContributorModal
        isOpen={contributorModalOpen}
        onClose={() => setContributorModalOpen(false)}
        onSelectPath={(pathId) => {
          handleNavigate('contribute');
        }}
      />
    </div>
  );
}
