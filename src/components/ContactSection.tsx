import { FormEvent, useState } from 'react';
import { Check, Copy, Download, ExternalLink, FileText, Mail } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export function ContactSection({ onOpenResume }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [botField, setBotField] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submissionMode, setSubmissionMode] = useState<'netlify' | 'mailto' | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please complete your name, email address, and message.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    setError(null);
    setSubmitting(true);

    try {
      const formBody = new URLSearchParams({
        'form-name': 'contact',
        'bot-field': botField,
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      });

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody.toString(),
      });

      const contentType = response.headers.get('content-type') || '';
      const isNetlifyHandled = response.ok && !contentType.includes('text/html');
      setSubmissionMode(isNetlifyHandled ? 'netlify' : 'mailto');
    } catch {
      setSubmissionMode('mailto');
    } finally {
      setSubmitting(false);
    }
  };

  const mailtoHref = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
    `Portfolio Inquiry from ${name.trim() || 'Visitor'}`
  )}&body=${encodeURIComponent(
    `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`
  )}`;

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#FAFAFA]">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column: Direct Channels & CV */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div>
              <p className="text-xs font-medium text-[#2563EB] mb-2">
                Contact
              </p>
              <h2
                className="text-3xl font-semibold tracking-tight text-zinc-950 mb-4"
                style={{ textWrap: 'balance' }}
              >
                Open for Software, Systems & IT Internships
              </h2>
              <p className="text-sm text-zinc-600 leading-relaxed max-w-[44ch]">
                Based in {PROFILE.location}. Reach out directly regarding software development, networking, systems, or IT internship opportunities.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-zinc-200">
              {/* Email with Copy button */}
              <div className="flex items-center justify-between gap-3 py-1">
                <div className="min-w-0">
                  <p className="text-xs text-zinc-500">Email</p>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="text-sm font-medium text-zinc-950 hover:text-[#2563EB] transition-colors truncate block"
                  >
                    {PROFILE.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-700 bg-white border border-zinc-200 hover:border-zinc-400 rounded-lg transition-colors shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="py-1 border-t border-zinc-200/70 pt-3">
                <p className="text-xs text-zinc-500">Phone</p>
                <p className="text-sm font-medium font-mono text-zinc-950 tabular-nums">
                  {PROFILE.phone}
                </p>
              </div>

              {/* Links */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-zinc-200/70">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-3.5 py-2.5 text-xs font-medium text-zinc-800 bg-white border border-zinc-200 hover:border-zinc-400 rounded-lg transition-colors"
                >
                  <span>GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-3.5 py-2.5 text-xs font-medium text-zinc-800 bg-white border border-zinc-200 hover:border-zinc-400 rounded-lg transition-colors"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                </a>
              </div>

              {/* CV Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <button
                  type="button"
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-white bg-zinc-950 hover:bg-[#2563EB] rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Preview CV</span>
                </button>
                <a
                  href={PROFILE.cvUrl}
                  download="Yuvraj_Kalauni_CV.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-zinc-800 bg-white border border-zinc-200 hover:border-zinc-400 rounded-lg transition-colors whitespace-nowrap shrink-0"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-zinc-200 rounded-2xl p-6 sm:p-8">
              {submissionMode ? (
                <div className="py-8 space-y-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <Check className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-950">
                    {submissionMode === 'netlify' ? 'Message Sent' : 'Message Draft Ready'}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed max-w-[48ch]">
                    {submissionMode === 'netlify'
                      ? `Thank you, ${name}. Your inquiry has been submitted and will reach Yuvraj shortly.`
                      : `Your message from ${name} is prepared. Open your email client below to deliver it directly to ${PROFILE.email}.`}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href={mailtoHref}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-lg transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open in Email App</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmissionMode(null);
                        setName('');
                        setEmail('');
                        setMessage('');
                      }}
                      className="px-4 py-2.5 text-sm font-medium text-zinc-700 hover:text-zinc-950 cursor-pointer"
                    >
                      Write Another
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  noValidate
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Leave this field empty:
                      <input
                        name="bot-field"
                        value={botField}
                        onChange={(e) => setBotField(e.target.value)}
                      />
                    </label>
                  </p>

                  <div className="border-b border-zinc-100 pb-4">
                    <h3 className="text-lg font-semibold text-zinc-950">
                      Send a Message
                    </h3>
                    <p className="text-xs text-zinc-500 mt-1">
                      Submit a direct internship or project inquiry.
                    </p>
                  </div>

                  {error && (
                    <div
                      role="alert"
                      className="px-4 py-3 text-xs font-medium text-rose-800 bg-rose-50 border border-rose-200 rounded-lg"
                    >
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-medium text-zinc-700 mb-1.5"
                      >
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Alex Sharma"
                        required
                        className="w-full px-3.5 py-2.5 text-sm bg-[#FAFAFA] border border-zinc-200 rounded-lg text-zinc-950 placeholder:text-zinc-400 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-medium text-zinc-700 mb-1.5"
                      >
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@company.com"
                        required
                        className="w-full px-3.5 py-2.5 text-sm bg-[#FAFAFA] border border-zinc-200 rounded-lg text-zinc-950 placeholder:text-zinc-400 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-medium text-zinc-700 mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share details about the internship role, team, or project..."
                      required
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAFAFA] border border-zinc-200 rounded-lg text-zinc-950 placeholder:text-zinc-400 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-colors resize-y"
                    />
                  </div>

                  <div className="flex items-center justify-end pt-1">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="px-5 py-2.5 text-sm font-medium text-white bg-[#2563EB] hover:bg-[#1D4ED8] disabled:opacity-60 rounded-lg transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
                    >
                      {submitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
