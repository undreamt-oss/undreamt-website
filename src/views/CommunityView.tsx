import React from 'react';
import { NavPage } from '../types';
import { CelestialOrb } from '../components/CelestialOrb';
import { StatusBanner } from '../components/StatusBanner';
import { ArrowUpRight, ArrowDown, ArrowRight, Code, Microscope, Layout, BookOpen } from 'lucide-react';

interface CommunityViewProps {
  onNavigate: (page: NavPage) => void;
  onOpenExperimentModal: () => void;
  onOpenContributorModal: () => void;
}

export const CommunityView: React.FC<CommunityViewProps> = ({
  onNavigate,
  onOpenExperimentModal,
  onOpenContributorModal
}) => {
  const scrollToWork = () => {
    const el = document.getElementById('find-your-place');
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
                Community / Experimental Open Source Ecosystem
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
                Different minds. <br />
                Shared <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-fuchsia-400">possibilities.</span>
              </h1>

              <p className="text-base sm:text-lg text-zinc-300 max-w-xl leading-relaxed">
                A place for developers, researchers, designers and documentation contributors to think beyond the familiar. You do not need to arrive with a finished solution—or years of open-source experience.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={scrollToWork}
                  className="px-5 py-3 text-xs sm:text-sm font-medium text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition-all shadow-[0_0_20px_rgba(147,51,234,0.35)] flex items-center gap-2 cursor-pointer"
                >
                  <span>Find your way in</span>
                  <ArrowDown className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('contribute')}
                  className="px-5 py-3 text-xs sm:text-sm font-medium text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.1] rounded-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Read the contributor guide</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Orbital Graphic */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <CelestialOrb
                size="lg"
                nodes={{
                  top: 'DESIGN',
                  right: 'DOCUMENTATION',
                  bottom: 'CODE',
                  left: 'RESEARCH'
                }}
                caption="DIFFERENT PRACTICES. SHARED CURIOSITY."
              />
            </div>

          </div>
        </div>
      </section>

      {/* Status Banner */}
      <StatusBanner
        onScrollToExplore={scrollToWork}
        subtext="The public platform is not yet available. No launch date announced."
        actionText="Keep exploring ↓"
      />

      {/* 01 / Find your place in the work */}
      <section id="find-your-place" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-2">
              <div className="text-xs font-mono tracking-wider text-purple-400 uppercase">
                01 / Find your place in the work
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                More than a pull request.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                Good questions, clear writing, careful design and rigorous research all move open source forward. These are possible ways to participate, not assigned roles.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-purple-500/40 transition-all space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="text-xs font-mono text-purple-400 uppercase">Developers</div>
                <h3 className="text-xl font-bold text-white">Build</h3>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Discuss architecture, test assumptions and make implementation trade-offs visible.
                </p>
              </div>
              <div className="pt-4 border-t border-white/[0.06]">
                <button
                  onClick={() => onOpenExperimentModal()}
                  className="text-xs font-mono text-purple-300 hover:text-white flex items-center gap-1 cursor-pointer"
                >
                  <span>Bring a technical question</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-purple-500/40 transition-all space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="text-xs font-mono text-purple-400 uppercase">Researchers</div>
                <h3 className="text-xl font-bold text-white">Investigate</h3>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Frame a question, compare approaches and help make evidence reproducible.
                </p>
              </div>
              <div className="pt-4 border-t border-white/[0.06]">
                <button
                  onClick={() => onOpenExperimentModal()}
                  className="text-xs font-mono text-purple-300 hover:text-white flex items-center gap-1 cursor-pointer"
                >
                  <span>Bring a method or finding</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-purple-500/40 transition-all space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="text-xs font-mono text-purple-400 uppercase">Designers</div>
                <h3 className="text-xl font-bold text-white">Design</h3>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Explore user needs, clarify a flow and make complex ideas more understandable.
                </p>
              </div>
              <div className="pt-4 border-t border-white/[0.06]">
                <button
                  onClick={() => onOpenContributorModal()}
                  className="text-xs font-mono text-purple-300 hover:text-white flex items-center gap-1 cursor-pointer"
                >
                  <span>Bring an experience to examine</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-purple-500/40 transition-all space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="text-xs font-mono text-purple-400 uppercase">Documentation contributors</div>
                <h3 className="text-xl font-bold text-white">Explain</h3>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Notice what is unclear, improve context and help others find a first step.
                </p>
              </div>
              <div className="pt-4 border-t border-white/[0.06]">
                <button
                  onClick={() => onOpenContributorModal()}
                  className="text-xs font-mono text-purple-300 hover:text-white flex items-center gap-1 cursor-pointer"
                >
                  <span>Bring something unclear</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 02 / Start with a conversation */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] bg-[#090812]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-2">
              <div className="text-xs font-mono tracking-wider text-purple-400 uppercase">
                02 / Start with a conversation
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                A question is a useful <br />
                way to introduce yourself.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                Use the project's published discussion or contribution space when available. The topics below are suggested entry points, not a list of live channels or accounts.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 sm:p-7 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-4 hover:border-purple-500/30 transition-colors flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white">Technical exploration</h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Describe a system, a constraint or a trade-off. Ask which assumptions deserve a test before suggesting a larger build.
                </p>
              </div>
              <div className="pt-4 border-t border-white/[0.06] text-xs font-mono text-purple-300">
                Useful context: use case + constraints
              </div>
            </div>

            <div className="p-6 sm:p-7 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-4 hover:border-purple-500/30 transition-colors flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white">Research exchange</h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Share a question or a method and the evidence behind it. Make limitations clear so others can examine or reproduce the thinking.
                </p>
              </div>
              <div className="pt-4 border-t border-white/[0.06] text-xs font-mono text-purple-300">
                Useful context: method + uncertainty
              </div>
            </div>

            <div className="p-6 sm:p-7 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-4 hover:border-purple-500/30 transition-colors flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white">Design & documentation</h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Bring a confusing interaction, an unclear explanation or a missing pathway. Show what a newcomer would need to understand.
                </p>
              </div>
              <div className="pt-4 border-t border-white/[0.06] text-xs font-mono text-purple-300">
                Useful context: audience + friction
              </div>
            </div>

          </div>

          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-400">
            <span>
              Look for published project guidance before posting. Never share private data, credentials or sensitive security details in a public conversation.
            </span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-purple-300 hover:text-white inline-flex items-center gap-1 font-mono shrink-0"
            >
              <span>Explore on GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </section>

      {/* 03 / New to open source? */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-mono tracking-wider text-purple-400 uppercase">
                03 / New to open source?
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-snug">
                Start small. <br />
                You belong in <br />
                the conversation.
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Curiosity is a useful qualification. It is fine to ask for context, explain what you know and choose a small first contribution.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-6">
              
              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2 hover:border-purple-500/30 transition-colors">
                <h3 className="text-base font-semibold text-white">Read before you reach for a solution</h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Explore the direction and any available project notes. Try to understand the question, not just the proposed implementation. Write down what you find unclear.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2 hover:border-purple-500/30 transition-colors">
                <h3 className="text-base font-semibold text-white">Share your context without overcommitting</h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Say what interests you, what experience you bring and where you need help. A question, a reproduction note or a small documentation improvement can be a useful beginning.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2 hover:border-purple-500/30 transition-colors">
                <h3 className="text-base font-semibold text-white">Agree on a manageable next step</h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Discuss scope before doing substantial work. Ask what a reviewable change would look like and check project-specific guidance when it is available.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('contribute')}
                  className="px-5 py-2.5 text-xs font-medium text-white bg-purple-600 hover:bg-purple-500 rounded-lg cursor-pointer"
                >
                  Become a contributor
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 04 / Give a conversation somewhere to go */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] bg-[#090812]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-2">
              <div className="text-xs font-mono tracking-wider text-purple-400 uppercase">
                04 / Give a conversation somewhere to go
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Context → proposal <br />
                → shared learning.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                A suggested path from an interesting discussion to a focused experiment. Participation and review practices will evolve as the ecosystem takes shape.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-3 hover:border-purple-500/30 transition-colors">
              <div className="text-xs font-mono text-purple-400 uppercase">Context</div>
              <h3 className="text-base font-bold text-white">Understand the need</h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Gather perspectives and relevant work. Clarify what is difficult, who it affects and what remains unknown.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-3 hover:border-purple-500/30 transition-colors">
              <div className="text-xs font-mono text-purple-400 uppercase">Proposal</div>
              <h3 className="text-base font-bold text-white">Make the next step discussable</h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Summarize the question, a small experiment and the help needed. Name constraints, risks and alternatives instead of assuming agreement.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-3 hover:border-purple-500/30 transition-colors">
              <div className="text-xs font-mono text-purple-400 uppercase">Shared learning</div>
              <h3 className="text-base font-bold text-white">Return what you discover</h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Bring results back to the discussion. Explain what changed, what did not work and what someone else would need to repeat the experiment.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 05 / How we want to work together */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-2">
              <div className="text-xs font-mono tracking-wider text-purple-400 uppercase">
                05 / How we want to work together
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Open work needs <br />
                shared care.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                The culture matters as much as the code. These are expectations we want to build into the ecosystem from the beginning, not a finished governance policy.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
                <h3 className="text-sm font-semibold text-white">Challenge ideas. Respect people.</h3>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Ask about reasoning, not motives. Welcome different experience levels and keep critique specific. Technical rigor and kindness do not compete.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
                <h3 className="text-sm font-semibold text-white">Review to understand, not to win</h3>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Separate questions, suggestions and concerns. Explain the reason for feedback; ask for clarification when a constraint or decision is unclear.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
                <h3 className="text-sm font-semibold text-white">Make knowledge easier to carry</h3>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Document decisions and link relevant context. Explain how findings were produced so people outside the original conversation can learn from the work.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
                <h3 className="text-sm font-semibold text-white">Be honest about capacity</h3>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Avoid assuming immediate replies or unlimited review time. Make responsibilities and handoffs explicit; communicate when scope or availability changes.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.025] border border-purple-500/20 shadow-xl space-y-3">
                <div className="text-[11px] font-mono uppercase tracking-wider text-purple-300">
                  Governance / An evolving practice
                </div>
                <h3 className="text-lg font-bold text-white">Clarity before commitment.</h3>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Formal governance is still to be defined. Our expectation is that proposals receive context, technical decisions receive review, and responsibility is explicit—not assumed.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.015] border border-white/[0.04] text-xs text-zinc-400 space-y-2">
                <div className="font-mono text-zinc-300 uppercase text-[11px]">Check the guidance for the work</div>
                <p className="leading-relaxed">
                  Project licenses and contribution guidance apply per project. Do not assume one license or approval process across future projects. Sensitive concerns need an appropriate private route, not a public thread.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 06 / The next idea could be yours */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                Bring your curiosity. <br />
                Build with others.
              </h2>
              <p className="text-base text-zinc-300 max-w-xl leading-relaxed">
                A question, a sketch, an experiment, a better explanation. There is more than one way to take part in an open-source ecosystem still being built.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('contribute')}
                  className="px-5 py-3 text-xs sm:text-sm font-medium text-white bg-purple-600 hover:bg-purple-500 rounded-lg shadow-[0_0_25px_rgba(147,51,234,0.4)] cursor-pointer"
                >
                  Become a contributor
                </button>
                <button
                  onClick={() => onNavigate('mission')}
                  className="px-5 py-3 text-xs sm:text-sm font-medium text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.1] rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Read our mission</span>
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
