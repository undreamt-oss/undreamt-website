import React, { useState } from 'react';
import { FaqItem } from '../types';
import { ChevronDown, Plus, Minus } from 'lucide-react';

interface FaqAccordionProps {
  items: FaqItem[];
  defaultOpenIndex?: number;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({
  items,
  defaultOpenIndex = 0
}) => {
  const [openIndices, setOpenIndices] = useState<number[]>([defaultOpenIndex]);

  const toggleItem = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
      {items.map((item, idx) => {
        const isOpen = openIndices.includes(idx);
        return (
          <div key={idx} className="transition-colors hover:bg-white/[0.015]">
            <button
              onClick={() => toggleItem(idx)}
              className="w-full py-5 px-1 flex items-start justify-between text-left gap-4 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-purple-400"
              aria-expanded={isOpen}
            >
              <span className="text-base font-medium text-white pr-4 leading-snug">
                {item.question}
              </span>
              <span className="shrink-0 mt-1 text-zinc-400 transition-transform duration-200">
                {isOpen ? (
                  <Minus className="w-4 h-4 text-purple-400" />
                ) : (
                  <Plus className="w-4 h-4 text-zinc-500" />
                )}
              </span>
            </button>

            {isOpen && (
              <div className="pb-5 px-1 text-sm text-zinc-400 leading-relaxed animate-fade-in">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
