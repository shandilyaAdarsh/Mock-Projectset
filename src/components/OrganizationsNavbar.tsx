"use client";

interface OrganizationsNavbarProps {
  isVisible: boolean;
  activeOrg: "schools" | "universities" | "employers";
  onSelectOrg: (org: "schools" | "universities" | "employers") => void;
}

export default function OrganizationsNavbar({
  isVisible,
  activeOrg,
  onSelectOrg,
}: OrganizationsNavbarProps) {
  const options = [
    {
      id: "schools" as const,
      name: "Schools",
      icon: (
        <svg
          className="w-5 h-5 stroke-current"
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
      icon: (
        <svg
          className="w-5 h-5 stroke-current"
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
      icon: (
        <svg
          className="w-5 h-5 stroke-current"
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

  return (
    <div
      className={`fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none transition-all duration-500 ease-out ${
        isVisible
          ? "translate-y-0 opacity-100 scale-100"
          : "-translate-y-16 opacity-0 scale-95 pointer-events-none"
      }`}
      aria-label="Organizations Navigation Bar"
    >
      {/* Floating Pill with JUST the 3 Options (Enlarged, Clear, Non-intrusive) */}
      <nav
        className="pointer-events-auto inline-flex items-center gap-2 sm:gap-2.5 p-2 sm:p-2.5 rounded-full border border-blue-200/80 shadow-[0_16px_45px_rgba(37,99,235,0.18)] bg-gradient-to-r from-blue-50/95 via-white/95 to-blue-50/95 backdrop-blur-2xl transition-all duration-300"
        style={{
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
        }}
      >
        {options.map((opt) => {
          const isSelected = activeOrg === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => onSelectOrg(opt.id)}
              className={`flex items-center gap-2.5 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold tracking-tight transition-all duration-200 cursor-pointer ${
                isSelected
                  ? "bg-slate-900 text-white shadow-md scale-[1.02]"
                  : "text-slate-600 hover:text-slate-950 hover:bg-white/90"
              }`}
            >
              <span className={isSelected ? "text-white" : "text-blue-600"}>
                {opt.icon}
              </span>
              <span>{opt.name}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
