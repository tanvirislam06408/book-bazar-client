"use client";

import React, { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-100" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" aria-hidden="true" />
            <span>{t.faq.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {t.faq.title}
          </h2>
          <p className="mt-1 text-sm sm:text-base text-slate-600">
            {t.faq.subtitle}
          </p>
        </div>

        {/* 5 FAQ Accordion Items */}
        <div className="space-y-3">
          {t.faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.q}
                className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50/50 transition-colors duration-150"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left px-5 py-4 sm:py-4.5 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:bg-slate-100/70 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-600"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-question-${idx}`}
                >
                  <span className="leading-snug">{item.q}</span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-blue-50 border-blue-200 text-blue-600" : "text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" aria-hidden="true" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    role="region"
                    aria-labelledby={`faq-question-${idx}`}
                    className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed bg-white border-t border-slate-100"
                  >
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
