"use client";

import React, { useState, useMemo } from "react";
import { 
  Check, 
  Clock, 
  Send, 
  Layers, 
  Smartphone, 
  ShoppingBag, 
  TrendingUp, 
  Wrench,
  ArrowRight,
  Calculator,
  Sparkles
} from "lucide-react";

interface ServiceOption {
  id: string;
  name: string;
  desc: string;
  icon: React.ElementType;
  basePrice: number;
  baseWeeks: number;
}

interface FeatureOption {
  id: string;
  name: string;
  desc: string;
  price: number;
  weeks: number;
}

export default function ProjectCalculator() {
  const serviceOptions: ServiceOption[] = [
    {
      id: "marketing",
      name: "Paid Ads & Performance Growth",
      desc: "Meta & Google Ads funnels, CRO landing page, and tracking setup",
      icon: TrendingUp,
      basePrice: 35000,
      baseWeeks: 2,
    },
    {
      id: "web",
      name: "Web Application & SaaS Platform",
      desc: "Custom Next.js & React full-stack dynamic platform",
      icon: Layers,
      basePrice: 45000,
      baseWeeks: 3,
    },
    {
      id: "mobile",
      name: "Mobile App (iOS & Android)",
      desc: "Cross-platform high-performance Flutter / React Native",
      icon: Smartphone,
      basePrice: 65000,
      baseWeeks: 4,
    },
    {
      id: "ecommerce",
      name: "Bespoke E-Commerce Store",
      desc: "Custom catalog, checkout flow & inventory sync",
      icon: ShoppingBag,
      basePrice: 50000,
      baseWeeks: 3,
    },
    {
      id: "maintenance",
      name: "DevOps & Maintenance SLA",
      desc: "24/7 Monitoring, automated patches & cloud scaling",
      icon: Wrench,
      basePrice: 20000,
      baseWeeks: 1,
    },
  ];

  const featureOptions: FeatureOption[] = [
    {
      id: "auth",
      name: "User Authentication & Roles",
      desc: "OAuth, Social Logins & Role Permissions",
      price: 8000,
      weeks: 0.5,
    },
    {
      id: "payment",
      name: "Payment Gateway Integration",
      desc: "Stripe, Razorpay, UPI & Invoicing",
      price: 9000,
      weeks: 0.5,
    },
    {
      id: "admin",
      name: "Custom Admin Dashboard",
      desc: "Data management, analytics & user control",
      price: 15000,
      weeks: 1,
    },
    {
      id: "ai",
      name: "AI / LLM Integration",
      desc: "Smart assistants & automated workflows",
      price: 18000,
      weeks: 1,
    },
    {
      id: "seo",
      name: "Technical SEO & Speed Suite",
      desc: "Structured schema markup, 95+ Core Web Vitals",
      price: 10000,
      weeks: 0.5,
    },
    {
      id: "motion",
      name: "Refined Motion & Interactions",
      desc: "Smooth scroll choreography & canvas effects",
      price: 12000,
      weeks: 0.5,
    },
  ];

  const [selectedService, setSelectedService] = useState<string>("marketing");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    "seo",
    "motion",
  ]);
  const [timelineUrgency, setTimelineUrgency] = useState<"standard" | "express">(
    "standard"
  );

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const calculation = useMemo(() => {
    const service = serviceOptions.find((s) => s.id === selectedService) || serviceOptions[0];
    let totalPrice = service.basePrice;
    let totalWeeks = service.baseWeeks;

    selectedFeatures.forEach((featId) => {
      const feat = featureOptions.find((f) => f.id === featId);
      if (feat) {
        totalPrice += feat.price;
        totalWeeks += feat.weeks;
      }
    });

    if (timelineUrgency === "express") {
      totalPrice = Math.round(totalPrice * 1.25);
      totalWeeks = Math.max(2, Math.round(totalWeeks * 0.7));
    } else {
      totalWeeks = Math.round(totalWeeks);
    }

    const minPrice = Math.round(totalPrice * 0.95);
    const maxPrice = Math.round(totalPrice * 1.15);
    const usdMin = Math.round(minPrice / 85);
    const usdMax = Math.round(maxPrice / 85);

    return {
      serviceName: service.name,
      minPrice,
      maxPrice,
      usdMin,
      usdMax,
      weeks: totalWeeks,
    };
  }, [selectedService, selectedFeatures, timelineUrgency]);

  const generateWhatsAppMessage = () => {
    const service = serviceOptions.find((s) => s.id === selectedService)?.name;
    const features = selectedFeatures
      .map((fid) => featureOptions.find((f) => f.id === fid)?.name)
      .filter(Boolean)
      .join(", ");

    const text = encodeURIComponent(
      `Hello Ryqon Digitals,\nI calculated my project scope on your website:\n` +
      `• Platform: ${service}\n` +
      `• Capabilities: ${features || "Base features"}\n` +
      `• Delivery Pace: ${timelineUrgency === "express" ? "Priority Express" : "Standard Milestone Pace"}\n` +
      `• Estimated Investment: ₹${calculation.minPrice.toLocaleString()} - ₹${calculation.maxPrice.toLocaleString()} (~$${calculation.usdMin} - $${calculation.usdMax} USD)\n` +
      `• Estimated Time: ~${calculation.weeks} weeks\n\n` +
      `Let's discuss and schedule a brief discovery call.`
    );

    return `https://wa.me/919000155767?text=${text}`;
  };

  const populateContactForm = () => {
    const service = serviceOptions.find((s) => s.id === selectedService)?.name;
    const features = selectedFeatures
      .map((fid) => featureOptions.find((f) => f.id === fid)?.name)
      .filter(Boolean)
      .join(", ");

    const summary = `Platform: ${service}\nSelected Add-ons: ${features || "Base"}\nTimeline: ${timelineUrgency} (~${calculation.weeks} weeks)\nEstimated Budget: ₹${calculation.minPrice.toLocaleString()} - ₹${calculation.maxPrice.toLocaleString()}`;

    const contactTextarea = document.querySelector('textarea[name="message"]') as HTMLTextAreaElement;
    if (contactTextarea) {
      contactTextarea.value = summary;
      contactTextarea.scrollIntoView({ behavior: "smooth" });
      contactTextarea.focus();
    } else {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="py-20 sm:py-28 relative bg-[#f4f8fe] border-y border-blue-100/80" id="calculator">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Calculator className="h-3.5 w-3.5 text-blue-600" />
            <span>Interactive Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Instant Scope &amp; <span className="text-blue-600">Pricing Calculator</span>
          </h2>
          <p className="text-sm sm:text-base font-normal text-slate-600 leading-relaxed">
            Customize your project requirements below to see an immediate estimated investment range and sprint timeline.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Step 1: Project Category */}
            <div className="bg-white rounded-3xl border border-blue-100 p-6 sm:p-7 shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-blue-600">
                  Step 01 &bull; Core Platform
                </span>
                <span className="text-xs text-slate-400 font-normal">Select one</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {serviceOptions.map((svc) => {
                  const isSelected = selectedService === svc.id;
                  const Icon = svc.icon;
                  return (
                    <button
                      key={svc.id}
                      type="button"
                      suppressHydrationWarning
                      onClick={() => setSelectedService(svc.id)}
                      className={`text-left p-3.5 rounded-2xl border transition-all flex items-start gap-3 ${
                        isSelected
                          ? "bg-blue-50/90 border-2 border-blue-600 text-slate-900 shadow-sm"
                          : "bg-white border-slate-200 text-slate-700 hover:border-blue-300 hover:bg-slate-50/50"
                      }`}
                    >
                      <div className={`p-2 rounded-xl shrink-0 ${isSelected ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600"}`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-900">
                          {svc.name}
                        </p>
                        <p className="text-[11px] mt-0.5 font-normal leading-relaxed text-slate-500">
                          {svc.desc}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Capabilities */}
            <div className="bg-white rounded-3xl border border-blue-100 p-6 sm:p-7 shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-blue-600">
                  Step 02 &bull; Features &amp; Integrations
                </span>
                <span className="text-xs text-slate-400 font-normal">
                  {selectedFeatures.length} selected
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {featureOptions.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      type="button"
                      suppressHydrationWarning
                      onClick={() => toggleFeature(feat.id)}
                      className={`text-left p-3 rounded-xl border transition-all flex items-start gap-3 ${
                        isChecked
                          ? "bg-blue-50/80 border-blue-500 text-slate-900"
                          : "bg-white border-slate-200 hover:border-blue-300 text-slate-700"
                      }`}
                    >
                      <div
                        className={`h-4 w-4 mt-0.5 rounded border flex items-center justify-center shrink-0 transition-colors ${
                          isChecked
                            ? "bg-blue-600 text-white border-blue-600"
                            : "border-slate-300"
                        }`}
                      >
                        {isChecked && <Check className="h-3 w-3 stroke-[2.5]" />}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-900">
                          {feat.name}
                        </p>
                        <p className="text-[11px] text-slate-500 mt-0.5 font-normal">
                          {feat.desc}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Pace */}
            <div className="bg-white rounded-3xl border border-blue-100 p-6 sm:p-7 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-blue-600">
                  Step 03 &bull; Sprint Urgency
                </span>
                <span className="text-xs text-slate-400 font-normal">Delivery pace</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  suppressHydrationWarning
                  onClick={() => setTimelineUrgency("standard")}
                  className={`p-3.5 rounded-2xl border text-left transition-all ${
                    timelineUrgency === "standard"
                      ? "border-2 border-blue-600 bg-blue-50/70"
                      : "border-slate-200 bg-white hover:border-blue-300"
                  }`}
                >
                  <p className="text-xs font-semibold text-slate-900">
                    Standard Sprint Cadence
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5 font-normal">
                    Regular milestone reviews and standard QA cycles.
                  </p>
                </button>

                <button
                  type="button"
                  suppressHydrationWarning
                  onClick={() => setTimelineUrgency("express")}
                  className={`p-3.5 rounded-2xl border text-left transition-all ${
                    timelineUrgency === "express"
                      ? "border-2 border-blue-600 bg-blue-50/70"
                      : "border-slate-200 bg-white hover:border-blue-300"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold text-slate-900">
                      Fast-Track Priority Sprint
                    </p>
                    <span className="text-[10px] uppercase px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 font-semibold">
                      Priority
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5 font-normal">
                    Dedicated daily developers for rapid time-to-market.
                  </p>
                </button>
              </div>
            </div>

          </div>

          {/* Live Estimate Card (4 cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <div className="bg-white rounded-3xl border border-blue-100 p-6 sm:p-7 shadow-lg">
              
              <div className="pb-5 border-b border-slate-100 mb-5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-blue-600">
                    Live Scope Calculation
                  </span>
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mt-1">
                  {calculation.serviceName}
                </h4>
              </div>

              {/* Price */}
              <div className="mb-5">
                <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 mb-1">
                  Estimated Investment
                </p>
                <p className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                  ₹{calculation.minPrice.toLocaleString()} &ndash; ₹{calculation.maxPrice.toLocaleString()}
                </p>
                <p className="text-xs text-slate-500 mt-0.5 font-normal">
                  Approx. ${calculation.usdMin} &ndash; ${calculation.usdMax} USD
                </p>
              </div>

              {/* Duration */}
              <div className="mb-6 p-3 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-700 font-normal">
                  <Clock className="h-4 w-4 text-blue-600" />
                  <span>Target Timeframe</span>
                </div>
                <span className="text-xs font-bold text-slate-900">
                  ~{calculation.weeks} Weeks
                </span>
              </div>

              {/* Checklist */}
              <div className="space-y-2 mb-6 text-xs text-slate-600 font-normal">
                <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 mb-1">
                  Scope Inclusions
                </p>
                <div className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-blue-600 stroke-[2.5]" />
                  <span>High-conversion UI/UX &amp; responsive design</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-blue-600 stroke-[2.5]" />
                  <span>Production cloud deployment &amp; analytics</span>
                </div>
                {selectedFeatures.map((fid) => {
                  const f = featureOptions.find((i) => i.id === fid);
                  return (
                    <div key={fid} className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-blue-600 stroke-[2.5]" />
                      <span>{f?.name}</span>
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-blue w-full py-3 text-xs justify-center gap-2 shadow-md"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Send Scope to WhatsApp</span>
                </a>

                <button
                  type="button"
                  suppressHydrationWarning
                  onClick={populateContactForm}
                  className="btn-pill-white w-full py-2.5 text-xs justify-center gap-2"
                >
                  <span>Apply Scope to Form</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
