"use client";

import React, { useState } from "react";
import { X, Send } from "lucide-react";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState("");

  const presets = [
    { label: "Engineering: Web Platform / SaaS", text: "Hello Ryqon, I'd like to discuss building a web application with your team." },
    { label: "Engineering: Cross-Platform Mobile App", text: "Hello Ryqon, I am looking to develop an iOS/Android mobile app." },
    { label: "Marketing: Performance Paid Acquisition", text: "Hello Ryqon, I'd like to discuss scaling our digital marketing and lead funnels." },
    { label: "General: Project Scope Consultation", text: "Hello Ryqon, I have a project concept and would like an architectural review." },
  ];

  const handleSend = (text: string) => {
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/919000155767?text=${encoded}`, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-88 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="p-4 bg-zinc-900 dark:bg-zinc-900 text-white flex items-center justify-between border-b border-zinc-800">
            <div>
              <p className="text-xs font-medium text-white">Ryqon Digitals</p>
              <p className="text-[10px] text-zinc-400 font-normal">Replies within 2 hours</p>
            </div>
            <button
              type="button"
              suppressHydrationWarning
              aria-label="Close WhatsApp chat"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3 bg-zinc-50/50 dark:bg-zinc-950">
            <p className="text-xs text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed">
              How can we assist your business today? Select an inquiry type or send a custom query:
            </p>

            <div className="space-y-1.5">
              {presets.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  suppressHydrationWarning
                  onClick={() => handleSend(item.text)}
                  className="w-full text-left p-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 text-xs font-normal transition-all text-zinc-800 dark:text-zinc-200"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-2 flex gap-1.5">
              <input
                type="text"
                placeholder="Type inquiry..."
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && customMsg.trim()) handleSend(customMsg);
                }}
                className="flex-1 px-3 py-2 text-xs rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-zinc-400"
              />
              <button
                type="button"
                suppressHydrationWarning
                onClick={() => {
                  if (customMsg.trim()) handleSend(customMsg);
                }}
                className="p-2 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 transition-colors"
                title="Send"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Trigger */}
      <button
        type="button"
        suppressHydrationWarning
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Direct WhatsApp Message"
        className="flex items-center justify-center h-12 w-12 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 border border-zinc-700 dark:border-zinc-200"
      >
        {isOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <svg viewBox="0 0 448 512" className="h-5 w-5 fill-current">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222c0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222c0-59.3-25.2-115-67.1-157Zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4l-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2c0-101.7 82.8-184.5 184.6-184.5c49.3 0 95.6 19.2 130.4 54.1c34.8 34.9 56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6Zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18c-5.1-1.9-8.8-2.8-12.5 2.8c-3.7 5.6-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4c-32.6-16.3-54-29.1-75.5-66c-5.7-9.8 5.7-9.1 16.3-30.3c1.8-3.7.9-6.9-.5-9.7c-1.4-2.8-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5c-3.2-.2-6.9-.2-10.6-.2c-3.7 0-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3c0 27.3 19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8c35.2 15.2 49 16.5 66.6 13.9c10.7-1.6 32.8-13.4 37.4-26.4c4.6-13 4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6Z" />
          </svg>
        )}
      </button>
    </div>
  );
}
