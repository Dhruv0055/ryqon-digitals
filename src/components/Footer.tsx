"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { InstagramIcon, FacebookIcon, LinkedinIcon } from "./SocialIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-banner-blue text-white pt-16 pb-10 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold tracking-tight text-white">Ryqon<span className="text-blue-200">.</span></span>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed max-w-sm font-normal mb-6">
              A modern digital growth and software engineering studio. We partner with ambitious brands to scale revenue through data-backed ad campaigns, high-speed web apps, and technical SEO.
            </p>

            {/* White Social Icons matching Template */}
            <div className="flex items-center gap-2.5">
              <a
                href="https://www.instagram.com/ryqon_digital/reels/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/ryqon-services/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61587584260076"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <p className="text-xs uppercase tracking-wider text-blue-200 font-semibold mb-4">
              Growth Solutions
            </p>
            <ul className="space-y-2.5 text-sm text-blue-50 font-normal">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Performance Paid Ads
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Web &amp; SaaS Platforms
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Mobile Apps (iOS &amp; Android)
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Technical SEO Architecture
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  CRO &amp; Funnel Optimization
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <p className="text-xs uppercase tracking-wider text-blue-200 font-semibold mb-4">
              Resources
            </p>
            <ul className="space-y-2.5 text-sm text-blue-50 font-normal">
              <li>
                <Link href="/#calculator" className="hover:text-white transition-colors">
                  Scope &amp; Price Calculator
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">
                  Client Case Studies
                </Link>
              </li>
              <li>
                <Link href="/#process" className="hover:text-white transition-colors">
                  Sprint Roadmap
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white transition-colors">
                  Client FAQs
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-white transition-colors">
                  Book Discovery Call
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <p className="text-xs uppercase tracking-wider text-blue-200 font-semibold mb-4">
              Headquarters
            </p>
            <div className="space-y-2.5 text-sm text-blue-50 font-normal">
              <p className="text-white font-medium">Hyderabad, Telangana</p>
              <p>
                <a href="tel:+919000155767" className="hover:text-white transition-colors">
                  +91 90001 55767
                </a>
              </p>
              <p>
                <a href="mailto:ryqonservices@gmail.com" className="hover:text-white transition-colors truncate block">
                  ryqonservices@gmail.com
                </a>
              </p>

              <div className="pt-3 space-y-1.5 text-xs text-blue-200 border-t border-white/20">
                <p>
                  <Link href="/privacy-policy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </p>
                <p>
                  <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
                    Terms &amp; Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-100 font-normal">
          <p>© {new Date().getFullYear()} Ryqon Digitals. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Engineered for Ambitious Growth</span>
            <button
              onClick={scrollToTop}
              className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-1.5 text-xs"
              aria-label="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3 w-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
