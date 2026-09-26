"use client";

import React, { useState } from "react";
import { Check, Clock, MessageSquare, Compass, ShieldCheck, Sparkles } from "lucide-react";

export default function CommitmentSection() {
  const [activeView, setActiveView] = useState<"commitments" | "comparison">("commitments");

  const commitments = [
    {
      title: "Clear timelines & scope",
      desc: "You'll know exactly what we're building, when it will be delivered, and what the milestones look like.",
      icon: Clock,
      badge: "Clarity",
    },
    {
      title: "Honest recommendations",
      desc: "We won't just say yes. We'll provide expert insights on what's best for your product and business goals.",
      icon: Compass,
      badge: "Integrity",
    },
    {
      title: "Direct communication",
      desc: "No middle managers or technical jargon. Speak directly with the experts building your solution.",
      icon: MessageSquare,
      badge: "Direct Access",
    },
    {
      title: "No unnecessary upselling",
      desc: "We focus on what you actually need to succeed, not on padding our invoices with features you won't use.",
      icon: ShieldCheck,
      badge: "Efficiency",
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative bg-white" id="work">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header with Original Data */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            <span>Our Commitment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            What You Can <span className="text-blue-600">Expect</span>
          </h2>
          <p className="text-sm sm:text-base font-normal text-slate-600 leading-relaxed">
            Working with Ryqon Digital Solutions means clarity, communication, and consistency from day one.
          </p>
        </div>

        {/* View Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-full bg-slate-100 border border-slate-200">
            <button
              onClick={() => setActiveView("commitments")}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                activeView === "commitments"
                  ? "bg-white text-blue-600 font-semibold shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Our Commitments
            </button>
            <button
              onClick={() => setActiveView("comparison")}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                activeView === "comparison"
                  ? "bg-white text-blue-600 font-semibold shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              How We Compare
            </button>
          </div>
        </div>

        {activeView === "commitments" ? (
          <div className="grid grid-cols-2 gap-3 sm:gap-5 mb-8">
            {commitments.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="card-template-white p-3.5 sm:p-7 rounded-2xl sm:rounded-3xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2.5 sm:mb-4">
                      <div className="h-8 w-8 sm:h-11 sm:w-11 rounded-xl sm:rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <span className="text-[9px] sm:text-[10px] uppercase tracking-wider font-bold text-blue-600 bg-blue-50/70 px-2 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    </div>
                    <h3 className="text-xs sm:text-lg font-bold text-slate-900 mb-1 sm:mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-sm text-slate-500 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-blue-100 shadow-sm overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-blue-50/60 text-[11px] uppercase tracking-wider text-slate-600 border-b border-blue-100">
                  <tr>
                    <th className="py-4 px-6 font-bold">Operating Dimension</th>
                    <th className="py-4 px-6 font-bold text-blue-600">Ryqon Digitals</th>
                    <th className="py-4 px-6 font-medium text-slate-400">Traditional Agency</th>
                    <th className="py-4 px-6 font-medium text-slate-400">Freelancers</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-normal">
                  <tr>
                    <td className="py-4 px-6 text-slate-900 font-semibold">Communication</td>
                    <td className="py-4 px-6 text-slate-900 font-medium flex items-center gap-2">
                      <Check className="h-4 w-4 text-blue-600 stroke-[2.5]" /> Direct Senior Team
                    </td>
                    <td className="py-4 px-6 text-slate-500">Junior account managers</td>
                    <td className="py-4 px-6 text-slate-500">Unpredictable availability</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-slate-900 font-semibold">Engineering + Growth</td>
                    <td className="py-4 px-6 text-slate-900 font-medium flex items-center gap-2">
                      <Check className="h-4 w-4 text-blue-600 stroke-[2.5]" /> Fully Integrated
                    </td>
                    <td className="py-4 px-6 text-slate-500">Siloed departments</td>
                    <td className="py-4 px-6 text-slate-500">Rarely handles both</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-slate-900 font-semibold">Code &amp; Speed Quality</td>
                    <td className="py-4 px-6 text-slate-900 font-medium flex items-center gap-2">
                      <Check className="h-4 w-4 text-blue-600 stroke-[2.5]" /> Next.js 15 &amp; 95+ Vitals
                    </td>
                    <td className="py-4 px-6 text-slate-500">Heavy WordPress / Outsourced</td>
                    <td className="py-4 px-6 text-slate-500">Varies widely</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-slate-900 font-semibold">Pricing Model</td>
                    <td className="py-4 px-6 text-slate-900 font-medium flex items-center gap-2">
                      <Check className="h-4 w-4 text-blue-600 stroke-[2.5]" /> Fixed Milestone Sprints
                    </td>
                    <td className="py-4 px-6 text-slate-500">Hidden markups &amp; change fees</td>
                    <td className="py-4 px-6 text-slate-500">Uncapped hourly risk</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
