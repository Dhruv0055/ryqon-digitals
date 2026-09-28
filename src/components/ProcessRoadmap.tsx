"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Lightbulb, Map, CodeXml, TrendingUp, Sparkles } from "lucide-react";

export default function ProcessRoadmap() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      number: "01",
      name: "Understand",
      title: "Business Goals, Challenges & Audience",
      desc: "We dive deep into your business goals, challenges, and target audience to build a solid foundation.",
      icon: Lightbulb,
      deliverables: [
        "In-depth discovery & audience research",
        "Technical requirements & feasibility check",
        "Competitor analysis & value proposition",
        "Clear scope and milestone agreement",
      ],
      timeframe: "Phase 01",
    },
    {
      number: "02",
      name: "Plan",
      title: "Roadmap, Architecture & Strategy",
      desc: "We create a comprehensive roadmap and strategy, ensuring every step is aligned with your objectives.",
      icon: Map,
      deliverables: [
        "High-fidelity interactive Figma wireframes",
        "Database schema and API architecture",
        "Multi-channel marketing funnel strategy",
        "Weekly review and sign-off checkpoints",
      ],
      timeframe: "Phase 02",
    },
    {
      number: "03",
      name: "Build",
      title: "Clean Code, Modern Design & Implementation",
      desc: "Our team brings the vision to life with clean code, modern design, and robust implementation.",
      icon: CodeXml,
      deliverables: [
        "Production-grade Next.js & React engineering",
        "Native Flutter / React Native mobile apps",
        "Strict 95+ Core Web Vitals speed tuning",
        "Weekly staging link demo walkthroughs",
      ],
      timeframe: "Phase 03",
    },
    {
      number: "04",
      name: "Grow",
      title: "Launch, Continuous Monitoring & Optimization",
      desc: "We launch, monitor, and continuously optimise your product or campaign to drive real results.",
      icon: TrendingUp,
      deliverables: [
        "Cloud hosting deployment (AWS / Vercel / Stores)",
        "Search Console, sitemap & GA4 tracking setup",
        "Targeted Meta & Google Ads optimization",
        "Complimentary 30-day post-launch warranty",
      ],
      timeframe: "Phase 04",
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative bg-[#f7fafe] border-t border-blue-100/70" id="process">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header with Original Data */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            <span>Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            From Concept to <span className="text-blue-600">Growth</span>
          </h2>
          <p className="text-sm sm:text-base font-normal text-slate-600 leading-relaxed">
            Our structured 4-step engineering and growth model ensures momentum, transparency, and dependable outcomes.
          </p>
        </motion.div>

        {/* Phase Selector Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 mb-8"
        >
          {steps.map((step, idx) => {
            const isCurrent = activeStep === idx;
            const Icon = step.icon;
            return (
              <button
                key={step.number}
                type="button"
                suppressHydrationWarning
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  isCurrent
                    ? "bg-white border-2 border-blue-600 shadow-md ring-0"
                    : "bg-white/80 border-slate-200 hover:border-blue-300"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm ${
                    isCurrent ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600"
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className={`text-[11px] font-bold ${isCurrent ? "text-blue-600" : "text-slate-400"}`}>
                    Step {step.number}
                  </span>
                </div>
                <p className={`text-base font-bold ${isCurrent ? "text-slate-900" : "text-slate-700"}`}>
                  {step.name}
                </p>
              </button>
            );
          })}
        </motion.div>

        {/* Active Phase Card with smooth step transition */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, delay: 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="bg-white rounded-3xl border border-blue-100 p-6 sm:p-10 shadow-sm overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs uppercase tracking-wider font-bold text-blue-600">
                    Step {steps[activeStep].number} &bull; {steps[activeStep].name}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                  {steps[activeStep].title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-8">
                  {steps[activeStep].desc}
                </p>

                <div>
                  <p className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-3">
                    Key Deliverables
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {steps[activeStep].deliverables.map((del, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                        <Check className="h-4 w-4 text-blue-600 stroke-[2.5] shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-2xl bg-blue-50/70 border border-blue-100 space-y-4">
                <div>
                  <p className="text-[10px] uppercase tracking-wider font-bold text-blue-700">
                    Sprint Milestone
                  </p>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    Direct Client Review &amp; Approval
                  </p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-wider font-bold text-blue-700">
                    Client Communication
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 font-normal mt-1 leading-relaxed">
                    Direct async updates via Slack/WhatsApp plus weekly recorded video walkthroughs.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    suppressHydrationWarning
                    onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                    className="btn-pill-dark w-full py-2.5 text-xs justify-center gap-2"
                  >
                    <span>{activeStep === steps.length - 1 ? "Return to Understand (01)" : `Next: ${steps[activeStep + 1].name} (0${activeStep + 2})`}</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
