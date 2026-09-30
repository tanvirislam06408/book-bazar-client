"use client";

import React, { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { BookOpen, Globe, Menu, X, Plus, User, ShieldCheck, Sparkles } from "lucide-react";

export function Navbar() {
  const { lang, t, toggleLang } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAFBFD]/95 backdrop-blur-md border-b border-indigo-100/80 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Brand / Logo */}
          <a
            href="#"
            className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 rounded-2xl p-1 group cursor-pointer"
            aria-label={`${t.nav.brand} - Home`}
          >
            {/* Friendly Education App Icon */}
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-700 flex items-center justify-center text-white shadow-sm border-b-2 border-indigo-900 group-hover:scale-105 transition-transform">
              <BookOpen className="w-6 h-6 text-amber-300" aria-hidden="true" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-2xl sm:text-2xl font-extrabold tracking-tight text-indigo-950 leading-none">
                  {t.nav.brand}
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-200">
                  <Sparkles className="w-2.5 h-2.5 mr-0.5 text-amber-600" aria-hidden="true" />
                  Free
                </span>
              </div>
              <span className="text-xs font-semibold text-slate-500 tracking-normal mt-0.5">
                {t.nav.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav
            className="hidden md:flex items-center gap-1 text-sm font-bold text-slate-700 bg-white px-3 py-1.5 rounded-full border border-indigo-100/80 shadow-2xs"
            aria-label="Main navigation"
          >
            <a
              href="#listings"
              className="px-4 py-1.5 rounded-full hover:bg-indigo-50 hover:text-indigo-700 transition-colors duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-600"
            >
              {t.nav.browse}
            </a>
            <a
              href="#how-it-works"
              className="px-4 py-1.5 rounded-full hover:bg-indigo-50 hover:text-indigo-700 transition-colors duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-600"
            >
              {t.nav.howItWorks}
            </a>
            <a
              href="#safety"
              className="px-4 py-1.5 rounded-full hover:bg-indigo-50 hover:text-indigo-700 transition-colors duration-150 cursor-pointer flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" aria-hidden="true" />
              {t.nav.safety}
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              type="button"
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-300 active:scale-95 transition-all cursor-pointer shadow-2xs focus:outline-none focus:ring-2 focus:ring-indigo-600"
              aria-label={`Switch language to ${lang === "bn" ? "English" : "Bangla"}`}
            >
              <Globe className="w-3.5 h-3.5 text-indigo-600" aria-hidden="true" />
              <span>{t.nav.langSwitch}</span>
            </button>

            {/* Login Button */}
            <button
              type="button"
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-slate-700 hover:text-indigo-700 hover:bg-indigo-50/80 rounded-xl transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-600"
            >
              <User className="w-4 h-4 text-slate-500" aria-hidden="true" />
              <span>{t.nav.login}</span>
            </button>

            {/* Primary CTA (Tactile Duolingo-style Sell Button) */}
            <a
              href="#sell"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 active:translate-y-0.5 text-white text-sm font-extrabold shadow-sm border-b-4 border-emerald-800 transition-all duration-100 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
            >
              <Plus className="w-4 h-4 stroke-[3]" aria-hidden="true" />
              <span>{t.nav.sellCta}</span>
            </a>
          </div>

          {/* Mobile Menu & Lang Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={toggleLang}
              className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer shadow-2xs"
              aria-label={`Switch language to ${lang === "bn" ? "English" : "Bangla"}`}
            >
              <Globe className="w-3.5 h-3.5 text-indigo-600" aria-hidden="true" />
              <span>{lang === "bn" ? "EN" : "বাং"}</span>
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-2xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-600 cursor-pointer shadow-2xs"
              aria-label={isMobileMenuOpen ? t.nav.menuClose : t.nav.menuOpen}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-indigo-100 bg-[#FAFBFD] px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-1 text-base font-bold text-slate-800">
            <a
              href="#listings"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-indigo-50 text-slate-800 hover:text-indigo-700 transition-colors cursor-pointer"
            >
              {t.nav.browse}
            </a>
            <a
              href="#how-it-works"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-indigo-50 text-slate-800 hover:text-indigo-700 transition-colors cursor-pointer"
            >
              {t.nav.howItWorks}
            </a>
            <a
              href="#safety"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-indigo-50 text-slate-800 hover:text-indigo-700 transition-colors cursor-pointer flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" aria-hidden="true" />
              {t.nav.safety}
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-white border-2 border-slate-200 text-slate-800 font-bold hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <User className="w-4 h-4 text-slate-600" aria-hidden="true" />
              {t.nav.login}
            </button>
            <a
              href="#sell"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold shadow-sm border-b-4 border-emerald-800 transition-colors cursor-pointer"
            >
              <Plus className="w-5 h-5 stroke-[3]" aria-hidden="true" />
              {t.nav.sellCta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
