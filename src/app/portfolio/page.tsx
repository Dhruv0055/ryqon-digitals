import type { Metadata } from "next";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies & Client Work",
  description:
    "Explore Ryqon Digitals' portfolio of production web applications, cross-platform mobile apps, and scalable digital marketing projects. Real metrics, real client results.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Case Studies & Client Work | Ryqon Digitals",
    description:
      "Explore real-world software engineering and growth marketing case studies with verified performance metrics.",
    url: "https://www.ryqondigitals.com/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <div className="pt-24 sm:pt-32 bg-[#f7fafe]">
      {/* Page Hero Header */}
      <div className="relative isolate py-14 sm:py-20 text-center">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            <span>Portfolio Showcase</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 max-w-3xl mx-auto mb-5 leading-tight">
            Selected Client Work &amp; <br />
            <span className="text-blue-600">Growth Case Studies</span>
          </h1>

          <p className="text-base sm:text-lg font-normal text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Real products shipped to real users. Review how we solve conversion bottlenecks, scale ad funnels, and build high-performance software.
          </p>

          <div className="flex justify-center">
            <Link href="/#contact" className="btn-pill-dark text-xs sm:text-sm gap-2">
              <span>Discuss Your Project</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      <PortfolioSection />
      <ContactSection />
    </div>
  );
}
