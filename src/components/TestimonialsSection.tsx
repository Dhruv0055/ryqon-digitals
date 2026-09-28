"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  stars: number;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      name: "Theresa Jordan",
      role: "Founder, Aurelia",
      quote: "I think this is the best digital marketing & engineering team I have ever partnered with and I recommend it to you.",
      stars: 5,
    },
    {
      name: "James Wilson",
      role: "Director, ATR Visa",
      quote: "Ryqon helped us a lot in finding international clients and automating 10,000+ customer workflows with sub-second speeds.",
      stars: 5,
    },
    {
      name: "Elena Rostova",
      role: "CMO, Brewora",
      quote: "Their performance Meta ads and Next.js funnel architecture boosted our recurring subscription rate by 140%.",
      stars: 5,
    },
    {
      name: "Arjun Verma",
      role: "CEO, Vortex Tech",
      quote: "Clean, typed code, zero corporate bloat, and our average ROAS scaled to 3.8x within the first 60 days.",
      stars: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (testimonials.length - 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (testimonials.length - 1)) % (testimonials.length - 1));
  };

  return (
    <section className="py-20 sm:py-28 relative bg-[#f7fafe] border-t border-blue-100/70" id="testimonials">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title and Arrow Controls matching Camplify template */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              What Customers Are <br />
              Saying
            </h2>
          </div>

          {/* Navigation Arrows ← → matching Camplify */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              suppressHydrationWarning
              onClick={prevSlide}
              className="w-11 h-11 rounded-full bg-white border border-slate-200 hover:border-blue-500 hover:text-blue-600 text-slate-700 flex items-center justify-center shadow-xs transition-colors"
              aria-label="Previous Reviews"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              suppressHydrationWarning
              onClick={nextSlide}
              className="w-11 h-11 rounded-full bg-white border border-slate-200 hover:border-blue-500 hover:text-blue-600 text-slate-700 flex items-center justify-center shadow-xs transition-colors"
              aria-label="Next Reviews"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* 2-Card Layout matching template with smooth slide motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
            {[testimonials[currentIndex], testimonials[currentIndex + 1]].map((t, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-blue-100 p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div>
                  {/* Quote Mark Icon */}
                  <div className="text-blue-600 text-4xl font-serif font-black mb-3 select-none leading-none">
                    &ldquo;&ldquo;
                  </div>

                  {/* Quote Text */}
                  <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-8">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Author & Star Rating matching Camplify */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                  <div className="w-11 h-11 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-sm">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-400">{t.role}</p>
                    <div className="flex items-center gap-0.5 mt-1">
                      {[...Array(t.stars)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </motion.div>
        </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
