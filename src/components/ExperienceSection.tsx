import { CERTIFICATIONS, EDUCATION, EXPERIENCES, LEADERSHIP } from '../data/portfolioData';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 border-b border-zinc-200 bg-white">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Sticky Editorial Column */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <p className="text-xs font-medium text-[#2563EB] mb-2">
                Background
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 mb-4" style={{ textWrap: 'balance' }}>
                Experience & Academic Foundation
              </h2>
              <p className="text-sm text-zinc-600 leading-relaxed max-w-[38ch]">
                Hands-on internship delivery in Python reporting and REST API testing, paired with a Bachelor of Computer Engineering curriculum in Kathmandu.
              </p>
            </div>
          </div>

          {/* Right Structured Timeline & Credentials */}
          <div className="lg:col-span-8 space-y-12">
            {/* Industry Experience */}
            <div>
              <h3 className="text-xs font-medium uppercase tracking-wider text-zinc-400 pb-3 border-b border-zinc-200 mb-6">
                Work Experience
              </h3>

              <div className="space-y-8">
                {EXPERIENCES.map((exp) => (
                  <article key={exp.id} className="bg-[#FAFAFA] border border-zinc-200 rounded-2xl p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-zinc-950 tracking-tight">
                          {exp.role}
                        </h4>
                        <p className="text-sm text-zinc-600 mt-1">
                          <span className="font-medium text-zinc-900">{exp.organization}</span>
                          <span className="mx-2 text-zinc-300" aria-hidden="true">·</span>
                          <span>{exp.location}</span>
                        </p>
                      </div>
                      <span className="text-xs font-mono text-zinc-500 tabular-nums whitespace-nowrap shrink-0">
                        {exp.timeframe}
                      </span>
                    </div>

                    <ul className="space-y-3 pt-4 border-t border-zinc-200">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-zinc-700 leading-relaxed">
                          <span className="font-mono text-xs text-zinc-400 pt-0.5 tabular-nums select-none">
                            0{idx + 1}.
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xs font-medium uppercase tracking-wider text-zinc-400 pb-3 border-b border-zinc-200 mb-6">
                Education
              </h3>

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 pb-2">
                <div>
                  <h4 className="text-lg font-semibold text-zinc-950">
                    {EDUCATION.degree}
                  </h4>
                  <p className="text-sm text-zinc-600 mt-1">
                    {EDUCATION.institution}
                    <span className="mx-2 text-zinc-300" aria-hidden="true">·</span>
                    <span>{EDUCATION.location}</span>
                  </p>
                </div>

                <div className="text-left sm:text-right shrink-0">
                  <p className="text-xs font-mono text-zinc-500 tabular-nums">
                    {EDUCATION.expected}
                  </p>
                  <p className="text-sm font-medium text-zinc-950 font-mono tabular-nums mt-0.5">
                    GPA {EDUCATION.gpa}
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications & Leadership Split */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
              <div>
                <h3 className="text-xs font-medium uppercase tracking-wider text-zinc-400 pb-3 border-b border-zinc-200 mb-5">
                  Certifications
                </h3>
                <ul className="space-y-4">
                  {CERTIFICATIONS.map((cert) => (
                    <li key={cert.title} className="flex items-baseline justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-zinc-950">{cert.title}</p>
                        <p className="text-xs text-zinc-500 mt-0.5">{cert.issuer}</p>
                      </div>
                      <span className="text-xs font-mono text-zinc-500 tabular-nums shrink-0">
                        {cert.year}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-medium uppercase tracking-wider text-zinc-400 pb-3 border-b border-zinc-200 mb-5">
                  Leadership & Activities
                </h3>
                <ul className="space-y-4">
                  {LEADERSHIP.map((item) => (
                    <li key={item.role}>
                      <p className="text-sm font-semibold text-zinc-950">{item.role}</p>
                      <p className="text-sm text-zinc-600 mt-1 leading-relaxed">{item.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
