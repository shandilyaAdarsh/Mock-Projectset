"use client";

import { useState } from "react";
import { ArrowUpRight, Globe, Check } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail("");
    }
  };

  return (
    <footer className="border-t border-black/[0.06] bg-[#FAF9F5] pt-16 pb-12 text-slate-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-black/[0.06]">
          {/* Brand Info (Reference 1 style) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white font-semibold text-xs shadow-2xs">
                PS
              </div>
              <span className="font-semibold text-slate-900 tracking-tight text-lg">
                Projectset
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm font-light">
              The modern work-based learning platform connecting ambitious learners with practical project briefs,
              durable behavioral skills, and leading employer networks.
            </p>
            <div className="pt-2 text-2xs text-slate-400">
              © 2026 ProjectSet Ltd. Co-designed with Pathsmith™ durable skills framework.
            </div>
          </div>

          {/* Links Column 1: Platform */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-900 font-semibold">
              Platform
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#offerings" className="hover:text-slate-900 transition-colors">
                  Real Projects
                </a>
              </li>
              <li>
                <a href="#tracker" className="hover:text-slate-900 transition-colors">
                  Pathsmith Skills
                </a>
              </li>
              <li>
                <a href="#offerings" className="hover:text-slate-900 transition-colors">
                  Live Masterclasses
                </a>
              </li>
              <li>
                <a href="#offerings" className="hover:text-slate-900 transition-colors">
                  Durable Skill Videos
                </a>
              </li>
              <li>
                <a href="#showcase" className="hover:text-slate-900 transition-colors">
                  Project Directory
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Solutions */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-900 font-semibold">
              Solutions
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#community" className="hover:text-slate-900 transition-colors">
                  For Universities
                </a>
              </li>
              <li>
                <a href="#community" className="hover:text-slate-900 transition-colors">
                  For Employers
                </a>
              </li>
              <li>
                <a href="#community" className="hover:text-slate-900 transition-colors">
                  Talent Scouting
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-slate-900 transition-colors">
                  LMS Integration
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-slate-900 transition-colors">
                  Accreditation
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-900 font-semibold">
              Stay Informed
            </div>
            <p className="text-xs text-slate-500 font-light">
              Receive monthly briefing digests featuring upcoming corporate challenges and skill insights.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex rounded-full border border-black/[0.08] bg-white p-1 shadow-2xs focus-within:border-indigo-600 transition-colors">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@university.edu"
                  required
                  className="w-full bg-transparent px-3 py-1.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 rounded-full bg-slate-900 text-white text-xs font-medium hover:bg-slate-800 transition-colors shrink-0"
                >
                  {subscribed ? <Check className="w-3.5 h-3.5" /> : "Join"}
                </button>
              </div>
              {subscribed && (
                <div className="text-2xs text-emerald-600 font-medium">
                  ✓ You are subscribed to Projectset Briefs!
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Footer Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-700 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-700 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-slate-700 transition-colors">
              Accessibility Statement
            </a>
            <a href="#" className="hover:text-slate-700 transition-colors">
              Security & Compliance
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-slate-500">
              <Globe className="w-3.5 h-3.5" />
              <span className="text-2xs">English (UK)</span>
            </div>
            <div className="flex items-center gap-3 text-slate-500">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900 transition-colors"
                aria-label="X / Twitter"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900 transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
