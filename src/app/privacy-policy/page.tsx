import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and client data protection practices at Ryqon Digitals.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
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
            <Shield className="h-6 w-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Legal Compliance
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Privacy Policy
            </h1>
          </div>
        </div>

        <p className="text-xs text-slate-400 mb-8">
          Last Updated: September 2026 • Ryqon Digitals (Hyderabad, Telangana)
        </p>

        <div className="prose dark:prose-invert max-w-none space-y-6 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              1. Information We Collect
            </h2>
            <p>
              When you interact with Ryqon Digitals (through our contact forms, project estimators, or direct communications via email and WhatsApp), we may collect personal and project information including your name, email address, phone number, company name, and project specifications.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              2. How We Use Your Information
            </h2>
            <p>
              The information you provide is strictly utilized to understand your technical requirements, prepare formal project proposals, conduct engineering milestones, and communicate development updates. We do not sell, rent, or trade your personal data to third-party marketers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              3. Client Confidentiality &amp; NDA
            </h2>
            <p>
              We treat all client proprietary business models, source code, data schemas, and trade secrets with strict confidentiality. We execute mutual Non-Disclosure Agreements (NDAs) prior to commencing architecture discovery sprints upon request.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              4. Data Security &amp; Retention
            </h2>
            <p>
              We implement industry-standard encryption, SSL protocols, and access controls to safeguard your data. Client project credentials, API keys, and server access tokens are encrypted and deleted upon project completion and handover.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              5. Contact Us Regarding Your Privacy
            </h2>
            <p>
              If you have any questions or wish to request data removal, please contact our data privacy officer at{" "}
              <a href="mailto:ryqonservices@gmail.com" className="text-blue-600 dark:text-blue-400 underline">
                ryqonservices@gmail.com
              </a>{" "}
              or via mail at Ryqon Digitals, Hyderabad, Telangana, India.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
