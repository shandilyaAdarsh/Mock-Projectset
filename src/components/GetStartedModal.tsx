"use client";

import { useState } from "react";
import { X, CheckCircle, GraduationCap, Building2, User, ArrowRight } from "lucide-react";

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRole?: "student" | "educator" | "employer";
}

export default function GetStartedModal({
  isOpen,
  onClose,
  initialRole = "student",
}: GetStartedModalProps) {
  const [role, setRole] = useState<"student" | "educator" | "employer">(initialRole);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [institution, setInstitution] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-black/[0.08] relative">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">Welcome to Projectset!</h3>
            <p className="text-sm text-slate-600 max-w-xs mx-auto">
              We have dispatched your onboarding dossier and cohort verification link to{" "}
              <span className="font-mono text-slate-900">{email}</span>.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold mb-2">
                <span>Join Projectset Network</span>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900">Get Started Free</h3>
              <p className="text-xs text-slate-500 mt-1">
                Choose your profile type to access tailored project briefs and durable skill assessments.
              </p>
            </div>

            {/* Role Selectors */}
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setRole("student")}
                className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-1.5 ${
                  role === "student"
                    ? "bg-slate-900 text-white border-slate-900 shadow-xs"
                    : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-black/[0.04]"
                }`}
              >
                <User className="w-4 h-4" />
                <span className="text-xs font-medium">Student / Talent</span>
              </button>

              <button
                type="button"
                onClick={() => setRole("educator")}
                className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-1.5 ${
                  role === "educator"
                    ? "bg-slate-900 text-white border-slate-900 shadow-xs"
                    : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-black/[0.04]"
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                <span className="text-xs font-medium">Educator / Uni</span>
              </button>

              <button
                type="button"
                onClick={() => setRole("employer")}
                className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-1.5 ${
                  role === "employer"
                    ? "bg-slate-900 text-white border-slate-900 shadow-xs"
                    : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-black/[0.04]"
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span className="text-xs font-medium">Employer / Recruiter</span>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-black/[0.1] text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-indigo-600 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={
                    role === "student" ? "student@university.ac.uk" : "name@organization.com"
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-black/[0.1] text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-indigo-600 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  {role === "student"
                    ? "University / Institution"
                    : role === "educator"
                    ? "Academic Department"
                    : "Company / Organization"}
                </label>
                <input
                  type="text"
                  required
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  placeholder={
                    role === "student"
                      ? "e.g. UCL or Imperial College"
                      : "e.g. Business & Management Faculty"
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-black/[0.1] text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-indigo-600 transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <span>
                    {role === "student"
                      ? "Create Free Student Account"
                      : role === "educator"
                      ? "Request Faculty Pilot"
                      : "Book Employer Scouting Demo"}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <p className="text-3xs text-center text-slate-400">
                By continuing, you agree to ProjectSet Terms of Service and Privacy Policy.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
