import { useEffect } from 'react';
import { Download, X } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

export function ResumeModal({ open, onClose }: ResumeModalProps) {
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/65 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl h-[88vh] bg-white border border-zinc-200 rounded-2xl shadow-xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-zinc-200 bg-white">
          <div className="min-w-0">
            <h3 id="resume-modal-title" className="text-base font-semibold text-zinc-950 truncate">
              {PROFILE.name} — Curriculum Vitae
            </h3>
            <p className="text-xs text-zinc-500">
              {PROFILE.location} · Bachelor of Computer Engineering
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={PROFILE.cvUrl}
              download="Yuvraj_Kalauni_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 bg-zinc-100">
          <iframe
            title="Yuvraj Kalauni Curriculum Vitae PDF"
            src={PROFILE.cvUrl}
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </div>
  );
}
