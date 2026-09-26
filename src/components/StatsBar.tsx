"use client";

import React from "react";
import { Award, TrendingUp, Users, Star } from "lucide-react";

interface StatItem {
  value: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
}

const stats: StatItem[] = [
  {
    value: "10+",
    label: "Years of Experience",
    sublabel: "Engineering & Digital Growth",
    icon: <Award className="w-5 h-5 text-blue-200" />,
  },
  {
    value: "150+",
    label: "Growth Campaigns",
    sublabel: "Across SaaS, E-com & Services",
    icon: <TrendingUp className="w-5 h-5 text-blue-200" />,
  },
  {
    value: "98%",
    label: "Client Retention",
    sublabel: "Verified Long-term Partners",
    icon: <Users className="w-5 h-5 text-blue-200" />,
  },
  {
    value: "4.9",
    label: "Overall Rating",
    sublabel: "★★★★★ Google & Clutch",
    icon: <Star className="w-5 h-5 text-amber-300 fill-amber-300" />,
  },
];

export default function StatsBar() {
  return (
    <section className="relative z-10 -mt-6 sm:-mt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="stats-banner-blue rounded-2xl sm:rounded-3xl py-6 sm:py-8 px-4 sm:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-0 md:divide-x md:divide-white/20">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center justify-center p-2.5 sm:p-4 md:px-6 rounded-xl bg-white/5 md:bg-transparent"
            >
              <div className="flex items-baseline gap-1.5 mb-1">
                <span className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                  {stat.value}
                </span>
              </div>
              <p className="text-xs sm:text-base font-semibold text-white leading-tight">
                {stat.label}
              </p>
              <p className="text-[10px] sm:text-xs text-blue-100/80 mt-0.5 leading-tight">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
