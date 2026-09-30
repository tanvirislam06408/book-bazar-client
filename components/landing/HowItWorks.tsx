"use client";

import React, { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import {
  Search,
  MessageCircle,
  HandCoins,
  Camera,
  Users,
  Banknote,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export function HowItWorks() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"buyers" | "sellers">("buyers");

  const buyerIcons = [
    <Search className="w-6 h-6 text-blue-600" aria-hidden="true" key="search" />,
    <MessageCircle className="w-6 h-6 text-emerald-600" aria-hidden="true" key="msg" />,
    <HandCoins className="w-6 h-6 text-indigo-600" aria-hidden="true" key="cash" />,
  ];

  const sellerIcons = [
    <Camera className="w-6 h-6 text-blue-600" aria-hidden="true" key="cam" />,
    <Users className="w-6 h-6 text-emerald-600" aria-hidden="true" key="usr" />,
    <Banknote className="w-6 h-6 text-indigo-600" aria-hidden="true" key="banknote" />,
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-100" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" aria-hidden="true" />
            <span>{t.howItWorks.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.howItWorks.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            {t.howItWorks.subtitle}
          </p>

          {/* Switcher Tabs */}
          <div className="mt-6 inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200">
            <button
              type="button"
              onClick={() => setActiveTab("buyers")}
              className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all cursor-pointer ${
                activeTab === "buyers"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {t.howItWorks.tabBuyers}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("sellers")}
              className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all cursor-pointer ${
                activeTab === "sellers"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {t.howItWorks.tabSellers}
            </button>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {(activeTab === "buyers" ? t.howItWorks.buyers : t.howItWorks.sellers).map(
            (step, idx) => (
              <div
                key={step.step}
                className="relative bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between hover:shadow-sm transition-all"
              >
                {/* Step Number + Icon */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-extrabold text-blue-600/30 font-mono">
                      {step.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-white shadow-2xs border border-slate-200/80 flex items-center justify-center">
                      {activeTab === "buyers" ? buyerIcons[idx] : sellerIcons[idx]}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-blue-700">
                  <span>Step {idx + 1} of 3</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
