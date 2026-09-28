"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  ArrowRight,
  Sparkles,
  ShieldCheck
} from "lucide-react";
import { InstagramIcon, FacebookIcon, LinkedinIcon } from "./SocialIcons";
import { TextEffect } from "@/components/core/text-effect";

export default function ContactSection() {
  const rotatingWords = ["Grow Faster!", "Scale Higher!", "Convert More!", "Win Bigger!"];
  const [wordIndex, setWordIndex] = useState(0);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    projectDetails: "",
  });

  const projectPlaceholders = [
    "Tell us about your project...",
    "e.g., Next.js web application sprint...",
    "e.g., High-converting Meta & Google ad funnels...",
    "e.g., Estimated scope, budget, and target timeline...",
  ];
  const [projectPlaceholderIndex, setProjectPlaceholderIndex] = useState(0);

  useEffect(() => {
    if (formData.projectDetails) return;
    const interval = setInterval(() => {
      setProjectPlaceholderIndex((prev) => (prev + 1) % projectPlaceholders.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [formData.projectDetails, projectPlaceholders.length]);

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      try {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.6 },
        });
      } catch (err) {
        console.error("Confetti:", err);
      }
    }, 500);
  };

  return (
    <section className="py-20 sm:py-28 relative bg-[#f4f8fe]" id="contact">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            <span>Direct Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-3">
            Ready To Scale Your <span className="text-blue-600">Digital Growth?</span>
          </h2>
          <p className="text-sm sm:text-base font-normal text-slate-600 leading-relaxed">
            Have a project in mind or need campaign guidance? Reach out below to receive an initial growth blueprint within 2 hours.
          </p>
        </div>

        {/* Main Card with Site Light Color Scheme */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white rounded-3xl sm:rounded-[2.5rem] border border-blue-100 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12"
        >
          
          {/* Left Column: Details & Studio Info */}
          <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between bg-blue-50/50 border-b lg:border-b-0 lg:border-r border-blue-100">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.18] mb-4">
                Build Better. <br />
                Market Smarter. <br />
                <span className="inline-block relative h-[1.3em] overflow-hidden align-bottom">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={rotatingWords[wordIndex]}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -14 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="accent-brush-underline text-blue-600 inline-block pb-1"
                    >
                      {rotatingWords[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 font-normal">
                Ready to transform your ideas into reality? Let&apos;s discuss how we can help your brand grow.
              </p>

              {/* 3 Contact Details Rows */}
              <div className="space-y-4 mb-8">
                {/* Email */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white border border-blue-100 text-slate-700 shadow-sm hover:border-blue-300 transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-400 font-medium">Email Us</p>
                    <a 
                      href="mailto:ryqonservices@gmail.com" 
                      className="text-slate-900 font-bold text-sm sm:text-base hover:text-blue-600 transition-colors truncate block"
                    >
                      ryqonservices@gmail.com
                    </a>
                  </div>
                </div>

                {/* Call */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white border border-blue-100 text-slate-700 shadow-sm hover:border-blue-300 transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-400 font-medium">Call Us</p>
                    <a 
                      href="tel:+919000155767" 
                      className="text-slate-900 font-bold text-sm sm:text-base hover:text-blue-600 transition-colors block"
                    >
                      +91 90001 55767
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white border border-blue-100 text-slate-700 shadow-sm group">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-400 font-medium">Location</p>
                    <p className="text-slate-900 font-bold text-sm sm:text-base">
                      Hyderabad, Telangana
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom: NDA badge & Social Links */}
            <div className="pt-6 border-t border-blue-100">
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-4 font-normal">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span>Strict NDA &amp; confidential project review</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-400 font-normal mr-1">Social:</span>
                <a
                  href="https://www.instagram.com/ryqon_digital/reels/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white border border-blue-100 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:scale-105 active:scale-95 transition-all shadow-sm"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61587584260076"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white border border-blue-100 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:scale-105 active:scale-95 transition-all shadow-sm"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/company/ryqon-services/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white border border-blue-100 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:scale-105 active:scale-95 transition-all shadow-sm"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form with Requested Reference Fields */}
          <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 bg-white flex flex-col justify-center">
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center">
                <div className="h-14 w-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                  <Check className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-slate-600 max-w-sm mx-auto mb-6 leading-relaxed">
                  Thank you, <span className="text-slate-900 font-semibold">{formData.firstName || "friend"}</span>. Our team will review your project details and get back to you within 2 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/919000155767?text=${encodeURIComponent(
                      `Hi Ryqon, I just submitted an inquiry on your website. Name: ${formData.firstName} ${formData.lastName}, Phone: ${formData.phone}. Project: ${formData.projectDetails}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md shadow-emerald-600/20"
                  >
                    <span>Connect on WhatsApp</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                  <button
                    type="button"
                    suppressHydrationWarning
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ firstName: "", lastName: "", phone: "", projectDetails: "" });
                    }}
                    className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-all border border-slate-200"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* First Name & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-slate-600 mb-1.5">
                      First Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all"
                      />
                      {!formData.firstName && (
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-4 text-sm text-slate-400 select-none">
                          <TextEffect preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} per="char">
                            John
                          </TextEffect>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-slate-600 mb-1.5">
                      Last Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all"
                      />
                      {!formData.lastName && (
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-4 text-sm text-slate-400 select-none">
                          <TextEffect preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} per="char">
                            Doe
                          </TextEffect>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Phone Number with Hint */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-slate-600 mb-1.5">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                    {!formData.phone && (
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-4 text-sm text-slate-400 select-none">
                        <TextEffect preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} per="word">
                          Add your number here
                        </TextEffect>
                      </div>
                    )}
                  </div>
                  <p className="text-[10px] uppercase font-semibold text-slate-400 mt-1.5 tracking-wide italic">
                    * HINT: ADD YOUR NUMBER WITH COUNTRY CODE (E.G., +91)
                  </p>
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-slate-600 mb-1.5">
                    Project Details *
                  </label>
                  <div className="relative">
                    <textarea
                      name="projectDetails"
                      required
                      rows={4}
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                    />
                    {!formData.projectDetails && (
                      <div className="pointer-events-none absolute top-3.5 left-4 text-sm text-slate-400 select-none">
                        <TextEffect
                          key={projectPlaceholderIndex}
                          preset="fade-in-blur"
                          speedReveal={1.1}
                          speedSegment={0.3}
                          per="word"
                        >
                          {projectPlaceholders[projectPlaceholderIndex]}
                        </TextEffect>
                      </div>
                    )}
                  </div>
                </div>

                {/* Send Message Button */}
                <button
                  type="submit"
                  suppressHydrationWarning
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-blue-600/25 transition-all duration-200 cursor-pointer disabled:opacity-70 mt-2"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

              </form>
            )}
          </div>

        </motion.div>

      </div>
    </section>
  );
}
