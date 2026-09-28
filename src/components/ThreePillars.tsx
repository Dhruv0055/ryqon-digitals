"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Code2, Zap } from "lucide-react";

export default function ThreePillars() {
  const pillars = [
    {
      icon: Globe,
      iconBg: "bg-blue-50 text-blue-600 border-blue-200/80 group-hover:bg-blue-600 group-hover:text-white",
      tag: "GLOBAL ACQUISITION",
      title: "Lot Of Channels",
      desc: "We deploy precision Meta Ads, Google Search, and TikTok campaigns across 15+ countries to capture high-intent buyers.",
    },
    {
      icon: Code2,
      iconBg: "bg-indigo-50 text-indigo-600 border-indigo-200/80 group-hover:bg-indigo-600 group-hover:text-white",
      tag: "FULL-STACK ENGINEERING",
      title: "Best Growth Guide",
      desc: "Our senior engineers build sub-second Next.js 15 platforms, Flutter mobile apps, and robust cloud APIs from day one.",
    },
    {
      icon: Zap,
      iconBg: "bg-amber-50 text-amber-600 border-amber-200/80 group-hover:bg-amber-500 group-hover:text-white",
      tag: "FRICTIONLESS CRO",
      title: "Easy Conversions",
      desc: "With an easy, safe, and lightning-fast checkout flow, your visitors convert into paying customers with zero drop-off.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative bg-white overflow-hidden" id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Title with Playful Doodle (Exact Camplify Style) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-left mb-16 relative"
        >
          
          {/* Sketchy accent lines top-left with subtle pulse */}
          <motion.div 
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-1 mb-2 text-blue-600"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 14C6 8 10 4 16 3" stroke="#0062ff" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M7 18C10 13 15 9 20 8" stroke="#0062ff" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            That The Way <br />
            To Scale!
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-normal mt-3 max-w-xl">
            Everything ambitious brands need to achieve compounding digital growth, engineered with precision.
          </p>
        </motion.div>

        {/* 3 Columns matching template - Clean cards on mobile with hover animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-8 lg:gap-12">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="flex flex-row md:flex-col items-start gap-4 md:gap-0 p-4 md:p-6 rounded-2xl bg-white md:bg-slate-50/40 border border-blue-100/80 md:border-slate-100 shadow-xs md:shadow-none hover:shadow-lg hover:shadow-blue-500/5 hover:border-blue-200 transition-all group"
              >
                {/* Modern Distinct Element Badge */}
                <motion.div 
                  whileHover={{ rotate: [0, -8, 8, 0], scale: 1.12 }}
                  transition={{ duration: 0.35 }}
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl border flex items-center justify-center shrink-0 md:mb-6 shadow-sm transition-all duration-300 ${p.iconBg}`}
                >
                  <Icon className="w-5 h-5 md:w-7 md:h-7 transition-transform duration-300 group-hover:scale-110" />
                </motion.div>

              <div className="flex-1">
                <span className="text-[10px] md:text-[11px] uppercase tracking-wider font-bold text-blue-600 mb-1 md:mb-2 block">
                  {p.tag}
                </span>

                <h3 className="text-base md:text-2xl font-bold text-slate-900 mb-1.5 md:mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                  {p.title}
                </h3>

                <p className="text-xs md:text-base text-slate-500 leading-relaxed font-normal">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
        </div>

      </div>
    </section>
  );
}
