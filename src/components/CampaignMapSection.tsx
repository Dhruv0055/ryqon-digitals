"use client";

import React, { useState } from "react";
import { Search, MapPin, Target, Calendar, ArrowRight, Sparkles } from "lucide-react";

export default function CampaignMapSection() {
  const [selectedMarket, setSelectedMarket] = useState("UAE & Middle East");
  const [selectedGoal, setSelectedGoal] = useState("Lead Generation & Scale");

  const markets = [
    { name: "UAE & Middle East", clients: "45+ Active Campaigns", metric: "+185% Inquiries", top: "42%", left: "62%" },
    { name: "North America (USA/CA)", clients: "60+ Campaigns", metric: "3.8x Avg ROAS", top: "35%", left: "22%" },
    { name: "India & South Asia", clients: "80+ Platforms", metric: "99.9% Uptime", top: "48%", left: "68%" },
    { name: "Europe (UK/DE)", clients: "30+ Campaigns", metric: "1.8M Reach", top: "30%", left: "50%" },
  ];

  return (
    <section className="py-20 sm:py-28 relative bg-[#f7fafe] border-y border-blue-100/70 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header matching Camplify "Destination You Need?" */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            <span>Global Campaign Footprint</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Markets You Need <span className="text-blue-600">To Dominate?</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Explore active client campaigns across international territories. We scale your customer acquisition wherever your audience lives.
          </p>
        </div>

        {/* Interactive Search Bar matching Camplify layout */}
        <div className="max-w-4xl mx-auto bg-white rounded-full p-2.5 sm:p-3.5 shadow-xl border border-blue-100 mb-16 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Market Selection */}
          <div className="flex items-center gap-3 px-4 w-full md:w-auto">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider font-bold text-slate-400">Target Region</p>
              <select
                value={selectedMarket}
                onChange={(e) => setSelectedMarket(e.target.value)}
                className="text-sm font-bold text-slate-900 bg-transparent focus:outline-none cursor-pointer"
              >
                {markets.map((m) => (
                  <option key={m.name} value={m.name}>{m.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="hidden md:block w-px h-10 bg-slate-200" />

          {/* Goal Selection */}
          <div className="flex items-center gap-3 px-4 w-full md:w-auto">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider font-bold text-slate-400">Campaign Objective</p>
              <select
                value={selectedGoal}
                onChange={(e) => setSelectedGoal(e.target.value)}
                className="text-sm font-bold text-slate-900 bg-transparent focus:outline-none cursor-pointer"
              >
                <option value="Lead Generation & Scale">High-Ticket Lead Generation</option>
                <option value="DTC E-Commerce ROAS">DTC E-Commerce Scaling</option>
                <option value="Next.js Web Application">Full-Stack SaaS Platform</option>
                <option value="Mobile App Downloads">Mobile App Acquisition</option>
              </select>
            </div>
          </div>

          {/* Dark Search Action Button */}
          <a
            href="#contact"
            className="w-full md:w-12 h-12 rounded-full bg-slate-900 hover:bg-black text-white flex items-center justify-center shrink-0 shadow-md transition-all gap-2"
            aria-label="Search Strategy"
          >
            <Search className="w-5 h-5" />
            <span className="md:hidden text-sm font-medium">Explore Strategy</span>
          </a>

        </div>

        {/* Stylized World Map with Location Pins matching template */}
        <div className="relative w-full max-w-5xl mx-auto aspect-[2.1/1] bg-white rounded-3xl border border-blue-100 p-6 shadow-sm overflow-hidden flex items-center justify-center">
          
          {/* Subtle World Map SVG background */}
          <svg className="w-full h-full opacity-25" viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="200" cy="180" r="90" fill="#0062ff" fillOpacity="0.2" />
            <circle cx="280" cy="300" r="70" fill="#0062ff" fillOpacity="0.15" />
            <circle cx="500" cy="160" r="80" fill="#0062ff" fillOpacity="0.2" />
            <circle cx="680" cy="220" r="110" fill="#0062ff" fillOpacity="0.2" />
            <circle cx="850" cy="320" r="80" fill="#0062ff" fillOpacity="0.15" />
            
            {/* Soft grid lines */}
            <path d="M50 250 H950 M500 50 V450" stroke="#0062ff" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
          </svg>

          {/* Floating Location Pin Badges */}
          {markets.map((m, idx) => {
            const isSelected = selectedMarket === m.name;
            return (
              <div
                key={idx}
                onClick={() => setSelectedMarket(m.name)}
                style={{ top: m.top, left: m.left }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 z-10 ${
                  isSelected ? "scale-110" : "hover:scale-105"
                }`}
              >
                <div className={`flex items-center gap-2 px-3.5 py-2 rounded-full shadow-lg border backdrop-blur-md ${
                  isSelected 
                    ? "bg-slate-900 text-white border-slate-800" 
                    : "bg-white text-slate-800 border-blue-200"
                }`}>
                  <div className={`w-2.5 h-2.5 rounded-full ${isSelected ? "bg-blue-400 animate-ping" : "bg-blue-600"}`} />
                  <span className="text-xs font-bold whitespace-nowrap">{m.name.split(" ")[0]}</span>
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                    isSelected ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-700"
                  }`}>
                    {m.metric}
                  </span>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
