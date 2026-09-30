"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n";
import { DollarSign, MapPin, Zap, BookCheck, ShieldCheck } from "lucide-react";

export function WhyBoiBazar() {
  const { t } = useLanguage();

  const icons = [
    <DollarSign className="w-6 h-6 text-emerald-600" aria-hidden="true" key="1" />,
    <MapPin className="w-6 h-6 text-blue-600" aria-hidden="true" key="2" />,
    <Zap className="w-6 h-6 text-amber-600" aria-hidden="true" key="3" />,
    <BookCheck className="w-6 h-6 text-indigo-600" aria-hidden="true" key="4" />,
  ];

  return (
    <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
            <span>{t.whyUs.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.whyUs.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            {t.whyUs.subtitle}
          </p>
        </div>

        {/* 4 Benefit Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {t.whyUs.cards.map((card, idx) => (
            <div
              key={card.title}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-sm hover:border-blue-200 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center mb-4">
                  {icons[idx]}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                <span>100% Student Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
