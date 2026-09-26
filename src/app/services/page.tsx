import type { Metadata } from "next";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Software Engineering & Digital Marketing Services",
  description:
    "Explore Ryqon Digitals' end-to-end capabilities: custom web applications (Next.js/React), iOS & Android mobile apps (Flutter), cloud DevOps, and high-ROI Meta & Google ads.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Software Engineering & Digital Marketing Services | Ryqon Digitals",
    description:
      "Full-stack custom development and data-driven marketing solutions engineered to help brands scale fast.",
    url: "https://www.ryqondigitals.com/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="pt-24 sm:pt-32 bg-[#f7fafe]">
      {/* Page Hero Header */}
      <div className="relative isolate py-14 sm:py-20 text-center">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            <span>Service Capabilities</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 max-w-3xl mx-auto mb-5 leading-tight">
            Digital Growth &amp; <br />
            <span className="text-blue-600">Engineering Solutions</span>
          </h1>

          <p className="text-base sm:text-lg font-normal text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
            From initial product discovery to production cloud deployment and automated customer acquisition funnels, we provide end-to-end digital capabilities.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3.5">
            <Link href="/#contact" className="btn-pill-dark text-xs sm:text-sm gap-2">
              <span>Start Your Project</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link href="/#work" className="btn-pill-white text-xs sm:text-sm">
              Our Commitments
            </Link>
          </div>
        </div>
      </div>

      <ServicesSection />
      <ContactSection />
    </div>
  );
}
