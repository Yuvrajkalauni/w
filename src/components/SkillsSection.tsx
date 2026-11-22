import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';

export function SkillsSection() {
  const [query, setQuery] = useState('');
  const normalizedQuery = query.trim().toLowerCase();

  const filteredGroups = SKILL_GROUPS.map((group) => {
    if (!normalizedQuery) return group;
    const categoryMatches = group.category.toLowerCase().includes(normalizedQuery);
    const matchingItems = group.items.filter((item) =>
      item.toLowerCase().includes(normalizedQuery)
    );
    if (categoryMatches) return group;
    if (matchingItems.length > 0) {
      return { ...group, items: matchingItems };
    }
    return null;
  }).filter((group): group is NonNullable<typeof group> => group !== null);

  return (
    <section id="skills" className="py-16 md:py-24 border-b border-zinc-200 bg-white">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-medium text-[#2563EB] mb-2">
              Capabilities
            </p>
            <h2
              className="text-3xl font-semibold tracking-tight text-zinc-950"
              style={{ textWrap: 'balance' }}
            >
              Technical Skills & Core Foundations
            </h2>
          </div>

          {/* Functional Skill Filter Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Filter skills (e.g., Python, SQL)..."
              aria-label="Filter technical skills"
              className="w-full pl-9 pr-9 py-2 text-sm bg-[#FAFAFA] border border-zinc-200 rounded-lg text-zinc-950 placeholder:text-zinc-400 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-colors"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label="Clear skill filter"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-zinc-400 hover:text-zinc-900 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {filteredGroups.length === 0 ? (
          <div className="py-12 px-6 bg-[#FAFAFA] border border-zinc-200 rounded-2xl text-center">
            <p className="text-sm text-zinc-600 mb-3">
              No skills matched <span className="font-mono text-zinc-950">"{query}"</span>.
            </p>
            <button
              type="button"
              onClick={() => setQuery('')}
              className="px-4 py-2 text-xs font-medium text-zinc-900 bg-white border border-zinc-200 hover:border-zinc-400 rounded-lg transition-colors cursor-pointer"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGroups.map((group, idx) => (
              <div
                key={group.category}
                className="p-6 bg-[#FAFAFA] border border-zinc-200 rounded-2xl flex flex-col justify-between gap-4"
              >
                <div>
                  <div className="flex items-baseline justify-between gap-2 pb-3 border-b border-zinc-200 mb-4">
                    <h3 className="text-base font-semibold text-zinc-950">
                      0{idx + 1}. {group.category}
                    </h3>
                    <span className="text-xs font-mono text-zinc-400 tabular-nums">
                      {group.items.length}
                    </span>
                  </div>

                  <p className="text-sm font-medium text-zinc-900 leading-relaxed mb-3">
                    {group.items.join(' · ')}
                  </p>
                </div>

                <p className="text-xs text-zinc-500 leading-relaxed pt-3 border-t border-zinc-200/70">
                  {group.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
