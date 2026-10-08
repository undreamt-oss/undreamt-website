import React from 'react';
import { NavPage } from '../types';
import { ECOSYSTEM_DIRECTIONS, HOME_FAQS, CONTRIBUTOR_PATHS } from '../data/content';
import { CelestialOrb } from '../components/CelestialOrb';
import { StatusBanner } from '../components/StatusBanner';
import { FaqAccordion } from '../components/FaqAccordion';
import { ArrowUpRight, ArrowDown, ArrowRight, Code, BookOpen, Layout, Microscope } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (page: NavPage) => void;
  onOpenExperimentModal: (directionId?: string) => void;
  onOpenContributorModal: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenExperimentModal,
  onOpenContributorModal
}) => {
  const scrollToEcosystem = () => {
    const el = document.getElementById('ecosystem-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const getPathIcon = (id: string) => {
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
      <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-32 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] overflow-hidden atelier-grid">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Typographic Hero */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block text-xs font-mono tracking-wider text-purple-300 uppercase">
                Experimental Open Source Ecosystem
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] text-balance">
                Building what <br />
                <span className="text-zinc-300">has never been</span> <br />
                <span className="text-white">dreamt.</span>
              </h1>

              <p className="text-base sm:text-lg text-zinc-300 max-w-xl leading-relaxed">
                An open-source atelier for tools, systems, infrastructure, and experimental technology. Built with developers, researchers, creators, and businesses—not just for them.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('contribute')}
                  className="px-5 py-3 text-xs sm:text-sm font-medium text-white bg-purple-600 hover:bg-purple-500 active:bg-purple-700 rounded-lg transition-all shadow-[0_0_25px_rgba(147,51,234,0.4)] flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore on GitHub</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenContributorModal}
                  className="px-5 py-3 text-xs sm:text-sm font-medium text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.1] rounded-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Find your way to contribute</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="pt-8 flex flex-wrap items-center gap-4 sm:gap-6 text-[11px] font-mono text-zinc-500 uppercase tracking-widest border-t border-white/[0.06]">
                <span>Creation mode / Always open</span>
                <span>·</span>
                <span>A seed. A spark. A shared future.</span>
                <span>·</span>
                <span className="text-purple-400">Idea → Possibility</span>
              </div>
            </div>

            {/* Right Column: Celestial Orb graphic */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <CelestialOrb
                size="lg"
                nodes={{
                  top: 'IDEA',
                  right: 'SPARK',
                  bottom: 'SHARED FUTURE',
                  left: 'SEED'
                }}
                caption="FROM POSSIBILITY TO OPEN WORK"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Status Banner */}
      <StatusBanner
        onScrollToExplore={scrollToEcosystem}
        subtext="Early-stage by intention. Open to what comes next."
        actionText="Explore the ecosystem ↓"
      />

      {/* 01 / Why undreamt exists */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Header */}
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs font-mono tracking-wider text-purple-400 uppercase">
                01 / Why undreamt exists
              </div>
              <p className="text-lg sm:text-xl text-zinc-400 leading-snug">
                The most interesting ideas rarely arrive fully formed. They need space to be questioned, built, and shared.
              </p>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                  Not a product factory. <br />
                  A place to build possibilities.
                </h2>
                <p className="text-sm sm:text-base text-zinc-300 mt-4 leading-relaxed">
                  undreamt brings experimentation and engineering into the same room. Our ambition is an ecosystem where people can explore difficult problems, turn research into useful systems, and leave the work open for others to build upon.
                </p>
              </div>

              {/* 3 Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/[0.08]">
                <div className="space-y-1.5">
                  <h3 className="text-sm font-semibold text-white">Shared curiosity</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Questions are a contribution.
                  </p>
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-sm font-semibold text-white">Shared craft</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Ideas get stronger through review.
                  </p>
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-sm font-semibold text-white">Shared ownership</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Knowledge should outlive its author.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 02 / The ecosystem */}
      <section id="ecosystem-section" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-2">
              <div className="text-xs font-mono tracking-wider text-purple-400 uppercase">
                02 / The ecosystem
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Six directions. <br />
                One open horizon.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                These are areas we intend to explore—not a catalog of shipping products. Scope and priorities will evolve with the people who help shape the work.
              </p>
            </div>
          </div>

          {/* 6 Direction Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ECOSYSTEM_DIRECTIONS.map((dir) => (
              <div
                key={dir.id}
                className="group relative p-6 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-purple-500/40 hover:bg-white/[0.035] transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500">
                    <span className="uppercase tracking-wider">Work in development</span>
                    <span className="text-purple-400/80">{dir.category}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-purple-200 transition-colors">
                    {dir.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {dir.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] space-y-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-purple-300">
                    A question to explore
                  </div>
                  <p className="text-xs text-zinc-400 italic">
                    "{dir.guidingQuestion}"
                  </p>
                  <button
                    onClick={() => onOpenExperimentModal(dir.id)}
                    className="pt-2 text-xs font-mono text-purple-400 group-hover:text-purple-300 flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>Propose an experiment</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
              Experiments, not promises. Directions, not releases.
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

      {/* 03 / A foundation, not a finished platform */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] bg-[#090812]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs font-mono tracking-wider text-purple-400 uppercase">
                03 / A foundation, not a finished platform
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                The platform is still <br />
                being built.
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                We are shaping the foundation of the undreamt ecosystem. The public platform is not yet available, and there is no announced launch date.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('contribute')}
                  className="text-xs sm:text-sm font-medium text-purple-300 hover:text-white flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore the contributor paths</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 rounded-2xl bg-white/[0.025] border border-purple-500/20 shadow-xl space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-widest text-purple-300">
                    Current Status
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-ping" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">Public Platform In Development</h3>
                  <p className="text-sm text-zinc-300 mt-2 leading-relaxed">
                    The vision is open. The implementation is evolving. This page introduces the direction and invites people to help define what comes next.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.08] text-xs font-mono text-zinc-400 space-y-1">
                  <div className="text-purple-300 uppercase">No public launch date announced</div>
                  <p>No release or completion claims. Just an invitation to build.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 04 / The road ahead */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-2">
              <div className="text-xs font-mono tracking-wider text-purple-400 uppercase">
                04 / The road ahead
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                A direction, not a deadline.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                An undated sequence of intentions. Stages can overlap, change, or be revisited; none are presented as complete.
              </p>
            </div>
          </div>

          {/* 4 Stage Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Find the questions',
                desc: 'Frame the problems worth exploring. Gather context, document assumptions, and invite alternative perspectives.',
                tags: 'Problem statements · Research notes'
              },
              {
                step: '02',
                title: 'Build the foundations',
                desc: 'Develop small experiments and shared technical patterns. Let evidence guide what deserves a larger commitment.',
                tags: 'Prototypes · Architecture discussions'
              },
              {
                step: '03',
                title: 'Connect the ecosystem',
                desc: 'Work toward a public platform that makes projects, knowledge, and contribution pathways easier to discover.',
                tags: 'Project discovery · Contributor experience'
              },
              {
                step: '04',
                title: 'Learn in the open',
                desc: 'Review what works, retire what does not, and strengthen stewardship as the ecosystem grows.',
                tags: 'Feedback · Maintenance practices'
              }
            ].map((stage) => (
              <div
                key={stage.step}
                className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-4 hover:border-purple-500/30 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="text-sm font-mono text-purple-400">{stage.step}</div>
                  <h3 className="text-base font-bold text-white">{stage.title}</h3>
                  <p className="text-xs text-zinc-300 leading-relaxed">{stage.desc}</p>
                </div>
                <div className="pt-4 border-t border-white/[0.06] text-[11px] font-mono text-zinc-400">
                  {stage.tags}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            <button
              onClick={() => onNavigate('roadmap')}
              className="text-xs font-mono text-purple-300 hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              <span>Explore complete roadmap breakdown</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* 05 / Find your contribution */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-2">
              <div className="text-xs font-mono tracking-wider text-purple-400 uppercase">
                05 / Find your contribution
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                More than a pull request.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                You do not need to arrive with a finished solution. Good questions, clear writing, careful design, and rigorous research all move open source forward.
              </p>
            </div>
          </div>

          {/* 4 Pathways */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONTRIBUTOR_PATHS.map((path) => (
              <div
                key={path.id}
                className="group p-6 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-purple-500/40 hover:bg-white/[0.035] transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="p-2 rounded-lg bg-white/5 inline-block">
                    {getPathIcon(path.id)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{path.title}</h3>
                    <p className="text-xs text-purple-300 font-medium mt-0.5">{path.subtitle}</p>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {path.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/[0.06]">
                  <button
                    onClick={() => onNavigate('contribute')}
                    className="text-xs font-mono text-purple-300 hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>{path.sampleQuestion}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-zinc-400 text-center">
            New to open source? Start small, share your context, and ask for feedback. Curiosity is a useful qualification.
          </div>

        </div>
      </section>

      {/* 06 / Your first step */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] bg-[#090812]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs font-mono tracking-wider text-purple-400 uppercase">
                06 / Your first step
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Start small. <br />
                Build together.
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6">
              {[
                {
                  num: '01',
                  title: 'Explore the direction',
                  desc: 'Read the mission and focus areas. Find a problem, idea, or unanswered question that connects with your interests.'
                },
                {
                  num: '02',
                  title: 'Start a conversation',
                  desc: 'Introduce your perspective through GitHub. Share what you want to explore and ask where your contribution could help.'
                },
                {
                  num: '03',
                  title: 'Agree on a small next step',
                  desc: 'Clarify scope with the people involved. Share your work early, invite review, and leave context for whoever comes next.'
                }
              ].map((step) => (
                <div
                  key={step.num}
                  className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-5 hover:border-purple-500/30 transition-colors"
                >
                  <span className="text-sm font-mono text-purple-400 shrink-0 mt-0.5">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{step.title}</h3>
                    <p className="text-xs text-zinc-300 mt-1 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 07 / How we build together */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-2">
              <div className="text-xs font-mono tracking-wider text-purple-400 uppercase">
                07 / How we build together
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Open work needs <br />
                shared care.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                The culture matters as much as the code. These are the expectations we want to build into the ecosystem from the beginning.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Principles */}
            <div className="lg:col-span-7 space-y-6">
              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                <h3 className="text-base font-semibold text-white">Work in the open</h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Share reasoning, not just results. Make proposals understandable and decisions traceable.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                <h3 className="text-base font-semibold text-white">Challenge ideas. Respect people.</h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Disagree with care, welcome different experience levels, and keep participation accessible.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                <h3 className="text-base font-semibold text-white">Choose stewardship over hype</h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Value maintenance, reproducibility, and honest limitations alongside experimentation.
                </p>
              </div>
            </div>

            {/* Governance Card */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.025] border border-purple-500/20 shadow-xl space-y-4">
                <div className="text-[11px] font-mono uppercase tracking-wider text-purple-300">
                  Governance / An evolving practice
                </div>

                <h3 className="text-xl font-bold text-white">
                  Clarity before commitment.
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Formal governance is still to be defined. Our expectation is that proposals receive context, technical decisions receive review, and responsibility is explicit—not assumed.
                </p>

                <p className="text-xs text-zinc-400 leading-relaxed pt-2 border-t border-white/[0.06]">
                  Before contributing, check the relevant project's license and contribution guidance when available. Do not assume a single license or approval process across future projects.
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('mission')}
                    className="text-xs font-mono text-purple-400 hover:text-purple-300 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Help shape the way we work</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 08 / A little more context (FAQ) */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-4 space-y-4">
              <div className="text-xs font-mono tracking-wider text-purple-400 uppercase">
                08 / A little more context
              </div>
              <h2 className="text-3xl font-bold text-white tracking-tight leading-snug">
                Good <br />
                questions. <br />
                Honest <br />
                answers.
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Still have a question? Bring it to the conversation. Clear expectations help everyone contribute with confidence.
              </p>
              <div className="pt-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono text-purple-300 hover:text-white inline-flex items-center gap-1"
                >
                  <span>Start on GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-8">
              <FaqAccordion items={HOME_FAQS} />
            </div>

          </div>
        </div>
      </section>

      {/* 09 / The next idea could be yours */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="text-xs font-mono tracking-wider text-purple-400 uppercase">
                09 / The next idea could be yours
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                Bring your curiosity. <br />
                Leave a possibility.
              </h2>
              <p className="text-base text-zinc-300 max-w-xl leading-relaxed">
                A question, a sketch, an experiment, a better explanation. There is more than one way to help build what has never been dreamt.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('contribute')}
                  className="px-5 py-3 text-xs sm:text-sm font-medium text-white bg-purple-600 hover:bg-purple-500 rounded-lg shadow-[0_0_25px_rgba(147,51,234,0.4)] cursor-pointer"
                >
                  Become a contributor
                </button>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 text-xs sm:text-sm font-medium text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.1] rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <span>Explore on GitHub</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
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
