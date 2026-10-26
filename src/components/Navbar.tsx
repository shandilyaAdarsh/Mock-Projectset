"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X, Sparkles, ChevronDown } from "lucide-react";

interface NavbarProps {
  onOpenGetStarted: () => void;
}

export default function Navbar({ onOpenGetStarted }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Programs", href: "#programs" },
    { name: "Offerings", href: "#offerings" },
    { name: "Showcase", href: "#showcase" },
    { name: "Skills Tracker", href: "#tracker" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none transition-all duration-300">
        <nav
          className={`pointer-events-auto flex items-center justify-between w-full max-w-5xl px-3 sm:px-4 py-2 sm:py-2.5 rounded-full border border-black/[0.08] bg-white/80 backdrop-blur-md shadow-sm transition-all duration-300 ${
            isScrolled ? "shadow-md bg-white/95" : ""
          }`}
          aria-label="Main Navigation"
        >
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 pl-2 pr-1 group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 rounded-full"
          >
            <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
              <span className="font-semibold text-xs tracking-tight">PS</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm sm:text-base tracking-tight text-slate-900 flex items-center gap-1">
                Projectset
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 inline-block"></span>
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1 bg-slate-100/70 p-1 rounded-full border border-black/[0.04]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  activeLink === link.name
                    ? "bg-white text-slate-900 shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenGetStarted}
              className="hidden sm:inline-flex text-xs font-medium text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-full transition-colors"
            >
              Log in
            </button>
            <button
              onClick={onOpenGetStarted}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 sm:py-2 rounded-full bg-slate-900 text-white text-xs sm:text-xs font-medium hover:bg-slate-800 transition-all duration-200 shadow-sm active:scale-98"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-slate-700 hover:text-slate-950 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-xs md:hidden animate-in fade-in duration-200">
          <div className="fixed top-20 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-3xl p-5 border border-black/[0.08] shadow-xl flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.name);
                    setMobileMenuOpen(false);
                  }}
                  className="px-4 py-2.5 rounded-2xl text-sm font-medium text-slate-700 hover:text-slate-950 hover:bg-slate-100/80 transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-slate-400">→</span>
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenGetStarted();
                }}
                className="w-full py-2.5 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Get Started Free</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenGetStarted();
                }}
                className="w-full py-2 rounded-full text-slate-600 text-xs font-medium hover:text-slate-900 transition-colors"
              >
                Already have an account? Sign In
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
