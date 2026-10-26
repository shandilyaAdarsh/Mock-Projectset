# ProjectSet — Modern Career & Durable Skills Platform Redesign

A complete, production-grade redesign of **[ProjectSet](https://www.projectset.com/)** into a minimal, premium editorial career-development and work-based learning platform.

Built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4**, featuring thoughtful typography, restrained color tokens, responsive layouts, and subtle, purposeful motion.

---

## ✨ Key Features & Architecture

### 1. Persistent Brand Header & Floating Left Dock
- **Persistent Logo**: The official ProjectSet logo is fixed at the top-left across all viewports with smooth scroll-to-top interaction.
- **Translucent Frosted Dock**: A floating left dock with subtle frosted glass blur, resting in a compact vertical pill and smoothly expanding on hover/proximity.

### 2. Dual-Column Editorial Hero
- **Left Column**: Clean editorial typography (*"Build skills. Prove your potential. Shape your career."*), announcement pill for Pathsmith 2.0, dual CTAs (*Explore Programs* and *Discover How It Works*), and verified proof metrics.
- **Right Column**: Grand, authentic hero composition showcasing Aaron's Skill Map, durable skills progress indicators, and career placement endorsement.

### 3. Morphing Organization Navigation
- Smoothly animates into view when scrolling into the **Organizations** section immediately following the enterprise partner marquee (*Bupa, HSBC, Intel, Capgemini, SAP, PwC*).
- Minimalist 3-option pill navbar (**Schools**, **Universities**, **Employers**).
- Clicking any option dynamically switches the curriculum/talent badge, value proposition, verified metrics, 3 core capabilities, case study quote, and context-specific pilot CTA.

### 4. Interactive Core Offerings
- **Split Layout**: Left sticky column anchors the primary headline (*"Everything required to bridge academic theory and modern industry."*), while the right column houses the 4-pill selector and downward content flow.
- Covers the four key offerings:
  - **Real Projects**: Multidisciplinary employer briefs with live sprint workspaces.
  - **Skills Tracker**: Pathsmith™ behavioral competency radar and downloadable talent passport.
  - **Masterclasses**: Live cohort intensives led by corporate directors.
  - **Skill Videos**: High-density micro-learning video capsules.

### 5. Sticky Scroll Project Discovery Showcase
- **Left Column**: Sticky sidebar with category filters (*Technology*, *Healthcare*, *Finance*, *Strategy*) and platform verification guarantees.
- **Right Column**: Project brief cards appear one by one downward as you scroll, with live status indicators, aura gradient backdrops, deliverables breakdown, and interactive modal view.

### 6. Durable Skills Sandbox & Social Proof
- Interactive Pathsmith™ skill radar matrix with live evaluator ratings and sample dossier download.
- Restrained dark metrics bar (*7,000+ briefs, 4.7★ satisfaction, 89% employability*) and authentic testimonials.
- Accessible accordion FAQ and minimal editorial footer.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: System editorial sans-serif stack (`Geist`, `Inter`, `-apple-system`, `sans-serif`)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.18+ or 20+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/shandilyaAdarsh/Mock-Projectset.git
cd Mock-Projectset

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

---

## 📄 License
MIT License. Created for ProjectSet design and technical demonstration.
