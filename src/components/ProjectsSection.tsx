import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS, ProjectItem } from '../data/portfolioData';
import { ProjectSchematic } from './ProjectSchematic';
import { ProjectModal } from './ProjectModal';

const CATEGORIES = ['All', 'Full-Stack', 'Systems & Networking', 'Desktop & Data'] as const;
type CategoryFilter = (typeof CATEGORIES)[number];

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-zinc-200 bg-[#FAFAFA]">
      <div className="max-w-[1160px] mx-auto px-6">
        {/* Section Header + Interactive Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-medium text-[#2563EB] mb-2">
              Selected Work
            </p>
            <h2
              className="text-3xl font-semibold tracking-tight text-zinc-950"
              style={{ textWrap: 'balance' }}
            >
              Engineering Projects & Systems
            </h2>
          </div>

          {/* Interactive Filter Segmented Control */}
          <div
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-zinc-200/70 rounded-xl self-start md:self-auto"
            role="group"
            aria-label="Filter projects by discipline"
          >
            {CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
                    isSelected
                      ? 'bg-white text-zinc-950 shadow-xs'
                      : 'text-zinc-600 hover:text-zinc-950'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => {
            const isLeadCard = selectedCategory === 'All' && index === 0;
            return (
              <article
                key={project.id}
                className={`group bg-white border border-zinc-200 hover:border-zinc-400 rounded-2xl overflow-hidden transition-colors duration-150 flex flex-col ${
                  isLeadCard ? 'md:col-span-2 lg:grid lg:grid-cols-12' : ''
                }`}
              >
                <div className={isLeadCard ? 'lg:col-span-6 lg:border-r lg:border-zinc-200 flex' : ''}>
                  <ProjectSchematic
                    type={project.schematicType}
                    compact={!isLeadCard}
                  />
                </div>

                <div
                  className={`p-6 flex flex-col justify-between gap-5 ${
                    isLeadCard ? 'lg:col-span-6 lg:p-8' : 'flex-1'
                  }`}
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-500 mb-2">
                      <span>{project.category}</span>
                      <span className="font-mono tabular-nums">{project.timeframe}</span>
                    </div>

                    <h3 className="text-xl font-semibold text-zinc-950 tracking-tight mb-2.5">
                      {project.title}
                    </h3>

                    <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                      {project.summary}
                    </p>

                    <p className="text-xs font-mono text-zinc-500">
                      {project.stack.join(' · ')}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-zinc-100 flex items-center justify-between gap-4">
                    <span className="text-xs text-zinc-500 truncate">
                      {project.architecture.outcomeMetric}
                    </span>

                    <button
                      type="button"
                      onClick={() => setActiveProject(project)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-zinc-900 bg-zinc-100 hover:bg-zinc-950 hover:text-white rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                    >
                      <span>Inspect Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
