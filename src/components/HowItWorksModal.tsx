"use client";

import { X, CheckCircle, ArrowRight, BookOpen, Layers, Award, Briefcase } from "lucide-react";

interface HowItWorksModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExplore: () => void;
}

export default function HowItWorksModal({
  isOpen,
  onClose,
  onExplore,
}: HowItWorksModalProps) {
  if (!isOpen) return null;

  const steps = [
    {
      num: "01",
      title: "Select an Employer Project Brief",
      desc: "Browse authentic briefs from Bupa, HSBC, Intel, and Capgemini tailored to your focus area (Finance, AI, Healthcare, ESG).",
      icon: Briefcase,
    },
    {
      num: "02",
      title: "Collaborate in Squads or Solo",
      desc: "Use simulated enterprise workspaces to dissect datasets, design prototypes, and meet sprint milestones with agile accountability.",
      icon: Layers,
    },
    {
      num: "03",
      title: "Submit & Receive Industry Mentor Rubrics",
      desc: "Real practitioners evaluate your analytical reasoning, delivery format, and executive storytelling against professional benchmarks.",
      icon: BookOpen,
    },
    {
      num: "04",
      title: "Earn Pathsmith™ Verified Skill Badges",
      desc: "Your durable skill competencies are permanently recorded into a verifiable digital passport, unlocking direct interviews with corporate recruiters.",
      icon: Award,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-black/[0.08] relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold mb-2">
              <span>The Projectset Pathway</span>
            </div>
            <h3 className="text-2xl font-semibold text-slate-900">How Projectset Works</h3>
            <p className="text-xs text-slate-500 mt-1">
              From theoretical classroom concepts to verified industry deliverables in 4 steps.
            </p>
          </div>

          <div className="space-y-4">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-black/[0.04]"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-mono font-bold text-xs shrink-0">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">{step.title}</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onExplore();
              }}
              className="flex-1 py-3 px-6 rounded-full bg-slate-900 text-white font-medium text-xs hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
            >
              <span>Explore Active Briefs Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onClose}
              className="py-3 px-6 rounded-full border border-black/[0.08] text-slate-700 font-medium text-xs hover:bg-slate-50 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
