import React, { useState } from 'react';
import { NavPage } from '../types';
import { ECOSYSTEM_DIRECTIONS } from '../data/content';
import { CelestialOrb } from '../components/CelestialOrb';
import { StatusBanner } from '../components/StatusBanner';
import { ArrowUpRight, ArrowDown, ArrowRight, Filter, Search } from 'lucide-react';

interface EcosystemViewProps {
  onNavigate: (page: NavPage) => void;
  onOpenExperimentModal: (directionId?: string) => void;
  onOpenContributorModal: () => void;
}

export const EcosystemView: React.FC<EcosystemViewProps> = ({
  onNavigate,
  onOpenExperimentModal,
  onOpenContributorModal
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('ALL');

  const allTags = ['ALL', 'INFRASTRUCTURE', 'TOOLING', 'ARCHITECTURE', 'ECOSYSTEMS', 'SYSTEMS', 'RESEARCH'];

  const filteredDirections = ECOSYSTEM_DIRECTIONS.filter((dir) => {
    const matchesSearch =
      dir.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dir.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dir.guidingQuestion.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedTag === 'ALL') return matchesSearch;
    const matchesTag = dir.tags.some(t => t.toLowerCase().includes(selectedTag.toLowerCase())) ||
      dir.id.toLowerCase().includes(selectedTag.toLowerCase());
    return matchesSearch && matchesTag;
  });

  const scrollToAreas = () => {
    const el = document.getElementById('areas-of-exploration');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-32 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] atelier-grid">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-mono tracking-wider text-purple-300 uppercase">
                Ecosystem / Experimental Open Source Ecosystem
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
                Six directions. <br />
                One open <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-fuchsia-400">horizon.</span>
              </h1>

              <p className="text-base sm:text-lg text-zinc-300 max-w-xl leading-relaxed">
                An open field for tools, systems, infrastructure and experimental technology. Explore the questions we intend to pursue—and the connections that could make them useful.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={scrollToAreas}
                  className="px-5 py-3 text-xs sm:text-sm font-medium text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition-all shadow-[0_0_20px_rgba(147,51,234,0.35)] flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore the directions</span>
                  <ArrowDown className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onOpenExperimentModal()}
                  className="px-5 py-3 text-xs sm:text-sm font-medium text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.1] rounded-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>How to propose an experiment</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Orbital Graphic */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <CelestialOrb
                size="lg"
                nodes={{
                  top: 'QUESTION',
                  right: 'EXPERIMENT',
                  bottom: 'POSSIBILITY',
                  left: 'KNOWLEDGE'
                }}
                caption="FROM POSSIBILITY TO OPEN WORK"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Status Banner */}
      <StatusBanner
        onScrollToExplore={scrollToAreas}
        subtext="The public platform is not yet available. No launch date announced."
        actionText="Keep exploring ↓"
      />

      {/* 01 / Areas of exploration */}
      <section id="areas-of-exploration" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-2">
              <div className="text-xs font-mono tracking-wider text-purple-400 uppercase">
                01 / Areas of exploration
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Experiments, not promises. <br />
                Directions, not releases.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                These are areas we intend to explore—not a catalog of shipping products. Scope and priorities will evolve with the people who help shape the work.
              </p>
            </div>
          </div>

          {/* Interactive filter & search controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <div className="flex items-center gap-2 overflow-x-auto text-xs pb-1 sm:pb-0">
              <span className="text-zinc-500 font-mono text-[11px] shrink-0 px-2">Filter:</span>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer whitespace-nowrap ${
                    selectedTag === tag
                      ? 'bg-purple-600 text-white font-medium shadow-[0_0_12px_rgba(147,51,234,0.3)]'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            <div className="relative min-w-[200px]">
              <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search inquiries & questions..."
                className="w-full bg-[#161523] border border-white/10 rounded-lg pl-9 pr-3 py-1.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>

          {/* 6 Area Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDirections.map((dir) => (
              <div
                key={dir.id}
                className="group relative p-6 sm:p-7 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-purple-500/40 hover:bg-white/[0.035] transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500">
                    <span className="uppercase tracking-wider">Area in development</span>
                    <span className="text-purple-400/80">{dir.tags.join(' / ')}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors">
                    {dir.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {dir.description}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-white/[0.06] space-y-2.5">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-purple-300">
                    A question to explore
                  </div>
                  <h4 className="text-sm font-semibold text-zinc-200">
                    {dir.guidingQuestion}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {dir.explorationDetail}
                  </p>

                  <div className="pt-3 flex items-center justify-between">
                    <button
                      onClick={() => onOpenExperimentModal(dir.id)}
                      className="text-xs font-mono text-purple-400 hover:text-purple-300 flex items-center gap-1 cursor-pointer"
                    >
                      <span>Propose an experiment</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">
                      DIR-{dir.number}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
              Research questions / Not product specifications
            </span>
            <button
              onClick={() => onOpenExperimentModal()}
              className="text-xs font-medium text-purple-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Bring a question to the community</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* 02 / How the directions connect */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] bg-[#090812]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-2">
              <div className="text-xs font-mono tracking-wider text-purple-400 uppercase">
                02 / How the directions connect
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Not six silos. <br />
                A shared way of thinking.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                A useful experiment may cross several areas. These are possible relationships, not established integrations or a finished technical stack.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Pair 1 */}
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-4 hover:border-purple-500/30 transition-colors">
              <div className="text-xs font-mono text-purple-300">
                Infrastructure ↔ Systems
              </div>
              <h3 className="text-lg font-bold text-white">Understand the foundations</h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                An infrastructure idea needs systems level questions about failure, resource use and correctness. A systems experiment needs a setting in which its assumptions can be tested.
              </p>
            </div>

            {/* Pair 2 */}
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-4 hover:border-purple-500/30 transition-colors">
              <div className="text-xs font-mono text-purple-300">
                Tooling ↔ Architecture
              </div>
              <h3 className="text-lg font-bold text-white">Make complexity usable</h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Architectural patterns become more useful when people can inspect and work with them. Tooling can reveal where a framework clarifies the work—and where it adds friction.
              </p>
            </div>

            {/* Pair 3 */}
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-4 hover:border-purple-500/30 transition-colors">
              <div className="text-xs font-mono text-purple-300">
                Research ↔ Open source
              </div>
              <h3 className="text-lg font-bold text-white">Let evidence travel</h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Research becomes shared value when its methods, limitations and findings are legible. Open contribution pathways can invite new perspectives and help others reproduce the work.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 03 / From an idea to an inquiry */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-mono tracking-wider text-purple-400 uppercase">
                03 / From an idea to an inquiry
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-snug">
                Bring a <br />
                question. <br />
                Give it a shape.
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed">
                You do not need a finished solution. A small, clear proposal gives others something they can discuss, test and improve.
              </p>
              <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider pt-2">
                Suggested starting points, not a formal approval process.
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              
              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2 hover:border-purple-500/30 transition-colors">
                <div className="text-xs font-mono text-purple-400 uppercase">Question / Context</div>
                <h3 className="text-base font-semibold text-white">Describe the problem before the solution</h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Explain who encounters it, what is difficult today and what you have already considered. Name the ecosystem directions it touches.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2 hover:border-purple-500/30 transition-colors">
                <div className="text-xs font-mono text-purple-400 uppercase">Experiment / Boundaries</div>
                <h3 className="text-base font-semibold text-white">Suggest the smallest useful test</h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Outline a method, a limited scope and the evidence you would seek. Include constraints, risks and what is deliberately out of scope.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2 hover:border-purple-500/30 transition-colors">
                <div className="text-xs font-mono text-purple-400 uppercase">Discussion / Learning</div>
                <h3 className="text-base font-semibold text-white">Ask for perspectives, not a verdict</h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Share uncertainties and the help you need. Agree on a manageable next step before investing in a larger implementation.
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('contribute')}
                  className="text-xs font-mono text-purple-300 hover:text-white flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Read the contributor guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenExperimentModal()}
                  className="px-4 py-2 text-xs font-medium text-white bg-purple-600 hover:bg-purple-500 rounded-lg cursor-pointer"
                >
                  Draft an Inquiry Now
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 04 / Help shape the ecosystem */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="text-xs font-mono tracking-wider text-purple-400 uppercase">
                04 / Help shape the ecosystem
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                The next direction <br />
                could start with you.
              </h2>
              <p className="text-base text-zinc-300 max-w-xl leading-relaxed">
                A technical question, a research method, a clearer explanation. Bring your curiosity to an ecosystem still taking shape.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('contribute')}
                  className="px-5 py-3 text-xs sm:text-sm font-medium text-white bg-purple-600 hover:bg-purple-500 rounded-lg shadow-[0_0_25px_rgba(147,51,234,0.4)] cursor-pointer"
                >
                  Become a contributor
                </button>
                <button
                  onClick={scrollToAreas}
                  className="px-5 py-3 text-xs sm:text-sm font-medium text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.1] rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Explore the ecosystem</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <CelestialOrb
                size="md"
                variant="capsule"
                caption="FROM POSSIBILITY TO OPEN WORK"
              />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
