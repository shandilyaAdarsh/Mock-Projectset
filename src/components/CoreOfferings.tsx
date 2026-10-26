"use client";

import { useState } from "react";
import {
  Video,
  GraduationCap,
  Briefcase,
  Activity,
  ArrowRight,
  Play,
  Clock,
  Sparkles,
  CheckCircle,
} from "lucide-react";

export default function CoreOfferings({
  onSelectOffering,
}: {
  onSelectOffering: (offering: string) => void;
}) {
  const [activeTab, setActiveTab] = useState<"projects" | "tracker" | "masterclasses" | "videos">(
    "projects"
  );

  return (
    <section id="offerings" className="py-20 sm:py-28 bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Layout: Textual Location on Left & Option Bar with Downward Textuals on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT COLUMN: Section Main Textual Content (User's Yellow Box on Left) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6 text-left self-start">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-slate-700 text-xs font-medium border border-black/[0.06] shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>The Four Pillars of Work Readiness</span>
            </div>

            {/* Main Editorial Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-semibold tracking-tight text-slate-900 leading-[1.15]">
              Everything required to bridge academic theory and modern industry.
            </h2>

            {/* Subcopy */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              A cohesive curriculum that builds durable behavioral competencies alongside real-world evidence of work.
            </p>

            {/* Supporting Framework Anchor Points */}
            <div className="pt-6 border-t border-black/[0.06] space-y-3.5">
              <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-700">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 shrink-0" />
                <span>Pillar 01 — Experiential Industry Projects</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-700">
                <span className="w-2.5 h-2.5 rounded-full bg-violet-600 shrink-0" />
                <span>Pillar 02 — Pathsmith™ Skills Tracker</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-700">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 shrink-0" />
                <span>Pillar 03 — Expert-Led Masterclasses</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-700">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-600 shrink-0" />
                <span>Pillar 04 — On-Demand Video Capsules</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Option Bar on Top & Textuals Showcasing Downward (User's Yellow Box on Right) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Option Bar (Pill Navigation on Right) */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl sm:rounded-full bg-slate-200/80 border border-black/[0.04] backdrop-blur-md">
              <button
                onClick={() => setActiveTab("projects")}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === "projects"
                    ? "bg-white text-slate-900 shadow-xs scale-[1.02]"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                }`}
              >
                <Briefcase className="w-4 h-4 text-indigo-600" />
                <span>Real Projects</span>
              </button>
              <button
                onClick={() => setActiveTab("tracker")}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === "tracker"
                    ? "bg-white text-slate-900 shadow-xs scale-[1.02]"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                }`}
              >
                <Activity className="w-4 h-4 text-violet-600" />
                <span>Skills Tracker</span>
              </button>
              <button
                onClick={() => setActiveTab("masterclasses")}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === "masterclasses"
                    ? "bg-white text-slate-900 shadow-xs scale-[1.02]"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                }`}
              >
                <GraduationCap className="w-4 h-4 text-emerald-600" />
                <span>Masterclasses</span>
              </button>
              <button
                onClick={() => setActiveTab("videos")}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === "videos"
                    ? "bg-white text-slate-900 shadow-xs scale-[1.02]"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                }`}
              >
                <Video className="w-4 h-4 text-amber-600" />
                <span>Skill Videos</span>
              </button>
            </div>

            {/* Active Option Textuals Showcasing Downward */}
            <div className="bg-white p-6 sm:p-9 rounded-3xl border border-black/[0.06] shadow-sm space-y-6 transition-all duration-300">
              {/* TAB 1: REAL PROJECTS */}
              {activeTab === "projects" && (
                <div className="space-y-6">
                  {/* Textual Section 1: Badge & Title */}
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold">
                      <span>Pillar 01 • Experiential Learning</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
                      Authentic industry tasks that replace resume buzzwords with proof.
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      Collaborate solo or in multidisciplinary student squads on genuine briefs commissioned by employers like
                      Bupa, HSBC, Intel, and SAP. Solve real problems, gather verified mentor feedback, and graduate with a work portfolio.
                    </p>
                  </div>

                  {/* Textual Section 2: Bullets List */}
                  <ul className="space-y-3 text-sm text-slate-700 pt-1">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Real employer briefs with dedicated industry evaluators</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Simulated enterprise environments and agile team workflows</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Permanent digital proof-of-work badge linked to Pathsmith ID</span>
                    </li>
                  </ul>

                  {/* Textual Section 3: CTA */}
                  <div>
                    <button
                      onClick={() => onSelectOffering("Projects")}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer"
                    >
                      <span>Explore available active projects</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Downward Preview / Mockup Card */}
                  <div className="bg-[#F7F6F2] rounded-2xl p-5 sm:p-7 border border-black/[0.04] space-y-4 pt-4">
                    <div className="flex items-center justify-between pb-3 border-b border-black/[0.06]">
                      <span className="text-xs font-mono uppercase text-slate-500 font-medium">
                        Sprint Workspace #409
                      </span>
                      <span className="text-xs bg-indigo-100 text-indigo-700 px-2.5 py-0.5 rounded-full font-medium">
                        Employer Verified
                      </span>
                    </div>

                    <div className="bg-white p-5 rounded-xl border border-black/[0.06] shadow-2xs space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-indigo-600">Fintech Sustainability Model</span>
                        <span className="text-2xs font-mono text-slate-400">Due in 4 days</span>
                      </div>
                      <h4 className="text-base font-medium text-slate-900">
                        HSBC Green Bond Portfolio Risk Evaluation Brief
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Evaluate 12 corporate ESG filings against EU taxonomy disclosure directives. Deliver a synthesized 10-slide executive recommendation.
                      </p>
                      <div className="pt-2 flex flex-wrap gap-2 text-2xs">
                        <span className="bg-slate-100 px-2.5 py-1 rounded-md text-slate-600">Financial Modeling</span>
                        <span className="bg-slate-100 px-2.5 py-1 rounded-md text-slate-600">Critical Analysis</span>
                        <span className="bg-slate-100 px-2.5 py-1 rounded-md text-slate-600">ESG Directives</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white p-4 rounded-xl border border-black/[0.06] shadow-2xs">
                        <div className="text-2xs text-slate-400 font-mono">MENTOR SCORE</div>
                        <div className="text-lg font-bold text-slate-900 mt-1">9.6 / 10</div>
                        <div className="text-2xs text-emerald-600 mt-0.5">Top 5% Cohort Percentile</div>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-black/[0.06] shadow-2xs">
                        <div className="text-2xs text-slate-400 font-mono">SCOUTING STATUS</div>
                        <div className="text-lg font-bold text-indigo-600 mt-1">Bookmarked</div>
                        <div className="text-2xs text-slate-500 mt-0.5">By 3 Talent Directors</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: SKILLS TRACKER */}
              {activeTab === "tracker" && (
                <div className="space-y-6">
                  {/* Textual Section 1: Badge & Title */}
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 text-violet-700 text-xs font-semibold">
                      <span>Pillar 02 • Pathsmith Framework</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
                      Evaluate progress, identify gaps, and prove durable competence.
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      Technical skills change every few years, but durable behavioral skills—critical thinking, communication, problem solving, adaptability—are what modern employers prioritize. Pathsmith maps your growth across every brief.
                    </p>
                  </div>

                  {/* Textual Section 2: Bullets List */}
                  <ul className="space-y-3 text-sm text-slate-700 pt-1">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Dynamic competence radar generated from actual project work</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Scenario-based judgment checks and peer-evaluated metrics</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Downloadable talent passport for internship & graduate applications</span>
                    </li>
                  </ul>

                  {/* Textual Section 3: CTA */}
                  <div>
                    <button
                      onClick={() => onSelectOffering("Tracker")}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 hover:text-violet-800 transition-colors cursor-pointer"
                    >
                      <span>View the Pathsmith interactive demo below</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Downward Preview / Mockup Card */}
                  <div className="bg-[#F7F6F2] rounded-2xl p-5 sm:p-7 border border-black/[0.04] space-y-4 pt-4">
                    <div className="flex items-center justify-between pb-3 border-b border-black/[0.06]">
                      <span className="text-xs font-mono uppercase text-slate-500 font-medium">
                        Learner Competency Graph
                      </span>
                      <span className="text-xs bg-emerald-100 text-emerald-700 px-2.5 py-0.5 rounded-full font-medium">
                        Verified Readiness Score: 92/100
                      </span>
                    </div>

                    <div className="bg-white p-5 rounded-xl border border-black/[0.06] shadow-2xs space-y-4">
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-xs font-medium text-slate-700 mb-1">
                            <span>Problem Framing & Dissection</span>
                            <span className="font-mono text-indigo-600">Level 4 (Advanced)</span>
                          </div>
                          <div className="w-full bg-slate-100 rounded-full h-2">
                            <div className="bg-indigo-600 h-2 rounded-full w-[88%]" />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-xs font-medium text-slate-700 mb-1">
                            <span>Stakeholder Synthesis & Presentation</span>
                            <span className="font-mono text-indigo-600">Level 4 (Advanced)</span>
                          </div>
                          <div className="w-full bg-slate-100 rounded-full h-2">
                            <div className="bg-indigo-600 h-2 rounded-full w-[94%]" />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-xs font-medium text-slate-700 mb-1">
                            <span>Agile Team Collaboration</span>
                            <span className="font-mono text-indigo-600">Level 5 (Mastery)</span>
                          </div>
                          <div className="w-full bg-slate-100 rounded-full h-2">
                            <div className="bg-emerald-500 h-2 rounded-full w-[98%]" />
                          </div>
                        </div>
                      </div>

                      <div className="p-3 bg-indigo-50/60 rounded-lg border border-indigo-100 flex items-center justify-between text-xs text-indigo-900">
                        <span className="font-medium">Identified Priority: Data Modeling under Uncertainty</span>
                        <span className="text-2xs bg-white px-2 py-0.5 rounded text-indigo-600 font-semibold shadow-2xs">
                          Recommend Masterclass #14
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: MASTERCLASSES */}
              {activeTab === "masterclasses" && (
                <div className="space-y-6">
                  {/* Textual Section 1: Badge & Title */}
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">
                      <span>Pillar 03 • Expert-Led Intensives</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
                      Learn directly from industry leaders solving live corporate challenges.
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      Interactive, accredited masterclasses curated with corporate partners. Rather than passive lectures, learners engage in case simulations, rapid feedback sessions, and tactical problem-solving sprints.
                    </p>
                  </div>

                  {/* Textual Section 2: Bullets List */}
                  <ul className="space-y-3 text-sm text-slate-700 pt-1">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Live Q&A and teardowns with directors from PwC, Capgemini, and SAP</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Applied exercises reviewed by senior practitioners</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Official certificate of completion with durable skill tags</span>
                    </li>
                  </ul>

                  {/* Textual Section 3: CTA */}
                  <div>
                    <button
                      onClick={() => onSelectOffering("Masterclasses")}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-800 transition-colors cursor-pointer"
                    >
                      <span>Browse upcoming live masterclasses</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Downward Preview / Mockup Card */}
                  <div className="bg-[#F7F6F2] rounded-2xl p-5 sm:p-7 border border-black/[0.04] space-y-4 pt-4">
                    <div className="flex items-center justify-between pb-3 border-b border-black/[0.06]">
                      <span className="text-xs font-mono uppercase text-slate-500 font-medium">
                        Featured Masterclass Series
                      </span>
                      <span className="text-xs bg-emerald-100 text-emerald-700 px-2.5 py-0.5 rounded-full font-medium">
                        Live Cohort
                      </span>
                    </div>

                    <div className="bg-white p-5 rounded-xl border border-black/[0.06] shadow-2xs space-y-3">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>4 Weeks • 3 Live Labs • 1 Final Deliverable</span>
                      </div>
                      <h4 className="text-base font-semibold text-slate-900">
                        Executive Strategy Teardown: Navigating AI Transformation in Enterprise Ops
                      </h4>
                      <div className="flex items-center gap-3 pt-2">
                        <div className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs">
                          EH
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-900">Elena Rostova</div>
                          <div className="text-2xs text-slate-500">Partner & Strategy Director, Capgemini UK</div>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-black/[0.06] text-xs flex items-center justify-between">
                      <span className="text-slate-600">Cohort 08 • Limited to 35 Students</span>
                      <span className="text-indigo-600 font-medium">Starts Nov 12 • Enrollment Open</span>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: VIDEOS */}
              {activeTab === "videos" && (
                <div className="space-y-6">
                  {/* Textual Section 1: Badge & Title */}
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold">
                      <span>Pillar 04 • On-Demand Skill Briefs</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
                      Short, high-density videos that deconstruct durable workplace skills.
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      No fluff or theoretical lectures. Each 5-to-12 minute video dissects one specific durable skill, showing concrete examples, common pitfalls, and immediate frameworks you can apply directly to live project briefs.
                    </p>
                  </div>

                  {/* Textual Section 2: Bullets List */}
                  <ul className="space-y-3 text-sm text-slate-700 pt-1">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Micro-lessons on conflict resolution, stakeholder decks, & data storytelling</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Real case tear-downs comparing average vs. standout submissions</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Interactive quiz checkpoints integrated with the Pathsmith Tracker</span>
                    </li>
                  </ul>

                  {/* Textual Section 3: CTA */}
                  <div>
                    <button
                      onClick={() => onSelectOffering("Videos")}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-800 transition-colors cursor-pointer"
                    >
                      <span>Browse the video library</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Downward Preview / Mockup Card */}
                  <div className="bg-[#F7F6F2] rounded-2xl p-5 sm:p-7 border border-black/[0.04] space-y-4 pt-4">
                    <div className="flex items-center justify-between pb-3 border-b border-black/[0.06]">
                      <span className="text-xs font-mono uppercase text-slate-500 font-medium">
                        Video Capsule #08
                      </span>
                      <span className="text-xs bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-full font-medium">
                        8 Min Duration
                      </span>
                    </div>

                    <div className="relative rounded-xl overflow-hidden bg-slate-900 text-white p-6 shadow-md aspect-video flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="text-2xs bg-white/20 px-2 py-0.5 rounded backdrop-blur-xs">
                          Durable Skills: Communication
                        </span>
                        <span className="text-2xs font-mono text-slate-300">HD 1080p</span>
                      </div>

                      <div className="flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer">
                          <Play className="w-5 h-5 fill-current ml-0.5 text-slate-900" />
                        </div>
                      </div>

                      <div>
                        <h5 className="font-medium text-sm sm:text-base text-white">
                          The Pyramid Principle: Structuring Executive Updates for Senior Leadership
                        </h5>
                        <p className="text-2xs text-slate-300 mt-1">
                          Presented by Marcus Sterling • Former McKinsey Engagement Manager
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}