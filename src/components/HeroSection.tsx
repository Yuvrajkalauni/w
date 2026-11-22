import { useState } from 'react';
import { ArrowRight, ArrowUpRight, FileText } from 'lucide-react';
import { KEY_METRICS, PROFILE, PROJECTS } from '../data/portfolioData';
import { ProjectSchematic } from './ProjectSchematic';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export function HeroSection({ onOpenResume }: HeroSectionProps) {
  const featuredProjects = PROJECTS.slice(0, 3);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = featuredProjects[activeIndex];

  return (
    <section id="about" className="pt-12 pb-16 md:pt-16 md:pb-20 border-b border-zinc-200 bg-[#FAFAFA]">
      <div className="max-w-[1160px] mx-auto px-6">
        {/* Two-column Split Hero (equal-height items-stretch) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-6 flex flex-col justify-between py-1">
            <div>
              <p className="text-xs font-medium tracking-wide text-zinc-500 mb-4">
                <span>{PROFILE.location}</span>
                <span className="mx-2 text-zinc-300" aria-hidden="true">·</span>
                <span>Computer Engineering</span>
                <span className="mx-2 text-zinc-300" aria-hidden="true">·</span>
                <span>Open to Internships</span>
              </p>

              <h1
                className="text-4xl sm:text-5xl lg:text-[52px] font-semibold tracking-tight text-zinc-950 leading-[1.08] mb-6"
                style={{ textWrap: 'balance' }}
              >
                Software, web systems, and networked tools built for reliability.
              </h1>

              <p className="text-base sm:text-[17px] text-zinc-600 leading-relaxed max-w-[54ch] mb-8">
                {PROFILE.summary}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
              >
                <span>View Selected Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-zinc-800 bg-white border border-zinc-200 hover:border-zinc-400 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
              >
                <span>Contact Me</span>
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-2 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors cursor-pointer whitespace-nowrap shrink-0 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-sm"
              >
                <FileText className="w-4 h-4" />
                <span>Inspect CV</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Engineering Blueprint Container */}
          <div className="lg:col-span-6 flex">
            <div className="w-full bg-white border border-zinc-200 rounded-2xl overflow-hidden flex flex-col justify-between">
              {/* Switcher Header */}
              <div className="px-5 py-4 border-b border-zinc-200 flex flex-wrap items-center justify-between gap-3 bg-white">
                <span className="text-xs font-medium text-zinc-500">
                  Architecture Preview
                </span>

                <div
                  className="inline-flex items-center gap-1 p-1 bg-zinc-100 rounded-lg"
                  role="tablist"
                  aria-label="Featured system architecture"
                >
                  {featuredProjects.map((project, idx) => (
                    <button
                      key={project.id}
                      type="button"
                      role="tab"
                      aria-selected={activeIndex === idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
                        activeIndex === idx
                          ? 'bg-white text-zinc-950 shadow-xs'
                          : 'text-zinc-600 hover:text-zinc-950'
                      }`}
                    >
                      {project.title.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Schematic Visual */}
              <ProjectSchematic type={activeProject.schematicType} />

              {/* Architecture Details */}
              <div className="p-5 flex-1 flex flex-col justify-between gap-4 bg-white">
                <div>
                  <div className="flex items-baseline justify-between gap-4 mb-1.5">
                    <h2 className="text-lg font-semibold text-zinc-950 tracking-tight">
                      {activeProject.title}
                    </h2>
                    <span className="text-xs font-mono text-zinc-500 tabular-nums whitespace-nowrap shrink-0">
                      {activeProject.timeframe}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {activeProject.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xs font-mono text-zinc-500">
                    {activeProject.stack.join(' · ')}
                  </p>
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-1 text-xs font-medium text-[#2563EB] hover:text-[#1D4ED8] whitespace-nowrap shrink-0"
                  >
                    <span>Case studies</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Proof Strip below Hero Split */}
        <div className="mt-12 pt-8 border-t border-zinc-200 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {KEY_METRICS.map((metric) => (
            <div key={metric.label} className="flex flex-col gap-1">
              <span
                className="text-2xl sm:text-[28px] font-semibold tracking-tight text-zinc-950 tabular-nums"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {metric.value}
              </span>
              <span className="text-xs sm:text-sm text-zinc-600">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
