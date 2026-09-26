"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  TrendingUp, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Sparkles, 
  Target, 
  Users, 
  Search, 
  BarChart3,
  CheckCircle2
} from "lucide-react";

interface Slide {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  metrics: { label: string; value: string }[];
  badges: string[];
  ctaText: string;
  ctaLink: string;
}

export default function MarketingShowcase() {
  const slides: Slide[] = [
    {
      id: "performance-ads",
      tag: "Performance Marketing",
      title: "High-ROAS Meta & Google Ads Campaigns",
      subtitle: "Predictable, Scalable Customer Acquisition",
      description:
        "We engineer end-to-end paid advertising funnels across Instagram, Facebook, and Google Search. Combining high-retention video creatives, automated Conversions API (CAPI) tracking, and daily bid tuning.",
      imageUrl:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      metrics: [
        { label: "Average Campaign ROAS", value: "3.8x" },
        { label: "Cost-Per-Acquisition Drop", value: "-44%" },
        { label: "Pipeline Value Generated", value: "₹14.2M+" },
      ],
      badges: ["Meta Business Partner", "Google Search Ads", "CAPI Tracking", "ROAS Optimization"],
      ctaText: "Scale Your Paid Advertising",
      ctaLink: "/#calculator",
    },
    {
      id: "social-viral",
      tag: "Social Media & Video",
      title: "High-Retention Short-Form & Organic Growth",
      subtitle: "Build Authority & Community Trust",
      description:
        "Consistent, studio-grade video reels, carousel frameworks, and brand storytelling that organically attract buyers and turn followers into lifelong customers.",
      imageUrl:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80",
      metrics: [
        { label: "Organic Monthly Views", value: "1.8M+" },
        { label: "Avg. Video Retention", value: "68%" },
        { label: "Direct Inquiry Surge", value: "+210%" },
      ],
      badges: ["Instagram Reels", "Content Calendars", "Brand Narrative", "Viral Hooks"],
      ctaText: "Explore Content Engines",
      ctaLink: "/services",
    },
    {
      id: "cro-conversion",
      tag: "Conversion Rate Optimization",
      title: "Data-Backed Landing Page Conversion Engines",
      subtitle: "Turn Existing Visitors Into Paying Clients",
      description:
        "We audit user behavior with heatmaps and user session recordings, eliminating drop-off friction points and optimizing copywriting to maximize lead capture rates.",
      imageUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      metrics: [
        { label: "Conversion Rate Uplift", value: "+140%" },
        { label: "Mobile Bounce Rate", value: "-35%" },
        { label: "Average Page Load Speed", value: "0.8s" },
      ],
      badges: ["A/B Split Testing", "Heatmap Auditing", "Micro-Interactions", "Sub-Second Speed"],
      ctaText: "Audit Your Conversion Funnel",
      ctaLink: "/#contact",
    },
    {
      id: "seo-search",
      tag: "Organic Search Dominance",
      title: "Technical SEO & High-Intent Keyword Rankings",
      subtitle: "Capture Ready-to-Buy Search Traffic",
      description:
        "Next-generation technical SEO architecture with JSON-LD schema, core web vitals optimization, and authoritative content clusters that secure top Google ranks.",
      imageUrl:
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80",
      metrics: [
        { label: "Organic Traffic Lift", value: "+480%" },
        { label: "Top 3 Google Keywords", value: "45+" },
        { label: "Core Web Vitals Score", value: "98/100" },
      ],
      badges: ["Schema.org Rich Snippets", "Google Search Console", "Domain Authority", "Zero Fluff Traffic"],
      ctaText: "Rank on Page 1 Google",
      ctaLink: "/#calculator",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const currentSlide = slides[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-slate-50/70 dark:bg-slate-900/30 border-y border-slate-200/80 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-cool-blue text-xs font-semibold uppercase tracking-wider mb-3">
              <TrendingUp className="h-3.5 w-3.5" />
              <span>Digital Marketing Studio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 dark:text-white">
              Data-driven campaigns that <br className="hidden sm:inline" />
              <span className="text-gradient-cool font-normal">generate real revenue</span>
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="p-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-sm"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="p-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-sm"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Quick Navigation Tabs for the Slideshow */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
          {slides.map((s, idx) => {
            const isActive = currentIndex === idx;
            return (
              <button
                key={s.id}
                onClick={() => setCurrentIndex(idx)}
                className={`p-3 rounded-xl text-left border transition-all duration-300 ${
                  isActive
                    ? "bg-white dark:bg-slate-800 border-blue-500 shadow-sm"
                    : "bg-white/60 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] font-semibold uppercase tracking-wider ${isActive ? "text-blue-600 dark:text-blue-400" : "text-slate-400"}`}>
                    0{idx + 1}
                  </span>
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
                  )}
                </div>
                <p className={`text-xs font-medium truncate ${isActive ? "text-slate-900 dark:text-white" : "text-slate-600 dark:text-slate-400"}`}>
                  {s.tag}
                </p>
              </button>
            );
          })}
        </div>

        {/* Main Slideshow Card Frame */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="card-cool overflow-hidden border border-slate-200/90 dark:border-slate-800 shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Content Side (7 cols) */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-cool-blue text-xs font-semibold mb-4">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>{currentSlide.tag}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-normal text-slate-900 dark:text-white mb-2 leading-tight">
                  {currentSlide.title}
                </h3>
                <p className="text-xs uppercase tracking-wider font-semibold text-blue-600 dark:text-blue-400 mb-5">
                  {currentSlide.subtitle}
                </p>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-8">
                  {currentSlide.description}
                </p>

                {/* Metrics Highlight Row */}
                <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 mb-8">
                  {currentSlide.metrics.map((metric, i) => (
                    <div key={i} className="text-center">
                      <p className="text-xl sm:text-2xl font-light text-slate-900 dark:text-white">
                        {metric.value}
                      </p>
                      <p className="text-[10px] font-medium text-slate-500 uppercase tracking-wider mt-0.5">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {currentSlide.badges.map((b) => (
                    <span
                      key={b}
                      className="px-2.5 py-1 rounded-lg text-xs font-normal bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <Link
                  href={currentSlide.ctaLink}
                  className="btn-cool-primary text-xs gap-2"
                >
                  <span>{currentSlide.ctaText}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>

                <span className="text-[11px] text-slate-400 font-normal">
                  Slide {currentIndex + 1} of {slides.length}
                </span>
              </div>
            </div>

            {/* Right Image Visual (5 cols) */}
            <div className="lg:col-span-5 relative min-h-[300px] sm:min-h-[420px] bg-slate-900 overflow-hidden group">
              <Image
                src={currentSlide.imageUrl}
                alt={currentSlide.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              
              {/* Floating Live Indicator Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-white/20 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-semibold text-slate-900 dark:text-white">
                      Live Campaign Management
                    </span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 font-medium">
                    Verified ROI
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
