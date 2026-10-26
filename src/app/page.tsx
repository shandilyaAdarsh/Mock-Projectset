"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import OrganizationsNavbar from "@/components/OrganizationsNavbar";
import OrganizationsSection from "@/components/OrganizationsSection";
import Hero from "@/components/Hero";
import PartnerBar from "@/components/PartnerBar";
import CoreOfferings from "@/components/CoreOfferings";
import ProjectShowcase from "@/components/ProjectShowcase";
import SkillsTrackerSandbox from "@/components/SkillsTrackerSandbox";
import CommunityProof from "@/components/CommunityProof";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import GetStartedModal from "@/components/GetStartedModal";
import HowItWorksModal from "@/components/HowItWorksModal";

export default function Home() {
  const [getStartedOpen, setGetStartedOpen] = useState(false);
  const [howItWorksOpen, setHowItWorksOpen] = useState(false);
  const [modalRole, setModalRole] = useState<"student" | "educator" | "employer">("student");
  const [activeOrg, setActiveOrg] = useState<"schools" | "universities" | "employers">("universities");
  const [isInOrganizationsSection, setIsInOrganizationsSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("for-organizations");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      // Section is active while visible in viewport (top entering viewport and bottom still visible)
      const inView = rect.top <= 150 && rect.bottom >= 120;
      setIsInOrganizationsSection(inView);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenGetStarted = (role: "student" | "educator" | "employer" = "student") => {
    setModalRole(role);
    setGetStartedOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] selection:bg-indigo-500/15 selection:text-indigo-950">
      {/* 0. Persistent Fixed Top-Left Brand Logo (Visible & fixed throughout the whole page) */}
      <div className="fixed top-5 sm:top-6 left-6 sm:left-8 z-40 transition-all duration-300">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center gap-2 group focus:outline-none cursor-pointer p-1.5 -m-1.5 rounded-xl hover:bg-white/70 backdrop-blur-xs transition-colors"
          aria-label="ProjectSet Home"
          title="Back to Top"
        >
          <img
            src="/projectset-logo.png"
            alt="ProjectSet"
            className="h-7 sm:h-8.5 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </button>
      </div>

      {/* 1. Left Floating Sidebar (Morphs away when scrolling into Organizations section) */}
      <Sidebar
        onOpenGetStarted={handleOpenGetStarted}
        onNavigate={scrollToSection}
        isHidden={isInOrganizationsSection}
      />

      {/* 2. Top Morphing Navbar (Appears in motion ONLY inside Organizations section with 3 options) */}
      <OrganizationsNavbar
        isVisible={isInOrganizationsSection}
        activeOrg={activeOrg}
        onSelectOrg={(org) => setActiveOrg(org)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExplorePrograms={() => scrollToSection("showcase")}
          onHowItWorks={() => setHowItWorksOpen(true)}
        />

        {/* Enterprise & University Partners */}
        <PartnerBar />

        {/* DEDICATED ORGANIZATIONS SECTION: Schools, Universities, Employers (Right after Trusted By) */}
        <OrganizationsSection
          id="for-organizations"
          activeOrg={activeOrg}
          onOpenGetStarted={handleOpenGetStarted}
        />

        {/* Core Offerings (Videos, Masterclasses, Projects, Skills Tracker) */}
        <CoreOfferings
          onSelectOffering={(offering) => {
            if (offering === "Projects") scrollToSection("showcase");
            else if (offering === "Tracker") scrollToSection("tracker");
            else handleOpenGetStarted("student");
          }}
        />

        {/* Project Discovery Showcase (2-Column Reference 1 Inspired Grid) */}
        <ProjectShowcase
          onApplyProject={() => handleOpenGetStarted("student")}
        />

        {/* Interactive Pathsmith™ Skills Tracker Sandbox */}
        <SkillsTrackerSandbox />

        {/* Community Proof, Horizontal Metrics, & Verified Testimonials */}
        <CommunityProof
          onJoinCommunity={() => handleOpenGetStarted("employer")}
        />

        {/* FAQ Accordion */}
        <FAQ />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Interactive Modals */}
      <GetStartedModal
        isOpen={getStartedOpen}
        onClose={() => setGetStartedOpen(false)}
        initialRole={modalRole}
      />

      <HowItWorksModal
        isOpen={howItWorksOpen}
        onClose={() => setHowItWorksOpen(false)}
        onExplore={() => scrollToSection("showcase")}
      />
    </div>
  );
}
