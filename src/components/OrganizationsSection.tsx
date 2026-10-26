"use client";

import {
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  Briefcase,
  Users,
  ShieldCheck,
  TrendingUp,
  Award,
  Layers,
  FileCheck,
} from "lucide-react";

interface OrganizationsSectionProps {
  id?: string;
  activeOrg: "schools" | "universities" | "employers";
  onOpenGetStarted: (role?: "student" | "educator" | "employer") => void;
}

export default function OrganizationsSection({
  id = "for-organizations",
  activeOrg,
  onOpenGetStarted,
}: OrganizationsSectionProps) {
  const orgData = {
    schools: {
      badge: "Secondary & Sixth Form Curriculum (Years 10–13)",
      title: "Schools & Secondary Education",
      subtitle:
        "Introduce durable soft skills early. Embed interactive project simulations into high-school curricula to prepare students for competitive university degrees and high-value apprenticeships.",
      stats: [
        { label: "Partner Schools", value: "85+" },
        { label: "Student Completion Rate", value: "94%" },
        { label: "Confidence Score Lift", value: "+42%" },
      ],
      features: [
        {
          title: "Curriculum-Integrated Mini-Briefs",
          desc: "1 to 2-week structured team challenges tailored for school timetables. Students apply mathematics, STEM, and humanities to real-world business scenarios.",
          icon: BookOpen,
        },
        {
          title: "Automated Teacher Rubrics",
          desc: "Zero grading overhead for faculty. The Pathsmith™ framework automatically evaluates problem framing, team dynamics, and written clarity.",
          icon: FileCheck,
        },
        {
          title: "Early Career Discovery Portfolios",
          desc: "Students build authentic digital portfolios showcasing completed employer challenges before applying for universities or apprenticeships.",
          icon: Award,
        },
      ],
      caseStudy: {
        school: "St. Paul’s Sixth Form Academy, London",
        quote:
          "Our students presented their sustainability briefs directly to Intel engineers. It transformed their university personal statements from generic claims into verified evidence.",
        author: "Mark Evans, Head of Careers & Guidance",
      },
      cta: "Request School Pilot Package",
      role: "educator" as const,
    },
    universities: {
      badge: "LMS Integrated • Canvas • Moodle • Blackboard",
      title: "Universities & Higher Education",
      subtitle:
        "Embed authentic employer-led experiential modules into undergraduate and postgraduate degree courses with automated Pathsmith grading and full LMS synchronization.",
      stats: [
        { label: "Higher Ed Partners", value: "45+" },
        { label: "Employability Boost", value: "89%" },
        { label: "Faculty Grading Hours Saved", value: "400h/yr" },
      ],
      features: [
        {
          title: "Seamless LMS Gradebook Sync",
          desc: "Turn-key integration with Canvas, Moodle, and Blackboard. Sync student registrations, milestones, and Pathsmith durable skill scores straight into your gradebook.",
          icon: Layers,
        },
        {
          title: "Accredited Project-Based Modules",
          desc: "Syllabus-ready modules mapped to higher education credit frameworks. Scalable from 30-student seminars to 1,000+ cross-faculty cohorts.",
          icon: GraduationCap,
        },
        {
          title: "Pathsmith™ Competency Dossiers",
          desc: "Students graduate with authenticated, employer-verified skill records backed by objective milestone submissions and mentor evaluations.",
          icon: ShieldCheck,
        },
      ],
      caseStudy: {
        school: "University College London (UCL) School of Management",
        quote:
          "Projectset allowed our 350 business analytics students to solve live Bupa healthcare challenges with instant, objective feedback without increasing faculty administrative workload.",
        author: "Prof. David Thorne, Director of Teaching & Learning",
      },
      cta: "Schedule University Faculty Demo",
      role: "educator" as const,
    },
    employers: {
      badge: "Direct Talent Acquisition & Early Careers",
      title: "Employers & Talent Scouting",
      subtitle:
        "Bypass generic resumes. Scout and evaluate top student talent through verified performance on authentic corporate challenge briefs before opening formal applications.",
      stats: [
        { label: "Corporate Partners", value: "120+" },
        { label: "Average Time-to-Hire", value: "-35%" },
        { label: "Candidate Retention", value: "96%" },
      ],
      features: [
        {
          title: "Host Proprietary Challenge Briefs",
          desc: "Commission real operational briefs to student squads across top universities. Discover top problem solvers based on actual deliverables.",
          icon: Briefcase,
        },
        {
          title: "Pre-Evaluated Candidate Dossiers",
          desc: "Access verified Pathsmith™ skill scores across Critical Analysis, Adaptive Communication, and Systems Modeling with objective evidence.",
          icon: Users,
        },
        {
          title: "Fast-Track Interview Pipelines",
          desc: "Invite high-ranking students directly into assessment centres or final-round interviews based on verified deliverable quality.",
          icon: TrendingUp,
        },
      ],
      caseStudy: {
        school: "Bupa Global Health Early Careers",
        quote:
          "We hired 14 exceptional graduate analysts directly from their care pathway optimization briefs. They hit the ground running with zero ramp-up time.",
        author: "Sarah Henderson, Head of Emerging Talent",
      },
      cta: "Launch Employer Challenge Brief",
      role: "employer" as const,
    },
  };

  const current = orgData[activeOrg];

  return (
    <section
      id={id}
      className="pt-20 pb-24 sm:pt-28 sm:pb-32 bg-[#F6F5F0] border-y border-black/[0.05] relative overflow-hidden scroll-mt-10"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[300px] bg-gradient-to-br from-blue-200/25 via-indigo-200/20 to-purple-200/20 blur-3xl rounded-full -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dynamic Feature Showcase Card: Textual changes smoothly when clicking each option */}
        <div
          key={activeOrg}
          className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-black/[0.06] shadow-sm space-y-10 animate-in fade-in duration-200"
        >
          {/* Top Banner Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-black/[0.06]">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold font-mono uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                {current.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
                {current.title}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {current.subtitle}
              </p>
            </div>

            <button
              onClick={() => onOpenGetStarted(current.role)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white text-xs sm:text-sm font-semibold hover:bg-slate-800 transition-all duration-200 shadow-sm shrink-0 self-start lg:self-end"
            >
              <span>{current.cta}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-gradient-to-r from-blue-50/60 via-indigo-50/40 to-blue-50/60 border border-blue-100/60">
            {current.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center p-3 text-center">
                <div className="text-2xl sm:text-3xl font-bold font-mono text-slate-900">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* 3 Core Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {current.features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#FAF9F5] border border-black/[0.04] space-y-3 hover:border-black/[0.1] transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-black/[0.06] shadow-2xs flex items-center justify-center text-blue-600">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-semibold text-slate-900">
                    {feat.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Partner Endorsement Box */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl text-center md:text-left">
              <span className="text-2xs font-mono uppercase tracking-wider text-blue-400 font-semibold block">
                Case Study • {current.caseStudy.school}
              </span>
              <p className="text-sm sm:text-base italic font-light text-slate-200 leading-relaxed">
                “{current.caseStudy.quote}”
              </p>
              <span className="text-xs text-slate-400 block pt-1">
                — {current.caseStudy.author}
              </span>
            </div>

            <button
              onClick={() => onOpenGetStarted(current.role)}
              className="px-5 py-2.5 rounded-full bg-white text-slate-900 text-xs font-semibold hover:bg-slate-100 transition-colors shrink-0 flex items-center gap-1.5"
            >
              <span>Read Full Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
