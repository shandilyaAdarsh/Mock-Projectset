import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Projectset — Build Skills. Prove Your Potential. Shape Your Career.",
  description:
    "Projectset connects learners with practical projects, industry-relevant durable skills, and career development opportunities in collaboration with global employers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col font-sans bg-[#FAF9F5] text-[#1E293B] selection:bg-indigo-500/15 selection:text-indigo-900">
        {children}
      </body>
    </html>
  );
}
