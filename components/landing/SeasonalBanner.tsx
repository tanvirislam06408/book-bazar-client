"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n";
import { GraduationCap, ArrowRight, Flame } from "lucide-react";

export function SeasonalBanner() {
  const { t } = useLanguage();

  return (
    <section className="py-8 sm:py-12 bg-white" id="admission-special">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-blue-600 text-white p-6 sm:p-10 shadow-md">
          {/* Subtle geometric background shapes */}
          <div
            className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-blue-500 rounded-full opacity-50 blur-2xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-1/3 -mb-10 w-48 h-48 bg-emerald-500 rounded-full opacity-30 blur-2xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-700/80 border border-blue-400/30 text-amber-300 text-xs font-bold mb-3">
                <Flame className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
                <span>{t.seasonal.badge}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
                {t.seasonal.title}
              </h2>

              <p className="mt-2 text-sm sm:text-base text-blue-100 leading-relaxed">
                {t.seasonal.desc}
              </p>

              <div className="mt-3 text-xs text-blue-200 font-medium">
                ⚡ {t.seasonal.urgency}
              </div>
            </div>

            <div className="shrink-0">
              <a
                href="#listings"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-slate-950 font-bold text-sm sm:text-base shadow-sm hover:shadow transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-blue-600"
              >
                <GraduationCap className="w-5 h-5 text-slate-900" aria-hidden="true" />
                <span>{t.seasonal.cta}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
