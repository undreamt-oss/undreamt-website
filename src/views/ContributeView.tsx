import React from 'react';
import { NavPage } from '../types';
import { CONTRIBUTOR_PATHS, LIFECYCLE_STEPS, CONTRIBUTOR_FAQS } from '../data/content';
import { CelestialOrb } from '../components/CelestialOrb';
import { StatusBanner } from '../components/StatusBanner';
import { FaqAccordion } from '../components/FaqAccordion';
import { ArrowUpRight, ArrowDown, Code, BookOpen, Layout, Microscope } from 'lucide-react';

interface ContributeViewProps {
  onNavigate: (page: NavPage) => void;
  onOpenExperimentModal: () => void;
}

export const ContributeView: React.FC<ContributeViewProps> = ({
  onNavigate,
  onOpenExperimentModal
}) => {
  const scrollToPaths = () => {
    const el = document.getElementById('contributor-paths');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const getIcon = (id: string) => {
    switch (id) {
      case 'code':
        return <Code className="w-4 h-4 text-purple-400" />;
      case 'docs':
        return <BookOpen className="w-4 h-4 text-purple-400" />;
      case 'design':
        return <Layout className="w-4 h-4 text-purple-400" />;
      case 'research':
        return <Microscope className="w-4 h-4 text-purple-400" />;
      default:
        return null;
    }
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
                Become a contributor / Experimental Open Source Ecosystem
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
                Start small. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-fuchsia-400">Build together.</span>
              </h1>

              <p className="text-base sm:text-lg text-zinc-300 max-w-xl leading-relaxed">
                A question, a sketch, an experiment, a better explanation. Choose a way to contribute, understand the context and make your first step small enough to learn from.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={scrollToPaths}
                  className="px-5 py-3 text-xs sm:text-sm font-medium text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition-all shadow-[0_0_20px_rgba(147,51,234,0.35)] flex items-center gap-2 cursor-pointer"
                >
                  <span>Choose a path</span>
                  <ArrowDown className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('community')}
                  className="px-5 py-3 text-xs sm:text-sm font-medium text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.1] rounded-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Meet the community</span>
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
        onScrollToExplore={scrollToPaths}
        subtext="The public platform is not yet available. No launch date announced."
        actionText="Keep exploring ↓"
      />

      {/* 01 / Find your contribution */}
      <section id="contributor-paths" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-2">
              <div className="text-xs font-mono tracking-wider text-purple-400 uppercase">
                01 / Find your contribution
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                More than code. <br />
                More than a finished solution.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                You can contribute through code, documentation, design or research. These are suggested starting points; project specific guidance applies when available.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CONTRIBUTOR_PATHS.map((path) => (
              <div
                key={path.id}
                className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-purple-500/30 transition-all space-y-6"
              >
                <div className="flex items-center gap-3 border-b border-white/[0.06] pb-4">
                  <div className="p-2 rounded-lg bg-white/5">
                    {getIcon(path.id)}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-zinc-500 block">
                      A possible way to contribute
                    </span>
                    <h3 className="text-xl font-bold text-white">{path.title}</h3>
                  </div>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed">
                  {path.description}
                </p>

                <div className="space-y-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/[0.015] border border-white/[0.04] space-y-1">
                    <span className="text-xs font-mono text-purple-300 uppercase block">
                      A small starting point
                    </span>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {path.startingPoint}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.015] border border-white/[0.04] space-y-1">
                    <span className="text-xs font-mono text-purple-400 uppercase block">
                      What to bring to review
                    </span>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {path.whatToBring}
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={onOpenExperimentModal}
                    className="text-xs font-mono text-purple-300 hover:text-white flex items-center gap-1 cursor-pointer"
                  >
                    <span>{path.sampleQuestion}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 02 / Your first open source step */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] bg-[#090812]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs font-mono tracking-wider text-purple-400 uppercase">
                02 / Your first open source step
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-snug">
                No grand <br />
                entrance <br />
                required.
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed pt-2">
                New to open source? Start small, share your context and ask for feedback. Curiosity is a useful qualification.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4">
              
              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2 hover:border-purple-500/30 transition-colors">
                <h3 className="text-base font-semibold text-white">Pick one thing you want to understand</h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Choose a focus area rather than trying to understand the whole ecosystem. Read what is available and write down one question or unclear explanation.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2 hover:border-purple-500/30 transition-colors">
                <h3 className="text-base font-semibold text-white">Say where you are starting from</h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Explain what interests you, what you have tried and what help would be useful. You do not need to present yourself as an expert to ask a thoughtful question.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2 hover:border-purple-500/30 transition-colors">
                <h3 className="text-base font-semibold text-white">Choose a first step you can finish</h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  A concise note, a small reproduction, a diagram or a focused edit can be useful. Discuss it before expanding the scope or taking on long term responsibility.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 03 / From curiosity to shared work */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-2">
              <div className="text-xs font-mono tracking-wider text-purple-400 uppercase">
                03 / From curiosity to shared work
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                A contribution is <br />
                a conversation with context.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                This is a proposed contribution lifecycle, not a single established approval process. Follow each project's published guidance and discuss expectations before beginning.
              </p>
            </div>
          </div>

          {/* 6 Lifecycle Steps */}
          <div className="space-y-4">
            {LIFECYCLE_STEPS.map((step) => (
              <div
                key={step.number}
                className="p-5 sm:p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-purple-500/30 transition-colors grid grid-cols-1 lg:grid-cols-12 gap-4 items-center"
              >
                <div className="lg:col-span-1 text-base font-mono text-purple-400 font-bold">
                  {step.number}
                </div>
                <div className="lg:col-span-4 text-base font-semibold text-white">
                  {step.title}
                </div>
                <div className="lg:col-span-4 text-xs text-zinc-300 leading-relaxed">
                  {step.description}
                </div>
                <div className="lg:col-span-3 text-right">
                  <span className="inline-block text-[11px] font-mono text-purple-300 bg-purple-950/40 px-2.5 py-1 rounded border border-purple-500/20">
                    Leave with / {step.leaveWith}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 04 / Before asking someone to review */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] bg-[#090812]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-2">
              <div className="text-xs font-mono tracking-wider text-purple-400 uppercase">
                04 / Before asking someone to review
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Make the work easy <br />
                to understand, not just inspect.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                A respectful review starts with a reviewable change. The checklist is practical guidance, not a guarantee of acceptance or an expectation of immediate replies.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
                <h3 className="text-sm font-semibold text-white">Explain the why and the boundaries</h3>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  State the problem, the intended effect and what is out of scope. Keep unrelated changes separate; explain alternatives and trade-offs.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
                <h3 className="text-sm font-semibold text-white">Include evidence and instructions</h3>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Describe how you tested or examined the work. Include the steps, conditions and limitations needed to reproduce a result or evaluate a design.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
                <h3 className="text-sm font-semibold text-white">Name uncertainties and follow-up</h3>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Make risks and open questions visible. Ask for the kind of feedback you need and discuss responsibility for any future maintenance or documentation.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
                <h3 className="text-sm font-semibold text-white">Respond with care</h3>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Address feedback with context, ask when something is unclear and summarize revisions. Challenge ideas respectfully and avoid pressure for a quick decision.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="p-5 rounded-xl bg-white/[0.015] border border-white/[0.04] space-y-1.5 text-xs text-zinc-400">
                <span className="font-mono text-purple-300 uppercase text-[11px] block">
                  Protect people and private context
                </span>
                <p className="leading-relaxed">
                  Do not include credentials, private data or sensitive security details in public work. Consider accessibility, privacy and potential harm when discussing an experiment.
                </p>
              </div>

              <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.025] border border-purple-500/20 shadow-xl space-y-3">
                <div className="text-[11px] font-mono uppercase tracking-wider text-purple-300">
                  Before committing to the work
                </div>
                <h3 className="text-lg font-bold text-white">Check the project's guidance.</h3>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Read the relevant license and contribution instructions when available. Do not assume a single license, review process or approval policy across future projects. Formal governance is still to be defined.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 05 / Before you begin (FAQ) */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-4 space-y-3">
              <div className="text-xs font-mono tracking-wider text-purple-400 uppercase">
                05 / Before you begin
              </div>
              <h2 className="text-3xl font-bold text-white tracking-tight leading-snug">
                Good <br />
                questions. <br />
                Honest <br />
                answers.
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Clear expectations help people contribute with confidence, especially while the ecosystem is still taking shape.
              </p>
            </div>

            <div className="lg:col-span-8">
              <FaqAccordion items={CONTRIBUTOR_FAQS} />
            </div>

          </div>
        </div>
      </section>

      {/* 06 / A small, useful next step */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                Choose a question. <br />
                Bring it to the conversation.
              </h2>
              <p className="text-base text-zinc-300 max-w-xl leading-relaxed">
                Explore the ecosystem, make a note of what interests you and check published project guidance when available. You do not need a finished answer to begin.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('ecosystem')}
                  className="px-5 py-3 text-xs sm:text-sm font-medium text-white bg-purple-600 hover:bg-purple-500 rounded-lg shadow-[0_0_25px_rgba(147,51,234,0.4)] cursor-pointer"
                >
                  Explore the ecosystem
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
