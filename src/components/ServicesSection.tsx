"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Smartphone, 
  Monitor, 
  Server, 
  Wrench, 
  Target, 
  Megaphone, 
  TrendingUp, 
  BarChart3, 
  ArrowRight, 
  Check, 
  X, 
  MessageSquare,
  Sparkles,
  Zap,
  Code2,
  Layers
} from "lucide-react";
import { ProgressiveBlur } from "@/components/core/progressive-blur";

interface ServiceItem {
  id: string;
  category: "engineering" | "marketing";
  categoryLabel: string;
  badge: string;
  title: string;
  summary: string;
  imageUrl: string;
  icon: React.ElementType;
  gradientClass: string;
  iconColor: string;
  featureTags: string[];
  deliverables: string[];
  technologies: string[];
  timeline: string;
  suitableFor: string;
  keyBenefit: string;
  statBadge: string;
}

function ServiceCard({ svc, onSelect }: { svc: ServiceItem; onSelect: () => void }) {
  const [isHover, setIsHover] = useState(false);
  const Icon = svc.icon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.25 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      onClick={onSelect}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 hover:border-blue-400/90 shadow-md hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 flex flex-col justify-between group cursor-pointer h-[370px] sm:h-[440px] bg-slate-950"
    >
      {/* Background Image with Gentle Zoom on Hover - Upper side is clear and unblurred */}
      <img
        src={svc.imageUrl}
        alt={svc.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
        loading="lazy"
      />

      {/* Dark Gradient Wash ONLY at the bottom behind text - Upper side stays clean and bright */}
      <div className="absolute bottom-0 inset-x-0 h-[62%] bg-gradient-to-t from-slate-950/98 via-slate-950/80 to-transparent pointer-events-none z-10" />

      {/* Top Accent Gradient on Hover */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30" />

      {/* Top Bar: Glass Icon + Category Badge floating over clear image */}
      <div className="relative z-20 flex items-center justify-between p-3.5 sm:p-5">
        <div className="h-9 w-9 sm:h-11 sm:w-11 rounded-xl sm:rounded-2xl bg-slate-950/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300 shadow-sm shrink-0">
          <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
        </div>
        <span className="text-[9px] sm:text-[11px] font-semibold text-white/95 bg-slate-950/50 backdrop-blur-md border border-white/20 px-2.5 py-1 rounded-full truncate max-w-[95px] sm:max-w-none">
          {svc.badge}
        </span>
      </div>

      {/* Progressive Blur Layer - Only blurs lower text area, upper side is NOT blurred */}
      <ProgressiveBlur
        className="pointer-events-none absolute bottom-0 left-0 h-[52%] w-full z-10"
        blurIntensity={0.45}
        animate={isHover ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0.35 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />

      {/* Motion Bottom Details Layer */}
      <motion.div
        className="relative z-20 p-3.5 sm:p-5 flex flex-col justify-end text-left"
        animate={isHover ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0.95, y: 0 },
          visible: { opacity: 1, y: -2 },
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {/* Title */}
        <h3 className="text-xs sm:text-base lg:text-lg font-bold text-white mb-1.5 leading-snug group-hover:text-blue-300 transition-colors line-clamp-2">
          {svc.title}
        </h3>

        {/* Summary */}
        <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed font-normal mb-3 line-clamp-2 sm:line-clamp-3">
          {svc.summary}
        </p>

        {/* Feature Tags */}
        <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-3.5">
          <span className="sm:hidden text-[9px] font-medium text-blue-100 bg-blue-500/30 border border-blue-400/30 backdrop-blur-xs px-1.5 py-0.5 rounded-md truncate max-w-full">
            {svc.featureTags[0]}
          </span>
          {svc.featureTags.slice(0, 2).map((tag, i) => (
            <span
              key={i}
              className="hidden sm:inline-block text-[10px] font-medium text-blue-100 bg-blue-500/30 border border-blue-400/30 backdrop-blur-xs px-2 py-0.5 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom Bar: Clean View Scope without green button */}
        <div className="pt-2.5 sm:pt-3 border-t border-white/15 flex items-center justify-between text-white">
          <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium">Full Sprint Details</span>
          
          <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold text-blue-400 group-hover:text-blue-300 transition-colors shrink-0">
            <span>View Scope</span>
            <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeTab, setActiveTab] = useState<"all" | "marketing" | "engineering">("all");

  const services: ServiceItem[] = [
    // --- Digital Marketing Services ---
    {
      id: "paid-ads",
      category: "marketing",
      categoryLabel: "Digital Marketing",
      badge: "Paid Ads & Leads",
      title: "Paid Ads & Lead Generation",
      summary: "High-converting PPC and social ad campaigns on Google, Meta, and TikTok with continuous A/B testing and ROAS optimization.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      icon: TrendingUp,
      gradientClass: "from-blue-500/15 to-sky-500/10",
      iconColor: "text-blue-600 bg-blue-50 border-blue-200/80",
      featureTags: ["Meta & Google Ads", "Conversions API (CAPI)", "A/B Testing"],
      deliverables: [
        "Conversion-focused ad creatives and video copy",
        "Meta Pixel & Conversions API (CAPI) offline tracking",
        "Targeted audience segmentation and lookalike modeling",
        "Daily ROAS tracking and bid strategy optimization",
        "Real-time pipeline analytics dashboard",
      ],
      technologies: ["Meta Ads Manager", "Google Ads", "Conversions API", "TikTok Ads", "Zapier"],
      timeline: "Ongoing Sprint",
      suitableFor: "Brands seeking predictable customer acquisition and high pipeline volume.",
      keyBenefit: "Verified average 3.8x return on advertising spend (ROAS).",
      statBadge: "⚡ 3.8x Avg ROAS",
    },
    {
      id: "social-content",
      category: "marketing",
      categoryLabel: "Digital Marketing",
      badge: "Social Media",
      title: "Social Media & Video Growth",
      summary: "Organic social growth, content creation, community management, and short-form video hooks to build brand authority.",
      imageUrl: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80",
      icon: Megaphone,
      gradientClass: "from-purple-500/15 to-pink-500/10",
      iconColor: "text-purple-600 bg-purple-50 border-purple-200/80",
      featureTags: ["Viral Reels & TikTok", "Content Calendar", "Brand Storytelling"],
      deliverables: [
        "Monthly content calendar with scheduled posting cadence",
        "Studio short-form video editing and viral hooks",
        "Strategic hashtag research and community engagement",
        "Cohesive brand visual design across social platforms",
        "Monthly organic reach and engagement reporting",
      ],
      technologies: ["Adobe Premiere", "CapCut", "Figma", "Meta Business Suite"],
      timeline: "Monthly Retainer",
      suitableFor: "Companies needing active social proof, founder branding, and audience trust.",
      keyBenefit: "Compounds organic brand equity without paying per impression.",
      statBadge: "⚡ +180% Organic Reach",
    },
    {
      id: "analytics-cro",
      category: "marketing",
      categoryLabel: "Digital Marketing",
      badge: "Analytics & Reporting",
      title: "Analytics & CRO Optimization",
      summary: "End-to-end data tracking, conversion rate optimization (CRO), and transparent reporting so you always know your ROI.",
      imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
      icon: BarChart3,
      gradientClass: "from-amber-500/15 to-orange-500/10",
      iconColor: "text-amber-600 bg-amber-50 border-amber-200/80",
      featureTags: ["GA4 Event Tracking", "Heatmap Audits", "Executive Dashboards"],
      deliverables: [
        "Complete Google Analytics 4 (GA4) custom event tracking",
        "Heatmaps and session recording drop-off analysis",
        "A/B split testing on key conversion funnels",
        "Executive Looker Studio live KPI dashboard",
        "Bi-weekly data-driven design recommendations",
      ],
      technologies: ["GA4", "Looker Studio", "Google Tag Manager", "Microsoft Clarity"],
      timeline: "2 - 4 Weeks",
      suitableFor: "Websites with healthy traffic seeking higher lead capture and sales conversions.",
      keyBenefit: "Pinpoints exactly where drop-offs occur and captures lost revenue.",
      statBadge: "⚡ 2.4x Conversion Lift",
    },
    {
      id: "strategy",
      category: "marketing",
      categoryLabel: "Digital Marketing",
      badge: "Strategy",
      title: "Market Strategy & Funnels",
      summary: "Market analysis, brand positioning, audience segmentation, and multi-channel funnels tailored to your growth goals.",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      icon: Target,
      gradientClass: "from-emerald-500/15 to-teal-500/10",
      iconColor: "text-emerald-600 bg-emerald-50 border-emerald-200/80",
      featureTags: ["Competitor Gap Analysis", "Funnel Architecture", "Brand Messaging"],
      deliverables: [
        "Competitor market positioning & search volume analysis",
        "Customer journey mapping and value proposition refinement",
        "Multi-channel messaging framework",
        "Brand style guide and conversion copy playbook",
        "Actionable 90-day growth roadmap",
      ],
      technologies: ["Semrush", "Figma", "Google Trends", "Notion"],
      timeline: "2 - 3 Weeks",
      suitableFor: "Founders entering competitive niches or brands rebranding for market expansion.",
      keyBenefit: "Eliminates wasted marketing spend by targeting high-intent buyer personas.",
      statBadge: "⚡ 90-Day Roadmap",
    },

    // --- Development Services ---
    {
      id: "web-dev",
      category: "engineering",
      categoryLabel: "Development Services",
      badge: "Web Development",
      title: "Web & SaaS Application Dev",
      summary: "Responsive, modern web apps and marketing sites built for speed, SEO, and maximum conversion rates.",
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      icon: Monitor,
      gradientClass: "from-blue-500/15 to-indigo-500/10",
      iconColor: "text-blue-600 bg-blue-50 border-blue-200/80",
      featureTags: ["Next.js 15 & React", "TypeScript", "95+ Core Web Vitals"],
      deliverables: [
        "Server-Side Rendering (SSR) & Static Site Generation (SSG)",
        "Mobile-first responsive architecture across all screen sizes",
        "REST / GraphQL API design and database modeling",
        "Role-based authentication, user dashboards, and admin control",
        "Guaranteed 90+ Core Web Vitals optimization score",
      ],
      technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "PostgreSQL"],
      timeline: "3 - 6 Weeks",
      suitableFor: "B2B SaaS platforms, modern corporate portals, and high-conversion e-commerce.",
      keyBenefit: "Sub-second load times that elevate search rankings and conversion rates.",
      statBadge: "⚡ <1s LCP Speed",
    },
    {
      id: "mobile-dev",
      category: "engineering",
      categoryLabel: "Development Services",
      badge: "Mobile App Development",
      title: "Cross-Platform Mobile Apps",
      summary: "Custom iOS and Android apps with intuitive UI/UX, robust performance, and scalable cloud architecture.",
      imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
      icon: Smartphone,
      gradientClass: "from-violet-500/15 to-purple-500/10",
      iconColor: "text-violet-600 bg-violet-50 border-violet-200/80",
      featureTags: ["Flutter / React Native", "iOS & Android", "Biometric Auth"],
      deliverables: [
        "Single codebase deployment for iOS & Android",
        "Offline-first local caching and real-time synchronization",
        "Biometric authentication (FaceID / Fingerprint)",
        "In-app purchases, payment gateways, and push notifications",
        "End-to-end Apple App Store and Google Play Store deployment",
      ],
      technologies: ["Flutter", "React Native", "Firebase", "Node.js", "REST APIs"],
      timeline: "4 - 8 Weeks",
      suitableFor: "Startups launching MVPs or businesses building direct customer touchpoints.",
      keyBenefit: "60 FPS smooth mobile experience with 45% savings using cross-platform code.",
      statBadge: "⚡ 60 FPS Native",
    },
    {
      id: "cloud-devops",
      category: "engineering",
      categoryLabel: "Development Services",
      badge: "Hosting & Deployment",
      title: "Cloud Hosting & Deployment",
      summary: "Cloud infrastructure, automated CI/CD pipelines, domain setup, and ongoing server management for maximum uptime.",
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      icon: Server,
      gradientClass: "from-sky-500/15 to-cyan-500/10",
      iconColor: "text-sky-600 bg-sky-50 border-sky-200/80",
      featureTags: ["AWS & Vercel", "Automated CI/CD", "Global Edge CDN"],
      deliverables: [
        "AWS / Vercel cloud architecture setup",
        "Automated continuous deployment (CI/CD) pipelines",
        "SSL security, Cloudflare edge caching, and DDoS mitigation",
        "Automated database snapshots and disaster recovery plan",
        "Serverless microservices and container orchestration",
      ],
      technologies: ["AWS", "Vercel", "Docker", "GitHub Actions", "Cloudflare"],
      timeline: "1 - 3 Weeks",
      suitableFor: "Companies expecting traffic surges or modernizing legacy infrastructure.",
      keyBenefit: "99.95% server availability with reduced cloud compute costs.",
      statBadge: "⚡ 99.95% Uptime",
    },
    {
      id: "maintenance",
      category: "engineering",
      categoryLabel: "Development Services",
      badge: "Maintenance & Support",
      title: "Maintenance & Support SLA",
      summary: "24/7 monitoring, security updates, bug fixes, and feature enhancements to keep your digital assets running smoothly.",
      imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      icon: Wrench,
      gradientClass: "from-slate-500/15 to-blue-500/10",
      iconColor: "text-slate-700 bg-slate-100 border-slate-200",
      featureTags: ["24/7 Monitoring", "Security Patching", "Dedicated Sprints"],
      deliverables: [
        "24/7 uptime tracking with rapid incident alerts",
        "Monthly security audits and dependency patching",
        "Database performance tuning and indexing",
        "Dedicated monthly engineering sprint hours",
        "Detailed performance and analytics summary report",
      ],
      technologies: ["Sentry", "Datadog", "UptimeRobot", "GitHub"],
      timeline: "Monthly Retainer",
      suitableFor: "Live platforms that cannot afford downtime or unmonitored software rot.",
      keyBenefit: "Guaranteed SLA response times so you focus on business growth.",
      statBadge: "⚡ <2h Response SLA",
    },
  ];

  const filteredServices = services.filter((svc) => {
    if (activeTab === "all") return true;
    return svc.category === activeTab;
  });

  return (
    <section className="py-20 sm:py-28 relative bg-[#f8fbfe] border-t border-blue-100/70" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            <span>Full-Spectrum Digital Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 leading-tight">
            Services Built For <span className="text-blue-600">High-ROI Growth</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            From high-converting ad funnels to modern full-stack web and mobile apps, we deliver end-to-end digital solutions that convert visitors into revenue.
          </p>
        </div>

        {/* Tactile Pill Filter Tabs - Scrollable on small mobile */}
        <div className="flex justify-center mb-10 sm:mb-14 overflow-x-auto no-scrollbar px-2">
          <div className="inline-flex p-1 sm:p-1.5 rounded-full bg-white border border-blue-200 shadow-sm gap-1 shrink-0">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 sm:gap-2 cursor-pointer ${
                activeTab === "all"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span>All (8)</span>
            </button>

            <button
              onClick={() => setActiveTab("marketing")}
              className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 sm:gap-2 cursor-pointer ${
                activeTab === "marketing"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5 shrink-0" />
              <span>Marketing (4)</span>
            </button>

            <button
              onClick={() => setActiveTab("engineering")}
              className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 sm:gap-2 cursor-pointer ${
                activeTab === "engineering"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              <Code2 className="w-3.5 h-3.5 shrink-0" />
              <span>Development (4)</span>
            </button>
          </div>
        </div>

        {/* Render Cards Grid with Progressive Blur Hover & Themed Images */}
        <motion.div layout className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((svc) => (
              <ServiceCard
                key={svc.id}
                svc={svc}
                onSelect={() => setSelectedService(svc)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Detail Modal with Animated Entrance */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-xl bg-white rounded-3xl border border-blue-100 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
            >
            
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className={`h-12 w-12 rounded-2xl border flex items-center justify-center ${selectedService.iconColor}`}>
                <selectedService.icon className="h-6 w-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-blue-600">
                  {selectedService.categoryLabel}
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
              {selectedService.summary}
            </p>

            <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-100 mb-6">
              <p className="text-[10px] uppercase tracking-wider font-semibold text-blue-800 mb-1">
                Strategic Business Advantage
              </p>
              <p className="text-xs text-slate-800 font-normal">
                {selectedService.keyBenefit}
              </p>
            </div>

            <div className="mb-6">
              <p className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 mb-3">
                Included Deliverables
              </p>
              <ul className="space-y-2">
                {selectedService.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 font-normal">
                    <Check className="h-3.5 w-3.5 text-blue-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <p className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 mb-3">
                Core Technologies
              </p>
              <div className="flex flex-wrap gap-1.5">
                {selectedService.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-slate-100">
              <a
                href={`https://wa.me/919000155767?text=${encodeURIComponent(
                  `Hi Ryqon, I'm interested in discussing your ${selectedService.title} service sprint.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-blue flex-1 py-3 text-xs justify-center gap-2"
              >
                <span>Discuss Scope on WhatsApp</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <Link
                href="/#contact"
                onClick={() => setSelectedService(null)}
                className="btn-pill-dark flex-1 py-3 text-xs justify-center"
              >
                <span>Submit Detailed Brief</span>
              </Link>
            </div>

          </motion.div>
        </div>
      )}
      </AnimatePresence>

    </section>
  );
}
