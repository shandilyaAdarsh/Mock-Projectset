"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "What is ProjectSet?",
      answer:
        "Projectset is a premier work-based learning and durable skills development platform. We bridge the gap between academic education and modern industry by connecting students and early-career talent with authentic corporate project briefs, expert masterclasses, and employer-verified skill tracking.",
    },
    {
      question: "Is ProjectSet free for learners?",
      answer:
        "Yes! Basic access, student project briefs, community challenges, and introductory durable skill assessments are completely free for registered students and independent learners. Enterprise cohorts and specialized accredited corporate masterclasses are sponsored by universities or employer partners.",
    },
    {
      question: "Can our university or institution integrate with an existing LMS?",
      answer:
        "Absolutely. Projectset features turn-key integrations with Canvas, Blackboard, Moodle, and Microsoft Teams. Educators can assign briefs directly into course modules, monitor cohort progress, and export Pathsmith competency grades straight into their gradebooks.",
    },
    {
      question: "How do employers scout talent through project briefs?",
      answer:
        "Employers host proprietary challenges on Projectset and review anonymized or authenticated deliverables. Rather than filtering resumes by university brand names, talent acquisition teams identify high performers based on actual problem-solving, code, modeling, and communication quality.",
    },
    {
      question: "What types of projects are available on ProjectSet?",
      answer:
        "We offer a broad portfolio across Strategy & Consulting, Artificial Intelligence & Technology, Healthcare Operations, Financial Modeling & Fintech, and ESG Sustainability. Projects range from 1-week rapid hackathons to 4-week structured sprint briefs.",
    },
    {
      question: "How does the Pathsmith durable skills verification work?",
      answer:
        "Pathsmith evaluates your work against durable behavioral rubrics co-developed with leading employers. It combines milestone deliverable evaluations, scenario judgment prompts, and mentor feedback to produce an evidence-backed credential you can link to LinkedIn and job applications.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#FAF9F5] border-t border-black/[0.04]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium border border-black/[0.04] mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-indigo-600" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            Frequently asked questions.
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Everything you need to know about Projectset, Pathsmith, and our employer partnerships.
          </p>
        </div>

        {/* Accessible Accordion List */}
        <div className="divide-y divide-black/[0.08] border-y border-black/[0.08]">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-5 sm:py-6 group">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 rounded-lg"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-medium text-slate-900 group-hover:text-indigo-600 transition-colors pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center bg-slate-100 text-slate-600 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-all shrink-0 ${
                      isOpen ? "rotate-180 bg-indigo-50 text-indigo-600" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-3 pb-1 text-sm text-slate-600 leading-relaxed font-light animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
