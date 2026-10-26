"use client";

import {
  ArrowRight,
  Play,
  CheckCircle2,
} from "lucide-react";

interface HeroProps {
  onExplorePrograms: () => void;
  onHowItWorks: () => void;
}

export default function Hero({ onExplorePrograms, onHowItWorks }: HeroProps) {
  return (
    <section className="relative pt-20 pb-20 sm:pt-28 sm:pb-28 overflow-hidden">
      {/* Soft ambient background gradient glow */}
      <div className="absolute top-10 left-1/3 -translate-x-1/2 w-[600px] h-[340px] bg-gradient-to-tr from-violet-200/30 via-indigo-100/25 to-amber-100/30 blur-3xl rounded-full -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Split Composition: Left Textual Elements & Right Authentic Hero Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* LEFT COLUMN: Textual Elements */}
          <div className="lg:col-span-5 space-y-6 text-left">
            {/* Top Announcement Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-black/[0.06] shadow-2xs backdrop-blur-xs text-xs text-slate-700">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse" />
              <span className="font-medium text-slate-900">Pathsmith 2.0 Released</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-500">Durable Skills Verification Engine</span>
              <ArrowRight className="w-3 h-3 text-slate-400 ml-0.5" />
            </div>

            {/* Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-semibold tracking-tight text-slate-900 leading-[1.12]">
              Build skills. <br />
              Prove your potential. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-800">
                Shape your career.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
              Projectset connects aspiring professionals and university learners with practical briefs,
              verified durable skills, and direct career pathways with world-leading organizations.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={onExplorePrograms}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-all duration-200 shadow-sm hover:shadow-md active:scale-98"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onHowItWorks}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-slate-700 border border-black/[0.08] text-sm font-medium hover:bg-slate-50/80 transition-all duration-200 hover:border-black/[0.14] shadow-2xs"
              >
                <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-slate-700">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </div>
                <span>Discover How It Works</span>
              </button>
            </div>

            {/* Value Points Ticker */}
            <div className="pt-4 border-t border-black/[0.06] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>7,000+ Verified briefs completed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Evaluated by Bupa, HSBC & Intel</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Official ProjectSet Hero Graphic with Aaron's Skill Map & Testimonial */}
          <div className="lg:col-span-7 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl lg:max-w-2xl xl:max-w-3xl group">
              {/* Soft ambient backlight glow */}
              <div className="absolute inset-2 bg-gradient-to-tr from-blue-200/40 via-indigo-200/30 to-amber-100/40 blur-3xl rounded-full -z-10 scale-95 group-hover:scale-100 transition-transform duration-500" />

              <div className="relative rounded-3xl transition-transform duration-500 ease-out group-hover:scale-[1.02]">
                <img
                  src="/hero-visual.png"
                  alt="Aaron's Skill Map and ProjectSet durable skills career placement endorsement"
                  className="w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(15,23,42,0.15)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
