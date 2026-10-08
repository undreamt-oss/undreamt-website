import React from 'react';
import { NavPage } from '../types';
import { CelestialOrb } from '../components/CelestialOrb';
import { StatusBanner } from '../components/StatusBanner';
import { ArrowUpRight, ArrowDown, Code, Microscope, Layout, Briefcase } from 'lucide-react';

interface MissionViewProps {
  onNavigate: (page: NavPage) => void;
  onOpenContributorModal: () => void;
}

export const MissionView: React.FC<MissionViewProps> = ({
  onNavigate,
  onOpenContributorModal
}) => {
  const scrollToManifesto = () => {
    const el = document.getElementById('manifesto-section');
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
                Our mission / Experimental Open Source Ecosystem
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
                Not a product <br />
                factory. A place <br />
                to build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-fuchsia-400">possibilities.</span>
              </h1>

              <p className="text-base sm:text-lg text-zinc-300 max-w-xl leading-relaxed">
                The most interesting ideas rarely arrive fully formed. They need space to be questioned, built, and shared. That is the space undreamt wants to create.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={scrollToManifesto}
                  className="px-5 py-3 text-xs sm:text-sm font-medium text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition-all shadow-[0_0_20px_rgba(147,51,234,0.35)] flex items-center gap-2 cursor-pointer"
                >
                  <span>Read the manifesto</span>
                  <ArrowDown className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('contribute')}
                  className="px-5 py-3 text-xs sm:text-sm font-medium text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.1] rounded-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Become a contributor</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Orbital Graphic */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <CelestialOrb
                size="lg"
                nodes={{
                  top: 'IDEA',
                  right: 'EXPERIMENT',
                  bottom: 'SHARED CRAFT',
                  left: 'DISCIPLINE'
                }}
                caption="FROM POSSIBILITY TO OPEN WORK"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Status Banner */}
      <StatusBanner
        onScrollToExplore={scrollToManifesto}
        subtext="The public platform is not yet available. No launch date announced."
        actionText="Keep exploring ↓"
      />

      {/* 01 / Why undreamt exists */}
      <section id="manifesto-section" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs font-mono tracking-wider text-purple-400 uppercase">
                01 / Why undreamt exists
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                Room to ask. <br />
                Discipline <br />
                to build.
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed pt-2">
                Experimentation and engineering belong in the same room. Neither should have to give up what makes it valuable.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                We want to make difficult questions worth working on—not just easy ideas worth shipping.
              </h3>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                undreamt is an early-stage open-source community creating tools, systems, infrastructure and experimental technology. Our ambition is an ecosystem where people can turn research into useful systems and leave the work open for others to build upon.
              </p>

              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                That means giving uncertain ideas a fair test. It also means caring about the implementation: its limits, its reliability, its documentation and the people who might inherit it. An experiment is not exempt from craft because it is experimental.
              </p>

              <div className="pt-4 border-t border-white/[0.08] text-xs font-mono text-purple-300 uppercase tracking-wider">
                Building what has never been dreamt. Not a claim of completion. An invitation to begin.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 02 / The culture we want to build */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] bg-[#090812]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-2">
              <div className="text-xs font-mono tracking-wider text-purple-400 uppercase">
                02 / The culture we want to build
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Curiosity with care. <br />
                Ambition with craft.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                These qualities describe the community we hope to grow. They are a direction for our work, not a claim that the culture is already complete.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 sm:p-7 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-4 hover:border-purple-500/30 transition-colors">
              <div className="text-xs font-mono text-purple-400 uppercase">Shared curiosity</div>
              <h3 className="text-base font-bold text-white">Questions are a starting point.</h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Make room for questions that do not yet have a neat answer. Share context, challenge assumptions and be willing to change your mind when the evidence changes.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-4 hover:border-purple-500/30 transition-colors">
              <div className="text-xs font-mono text-purple-400 uppercase">Shared craft</div>
              <h3 className="text-base font-bold text-white">The details are part of the idea.</h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Care about how something is built as well as what it could become. Clear interfaces, careful testing and useful explanations help ideas survive beyond their first author.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-4 hover:border-purple-500/30 transition-colors">
              <div className="text-xs font-mono text-purple-400 uppercase">Shared ownership</div>
              <h3 className="text-base font-bold text-white">Leave work others can carry.</h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Make decisions and responsibilities visible. Sharing the work should mean helping others understand it—not quietly handing them an undefined maintenance burden.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 03 / Who this is for */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-2">
              <div className="text-xs font-mono tracking-wider text-purple-400 uppercase">
                03 / Who this is for
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Different perspectives. <br />
                More useful possibilities.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                Our ambition is to serve developers, researchers, creators and businesses. The value of an experiment depends on whose needs and constraints it can help us understand.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-3 hover:border-purple-500/30 transition-colors">
              <div className="flex items-center justify-between">
                <Code className="w-4 h-4 text-purple-400" />
                <span className="text-[10px] font-mono text-zinc-500 uppercase">AUDIENCE</span>
              </div>
              <div className="text-xs font-mono text-purple-300 uppercase">Developers</div>
              <h3 className="text-base font-bold text-white">Build beyond the familiar</h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Explore technical questions through small implementations. Contribute insight about workflows, architecture and the real constraints of building and maintaining software.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-3 hover:border-purple-500/30 transition-colors">
              <div className="flex items-center justify-between">
                <Microscope className="w-4 h-4 text-purple-400" />
                <span className="text-[10px] font-mono text-zinc-500 uppercase">AUDIENCE</span>
              </div>
              <div className="text-xs font-mono text-purple-300 uppercase">Researchers</div>
              <h3 className="text-base font-bold text-white">Give an inquiry a working form</h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Connect methods and theory with experiments that others can inspect. Share evidence and limitations so the next investigation has a stronger place to begin.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-3 hover:border-purple-500/30 transition-colors">
              <div className="flex items-center justify-between">
                <Layout className="w-4 h-4 text-purple-400" />
                <span className="text-[10px] font-mono text-zinc-500 uppercase">AUDIENCE</span>
              </div>
              <div className="text-xs font-mono text-purple-300 uppercase">Creators</div>
              <h3 className="text-base font-bold text-white">Make possibilities understandable</h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Use design, writing and prototyping to bring unfamiliar ideas into focus. Help the work become discoverable, accessible and clear enough for others to participate.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-3 hover:border-purple-500/30 transition-colors">
              <div className="flex items-center justify-between">
                <Briefcase className="w-4 h-4 text-purple-400" />
                <span className="text-[10px] font-mono text-zinc-500 uppercase">AUDIENCE</span>
              </div>
              <div className="text-xs font-mono text-purple-300 uppercase">Businesses</div>
              <h3 className="text-base font-bold text-white">Bring problems, not prescriptions</h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Offer grounded use cases and constraints. Explore how open work could meet real needs without treating an early stage experiment as a finished commercial service.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 04 / A practice, not a production line */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] bg-[#090812]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-2">
              <div className="text-xs font-mono tracking-wider text-purple-400 uppercase">
                04 / A practice, not a production line
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                An idea is only <br />
                the beginning.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                A proposed rhythm for turning curiosity into shared knowledge. The cycle can pause, repeat or end with a finding rather than a product.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-3 hover:border-purple-500/30 transition-colors">
              <div className="text-xs font-mono text-purple-400">Idea →</div>
              <h3 className="text-base font-bold text-white">Frame the question</h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Name the problem, the assumptions and the people it matters to. Ask what would change your understanding.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-3 hover:border-purple-500/30 transition-colors">
              <div className="text-xs font-mono text-purple-400">Experiment →</div>
              <h3 className="text-base font-bold text-white">Make something testable</h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Choose a bounded method. Build just enough to test the question, record the conditions and examine the result.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-3 hover:border-purple-500/30 transition-colors">
              <div className="text-xs font-mono text-purple-400">Shared knowledge ↺</div>
              <h3 className="text-base font-bold text-white">Leave a useful trail</h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Explain what you learned, what remains uncertain and where the evidence stops. Let others reproduce, question or extend it.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 05 / Open work needs shared care */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-2">
              <div className="text-xs font-mono tracking-wider text-purple-400 uppercase">
                05 / Open work needs shared care
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Open does not mean <br />
                unconsidered.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                These are expectations we want to build into the ecosystem from the beginning. Formal governance is still to be defined.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                <h3 className="text-base font-semibold text-white">Work in the open</h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Share reasoning, not just results. Make proposals understandable and document decisions so other people can meaningfully engage.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                <h3 className="text-base font-semibold text-white">Challenge ideas. Respect people.</h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Disagree with care, welcome different experience levels and keep critique constructive. A technical disagreement is not a judgment of someone's worth.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                <h3 className="text-base font-semibold text-white">Choose stewardship over hype</h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Make maintenance, accessibility and sustainability visible. Be honest about readiness, limitations and the responsibility a new experiment could create.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.015] border border-white/[0.04] text-xs text-zinc-400 leading-relaxed">
                Responsible openness also means considering privacy, security and potential harm. Do not share sensitive information simply because a discussion is public; raise concerns before widening an experiment.
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.025] border border-purple-500/20 shadow-xl space-y-4">
                <div className="text-[11px] font-mono uppercase tracking-wider text-purple-300">
                  Governance / An evolving practice
                </div>

                <h3 className="text-xl font-bold text-white">
                  Clarity before commitment.
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Our expectation is that proposals receive context, technical decisions receive review, and responsibility is explicit—not assumed.
                </p>

                <p className="text-xs text-zinc-400 leading-relaxed pt-2 border-t border-white/[0.06]">
                  Before contributing, check the relevant project's license and contribution guidance when available. Do not assume a single license or approval process across future projects.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 06 / A mission shaped through participation */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="text-xs font-mono tracking-wider text-purple-400 uppercase">
                06 / A mission shaped through participation
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                Bring your curiosity. <br />
                Leave a possibility.
              </h2>
              <p className="text-base text-zinc-300 max-w-xl leading-relaxed">
                The mission becomes meaningful through the questions we ask and the care we bring to the work. There is more than one way to help build what has never been dreamt.
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
