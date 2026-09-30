"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n";
import { PlusCircle, Sparkles, CheckCircle2 } from "lucide-react";

export function FinalCTA() {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-16 bg-slate-50 border-t border-slate-200" id="sell">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-700 to-teal-800 rounded-3xl p-8 sm:p-12 text-center text-white shadow-lg relative overflow-hidden">
          {/* Subtle background decoration */}
          <div
            className="absolute -bottom-12 -right-12 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -top-12 -left-12 w-64 h-64 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-xs text-emerald-200 text-xs font-semibold mb-4 border border-white/20">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              <span>100% Free Book Classifieds</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
              {t.finalCta.title}
            </h2>

            <p className="mt-3 text-sm sm:text-base text-emerald-100 leading-relaxed">
              {t.finalCta.subtitle}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#sell"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-emerald-50 active:bg-emerald-100 text-emerald-900 font-extrabold text-base sm:text-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-800"
              >
                <PlusCircle className="w-5 h-5 text-emerald-700" aria-hidden="true" />
                <span>{t.finalCta.button}</span>
              </a>
            </div>

            <p className="mt-4 text-xs text-emerald-200/90 font-medium flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{t.finalCta.subtext}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
