"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n";
import { BookMarked, Heart, AlertTriangle } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          {/* Col 1: Brand & About */}
          <div className="lg:col-span-1 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <BookMarked className="w-5 h-5" aria-hidden="true" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {t.nav.brand}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t.footer.aboutText}
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-3">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#listings" className="hover:text-blue-400 transition-colors cursor-pointer">
                  {t.nav.browse}
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-blue-400 transition-colors cursor-pointer">
                  {t.nav.howItWorks}
                </a>
              </li>
              <li>
                <a href="#safety" className="hover:text-blue-400 transition-colors cursor-pointer">
                  {t.nav.safety}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-blue-400 transition-colors cursor-pointer">
                  {t.nav.faq}
                </a>
              </li>
              <li>
                <a href="#sell" className="hover:text-blue-400 transition-colors cursor-pointer">
                  {t.nav.sellCta}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Categories */}
          <div>
            <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-3">
              {t.footer.categoriesTitle}
            </h3>
            <ul className="space-y-2 text-xs">
              {t.categories.items.slice(0, 5).map((cat) => (
                <li key={cat.id}>
                  <a href="#listings" className="hover:text-blue-400 transition-colors cursor-pointer">
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Trust, Support & Policies */}
          <div>
            <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-3">
              {t.footer.safetyTitle}
            </h3>
            <ul className="space-y-2 text-xs">
              {t.footer.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-blue-400 transition-colors cursor-pointer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Physical Books Strict Compliance Banner */}
        <div className="mt-8 p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-start gap-3 text-xs text-amber-200/90 leading-relaxed">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
          <p>{t.footer.policyNote}</p>
        </div>

        {/* Copyright & Credits */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {t.nav.brand}. {t.footer.rights}</p>
          <p className="flex items-center gap-1">
            <span>Built with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" aria-hidden="true" />
            <span>for university & college students</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
