import { useEffect } from 'react';
import { X } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';
import { ProjectSchematic } from './ProjectSchematic';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white border border-zinc-200 rounded-2xl shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between gap-4 px-6 py-4 bg-white border-b border-zinc-200">
          <div className="min-w-0">
            <p className="text-xs text-zinc-500">
              <span>{project.category}</span>
              <span className="mx-2 text-zinc-300" aria-hidden="true">·</span>
              <span className="font-mono tabular-nums">{project.timeframe}</span>
            </p>
            <h3
              id="project-modal-title"
              className="text-lg font-semibold text-zinc-950 truncate mt-0.5"
            >
              {project.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 transition-colors shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
            aria-label="Close project details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Schematic Preview */}
        <ProjectSchematic type={project.schematicType} />

        {/* Body Content */}
        <div className="p-6 space-y-6">
          <div>
            <h4 className="text-xs font-medium uppercase tracking-wider text-zinc-400 mb-2">
              Overview
            </h4>
            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
              {project.summary}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-wider text-zinc-400 mb-3">
              System Architecture
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.architecture.layers.map((layer) => (
                <div
                  key={layer.label}
                  className="p-3.5 bg-[#FAFAFA] border border-zinc-200 rounded-xl"
                >
                  <p className="text-xs font-semibold text-zinc-950 mb-1">
                    {layer.label}
                  </p>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {layer.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-wider text-zinc-400 mb-3">
              Engineering Highlights
            </h4>
            <ul className="space-y-2.5">
              {project.highlights.map((highlight, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm text-zinc-700 leading-relaxed"
                >
                  <span className="font-mono text-xs text-[#2563EB] pt-0.5 tabular-nums select-none">
                    0{idx + 1}.
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-zinc-200 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs font-mono text-zinc-500">
              {project.stack.join(' · ')}
            </p>
            <span className="text-xs font-medium text-zinc-900">
              {project.architecture.outcomeMetric}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
