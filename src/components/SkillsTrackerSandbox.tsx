"use client";

import { useState } from "react";
import {
  Activity,
  CheckCircle2,
  Sparkles,
  Download,
  Share2,
  TrendingUp,
  Brain,
  MessageSquare,
  Users,
  Lightbulb,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

interface SkillData {
  id: string;
  name: string;
  score: number;
  level: string;
  description: string;
  evidence: string;
  employerEndorsement: string;
  icon: typeof Brain;
}

export default function SkillsTrackerSandbox() {
  const skills: SkillData[] = [
    {
      id: "critical-thinking",
      name: "Critical Analysis & Problem Framing",
      score: 94,
      level: "Level 5 • Mastery",
      description:
        "The ability to isolate root causes in ambiguous datasets, challenge assumptions, and design defensible strategic solutions.",
      evidence:
        "Verified via Bupa Operations Brief: Reduced 4 redundant scheduling variables into a single predictive patient queuing model.",
      employerEndorsement:
        "“Demonstrated rare analytical clarity. Caught edge-case errors in our clinical assumptions that experienced analysts missed.” — Bupa Evaluation Panel",
      icon: Brain,
    },
    {
      id: "adaptive-comms",
      name: "Adaptive Stakeholder Communication",
      score: 89,
      level: "Level 4 • Advanced",
      description:
        "Tailoring complex technical insights into clear, persuasive executive presentations for non-technical leadership.",
      evidence:
        "Verified via HSBC Onboarding Prototype: Delivered a 10-minute slide deck with defended Q&A to senior banking managing directors.",
      employerEndorsement:
        "“Clean slide discipline, no unnecessary jargon, highly defensible numbers.” — HSBC Commercial Channels",
      icon: MessageSquare,
    },
    {
      id: "team-dynamics",
      name: "Cross-Disciplinary Team Dynamics",
      score: 96,
      level: "Level 5 • Mastery",
      description:
        "Synthesizing diverse viewpoints across engineering, design, and business streams while maintaining sprint velocity.",
      evidence:
        "Peer-reviewed by 3 teammates across Imperial & UCL: Scored 4.9/5 on constructive feedback and conflict mediation during sprint 2.",
      employerEndorsement:
        "“The team worked as a cohesive unit. Clear delegation and proactive check-ins.” — Capgemini Strategy Lead",
      icon: Users,
    },
    {
      id: "creative-synthesis",
      name: "Creative Execution & Synthesis",
      score: 91,
      level: "Level 4 • Advanced",
      description:
        "Connecting disparate industry analogies to develop unorthodox, feasible interventions under real operational constraints.",
      evidence:
        "Verified via Intel IoT Brief: Adapted automotive telemetry architectures to semiconductor cleanroom carbon monitoring.",
      employerEndorsement:
        "“Ingenious cross-pollination of sensor protocols. Feasible and highly economical.” — Intel Sustainable Systems",
      icon: Lightbulb,
    },
  ];

  const [activeSkill, setActiveSkill] = useState<SkillData>(skills[0]);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <section id="tracker" className="py-24 sm:py-32 bg-[#F5F4EE] border-t border-black/[0.04]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-slate-700 text-xs font-medium border border-black/[0.04] mb-3 shadow-2xs">
            <Activity className="w-3.5 h-3.5 text-indigo-600" />
            <span>Pathsmith™ Durable Skills Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.18]">
            Don’t just list skills on a CV. <br className="hidden sm:inline" />
            Prove them with evidence.
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Pathsmith records every decision, submission, and mentor evaluation across your Projectset journey.
            Here is what an authenticated learner dossier looks like.
          </p>
        </div>

        {/* Interactive Matrix Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-black/[0.06] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Skill Selector Tabs */}
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs font-mono uppercase text-slate-400 font-medium pb-1">
                Select Competency to Inspect
              </div>

              {skills.map((skill) => {
                const Icon = skill.icon;
                const isSelected = activeSkill.id === skill.id;
                return (
                  <button
                    key={skill.id}
                    onClick={() => setActiveSkill(skill)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between group ${
                      isSelected
                        ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                        : "bg-slate-50/60 hover:bg-slate-100/80 text-slate-800 border-black/[0.04]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                          isSelected
                            ? "bg-white/10 text-white"
                            : "bg-white text-slate-700 shadow-2xs group-hover:text-indigo-600"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div
                          className={`text-sm font-semibold transition-colors ${
                            isSelected ? "text-white" : "text-slate-900"
                          }`}
                        >
                          {skill.name}
                        </div>
                        <div
                          className={`text-2xs font-mono mt-0.5 ${
                            isSelected ? "text-indigo-200" : "text-slate-500"
                          }`}
                        >
                          {skill.level}
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <span
                        className={`text-sm font-bold font-mono ${
                          isSelected ? "text-emerald-300" : "text-indigo-600"
                        }`}
                      >
                        {skill.score}%
                      </span>
                    </div>
                  </button>
                );
              })}

              <div className="pt-4">
                <button
                  onClick={handleDownload}
                  className="w-full py-3 px-4 rounded-full border border-black/[0.08] text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-3.5 h-3.5 text-slate-500" />
                  <span>
                    {downloadSuccess
                      ? "✓ Pathsmith Sample Dossier Downloaded!"
                      : "Download Verified Sample Passport (PDF)"}
                  </span>
                </button>
              </div>
            </div>

            {/* Right Column: Detailed Proof of Competency Card */}
            <div className="lg:col-span-7 bg-[#FAF9F5] p-6 sm:p-8 rounded-2xl border border-black/[0.06] space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold mb-2">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Pathsmith Verified Proof of Work</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
                    {activeSkill.name}
                  </h3>
                  <div className="text-xs text-slate-500 font-mono mt-0.5">
                    Competency Rating: {activeSkill.score} / 100 • Percentile: Top 4% Cohort
                  </div>
                </div>

                <div className="w-14 h-14 rounded-full bg-slate-900 text-white flex flex-col items-center justify-center font-mono shrink-0 shadow-sm">
                  <span className="text-base font-bold leading-none">{activeSkill.score}</span>
                  <span className="text-3xs uppercase tracking-tighter text-slate-300">Score</span>
                </div>
              </div>

              {/* Progress bar */}
              <div>
                <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${activeSkill.score}%` }}
                  />
                </div>
              </div>

              {/* Skill Description */}
              <div className="space-y-1">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-medium">
                  Behavioral Definition
                </div>
                <p className="text-sm text-slate-700 leading-relaxed font-light">
                  {activeSkill.description}
                </p>
              </div>

              {/* Hard Evidence */}
              <div className="bg-white p-4 rounded-xl border border-black/[0.06] space-y-1.5 shadow-2xs">
                <div className="text-xs font-mono uppercase tracking-wider text-indigo-600 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Empirical Project Evidence</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {activeSkill.evidence}
                </p>
              </div>

              {/* Direct Employer Quote */}
              <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200/60 text-xs text-slate-800 space-y-1">
                <span className="font-mono text-3xs uppercase tracking-wider text-amber-800 font-semibold block">
                  Employer Evaluator Note
                </span>
                <p className="italic text-slate-700 leading-relaxed">
                  {activeSkill.employerEndorsement}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-black/[0.06] text-xs text-slate-500">
                <span>Cryptographically Timestamped: Projectset Ledger</span>
                <span className="text-slate-900 font-semibold flex items-center gap-1">
                  Ready to link to LinkedIn & resumes →
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
