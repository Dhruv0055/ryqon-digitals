"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeContext";
import { Menu, X, Sun, Moon, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/portfolio" },
    { name: "Reviews", href: "/#testimonials" },
    { name: "FAQs", href: "/#faq" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-blue-100/80 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo matching Camplify style */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex items-center gap-1.5">
              <span className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
                R
              </span>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                Ryqon<span className="text-blue-600">.</span>
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation Links (Centered) */}
        <div className="hidden md:flex items-center gap-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors py-1 ${
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-slate-600 hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right Actions matching Template (Pill buttons) */}
        <div className="hidden md:flex items-center gap-3.5">
          <Link
            href="/#contact"
            className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors px-2 py-1"
          >
            Contact
          </Link>

          <Link
            href="/#contact"
            className="btn-pill-dark text-xs sm:text-sm py-2.5 px-6 gap-1.5"
          >
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            suppressHydrationWarning
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900"
            aria-label="Open menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[64px] bottom-0 z-40 bg-white/98 backdrop-blur-2xl p-6 flex flex-col justify-between border-b border-blue-100 shadow-xl">
          <div className="space-y-4 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-medium text-slate-800 hover:text-blue-600 py-2.5 border-b border-slate-100"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-100">
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-pill-dark w-full py-3.5 text-sm justify-center gap-2"
            >
              <span>Get Started</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
