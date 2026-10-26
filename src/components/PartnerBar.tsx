"use client";

export default function PartnerBar() {
  const partners = [
    { name: "SAP", role: "Enterprise Partner" },
    { name: "Intel", role: "Technology Innovation" },
    { name: "Bupa", role: "Healthcare Network" },
    { name: "Capgemini", role: "Consulting & Strategy" },
    { name: "PwC", role: "Professional Services" },
    { name: "HSBC", role: "Global Banking" },
    { name: "Imperial College", role: "Academic Sponsor" },
    { name: "NHS Digital", role: "Public Healthcare" },
  ];

  return (
    <section className="py-12 border-y border-black/[0.05] bg-[#F7F6F2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-widest text-slate-400 font-mono mb-8 font-medium">
          Trusted by leading enterprise employers & premier academic institutions
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 items-center justify-items-center opacity-70 hover:opacity-100 transition-opacity duration-300">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center justify-center p-2 group transition-transform duration-200 hover:-translate-y-0.5"
            >
              <span className="font-semibold text-slate-800 tracking-tight text-base sm:text-lg group-hover:text-indigo-600 transition-colors">
                {partner.name}
              </span>
              <span className="text-3xs sm:text-2xs text-slate-400 font-normal mt-0.5 tracking-tight text-center">
                {partner.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
