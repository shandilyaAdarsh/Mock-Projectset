"use client";

import { useState, useRef } from "react";
import {
  ArrowUpRight,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  Layers,
  GraduationCap,
  Briefcase,
  Activity,
  HelpCircle,
  FolderKanban,
  Video,
  LogIn,
} from "lucide-react";

interface SidebarProps {
  onOpenGetStarted: (role?: "student" | "educator" | "employer") => void;
  onNavigate: (sectionId: string) => void;
  isHidden?: boolean;
}

export default function Sidebar({
  onOpenGetStarted,
  onNavigate,
  isHidden = false,
}: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeOrgTab, setActiveOrgTab] = useState<"schools" | "universities" | "employers">("universities");
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
    }, 220);
  };

  const navItems = [
    { name: "Programs", id: "showcase", icon: FolderKanban },
    { name: "Offerings", id: "offerings", icon: Layers },
    { name: "Showcase", id: "showcase", icon: Sparkles },
    { name: "Skills Tracker", id: "tracker", icon: Activity },
    { name: "FAQ", id: "faq", icon: HelpCircle },
  ];

  const organizationOptions = [
    {
      id: "schools" as const,
      name: "Schools",
      role: "educator" as const,
      subtitle: "Secondary & Sixth Form",
      description:
        "Introduce durable soft skills early. Embed interactive project simulations into high-school curricula.",
      benefits: ["Years 10–13 framework", "Automated scoring"],
      ctaText: "Explore School Briefs",
      icon: (
        <svg
          className="w-4 h-4 text-slate-700 stroke-current"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
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
      subtitle: "Higher Ed & Faculties",
      description:
        "Embed employer-led briefs into undergrad/postgrad courses with automated Pathsmith™ rubrics and Canvas/Moodle sync.",
      benefits: ["LMS Sync (Canvas/Moodle)", "89% employability boost"],
      ctaText: "Schedule Faculty Demo",
      icon: (
        <svg
          className="w-4 h-4 text-slate-700 stroke-current"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
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
      subtitle: "Talent Scouting & Briefs",
      description:
        "Bypass generic CV filters. Host authentic work challenges to scout and fast-track top-tier student talent.",
      benefits: ["Pre-evaluated dossiers", "Direct candidate pipeline"],
      ctaText: "Launch Talent Challenge",
      icon: (
        <svg
          className="w-4 h-4 text-slate-700 stroke-current"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="14" x="2" y="7" rx="2" />
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          <path d="M12 12v2" />
          <path d="M2 13h20" />
        </svg>
      ),
    },
  ];

  const currentOrg = organizationOptions.find((o) => o.id === activeOrgTab) || organizationOptions[1];

  return (
    <>
      {/* Floating Vertical Left Bar - Proximity Hotspot with Morphing Motion */}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`fixed left-4 sm:left-6 top-1/2 -translate-y-1/2 z-50 transition-all duration-500 ease-in-out ${
          isHidden
            ? "-translate-x-24 opacity-0 pointer-events-none scale-95"
            : "translate-x-0 opacity-100 pointer-events-auto scale-100"
        }`}
        aria-label="Unified Navigation Sidebar"
      >
        {/* Resting Compact State: Centered Glass Floating Capsule (Bluish Translucent) */}
        <div
          className={`relative rounded-full border border-blue-200/60 shadow-[0_12px_36px_rgba(37,99,235,0.12)] backdrop-blur-2xl transition-all duration-300 flex flex-col items-center py-4 px-2.5 bg-gradient-to-b from-blue-50/80 via-indigo-50/60 to-blue-50/80 hover:from-blue-50/95 hover:to-indigo-50/95 ${
            isOpen ? "opacity-0 pointer-events-none scale-95" : "opacity-100 scale-100"
          }`}
          style={{
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
          }}
        >
          {/* Subtle bluish ambient glow inside capsule */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/10 via-indigo-400/15 to-sky-300/10 rounded-full pointer-events-none -z-10" />

          {/* Logo Button with ProjectSet Signature Emblem */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 rounded-2xl bg-white/90 border border-blue-200/80 shadow-xs flex items-center justify-center transition-transform hover:scale-105 p-1.5 group"
            title="Projectset Home"
          >
            {/* The signature Projectset interconnected blue circles mark */}
            <svg viewBox="0 0 32 32" className="w-6 h-6 fill-none stroke-current" strokeWidth="2.5">
              <circle cx="13" cy="19" r="6.5" className="text-blue-600 stroke-blue-600" strokeWidth="2.8" />
              <circle cx="15" cy="8" r="4.2" className="text-blue-500 stroke-blue-500" strokeWidth="2.4" />
              <circle cx="23" cy="12" r="3.4" className="text-blue-600 stroke-blue-600" strokeWidth="2.4" />
              <line x1="14.5" y1="12.5" x2="14" y2="8" className="stroke-blue-500" strokeWidth="2.4" />
              <line x1="17.5" y1="15.5" x2="21" y2="13.5" className="stroke-blue-600" strokeWidth="2.4" />
            </svg>
          </button>

          {/* Divider */}
          <div className="w-5 h-px bg-slate-300/60 my-2" />

          {/* Navigation Category Icons */}
          <div className="flex flex-col gap-2">
            {navItems.slice(0, 3).map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.name} className="relative group flex items-center justify-center">
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="w-9 h-9 rounded-full bg-white/60 hover:bg-white text-slate-700 hover:text-indigo-600 border border-white/60 shadow-2xs flex items-center justify-center transition-all hover:scale-105"
                    aria-label={item.name}
                  >
                    <Icon className="w-4 h-4" />
                  </button>
                  <div className="absolute left-12 px-2.5 py-1 bg-slate-900 text-white text-3xs font-medium rounded-lg whitespace-nowrap shadow-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50">
                    {item.name}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Divider */}
          <div className="w-5 h-px bg-slate-300/60 my-2" />

          {/* Organization Icons */}
          <div className="flex flex-col gap-2">
            {organizationOptions.map((opt) => (
              <div key={opt.id} className="relative group flex items-center justify-center">
                <button
                  onClick={() => {
                    setActiveOrgTab(opt.id);
                    setIsOpen(true);
                  }}
                  className="w-9 h-9 rounded-2xl bg-[#F1F3F7]/80 hover:bg-white text-slate-700 hover:text-indigo-600 border border-white/60 shadow-2xs flex items-center justify-center transition-all hover:scale-105"
                  aria-label={opt.name}
                >
                  {opt.icon}
                </button>
                <div className="absolute left-12 px-2.5 py-1 bg-slate-900 text-white text-3xs font-medium rounded-lg whitespace-nowrap shadow-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50">
                  {opt.name}
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="w-5 h-px bg-slate-300/60 my-2" />

          {/* Get Started Mini CTA */}
          <button
            onClick={() => onOpenGetStarted("student")}
            className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-xs hover:bg-slate-800 transition-transform hover:scale-105"
            title="Get Started"
          >
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Expanded Floating Panel: Opens and Floats smoothly right beside the dock (Bluish Translucent) */}
        {isOpen && (
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 w-84 max-h-[82vh] overflow-y-auto rounded-3xl border border-blue-200/70 shadow-[0_20px_50px_rgba(37,99,235,0.14)] p-5 bg-gradient-to-b from-white/95 via-blue-50/85 to-white/95 backdrop-blur-3xl animate-in fade-in zoom-in-95 duration-200 space-y-4"
            style={{
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
            }}
          >
            {/* Top Header with Official Logo */}
            <div className="flex items-center justify-between pb-3 border-b border-blue-100/80">
              <div className="flex items-center gap-2">
                <img
                  src="/projectset-logo.png"
                  alt="ProjectSet"
                  className="h-6 w-auto object-contain"
                />
              </div>
              <span className="text-3xs font-mono uppercase bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">
                Menu
              </span>
            </div>

            {/* Main Navigation Links (Merged from previous Navbar) */}
            <div className="space-y-1">
              <span className="text-3xs font-mono uppercase tracking-wider text-slate-400 font-semibold px-1 block">
                Platform Navigation
              </span>
              <div className="grid grid-cols-2 gap-1.5">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.name}
                      onClick={() => {
                        onNavigate(item.id);
                        setIsOpen(false);
                      }}
                      className="flex items-center gap-2 p-2 rounded-xl text-xs font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 transition-colors text-left"
                    >
                      <Icon className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* For Organizations Section (The 3 Options from the Screenshot) */}
            <div className="space-y-2 pt-2 border-t border-black/[0.06]">
              <div className="flex items-center justify-between px-1">
                <span className="text-3xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  For Organizations
                </span>
                <span className="text-3xs text-slate-400">Institutional</span>
              </div>

              <div className="space-y-1.5">
                {organizationOptions.map((opt) => {
                  const isSelected = activeOrgTab === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setActiveOrgTab(opt.id)}
                      className={`w-full text-left p-2.5 rounded-2xl border transition-all flex items-center gap-3 group ${
                        isSelected
                          ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                          : "bg-white/80 hover:bg-white text-slate-800 border-white/60 hover:border-black/[0.1] shadow-2xs"
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
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
                              isSelected ? "text-indigo-300 translate-x-0.5" : "text-slate-300"
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

              {/* Active Tab Preview */}
              <div className="p-3 rounded-2xl bg-slate-50/90 border border-black/[0.04] space-y-2 text-xs">
                <p className="text-3xs text-slate-600 leading-relaxed font-light">
                  {currentOrg.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {currentOrg.benefits.map((b, i) => (
                    <span
                      key={i}
                      className="text-3xs bg-white px-2 py-0.5 rounded-md border border-black/[0.04] text-slate-600"
                    >
                      ✓ {b}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenGetStarted(currentOrg.role);
                  }}
                  className="w-full py-1.5 px-3 rounded-xl bg-slate-900 text-white text-3xs font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center gap-1 shadow-2xs mt-1"
                >
                  <span>{currentOrg.ctaText}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Bottom Actions (Merged from Navbar) */}
            <div className="pt-2 border-t border-black/[0.06] flex items-center gap-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenGetStarted("student");
                }}
                className="flex-1 py-2 px-3 rounded-full border border-black/[0.08] text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors text-center"
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenGetStarted("student");
                }}
                className="flex-1 py-2 px-3 rounded-full bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center gap-1 shadow-2xs"
              >
                <span>Get Started</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Floating Pill Trigger on Mobile / Tablet */}
      <div
        className={`lg:hidden fixed bottom-6 left-6 z-40 transition-all duration-300 ${
          isHidden ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/95 backdrop-blur-md border border-black/[0.08] shadow-lg text-xs font-semibold text-slate-900 hover:bg-white transition-all active:scale-95"
        >
          <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-2xs">
            PS
          </div>
          <span>Menu & Organizations</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        </button>
      </div>
    </>
  );
}
