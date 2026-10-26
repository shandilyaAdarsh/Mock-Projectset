"use client";

import { Star, Quote, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function CommunityProof({
  onJoinCommunity,
}: {
  onJoinCommunity: () => void;
}) {
  const stats = [
    { label: "Real Projects Completed", value: "7,000+" },
    { label: "Average Learner Rating", value: "4.7★" },
    { label: "Employability Rate Boost", value: "89%" },
    { label: "Countries Represented", value: "30+" },
  ];

  const testimonials = [
    {
      role: "Student Learner",
      author: "Maya Patel",
      institution: "Imperial College London • MSc Business Analytics",
      quote:
        "The Bupa project brief gave me tangible evidence to discuss during my interviews. Instead of answering generic behavioral questions, I walked my interviewers through real operational trade-offs I made in my deliverable.",
      outcome: "Secured Graduate Analyst Role at Capgemini Strategy",
    },
    {
      role: "University Faculty",
      author: "Prof. David Thorne",
      institution: "University College London • School of Management",
      quote:
        "Embedding Projectset into our semester coursework bridged the persistent gap between textbook theory and enterprise realities. The Pathsmith rubric handled scoring transparently, saving our faculty hundreds of grading hours.",
      outcome: "Partnered for 4 consecutive academic cohorts",
    },
    {
      role: "Corporate Talent Lead",
      author: "Sarah Henderson",
      institution: "Bupa Global • Early Careers & Emerging Talent",
      quote:
        "Standard university CVs look identical. Reviewing authenticated student submissions on Projectset gave our recruiting team 10x more confidence in candidates’ actual communication and analytical abilities before the first interview.",
      outcome: "Hired 14 interns directly through platform challenges",
    },
  ];

  return (
    <section id="community" className="py-24 sm:py-32 bg-[#FAF9F5] border-t border-black/[0.04]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-slate-400 font-medium mb-3">
            Social Proof & Real Outcomes
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.18]">
            Join our growing global community of ambitious talent.
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Over 50,000 learners, educators, and enterprise mentors collaborating on authentic challenges.
          </p>
        </div>

        {/* Restrained Horizontal Metrics Bar (Prompt requirement) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-xl mb-16">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center p-3 text-center ${
                idx !== stats.length - 1 ? "lg:border-r lg:border-white/10" : ""
              }`}
            >
              <div className="text-3xl sm:text-4xl font-bold font-mono tracking-tight text-white">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Editorial Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-black/[0.06] shadow-2xs hover:shadow-sm transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xs font-mono uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full font-semibold">
                    {item.role}
                  </span>
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed font-light">
                  “{item.quote}”
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6 space-y-2">
                <div>
                  <div className="text-sm font-semibold text-slate-900">{item.author}</div>
                  <div className="text-2xs text-slate-500">{item.institution}</div>
                </div>
                <div className="flex items-center gap-1.5 text-2xs text-emerald-700 font-medium pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{item.outcome}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Callout Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-[#F0EFEB] border border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-semibold text-slate-900">
              Are you an employer or academic institution?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Partner with Projectset to launch student briefs or embed experiential learning in your curriculum.
            </p>
          </div>
          <button
            onClick={onJoinCommunity}
            className="px-6 py-3 rounded-full bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors shrink-0 flex items-center gap-2"
          >
            <span>Partner with Us</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
