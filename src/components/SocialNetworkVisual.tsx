"use client";

import React from "react";
import Link from "next/link";
import { Check, ArrowRight, Sparkles, TrendingUp, Users, Megaphone } from "lucide-react";
import { InstagramIcon, FacebookIcon, LinkedinIcon } from "./SocialIcons";

export default function SocialNetworkVisual() {
  const benefits = [
    "Full-funnel Meta & Google Ads management engineered for high ROAS",
    "Viral short-form Reels & TikTok production that compounds organic reach",
    "Sub-second Next.js 15 web applications with 95+ Core Web Vitals",
    "Direct async Slack / WhatsApp communication with senior architects",
  ];

  return (
    <section className="py-20 sm:py-28 relative bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Deliverables */}
          <div className="lg:col-span-6 text-left">
            
            {/* Sketchy doodle mark top */}
            <div className="flex items-center gap-1 mb-2 text-blue-600">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 14C6 8 10 4 16 3" stroke="#0062ff" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M7 18C10 13 15 9 20 8" stroke="#0062ff" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6">
              Service <br />
              You Need
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8 max-w-lg">
              We combine creative social storytelling with performance algorithms to scale your customer base across all major discovery channels.
            </p>

            {/* Checklist */}
            <div className="space-y-3.5 mb-10">
              {benefits.map((b, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-700 font-medium">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{b}</span>
                </div>
              ))}
            </div>

            <Link
              href="#contact"
              className="btn-pill-dark gap-2 shadow-lg"
            >
              <span>Explore All Capabilities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

          </div>

          {/* Right Column: Animated Social Growth Orb (Exact Camplify Illustration) */}
          <div className="lg:col-span-6 flex justify-center relative">
            
            {/* Soft Ambient Radial Wash */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/40 via-sky-50/50 to-transparent blur-3xl rounded-full pointer-events-none" />

            {/* Orbit Container */}
            <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full border border-blue-100/80 flex items-center justify-center">
              
              {/* Inner Orbit Circle */}
              <div className="absolute w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] rounded-full border border-dashed border-blue-200" />

              {/* Central Hero Avatar Badge */}
              <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 shadow-2xl flex flex-col items-center justify-center text-white border-4 border-white">
                <span className="text-2xl sm:text-3xl font-extrabold">RD</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-200 mt-1">Growth Hub</span>
              </div>

              {/* Floating Social Satellite 1: Instagram (Top Left) */}
              <div className="absolute top-4 left-10 bg-white p-3 rounded-2xl shadow-xl border border-blue-100 flex items-center gap-2.5 animate-bounce [animation-duration:5s]">
                <div className="w-8 h-8 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center">
                  <InstagramIcon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Instagram Reels</p>
                  <p className="text-xs font-extrabold text-slate-900">+1.8M Reach</p>
                </div>
              </div>

              {/* Floating Social Satellite 2: Meta Ads (Top Right) */}
              <div className="absolute top-8 right-6 bg-white p-3 rounded-2xl shadow-xl border border-blue-100 flex items-center gap-2.5 animate-bounce [animation-duration:4s]">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <FacebookIcon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Meta Ads</p>
                  <p className="text-xs font-extrabold text-slate-900">3.8x ROAS</p>
                </div>
              </div>

              {/* Floating Social Satellite 3: LinkedIn (Bottom Left) */}
              <div className="absolute bottom-8 left-6 bg-white p-3 rounded-2xl shadow-xl border border-blue-100 flex items-center gap-2.5 animate-bounce [animation-duration:6s]">
                <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">B2B Network</p>
                  <p className="text-xs font-extrabold text-slate-900">High-Ticket</p>
                </div>
              </div>

              {/* Floating Social Satellite 4: Google (Bottom Right) */}
              <div className="absolute bottom-6 right-8 bg-white p-3 rounded-2xl shadow-xl border border-blue-100 flex items-center gap-2.5 animate-bounce [animation-duration:4.5s]">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Google Search</p>
                  <p className="text-xs font-extrabold text-slate-900">#1 Ranking</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
