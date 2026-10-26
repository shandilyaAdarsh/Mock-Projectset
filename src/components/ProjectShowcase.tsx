"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Sparkles,
  Users,
  Clock,
  ChevronRight,
  X,
  CheckCircle2,
  Briefcase,
  ShieldCheck,
  Building2,
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  partner: string;
  year: string;
  category: "Technology" | "Healthcare" | "Finance" | "Strategy";
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  skills: string[];
  duration: string;
  teamSize: string;
  description: string;
  briefSummary: string;
  deliverables: string[];
  evaluator: string;
  auraGradient: string;
  cardPreviewBg: string;
}

export default function ProjectShowcase({
  onApplyProject,
}: {
  onApplyProject: (project: Project) => void;
}) {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "bupa-ai",
      title: "Optimizing Clinical Care Pathways through Predictive EHR Modeling",
      subtitle: "Healthcare operations analysis & patient wait-time bottleneck mitigation",
      partner: "Bupa Global Health",
      year: "2026",
      category: "Healthcare",
      difficulty: "Advanced",
      skills: ["Critical Analysis", "Process Mapping", "Data Modeling", "Executive Storytelling"],
      duration: "4 Weeks",
      teamSize: "3-4 Learners",
      description:
        "Synthesize anonymized operational EHR datasets from four regional surgical centers to isolate delay patterns. Formulate tactical scheduling adjustments and present an executive brief directly to Bupa clinical directors.",
      briefSummary:
        "Regional healthcare providers face escalating surgical backlogs post-intake. Bupa has provided sample operational telemetry across triage, pre-op, surgical theater allocation, and post-op recovery.",
      deliverables: [
        "Interactive process bottleneck flowchart",
        "Predictive resource allocation matrix",
        "10-slide executive pitch deck for medical directors",
      ],
      evaluator: "Dr. Clara Vance, Chief Clinical Informatics Officer, Bupa",
      auraGradient: "from-rose-100/60 via-purple-100/50 to-blue-100/40",
      cardPreviewBg: "bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950",
    },
    {
      id: "hsbc-fintech",
      title: "Next-Generation Institutional Onboarding & KYC Experience",
      subtitle: "Fintech interface architecture & cross-border compliance optimization",
      partner: "HSBC Commercial Banking",
      year: "2026",
      category: "Finance",
      difficulty: "Intermediate",
      skills: ["Product Design", "Systems Thinking", "Regulatory Compliance", "Adaptive Comms"],
      duration: "3 Weeks",
      teamSize: "2-3 Learners",
      description:
        "Redesign the digital verification flow for corporate SME accounts operating across multi-jurisdiction trade routes. Balance frictionless client experience with strict anti-money-laundering (AML) auditability.",
      briefSummary:
        "Current institutional onboarding averages 18 business days due to manual document requests. Teams must map a unified self-service portal flow that cuts friction by 40% while ensuring complete regulatory compliance.",
      deliverables: [
        "Figma design system & interactive click-through prototype",
        "Compliance journey friction teardown",
        "Implementation roadmap & API architecture note",
      ],
      evaluator: "Alistair Sterling, Head of Digital Commercial Channels, HSBC",
      auraGradient: "from-amber-100/60 via-rose-100/50 to-indigo-100/40",
      cardPreviewBg: "bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950",
    },
    {
      id: "intel-iot",
      title: "Edge IoT Energy Telemetry & Carbon Accounting Dashboard",
      subtitle: "Sustainable technology infrastructure & ESG scope 2 audit trails",
      partner: "Intel Corporation",
      year: "2025",
      category: "Technology",
      difficulty: "Intermediate",
      skills: ["Data Strategy", "ESG Reporting", "Python", "Technical Documentation"],
      duration: "4 Weeks",
      teamSize: "Solo or Squad",
      description:
        "Construct an analytics model parsing real-time sensor streams from distributed semiconductor test facilities. Translate kilowatt-hour telemetry into GHG emissions calculations compliant with global standards.",
      briefSummary:
        "Enterprise technology customers require granular real-time carbon data to comply with emerging corporate ESG directives. This brief challenges learners to transform complex server metrics into actionable sustainability insights.",
      deliverables: [
        "Python data transformation pipeline",
        "Interactive power consumption visualization dashboard",
        "Comprehensive methodology whitepaper",
      ],
      evaluator: "Priya Nair, Principal Sustainable Systems Architect, Intel",
      auraGradient: "from-cyan-100/60 via-blue-100/50 to-violet-100/40",
      cardPreviewBg: "bg-gradient-to-br from-blue-950 via-slate-900 to-teal-950",
    },
    {
      id: "capgemini-strategy",
      title: "Cross-Border Supply Chain Resilience & Disruption Playbook",
      subtitle: "Management consulting simulation & geopolitical risk stress-testing",
      partner: "Capgemini Strategy",
      year: "2025",
      category: "Strategy",
      difficulty: "Advanced",
      skills: ["Scenario Planning", "Cross-functional Leadership", "Financial Sensitivity", "Synthesis"],
      duration: "5 Weeks",
      teamSize: "4 Learners",
      description:
        "Stress-test a European automotive tier-1 supplier against sudden maritime tariff shifts and component shortages. Deliver a defensible restructuring plan with 18-month financial pro-formas.",
      briefSummary:
        "Simulating a high-stakes management consulting mandate, teams analyze procurement dependencies, model alternative nearshoring scenarios, and defend their recommendations before a simulated client board.",
      deliverables: [
        "Disruption vulnerability audit matrix",
        "Nearshoring cost-benefit financial model",
        "Boardroom presentation with defended Q&A",
      ],
      evaluator: "Julian Moreau, Senior Partner, Global Supply Chain Practice, Capgemini",
      auraGradient: "from-violet-100/60 via-emerald-100/50 to-amber-100/40",
      cardPreviewBg: "bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900",
    },
  ];

  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  return (
    <section id="showcase" className="py-20 sm:py-28 bg-[#FAF9F5] border-t border-black/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sticky Scroll Showcase: Left Column Stays Pinned, Right Column Projects Appear One by One */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT COLUMN: Sticky Textual Headlines & Filters (User's Yellow Box on Left) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6 text-left self-start">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-slate-700 text-xs font-medium border border-black/[0.06] shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>Project Discovery Showcase</span>
            </div>

            {/* Editorial Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-semibold text-slate-900 tracking-tight leading-[1.15]">
              Real briefs. <br />
              Real employers. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-800">
                Real outcomes.
              </span>
            </h2>

            {/* Subcopy */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Browse actual projects commissioned by enterprise partners. Complete work, earn verified badges, and get scouted.
            </p>

            {/* Filter Pills in Sticky Sidebar */}
            <div className="pt-2 space-y-2">
              <span className="text-2xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                Filter by Sector ({filteredProjects.length} briefs)
              </span>
              <div className="flex flex-wrap gap-2">
                {["All", "Technology", "Healthcare", "Finance", "Strategy"].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedFilter(filter)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                      selectedFilter === filter
                        ? "bg-slate-900 text-white shadow-xs scale-105"
                        : "bg-white text-slate-600 hover:text-slate-950 border border-black/[0.06] hover:bg-slate-50"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Sticky Proof Badges */}
            <div className="pt-6 border-t border-black/[0.06] space-y-3">
              <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Verified briefs with live corporate evaluators</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-700">
                <Building2 className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Direct talent scouting by Bupa, HSBC, Intel & Capgemini</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-700">
                <Briefcase className="w-4 h-4 text-violet-600 shrink-0" />
                <span>Builds permanent Pathsmith™ digital evidence dossier</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Projects Shown Downward One by One (User's Yellow Box on Right) */}
          <div className="lg:col-span-7 space-y-12 sm:space-y-16">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group flex flex-col bg-white rounded-3xl border border-black/[0.06] shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* 1. Visual Card Preview with Aura Backdrop */}
                <div
                  onClick={() => setActiveModalProject(project)}
                  className={`p-5 sm:p-7 bg-gradient-to-tr ${project.auraGradient} cursor-pointer transition-transform duration-300`}
                >
                  <div
                    className={`rounded-2xl ${project.cardPreviewBg} text-white p-6 sm:p-7 shadow-xl aspect-[16/10] sm:aspect-[16/9] flex flex-col justify-between relative overflow-hidden`}
                  >
                    {/* Top Row: Partner & Difficulty */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                          {project.partner}
                        </span>
                      </div>
                      <span className="text-2xs bg-white/10 px-2.5 py-0.5 rounded text-slate-200 font-mono">
                        {project.difficulty}
                      </span>
                    </div>

                    {/* Center: Brief Scope Title & Skills */}
                    <div className="my-auto space-y-3 py-3">
                      <div className="text-2xs font-mono text-indigo-300 uppercase tracking-widest">
                        Live Brief Scope • 0{index + 1}
                      </div>
                      <h4 className="text-lg sm:text-xl font-semibold text-white leading-snug">
                        {project.title}
                      </h4>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.skills.slice(0, 3).map((skill) => (
                          <span
                            key={skill}
                            className="text-3xs bg-white/15 px-2.5 py-1 rounded-md text-slate-200 font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Row: Metadata & View Indicator */}
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          {project.duration}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-slate-400" />
                          {project.teamSize}
                        </span>
                      </div>
                      <span className="text-white font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        View Brief <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* 2. Downward Detailed Description & Scope Area */}
                <div className="p-6 sm:p-8 space-y-5 bg-white">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/[0.06] pb-3">
                    <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {project.partner} • Commissioned {project.year}
                    </span>
                  </div>

                  <div>
                    <h3
                      onClick={() => setActiveModalProject(project)}
                      className="text-xl sm:text-2xl font-semibold text-slate-900 hover:text-indigo-600 transition-colors cursor-pointer tracking-tight"
                    >
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-slate-500 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Skills tags */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-2xs font-mono uppercase text-slate-400 tracking-wider">
                      Target Competencies:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Evaluator signature pill & CTA Button */}
                  <div className="pt-4 border-t border-black/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="text-xs text-slate-500">
                      <span className="font-semibold text-slate-700 block">Industry Evaluator:</span>
                      <span>{project.evaluator}</span>
                    </div>
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white text-xs sm:text-sm font-medium hover:bg-slate-800 transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-sm"
                    >
                      <span>Explore Brief & Apply</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal: Detailed Project Brief View */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-black/[0.08] relative">
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">
                      {activeModalProject.category}
                    </span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs font-medium text-slate-600">
                      {activeModalProject.partner} ({activeModalProject.year})
                    </span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs text-emerald-600 font-medium">
                      {activeModalProject.difficulty}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
                    {activeModalProject.title}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    {activeModalProject.subtitle}
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-black/[0.04] space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-medium">
                    The Client Challenge
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {activeModalProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-medium mb-3">
                    Key Deliverables for Assessment
                  </h4>
                  <ul className="space-y-2">
                    {activeModalProject.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-medium mb-2">
                    Durable Skills Assessed (Pathsmith)
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100 text-xs text-indigo-950 space-y-1">
                  <span className="font-semibold block">Industry Evaluator:</span>
                  <span>{activeModalProject.evaluator}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      const proj = activeModalProject;
                      setActiveModalProject(null);
                      onApplyProject(proj);
                    }}
                    className="flex-1 py-3 px-6 rounded-full bg-slate-900 text-white font-medium text-sm hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Apply to this Project Brief</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="py-3 px-6 rounded-full border border-black/[0.08] text-slate-700 font-medium text-sm hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}