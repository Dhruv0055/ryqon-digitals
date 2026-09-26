"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  Zap, 
  BarChart3,
  Check,
  Smartphone,
  Layers
} from "lucide-react";

export default function Hero() {
  const rotatingWords = ["Grow Faster!", "Scale Higher!", "Convert More!", "Ship Sooner!"];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  return (
    <section className="relative isolate pt-32 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-[#f7fafe]">
      
      {/* Ambient light wash */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 -z-10 h-[520px] w-[860px] bg-gradient-to-b from-blue-100/40 via-sky-100/20 to-transparent blur-3xl rounded-full pointer-events-none" />



      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Subtitle & Buttons with Original Data */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 text-left"
          >
            
            {/* Playful Badge with Hand-Drawn Eye Doodle positioned cleanly above */}
            <div className="relative inline-block mt-5 mb-6">
              
              {/* Playful decorative vector eye doodle with gentle floating motion */}
              <motion.div 
                animate={{ 
                  y: [0, -4, 0],
                  rotate: [0, 3, -2, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute -top-10 left-5 w-14 h-8 pointer-events-none opacity-80"
              >
                <svg viewBox="0 0 60 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path 
                    d="M8 18 C 18 5, 42 5, 52 18 C 42 31, 18 31, 8 18 Z" 
                    stroke="#0062ff" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeDasharray="4 4"
                  />
                  <circle cx="30" cy="18" r="3" fill="#0062ff" />
                </svg>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold shadow-xs"
              >
                <Sparkles className="w-4 h-4 text-blue-600 animate-spin" style={{ animationDuration: '6s' }} />
                <span>Web, Mobile Apps &amp; Marketing Solutions</span>
              </motion.div>
            </div>

            {/* Main Headline with Original Ryqon Data + Template Brush Underline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12] mb-6">
              Build Better. <br className="hidden sm:inline" />
              Market Smarter.{" "}
              <span className="inline-block relative overflow-hidden align-bottom">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingWords[wordIndex]}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="accent-brush-underline text-blue-600 inline-block pb-1"
                  >
                    {rotatingWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            {/* Original Ryqon Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl mb-8 leading-relaxed font-normal">
              We Build Products That Get Results &mdash; From Web &amp; Mobile Applications to Marketing Growth. Helping brands, startups, and small businesses scale in the digital age.
            </p>

            {/* Template Pill Buttons - Placed next to each other on mobile */}
            <div className="flex flex-row items-center gap-3 sm:gap-4 mb-10">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="flex-1 sm:flex-initial">
                <Link
                  href="/#contact"
                  className="btn-pill-dark gap-1.5 sm:gap-2 shadow-lg w-full sm:w-auto justify-center text-center text-xs sm:text-sm py-3 px-4 sm:px-8"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="flex-1 sm:flex-initial">
                <Link
                  href="/#work"
                  className="btn-pill-white gap-1.5 sm:gap-2 w-full sm:w-auto justify-center text-center text-xs sm:text-sm py-3 px-4 sm:px-8"
                >
                  <span>What to Expect</span>
                </Link>
              </motion.div>
            </div>

            {/* Trust Points with Clean Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-6 text-xs sm:text-sm text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-600 stroke-[2.5] shrink-0" />
                <span>Web &amp; Mobile Apps</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-600 stroke-[2.5] shrink-0" />
                <span>Performance Marketing</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-600 stroke-[2.5] shrink-0" />
                <span>Cloud &amp; SLA Support</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Template Mobile / Growth Mockup with Floating Motion Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative px-2 sm:px-0"
          >
            
            {/* Floating Badge Left with smooth floating motion */}
            <div className="flex absolute -left-2 sm:-left-6 top-10 sm:top-20 z-20 bg-white/95 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl shadow-xl border border-blue-100 items-center gap-2 sm:gap-3 animate-float-gentle">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-[10px] sm:text-xs text-slate-400 font-medium leading-tight">Verified Growth</p>
                <p className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">+3.8x Avg ROAS</p>
              </div>
            </div>

            {/* Floating Badge Right with smooth floating motion */}
            <div className="flex absolute -right-2 sm:-right-4 bottom-8 sm:bottom-14 z-20 bg-white/95 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl shadow-xl border border-blue-100 items-center gap-2 sm:gap-3 animate-float-delayed">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-[10px] sm:text-xs text-slate-400 font-medium leading-tight">Speed &amp; Performance</p>
                <p className="text-xs sm:text-sm font-bold text-emerald-600 leading-tight">Sub-Second Load</p>
              </div>
            </div>

            {/* Device Frame */}
            <div className="relative w-full max-w-[290px] sm:max-w-[340px] bg-slate-900 rounded-[2.2rem] sm:rounded-[2.5rem] p-2.5 sm:p-3 shadow-2xl border-4 border-slate-800">
              
              {/* Speaker */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-800 rounded-full z-30" />

              {/* Screen */}
              <div className="bg-white rounded-[2rem] pt-8 pb-6 px-4 overflow-hidden">
                
                <div className="flex items-center justify-between mb-4 px-1">
                  <div>
                    <p className="text-[11px] text-slate-400 font-medium">Digital Solutions</p>
                    <p className="text-sm font-bold text-slate-900">Ryqon Digitals</p>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-semibold">
                    RD
                  </div>
                </div>

                {/* Banner Card inside Phone */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-4 text-white mb-4 shadow-md">
                  <div className="flex items-center justify-between text-xs text-blue-100 mb-2">
                    <span>Active Services</span>
                    <span className="flex items-center gap-1.5 bg-white/20 px-2 py-0.5 rounded-full text-[10px] font-semibold">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                      </span>
                      <span>ONLINE</span>
                    </span>
                  </div>
                  <p className="text-2xl font-extrabold tracking-tight">Full-Stack</p>
                  <p className="text-[11px] text-blue-100 mt-0.5 font-normal">Dev + Growth Synchronized</p>
                  
                  {/* Animated Visual Chart Bars */}
                  <div className="flex items-end gap-1.5 h-10 mt-3 pt-2">
                    {[16, 24, 20, 32, 28, 40].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 4 }}
                        animate={{ height: h }}
                        transition={{ 
                          duration: 0.8, 
                          delay: 0.3 + i * 0.1,
                          ease: "easeOut"
                        }}
                        className="flex-1 bg-white rounded-t"
                        style={{ opacity: 0.35 + (i * 0.13) }}
                      />
                    ))}
                  </div>
                </div>

                {/* Real Services Checklist inside Phone with hover effects */}
                <div className="space-y-2 mb-4">
                  <motion.div whileHover={{ x: 4 }} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100 transition-colors">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-xs">
                        <Layers className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-semibold text-slate-800">Web Development</span>
                    </div>
                    <span className="text-[11px] font-bold text-blue-600">Next.js 15</span>
                  </motion.div>

                  <motion.div whileHover={{ x: 4 }} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100 transition-colors">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs">
                        <Smartphone className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-semibold text-slate-800">Mobile Apps</span>
                    </div>
                    <span className="text-[11px] font-bold text-indigo-600">Flutter / RN</span>
                  </motion.div>

                  <motion.div whileHover={{ x: 4 }} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100 transition-colors">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs">
                        <BarChart3 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-semibold text-slate-800">Paid Ads &amp; Leads</span>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-600">High ROAS</span>
                  </motion.div>
                </div>

                <Link 
                  href="/#contact" 
                  className="w-full py-2.5 bg-slate-900 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm hover:bg-black transition-colors"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>

              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
