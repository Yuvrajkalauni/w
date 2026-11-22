import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { PROFILE } from './data/portfolioData';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#FAFAFA] text-[#09090B]">
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      <main className="flex-1">
        <HeroSection onOpenResume={() => setResumeOpen(true)} />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection onOpenResume={() => setResumeOpen(true)} />
      </main>

      <footer className="border-t border-zinc-200 bg-white py-8">
        <div className="max-w-[1160px] mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            © 2026 {PROFILE.name}
            <span className="mx-2 text-zinc-300" aria-hidden="true">·</span>
            <span>{PROFILE.location}</span>
          </p>

          <div className="flex items-center gap-6">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-950 transition-colors"
            >
              GitHub
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-950 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="hover:text-zinc-950 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>

      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
