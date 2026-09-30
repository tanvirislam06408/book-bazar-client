"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n";
import { ShieldAlert, MapPin, Eye, Flag, ShieldCheck } from "lucide-react";

export function SafetyTips() {
  const { t } = useLanguage();

  const tipIcons = [
    <ShieldAlert className="w-5 h-5 text-red-600" aria-hidden="true" key="1" />,
    <MapPin className="w-5 h-5 text-blue-600" aria-hidden="true" key="2" />,
    <Eye className="w-5 h-5 text-amber-600" aria-hidden="true" key="3" />,
    <Flag className="w-5 h-5 text-purple-600" aria-hidden="true" key="4" />,
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-100" id="safety">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-50 via-slate-50 to-emerald-50/40 rounded-3xl p-6 sm:p-10 border border-blue-200/80 shadow-xs">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
              <span>{t.safety.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {t.safety.title}
            </h2>
            <p className="mt-1 text-sm sm:text-base text-slate-600">
              {t.safety.subtitle}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.safety.tips.map((tip, idx) => (
              <div
                key={tip.title}
                className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-start"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mb-3">
                  {tipIcons[idx]}
                </div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1.5">
                  {tip.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {tip.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
