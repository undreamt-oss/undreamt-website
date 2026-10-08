import React, { useState } from 'react';
import { ECOSYSTEM_DIRECTIONS } from '../data/content';
import { X, Copy, Check, Sparkles, Send, FileText } from 'lucide-react';

interface ExperimentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDirectionId?: string;
}

export const ExperimentModal: React.FC<ExperimentModalProps> = ({
  isOpen,
  onClose,
  defaultDirectionId
}) => {
  const [selectedDirection, setSelectedDirection] = useState(
    defaultDirectionId || 'infra'
  );
  const [title, setTitle] = useState('');
  const [problemContext, setProblemContext] = useState('');
  const [experimentBoundaries, setExperimentBoundaries] = useState('');
  const [openQuestions, setOpenQuestions] = useState('');
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const currentDir = ECOSYSTEM_DIRECTIONS.find((d) => d.id === selectedDirection);

  const sampleTemplates = [
    {
      label: 'Infrastructure experiment',
      title: 'Testing bounded failure recovery in distributed node sync',
      problem: 'When nodes experience intermittent latency spikes, current state sync assumes continuous network presence, leading to cascading timeouts.',
      boundaries: 'A minimal 3-node simulation in a local environment. Out of scope: production cluster scaling or multi-region failover.',
      questions: 'What is the smallest verifiable signal of network partition before declaring failure?'
    },
    {
      label: 'Developer tooling inquiry',
      title: 'Reducing latency in local schema error diagnosis',
      problem: 'Developers lose context when switching between terminal error outputs and source files during schema alterations.',
      boundaries: 'A lightweight CLI formatter that prints contextual code snippets alongside error codes.',
      questions: 'Does immediate inline contextual diffing reduce time-to-fix in beginner workflows?'
    }
  ];

  const applyTemplate = (t: typeof sampleTemplates[0]) => {
    setTitle(t.title);
    setProblemContext(t.problem);
    setExperimentBoundaries(t.boundaries);
    setOpenQuestions(t.questions);
  };

  const generatedMarkdown = `# [Inquiry] ${title || 'Untitled Proposal'}
**Ecosystem Direction**: ${currentDir?.title || 'General'}
**Category**: ${currentDir?.category || 'Ecosystem Inquiry'}

## 01 / Context & Problem Statement
${problemContext || '_Describe the problem before the solution. Who encounters it, what is difficult today, and what have you already considered?_'}

## 02 / The Smallest Useful Test
${experimentBoundaries || '_Outline a method, a limited scope, and the evidence you would seek. Include constraints, risks, and what is deliberately out of scope._'}

## 03 / Discussion & Open Questions
${openQuestions || '_Ask for perspectives, not a verdict. Share uncertainties and what help would be useful._'}

---
*Generated via undreamt open inquiry atelier.*`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedMarkdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#0f0e17] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 my-8 text-zinc-200 animate-fade-in">
        
        {/* Header */}
        <div className="flex items-start justify-between pb-6 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-purple-300">
                Inquiry & Experiment Protocol
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Bring a question. Give it a shape.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              You do not need a finished solution. A small, clear proposal gives others something they can discuss, test, and improve.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-purple-900/50 text-purple-300 mx-auto flex items-center justify-center border border-purple-500/30">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-white">Inquiry Draft Ready</h3>
            <p className="text-sm text-zinc-400 max-w-md mx-auto">
              Your experiment draft has been compiled according to undreamt principles. Copy your inquiry markdown below and share it with the community discussion space on GitHub.
            </p>
            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={handleCopy}
                className="px-4 py-2 text-xs font-medium text-white bg-purple-600 hover:bg-purple-500 rounded-lg flex items-center gap-1.5 cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied to clipboard' : 'Copy proposal Markdown'}</span>
              </button>
              <button
                onClick={() => setSubmitted(false)}
                className="px-4 py-2 text-xs font-medium text-zinc-300 bg-white/5 hover:bg-white/10 rounded-lg cursor-pointer"
              >
                Edit details
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            {/* Quick Starters */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
              <span className="text-zinc-500 font-mono text-[11px] shrink-0">Sample ideas:</span>
              {sampleTemplates.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => applyTemplate(item)}
                  className="px-2.5 py-1 rounded bg-white/[0.04] hover:bg-purple-900/30 border border-white/[0.08] hover:border-purple-500/30 text-zinc-300 hover:text-purple-200 transition-colors whitespace-nowrap text-xs"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Target Direction */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                01. Ecosystem Direction
              </label>
              <select
                value={selectedDirection}
                onChange={(e) => setSelectedDirection(e.target.value)}
                className="w-full bg-[#161523] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500"
              >
                {ECOSYSTEM_DIRECTIONS.map((dir) => (
                  <option key={dir.id} value={dir.id}>
                    {dir.title} ({dir.category})
                  </option>
                ))}
              </select>
            </div>

            {/* Title / Question */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                02. Working Title or Core Question
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. How can we make distributed state synchronization verifiable under partial connectivity?"
                className="w-full bg-[#161523] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* Context */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                03. Context & Difficulty (Describe the problem before the solution)
              </label>
              <textarea
                rows={2}
                required
                value={problemContext}
                onChange={(e) => setProblemContext(e.target.value)}
                placeholder="Who encounters this, what is difficult today, and what assumptions have you noticed?"
                className="w-full bg-[#161523] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* Boundaries */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                04. Smallest Useful Test (Boundaries & Scope)
              </label>
              <textarea
                rows={2}
                required
                value={experimentBoundaries}
                onChange={(e) => setExperimentBoundaries(e.target.value)}
                placeholder="What is the minimal test or prototype? What evidence would you seek? What is deliberately out of scope?"
                className="w-full bg-[#161523] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* Open Questions */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                05. Learning & Uncertainty (Ask for perspectives, not a verdict)
              </label>
              <textarea
                rows={2}
                value={openQuestions}
                onChange={(e) => setOpenQuestions(e.target.value)}
                placeholder="What remains uncertain? What kind of critique or context from others would help?"
                className="w-full bg-[#161523] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Quick copy Markdown'}</span>
              </button>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-medium text-white bg-purple-600 hover:bg-purple-500 active:bg-purple-700 rounded-lg transition-colors flex items-center gap-1.5 shadow-[0_0_15px_rgba(147,51,234,0.4)]"
                >
                  <span>Format Proposal</span>
                  <FileText className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
