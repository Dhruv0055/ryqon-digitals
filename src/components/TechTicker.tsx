"use client";

import React from "react";
import { 
  Sparkles, 
  TrendingUp, 
  Layers, 
  ShieldCheck, 
  Smartphone, 
  Cpu, 
  Globe, 
  Zap 
} from "lucide-react";

import { motion } from "framer-motion";

export default function TechTicker() {
  const tickerItems = [
    { label: "Next.js 15 App Architecture", icon: Layers, tag: "Web" },
    { label: "Meta Ads 3.8x Avg ROAS", icon: TrendingUp, tag: "Growth" },
    { label: "Flutter & React Native Apps", icon: Smartphone, tag: "Mobile" },
    { label: "Google Ads Premier Partner", icon: Zap, tag: "PPC" },
    { label: "AWS & Vercel Cloud DevOps", icon: Cpu, tag: "Cloud" },
    { label: "GA4 & Conversion Rate Optimization", icon: Globe, tag: "Analytics" },
    { label: "99.95% Server Uptime SLA", icon: ShieldCheck, tag: "SLA" },
    { label: "Sub-Second Core Web Vitals", icon: Sparkles, tag: "Speed" },
  ];

  const duplicatedItems = [...tickerItems, ...tickerItems];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="py-6 bg-white/70 backdrop-blur-xs border-y border-blue-100/60 overflow-hidden select-none"
    >
      <div className="animate-marquee flex items-center gap-4">
        {duplicatedItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-50 border border-slate-200/70 text-slate-700 text-xs font-semibold shrink-0 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-colors"
            >
              <Icon className="w-3.5 h-3.5 text-blue-600" />
              <span>{item.label}</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100/70 text-blue-700 font-bold uppercase tracking-wider">
                {item.tag}
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
