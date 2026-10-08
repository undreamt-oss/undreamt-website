import React from 'react';
import { NavPage } from '../types';
import { ROADMAP_STAGES, ROADMAP_FAQS } from '../data/content';
import { CelestialOrb } from '../components/CelestialOrb';
import { StatusBanner } from '../components/StatusBanner';
import { FaqAccordion } from '../components/FaqAccordion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

interface RoadmapViewProps {
  onNavigate: (page: NavPage) => void;
  onOpenExperimentModal: () => void;
  onOpenContributorModal: () => void;
}

export const RoadmapView: React.FC<RoadmapViewProps> = ({
  onNavigate,
  onOpenExperimentModal,
  onOpenContributorModal
}) => {
  const scrollToStages = () => {
    const el = document.getElementById('stages-section');
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
                Roadmap / Experimental Open Source Ecosystem
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
                A direction, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-fuchsia-400">not a deadline.</span>
              </h1>

              <p className="text-base sm:text-lg text-zinc-300 max-w-xl leading-relaxed">
                An undated sequence of intentions. Stages can overlap, change, or be revisited; none are presented as complete. This is a way to discuss the road ahead—not a release calendar.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={scrollToStages}
                  className="px-5 py-3 text-xs sm:text-sm font-medium text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition-all shadow-[0_0_20px_rgba(147,51,234,0.35)] flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore the stages</span>
                  <ArrowDown className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onOpenExperimentModal()}
                  className="px-5 py-3 text-xs sm:text-sm font-medium text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.1] rounded-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Help shape the direction</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Orbital Graphic */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <CelestialOrb
                size="lg"
                nodes={{
                  top: 'CONNECTION',
                  right: 'QUESTION',
                  bottom: 'LEARNING',
                  left: 'FOUNDATION'
                }}
                caption="AN UNDATED SEQUENCE OF INTENTIONS"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Status Banner */}
      <StatusBanner
        onScrollToExplore={scrollToStages}
        subtext="The public platform is not yet available. No launch date announced."
        actionText="Keep exploring ↓"
      />

      {/* 01 / A foundation, not a finished platform */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs font-mono tracking-wider text-purple-400 uppercase">
                01 / A foundation, not a finished platform
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                The platform is still <br />
                being built.
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                We are shaping the foundation of the undreamt ecosystem. The public platform is not yet available, and there is no announced launch date. The sequence below describes intended direction, not measured progress.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 rounded-2xl bg-white/[0.025] border border-purple-500/20 shadow-xl space-y-4">
                <div className="text-xs font-mono uppercase tracking-widest text-purple-300">
                  Current status
                </div>
                <h3 className="text-xl font-bold text-white">Public Platform In Development</h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  The vision is open. The implementation is evolving. No public release date is announced; scope and priorities remain subject to change.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 02 / The road ahead */}
      <section id="stages-section" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] bg-[#090812]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-2">
              <div className="text-xs font-mono tracking-wider text-purple-400 uppercase">
                02 / The road ahead
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Four stages. <br />
                Room to learn between them.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                Read in this order as a sequence of intentions. Learning can send an experiment back to an earlier question; it is not a linear promise of delivery.
              </p>
            </div>
          </div>

          {/* 4 In-depth Stage Cards */}
          <div className="space-y-6">
            {ROADMAP_STAGES.map((stage) => (
              <div
                key={stage.number}
                className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-purple-500/30 transition-all space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.06] pb-4">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-mono text-purple-400 font-bold">
                      {stage.number}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {stage.title}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono tracking-wider text-purple-300 uppercase">
                    {stage.badge}
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-sm">
                  
                  <div className="lg:col-span-7 space-y-3">
                    <div className="text-xs font-mono uppercase text-zinc-500">
                      Outputs: {stage.outputs}
                    </div>
                    <p className="text-zinc-300 leading-relaxed">
                      {stage.description}
                    </p>
                  </div>

                  <div className="lg:col-span-5 space-y-4 bg-white/[0.015] p-5 rounded-xl border border-white/[0.04]">
                    <div>
                      <span className="text-xs font-mono text-purple-300 uppercase block mb-1">
                        Depends on
                      </span>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {stage.dependsOn}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-white/[0.04]">
                      <span className="text-xs font-mono text-purple-400 uppercase block mb-1">
                        Guiding Question
                      </span>
                      <p className="text-xs text-zinc-300 italic">
                        "{stage.guidingQuestion}"
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 03 / What shapes the next step */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-2">
              <div className="text-xs font-mono tracking-wider text-purple-400 uppercase">
                03 / What shapes the next step
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Priorities need evidence. <br />
                Plans need room to change.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                There are unresolved questions about scope, technical choices and stewardship. Naming them is more useful than assigning a guessed percentage.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-3 hover:border-purple-500/30 transition-colors">
              <div className="text-xs font-mono text-purple-400">Problem → Scope</div>
              <h3 className="text-base font-bold text-white">Start with a useful question</h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Priority should follow the importance of a problem and whether a small experiment can teach us something. An expansive idea may need to become a narrower inquiry first.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-3 hover:border-purple-500/30 transition-colors">
              <div className="text-xs font-mono text-purple-400">Evidence → Commitment</div>
              <h3 className="text-base font-bold text-white">Test before expanding</h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                A promising prototype is not a shipping product. Larger work depends on reproducible findings, explicit trade-offs and a realistic account of what still needs to be understood.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-3 hover:border-purple-500/30 transition-colors">
              <div className="text-xs font-mono text-purple-400">Care → Continuity</div>
              <h3 className="text-base font-bold text-white">Plan for what follows</h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                A direction also depends on capacity to review, document and maintain it. Licensing and project guidance need context; formal governance is still to be defined.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 04 / A direction shaped together */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] bg-[#090812]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs font-mono tracking-wider text-purple-400 uppercase">
                04 / A direction shaped together
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-snug">
                Help us ask <br />
                better <br />
                questions.
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed pt-2">
                Community input can change the problem, the method or the priority—not just add items to a list.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4">
              
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1.5 hover:border-purple-500/30 transition-colors">
                <h3 className="text-sm font-semibold text-white">Bring context that is missing</h3>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Share a use case, constraint, research finding or alternative approach. Explain what it changes about an existing direction.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1.5 hover:border-purple-500/30 transition-colors">
                <h3 className="text-sm font-semibold text-white">Make a proposal discussable</h3>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Suggest a focused experiment and the evidence it could produce. Name dependencies and uncertainties rather than treating them as already resolved.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1.5 hover:border-purple-500/30 transition-colors">
                <h3 className="text-sm font-semibold text-white">Keep the reasoning visible</h3>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Invite critique and document the discussion. This is a proposed participation pathway, not a formal voting or approval policy.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 05 / Reading the roadmap (FAQ) */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-4 space-y-3">
              <div className="text-xs font-mono tracking-wider text-purple-400 uppercase">
                05 / Reading the roadmap
              </div>
              <h2 className="text-3xl font-bold text-white tracking-tight leading-snug">
                Good <br />
                questions. <br />
                Honest <br />
                answers.
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                The roadmap should help set expectations without pretending uncertainty has disappeared.
              </p>
            </div>

            <div className="lg:col-span-8">
              <FaqAccordion items={ROADMAP_FAQS} />
            </div>

          </div>
        </div>
      </section>

      {/* 06 / The next step is a conversation */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                Bring evidence. <br />
                Open a possibility.
              </h2>
              <p className="text-base text-zinc-300 max-w-xl leading-relaxed">
                A roadmap is more useful when it can be questioned. Help frame an experiment, surface a dependency or make the intended direction clearer.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('contribute')}
                  className="px-5 py-3 text-xs sm:text-sm font-medium text-white bg-purple-600 hover:bg-purple-500 rounded-lg shadow-[0_0_25px_rgba(147,51,234,0.4)] cursor-pointer"
                >
                  Become a contributor
                </button>
                <button
                  onClick={() => onNavigate('community')}
                  className="px-5 py-3 text-xs sm:text-sm font-medium text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.1] rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Meet the community</span>
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
