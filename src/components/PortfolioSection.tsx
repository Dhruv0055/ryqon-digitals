"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowUpRight, 
  X, 
  Check, 
  Sparkles,
  TrendingUp
} from "lucide-react";

export interface Project {
  id: string;
  title: string;
  category: "marketing" | "ecommerce" | "web" | "enterprise";
  categoryLabel: string;
  shortDesc: string;
  fullDesc: string;
  challenge: string;
  solution: string;
  metricLabel: string;
  metricValue: string;
  imageUrl: string;
  technologies: string[];
  results: string[];
}

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "aurelia-jewelry",
      title: "Aurelia Luxury Jewelry",
      category: "ecommerce",
      categoryLabel: "DTC E-Commerce & Ads",
      shortDesc: "Luxury jewelry brand experience with editorial typography, collection curation, and direct WhatsApp concierge checkout.",
      fullDesc: "A bespoke digital storefront created for a luxury jewelry house emphasizing tactile visual aesthetics, high-resolution product photography, and frictionless customer inquiries.",
      challenge: "The brand struggled with slow page load times on mobile, poor imagery scaling, and high bounce rates on social traffic.",
      solution: "Engineered a Next.js 15 application utilizing dynamic image optimization, micro-interactions, responsive touch-friendly gallery drawers, and instant WhatsApp concierge ordering.",
      metricLabel: "Inquiry Growth",
      metricValue: "+185%",
      imageUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
      technologies: ["Next.js 15", "React 19", "Tailwind CSS", "Framer Motion", "Meta Ads"],
      results: [
        "1.1s Mobile Largest Contentful Paint (LCP)",
        "185% increase in high-ticket custom jewelry inquiries",
        "Over 65% of visitors browsing through more than 4 collection pages",
      ],
    },
    {
      id: "dubai-visa",
      title: "ATR Dubai Visa Platform",
      category: "enterprise",
      categoryLabel: "Travel Tech & Google Ads",
      shortDesc: "Comprehensive UAE visa consultancy portal with online multi-nationality application flow and live document tracking.",
      fullDesc: "A secure digital workflow for international travelers applying for tourist, transit, and business visas to the United Arab Emirates with multi-currency support.",
      challenge: "Manual paperwork and unstructured phone inquiries were overwhelming visa counselors and causing client drop-offs.",
      solution: "Created an intuitive 3-step online application wizard with document upload validation, automated reference ID tracking, and real-time email/SMS alerts.",
      metricLabel: "Visas Handled",
      metricValue: "10,000+",
      imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
      technologies: ["Next.js", "React", "Node.js", "Tailwind CSS", "Google Search Ads"],
      results: [
        "Over 10,000 successful visa applications routed digitally",
        "70% decrease in manual inquiry processing time",
        "Top 3 Google ranking in Hyderabad for UAE visa consultancy terms",
      ],
    },
    {
      id: "brewora-coffee",
      title: "Brewora Artisanal Coffee",
      category: "ecommerce",
      categoryLabel: "Beverage DTC & Funnels",
      shortDesc: "Specialty coffee roastery website featuring origins story, interactive grind guide, and recurring subscription funnel.",
      fullDesc: "A modern DTC product platform tailored to coffee connoisseurs that brings the craft roasting process online with rich visual storytelling and roast profiles.",
      challenge: "Educating buyers on roast varieties and bean origins without overwhelming the UI with text walls.",
      solution: "Designed an interactive flavor-wheel guide, custom product filtering by roast type, and clean subscription packaging options.",
      metricLabel: "Cart Completion",
      metricValue: "+140%",
      imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
      technologies: ["Next.js", "Tailwind CSS", "Stripe API", "Meta Ads", "Mobile First"],
      results: [
        "140% boost in subscription checkout completions",
        "Sub-1 second page transitions across all devices",
        "Ranked #1 for regional specialty whole bean keywords",
      ],
    },
    {
      id: "vortex-ecommerce",
      title: "Vortex Multi-Category E-Commerce",
      category: "web",
      categoryLabel: "Web Platform & CRO",
      shortDesc: "High-concurrency e-commerce platform with real-time inventory management, rapid search, and smooth checkout.",
      fullDesc: "Engineered for speed and scale, Vortex handles thousands of dynamic SKU items with instant client-side filtering, cart sync, and order status updates.",
      challenge: "Handling complex product variant matrices and instant search without page freezes or slow database lookups.",
      solution: "Implemented optimistic UI updates, debounced search index caching, and lightweight responsive checkout workflows.",
      metricLabel: "Load Speed",
      metricValue: "0.8s",
      imageUrl: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Tailwind CSS", "Node.js REST API", "Redis Caching", "Responsive UI"],
      results: [
        "Average page load speed kept strictly under 850 milliseconds",
        "Near-zero checkout abandonment due to technical friction",
        "Seamless performance during flash promotion spikes",
      ],
    },
    {
      id: "interview-ninja",
      title: "Interview Ninja AI Platform",
      category: "web",
      categoryLabel: "AI SaaS & Growth",
      shortDesc: "Intelligent mock interview practice platform delivering real-time voice feedback, question banks, and progress metrics.",
      fullDesc: "An AI-powered software engineer and product manager preparation portal where users practice technical and behavioral prompts with live evaluation scoring.",
      challenge: "Providing instant, context-aware AI critiques while keeping user latency minimal.",
      solution: "Integrated streamed LLM responses, clean audio visualizer waveforms, and domain-specific scoring rubrics with historical analytics.",
      metricLabel: "Candidate Accuracy",
      metricValue: "98.4%",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "OpenAI API", "Speech-to-Text", "Tailwind CSS", "Node.js"],
      results: [
        "Over 25,000 interview questions simulated",
        "Real-time scoring delivered in under 1.4 seconds",
        "94% user retention through multi-day practice streaks",
      ],
    },
    {
      id: "avocado-export",
      title: "ATR Avocado Global Export",
      category: "enterprise",
      categoryLabel: "International Trade & SEO",
      shortDesc: "B2B enterprise corporate presence connecting agricultural avocado orchards with global supermarket importers.",
      fullDesc: "A high-credibility export portal designed to convey international quality certifications, cold-chain logistics specs, and bulk shipment container orders.",
      challenge: "Building trust with overseas procurement managers across Europe and the Middle East.",
      solution: "Structured corporate portal with verified phytosanitary certification documents, farm-to-freight logistics timelines, and dedicated RFQ bidding forms.",
      metricLabel: "B2B Volume",
      metricValue: "4.8x",
      imageUrl: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Corporate SEO", "Multilingual"],
      results: [
        "Secured wholesale distributor contracts in 4 international markets",
        "100% mobile-friendly for overseas buyers on 4G networks",
        "Comprehensive export product specifications catalog",
      ],
    },
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "all") return true;
    return p.category === activeFilter;
  });

  return (
    <section className="py-20 sm:py-28 relative bg-white" id="portfolio">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            <span>Proven Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Selected Client <span className="text-blue-600">Success Stories</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Real products and high-ROI digital marketing campaigns engineered for scale.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {[
            { id: "all", label: "All Engagements" },
            { id: "ecommerce", label: "E-Commerce" },
            { id: "web", label: "Web & SaaS" },
            { id: "enterprise", label: "Enterprise & Trade" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                activeFilter === tab.id
                  ? "bg-blue-600 text-white font-semibold shadow-sm"
                  : "bg-slate-100 text-slate-600 border border-slate-200 hover:border-blue-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="card-template-white overflow-hidden flex flex-col justify-between cursor-pointer group"
            >
              <div>
                {/* Visual Image Frame */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  {/* Floating Tags */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-white/95 text-slate-900 backdrop-blur-md shadow-sm">
                      {project.categoryLabel}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <span className="text-xs font-semibold drop-shadow-sm">
                      {project.metricLabel}
                    </span>
                    <span className="text-sm font-bold text-cyan-300 drop-shadow-sm">
                      {project.metricValue}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal mb-5 line-clamp-2">
                    {project.shortDesc}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md text-[10px] font-medium text-slate-600 bg-blue-50/70 border border-blue-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-0">
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-normal">View Case Study</span>
                  <span className="text-blue-600 font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>Details</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/50 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl border border-blue-100 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-6">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-blue-600">
                {selectedProject.categoryLabel}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-1 mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {selectedProject.fullDesc}
              </p>
            </div>

            {/* Metric Banner */}
            <div className="p-4 rounded-2xl stats-banner-blue text-white mb-6 flex items-center justify-between shadow-sm">
              <div>
                <p className="text-[10px] uppercase tracking-wider font-semibold text-blue-100">
                  Verified Result
                </p>
                <p className="text-sm font-semibold">
                  {selectedProject.metricLabel}
                </p>
              </div>
              <span className="text-2xl font-bold text-white">
                {selectedProject.metricValue}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 mb-1.5">
                  The Problem
                </p>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {selectedProject.challenge}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 mb-1.5">
                  The Strategy &amp; Solution
                </p>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {selectedProject.solution}
                </p>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 mb-2.5">
                Measurable Milestones
              </p>
              <ul className="space-y-2">
                {selectedProject.results.map((res, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600 font-normal">
                    <Check className="h-3.5 w-3.5 text-blue-600 stroke-[2.5] shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 mb-2">
                Technologies &amp; Channels
              </p>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-normal bg-slate-100 text-slate-700 border border-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href={`https://wa.me/919000155767?text=${encodeURIComponent(
                  `Hi Ryqon, I saw your work on ${selectedProject.title} and want to discuss a similar project.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-blue flex-1 py-2.5 text-xs gap-1.5"
              >
                <span>Discuss Similar Growth Architecture</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="btn-pill-white py-2.5 px-5 text-xs"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
