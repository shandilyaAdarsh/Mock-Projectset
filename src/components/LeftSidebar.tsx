"use client";

import { useState, useRef } from "react";
import {
  ArrowUpRight,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  Layers,
  ArrowRight,
} from "lucide-react";

interface LeftSidebarProps {
  onOpenGetStarted: (role?: "student" | "educator" | "employer") => void;
}

export default function LeftSidebar({ onOpenGetStarted }: LeftSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"schools" | "universities" | "employers">("universities");
  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    leaveTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  const organizationOptions = [
    {
      id: "schools" as const,
      name: "Schools",
      role: "educator" as const,
      subtitle: "Secondary & Pre-University Pathways",
      description:
        "Introduce durable soft skills early. Embed interactive project simulations into high-school and sixth-form curricula to prepare students for higher education.",
      benefits: [
        "Age-appropriate durable skills framework (Years 10–13)",
        "Turn-key classroom lesson plans with automated scoring",
        "Direct exposure to real-world career disciplines",
      ],
      ctaText: "Explore School Programs",
      icon: (
        <svg
          className="w-5 h-5 text-slate-700 stroke-current"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Crossed pencil & ruler matching screenshot */}
          <path d="m15 5 4 4" />
          <path d="M13 7 7 13l-3 7 7-3 6-6" />
          <path d="m6 18 1.5-1.5" />
          <path d="m14 4 6 6-4 4-6-6z" />
          <path d="m18 10-1.5 1.5" />
          <path d="m15.5 12.5-1.5 1.5" />
        </svg>
      ),
    },
    {
      id: "universities" as const,
      name: "Universities",
      role: "educator" as const,
      subtitle: "Higher Education & Faculty Modules",
      description:
        "Seamlessly integrate authentic employer-led projects into undergraduate and postgraduate courses. Canvas, Blackboard, and Moodle LMS compatible with Pathsmith™ rubrics.",
      benefits: [
        "Accredited project-based learning embedded in syllabi",
        "Zero administrative grading burden with Pathsmith AI rubrics",
        "Proven 89% boost in graduate employability outcomes",
      ],
      ctaText: "Schedule University Pilot",
      icon: (
        <svg
          className="w-5 h-5 text-slate-700 stroke-current"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Classical university columns building matching screenshot */}
          <path d="M3 10h18" />
          <path d="M3 21h18" />
          <path d="M4 10v11" />
          <path d="M20 10v11" />
          <path d="M8 10v11" />
          <path d="M12 10v11" />
          <path d="M16 10v11" />
          <path d="M12 3 3 7v3h18V7z" />
        </svg>
      ),
    },
    {
      id: "employers" as const,
      name: "Employers",
      role: "employer" as const,
      subtitle: "Talent Scouting & Corporate Challenges",
      description:
        "Bypass generic CV filters. Host authentic work challenges on Projectset to scout, evaluate, and fast-track top-tier student talent based on verified problem solving.",
      benefits: [
        "10x higher signal than standard campus recruitment",
        "Pre-evaluated candidate dossiers verified by Pathsmith",
        "Strengthen early-career employer brand and DEI reach",
      ],
      ctaText: "Launch Employer Challenge",
      icon: (
        <svg
          className="w-5 h-5 text-slate-700 stroke-current"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Briefcase matching screenshot */}
          <rect width="20" height="14" x="2" y="7" rx="2" />
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          <path d="M12 12v2" />
          <path d="M2 13h20" />
        </svg>
      ),
    },
  ];

  const currentOrg = organizationOptions.find((o) => o.id === activeTab) || organizationOptions[1];

  return (
    <>
      {/* Floating Vertical Left Dock with Transparent Gradient Effect */}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`fixed left-4 sm:left-5 top-1/2 -translate-y-1/2 z-50 transition-all duration-300 ease-out hidden lg:block ${
          isOpen ? "w-80" : "w-16"
        }`}
        aria-label="For Organizations Sidebar"
      >
        {/* Transparent gradient frosted capsule container */}
        <div
          className={`relative rounded-3xl border border-white/60 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-2xl transition-all duration-300 overflow-hidden ${
            isOpen
              ? "p-5 bg-gradient-to-b from-white/95 via-white/85 to-white/95"
              : "py-4 px-2.5 bg-gradient-to-b from-white/70 via-white/50 to-white/70 hover:from-white/85 hover:to-white/85"
          }`}
          style={{
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          {/* Subtle ambient light gradient background inside container */}
          <div className="absolute inset-0 bg-gradient-to-tr from-violet-200/20 via-indigo-100/10 to-amber-100/20 pointer-events-none -z-10" />

          {/* COLLAPSED VIEW (Resting state: compact floating vertical glass pill) */}
          {!isOpen && (
            <div className="flex flex-col items-center gap-3">
              {/* Brand Emblem */}
              <div
                className="w-10 h-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-xs transition-transform hover:scale-105"
                title="For Organizations"
              >
                <span className="font-semibold text-xs tracking-tight">PS</span>
              </div>

              {/* Vertical Divider */}
              <div className="w-5 h-px bg-slate-300/60 my-0.5" />

              {/* 3 Icons from Reference */}
              <div className="flex flex-col gap-2">
                {organizationOptions.map((opt) => (
                  <div
                    key={opt.id}
                    className="relative group flex items-center justify-center"
                  >
                    <button
                      onClick={() => {
                        setActiveTab(opt.id);
                        setIsOpen(true);
                      }}
                      className="w-10 h-10 rounded-2xl bg-white/70 border border-white/60 shadow-2xs hover:bg-white hover:shadow-xs flex items-center justify-center transition-all duration-200 hover:scale-105"
                      aria-label={opt.name}
                    >
                      {opt.icon}
                    </button>

                    {/* Quick Tooltip on Hover in Collapsed State */}
                    <div className="absolute left-14 px-2.5 py-1 bg-slate-900 text-white text-3xs font-medium rounded-lg whitespace-nowrap shadow-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50">
                      {opt.name}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Quick Action */}
              <div className="w-5 h-px bg-slate-300/60 my-0.5" />
              <button
                onClick={() => onOpenGetStarted("educator")}
                className="w-10 h-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-xs hover:bg-slate-800 transition-transform hover:scale-105"
                title="Partner with Us"
              >
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* EXPANDED VIEW (Opens automatically on cursor hover) */}
          {isOpen && (
            <div className="space-y-4 animate-in fade-in duration-200">
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-black/[0.06]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-2xl bg-slate-900 text-white flex items-center justify-center text-xs font-semibold shadow-xs">
                    PS
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm tracking-tight text-slate-900 flex items-center gap-1.5">
                      For Organizations
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 inline-block"></span>
                    </h3>
                    <p className="text-3xs text-slate-400 font-mono">Institutional Portal</p>
                  </div>
                </div>

                <span className="text-3xs font-mono uppercase bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full font-medium">
                  Active
                </span>
              </div>

              {/* The 3 Options from the Screenshot */}
              <div className="space-y-1.5">
                <span className="text-3xs font-mono uppercase tracking-wider text-slate-400 font-semibold px-1 block">
                  Select Institutional Type
                </span>

                {organizationOptions.map((opt) => {
                  const isSelected = activeTab === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setActiveTab(opt.id)}
                      className={`w-full text-left p-2.5 rounded-2xl border transition-all flex items-center gap-3 group ${
                        isSelected
                          ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                          : "bg-white/80 hover:bg-white text-slate-800 border-white/60 hover:border-black/[0.1] shadow-2xs"
                      }`}
                    >
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isSelected
                            ? "bg-white/10 text-white"
                            : "bg-[#F1F3F7] text-slate-700 group-hover:bg-indigo-50 group-hover:text-indigo-600"
                        }`}
                      >
                        {opt.icon}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span
                            className={`text-xs font-semibold tracking-tight ${
                              isSelected ? "text-white" : "text-slate-900"
                            }`}
                          >
                            {opt.name}
                          </span>
                          <ChevronRight
                            className={`w-3.5 h-3.5 transition-transform ${
                              isSelected
                                ? "text-indigo-300 translate-x-0.5"
                                : "text-slate-300 group-hover:text-slate-600"
                            }`}
                          />
                        </div>
                        <p
                          className={`text-3xs truncate mt-0.5 ${
                            isSelected ? "text-slate-300" : "text-slate-500"
                          }`}
                        >
                          {opt.subtitle}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Tab Details Card */}
              <div className="p-3.5 rounded-2xl bg-slate-50/90 border border-black/[0.04] space-y-2.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-3xs font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md">
                    {currentOrg.name} Overview
                  </span>
                  <span className="text-3xs font-mono text-slate-400">Pathsmith v2.4</span>
                </div>

                <p className="text-2xs text-slate-600 leading-relaxed font-light">
                  {currentOrg.description}
                </p>

                <div className="space-y-1 pt-1 border-t border-black/[0.04]">
                  {currentOrg.benefits.slice(0, 2).map((b, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-3xs text-slate-700">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => onOpenGetStarted(currentOrg.role)}
                  className="w-full py-2 px-3 rounded-xl bg-slate-900 text-white text-2xs font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center gap-1.5 shadow-2xs mt-1"
                >
                  <span>{currentOrg.ctaText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Footer status notice */}
              <div className="pt-2 border-t border-black/[0.06] flex items-center justify-between text-3xs text-slate-400">
                <span>Auto-collapses on leave</span>
                <span className="text-indigo-600 font-medium">Canvas & Moodle Ready</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Floating Pill Trigger for Tablet / Mobile */}
      <div className="lg:hidden fixed bottom-6 left-6 z-40">
        <button
          onClick={() => onOpenGetStarted("educator")}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-black/[0.08] shadow-lg text-xs font-semibold text-slate-900 hover:bg-white transition-all active:scale-95"
        >
          <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-2xs">
            PS
          </div>
          <span>For Organizations</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        </button>
      </div>
    </>
  );
}
