"use client";

import React from "react";
import { Rocket, Users, Building2, CheckCircle2, Sparkles } from "lucide-react";

export default function PartnershipSection() {
  const audiences = [
    {
      title: "Startups",
      desc: "New ventures looking to build their first MVP or scale their product fast.",
      icon: Rocket,
      colorClass: "text-blue-600 bg-blue-50 border-blue-100",
    },
    {
      title: "Small Businesses",
      desc: "Established teams needing a professional digital presence or custom software tools.",
      icon: Users,
      colorClass: "text-blue-600 bg-blue-50 border-blue-100",
    },
    {
      title: "Growing Brands",
      desc: "Brands ready to optimize their marketing funnel and increase their digital footprint.",
      icon: Building2,
      colorClass: "text-blue-600 bg-blue-50 border-blue-100",
    },
  ];

  const criteria = [
    "You want a team that understands business goals, not just code.",
    "You need a partner who can handle both Dev and Marketing.",
    "You value clean design and high-performance applications.",
    "You are ready to scale and need a reliable technical foundation.",
  ];

  return (
    <section className="py-20 sm:py-28 relative bg-[#f7fafe] border-t border-blue-100/70" id="who-we-work-with">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            <span>Partnership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Helping <span className="text-blue-600">Visionaries</span> Succeed
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Whether you&apos;re validating an MVP, upgrading your core software, or launching customer acquisition funnels, we adapt to your growth stage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* 3 Categories Left (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {audiences.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl border border-blue-100 p-6 sm:p-7 shadow-xs hover:border-blue-300 transition-all flex items-start gap-5"
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border ${item.colorClass}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Checklist Box (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-blue-100 p-7 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
                <span>Compatibility</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                This is right for you if...
              </h3>

              <ul className="space-y-4">
                {criteria.map((text, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 mt-8 border-t border-slate-100">
              <a
                href="/#contact"
                className="btn-pill-dark w-full py-3 text-xs justify-center"
              >
                <span>Check Project Fit</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
