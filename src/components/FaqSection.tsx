"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, ChevronUp, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const faqs: FaqItem[] = [
    {
      id: "faq-1",
      question: "What is Ryqon and what do you do?",
      answer: "Ryqon Digitals is a full-stack digital product engineering and performance marketing studio. We build Next.js 15 web apps, native mobile platforms, and manage high-ROI Meta and Google Ads campaigns.",
    },
    {
      id: "faq-2",
      question: "How do we start a project sprint?",
      answer: "You can book a discovery consultation or submit your project brief below. We review your scope, deliver an architectural roadmap within 2 hours, and can begin your sprint within 3 business days.",
    },
    {
      id: "faq-3",
      question: "What kind of results and timelines can I expect?",
      answer: "Typical web applications ship in 2 to 4 weeks. For performance marketing, campaigns are live in under 7 days with weekly live KPI dashboards tracking customer acquisition cost (CAC) and ROAS.",
    },
    {
      id: "faq-4",
      question: "Do we own 100% of the code and intellectual property?",
      answer: "Yes, absolutely. Once project milestone invoices are settled, 100% of GitHub repositories, Figma source designs, ad creative assets, and cloud access are transferred directly to your team.",
    },
    {
      id: "faq-5",
      question: "What does post-launch support include?",
      answer: "Every engagement comes with a complimentary 30-day post-launch warranty covering bug fixes and maintenance, with flexible ongoing SLA retainers available.",
    },
  ];

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer,
      },
    })),
  };

  return (
    <section className="py-20 sm:py-28 relative bg-white" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column matching Camplify template */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 text-left"
          >
            
            {/* Sketch doodle lines */}
            <div className="flex items-center gap-1 mb-2 text-blue-600">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 14C6 8 10 4 16 3" stroke="#0062ff" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M7 18C10 13 15 9 20 8" stroke="#0062ff" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4">
              Got A <br />
              Question?
            </h2>

            <p className="text-base sm:text-lg text-slate-500 font-normal leading-relaxed mb-8 max-w-sm">
              Maybe your question has already been answered, check this out.
            </p>

            <Link
              href="#contact"
              className="btn-pill-dark gap-2 shadow-lg"
            >
              <span>Ask Directly</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

          </motion.div>

          {/* Right Column: Clean list of questions with -> arrows */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7 divide-y divide-slate-100"
          >
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div key={faq.id} className="py-4">
                  <button
                    type="button"
                    suppressHydrationWarning
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between text-left gap-4 py-2 group"
                  >
                    <span className={`text-base sm:text-lg font-bold transition-colors ${
                      isOpen ? "text-blue-600" : "text-slate-800 group-hover:text-blue-600"
                    }`}>
                      {faq.question}
                    </span>
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      isOpen 
                        ? "bg-blue-600 text-white rotate-90" 
                        : "bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600"
                    }`}>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="pt-2 pb-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
