import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms of service and engineering contract conditions for Ryqon Digitals.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 mb-8 hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
            <FileText className="h-6 w-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Service Agreement
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Terms &amp; Conditions
            </h1>
          </div>
        </div>

        <p className="text-xs text-slate-400 mb-8">
          Last Updated: September 2026 • Ryqon Digitals (Hyderabad, Telangana)
        </p>

        <div className="prose dark:prose-invert max-w-none space-y-6 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              1. Engagement &amp; Project Statements of Work (SOW)
            </h2>
            <p>
              All software development, UI/UX design, cloud infrastructure, and marketing services performed by Ryqon Digitals are governed by individual written proposals or Statements of Work (SOW) detailing scope, sprint milestones, and deliverables.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              2. Intellectual Property &amp; Code Transfer
            </h2>
            <p>
              Upon receipt of final milestone payments as agreed in the SOW, Ryqon Digitals transfers 100% of all intellectual property, source code, database architectures, and design artifacts to the client. Pre-existing open-source libraries remain licensed under their respective MIT/Apache licenses.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              3. Milestone Acceptance &amp; Warranty
            </h2>
            <p>
              Clients receive milestone demos to test and approve sprint progress. Following production deployment, Ryqon Digitals provides a 30-day warranty to resolve any unintended bugs or code regressions that do not comply with the approved project specification.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              4. Payment &amp; Milestone Terms
            </h2>
            <p>
              Invoices are issued according to milestone completions. Typical structures require an initial kickoff sprint deposit followed by staging approval and final production handover payments.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              5. Governing Law
            </h2>
            <p>
              These terms are governed by and construed in accordance with the laws of India, under the jurisdiction of the courts in Hyderabad, Telangana.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
