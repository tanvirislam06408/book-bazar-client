"use client";

import React, { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { DISTRICTS } from "@/lib/sample-data";
import {
  Search,
  MapPin,
  Tag,
  CheckCircle2,
  ArrowRight,
  PlusCircle,
  Sparkles,
  BookOpen,
  GraduationCap,
} from "lucide-react";

export function Hero() {
  const { lang, t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDistrict, setSelectedDistrict] = useState("all");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const listingsEl = document.getElementById("listings");
    if (listingsEl) {
      listingsEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleTagClick = (tag: string) => {
    setSearchTerm(tag);
    const listingsEl = document.getElementById("listings");
    if (listingsEl) {
      listingsEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-[#FAFBFD] pt-6 pb-16 sm:pt-12 sm:pb-24 overflow-hidden">
      {/* Friendly Education SVG Background Shapes & Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Soft Warm Ambient Blobs */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-indigo-100/50 rounded-full blur-3xl" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-100/40 rounded-full blur-2xl" />
        <div className="absolute top-40 right-10 w-80 h-80 bg-emerald-100/30 rounded-full blur-2xl" />

        {/* Playful Floating SVG: Left Side Book & Sparkles */}
        <svg
          className="absolute top-12 left-4 sm:left-12 w-16 h-16 sm:w-20 sm:h-20 text-indigo-200/80 -rotate-12 hidden md:block"
          viewBox="0 0 100 100"
          fill="none"
        >
          {/* Stylized Open Book */}
          <path
            d="M20 30 C 35 25, 48 32, 50 35 C 52 32, 65 25, 80 30 L 80 75 C 65 70, 52 77, 50 80 C 48 77, 35 70, 20 75 Z"
            fill="#E0E7FF"
            stroke="#4338CA"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path d="M50 35 L 50 80" stroke="#4338CA" strokeWidth="4" />
          <path d="M28 42 C 36 39, 44 43, 46 45" stroke="#818CF8" strokeWidth="3" strokeLinecap="round" />
          <path d="M28 52 C 36 49, 44 53, 46 55" stroke="#818CF8" strokeWidth="3" strokeLinecap="round" />
        </svg>

        {/* Playful Floating SVG: Right Side Pencil with Eraser */}
        <svg
          className="absolute top-16 right-6 sm:right-16 w-14 h-14 sm:w-18 sm:h-18 text-amber-400 rotate-12 hidden md:block"
          viewBox="0 0 100 100"
          fill="none"
        >
          {/* Pencil Body */}
          <rect x="35" y="25" width="22" height="48" rx="4" fill="#FBBF24" stroke="#D97706" strokeWidth="4" />
          {/* Eraser */}
          <rect x="35" y="15" width="22" height="10" rx="3" fill="#F472B6" stroke="#DB2777" strokeWidth="3" />
          <rect x="35" y="22" width="22" height="5" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="2" />
          {/* Tip */}
          <polygon points="35,73 57,73 46,90" fill="#FDE68A" stroke="#D97706" strokeWidth="3" />
          <polygon points="42,84 50,84 46,90" fill="#1E293B" />
        </svg>

        {/* Cute Floating Celebration Stars */}
        <svg
          className="absolute top-8 right-1/4 w-8 h-8 text-amber-400 fill-amber-400 hidden lg:block"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
        <svg
          className="absolute top-36 left-1/4 w-6 h-6 text-emerald-400 fill-emerald-400 hidden lg:block"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l2.4 4.8 5.3.8-3.8 3.7.9 5.3-4.8-2.5-4.8 2.5.9-5.3-3.8-3.7 5.3-.8L12 2z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Friendly Student Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border-2 border-indigo-200 text-indigo-900 text-xs sm:text-sm font-extrabold mb-5 shadow-2xs">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <Sparkles className="w-4 h-4 text-amber-500" aria-hidden="true" />
            <span>{t.hero.badge}</span>
          </div>

          {/* Big Bold Playful Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.2] sm:leading-[1.15]">
            {t.hero.titleStart}
            <span className="relative inline-block text-indigo-600 px-2">
              <span className="relative z-10">{t.hero.titleHighlight}</span>
              <span
                className="absolute left-0 bottom-1.5 w-full h-3 sm:h-4 bg-amber-300/70 rounded-full -z-0 transform -rotate-1"
                aria-hidden="true"
              />
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
        </div>

        {/* Big Floating Search Bar (Friendly Rounded Card with Depth) */}
        <div className="mt-8 sm:mt-12 max-w-4xl mx-auto">
          <form
            onSubmit={handleSearchSubmit}
            className="bg-white p-3 sm:p-4 rounded-3xl shadow-lg border-2 border-indigo-100 flex flex-col md:flex-row gap-3 items-stretch relative"
            role="search"
            aria-label="Search textbooks and study materials"
          >
            {/* Input Field */}
            <div className="flex-1 relative flex items-center min-w-[240px]">
              <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center absolute left-2 pointer-events-none">
                <Search className="w-4 h-4 text-indigo-600" aria-hidden="true" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={t.hero.searchPlaceholder}
                className="w-full pl-13 pr-4 py-3.5 bg-slate-50/80 hover:bg-slate-100/80 focus:bg-white text-slate-900 placeholder:text-slate-400 rounded-2xl border-2 border-transparent focus:border-indigo-500 focus:outline-none text-sm sm:text-base font-semibold transition-all"
                aria-label="Search query"
              />
            </div>

            {/* Category Dropdown */}
            <div className="relative flex items-center min-w-[160px] md:w-48">
              <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center absolute left-2.5 pointer-events-none">
                <Tag className="w-4 h-4 text-amber-600" aria-hidden="true" />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-12 pr-8 py-3.5 bg-slate-50/80 hover:bg-slate-100 focus:bg-white text-slate-800 text-sm font-bold rounded-2xl border-2 border-transparent focus:border-indigo-500 focus:outline-none appearance-none cursor-pointer transition-all"
                aria-label="Filter by category"
              >
                <option value="all">{t.hero.allCategories}</option>
                {t.categories.items.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
              <div
                className="absolute right-3.5 pointer-events-none border-t-4 border-t-slate-500 border-x-4 border-x-transparent"
                aria-hidden="true"
              />
            </div>

            {/* District Dropdown */}
            <div className="relative flex items-center min-w-[160px] md:w-52">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center absolute left-2.5 pointer-events-none">
                <MapPin className="w-4 h-4 text-emerald-600" aria-hidden="true" />
              </div>
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="w-full pl-12 pr-8 py-3.5 bg-slate-50/80 hover:bg-slate-100 focus:bg-white text-slate-800 text-sm font-bold rounded-2xl border-2 border-transparent focus:border-indigo-500 focus:outline-none appearance-none cursor-pointer transition-all"
                aria-label="Filter by district"
              >
                {DISTRICTS.map((dist) => (
                  <option key={dist.id} value={dist.id}>
                    {lang === "bn" ? dist.nameBn : dist.nameEn}
                  </option>
                ))}
              </select>
              <div
                className="absolute right-3.5 pointer-events-none border-t-4 border-t-slate-500 border-x-4 border-x-transparent"
                aria-hidden="true"
              />
            </div>

            {/* Search Submit CTA */}
            <button
              type="submit"
              className="w-full md:w-auto px-7 py-3.5 bg-indigo-600 hover:bg-indigo-500 active:translate-y-0.5 text-white font-extrabold rounded-2xl flex items-center justify-center gap-2 shadow-sm border-b-4 border-indigo-900 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-600 shrink-0"
            >
              <Search className="w-4 h-4 stroke-[3]" aria-hidden="true" />
              <span>{t.hero.findBtn}</span>
            </button>
          </form>

          {/* Popular Tag Pills */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-slate-600">
            <span className="text-slate-500 font-bold">{t.hero.popularSearches}</span>
            {t.hero.popularTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => handleTagClick(tag)}
                className="px-3 py-1 bg-white hover:bg-indigo-50 text-slate-700 hover:text-indigo-700 rounded-full border border-slate-200 shadow-2xs transition-colors cursor-pointer"
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Action CTAs (Tactile Dual Buttons) */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#listings"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 active:translate-y-0.5 text-white font-extrabold text-base shadow-sm border-b-4 border-indigo-900 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-600"
            >
              <BookOpen className="w-5 h-5 text-amber-300" aria-hidden="true" />
              <span>{t.hero.findBtn}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>

            <a
              href="#sell"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-white hover:bg-emerald-50 active:translate-y-0.5 border-2 border-emerald-600 text-emerald-800 font-extrabold text-base shadow-xs border-b-4 border-emerald-700 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-600"
            >
              <PlusCircle className="w-5 h-5 text-emerald-600" aria-hidden="true" />
              <span>{t.hero.sellBtn}</span>
            </a>
          </div>

          {/* Small Trust Line */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-600 font-semibold bg-white/70 backdrop-blur-xs py-2 px-4 rounded-full max-w-max mx-auto border border-indigo-100 shadow-2xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
            <span>{t.hero.trustBadge}</span>
          </div>
        </div>

        {/* Visual Showcase: Colorful CSS Book-Cover Cards Strip */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-indigo-100/60">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">
            <GraduationCap className="w-4 h-4 text-indigo-500" aria-hidden="true" />
            <span>Popular Used Textbooks Listed Right Now</span>
          </div>

          {/* Mini CSS Book Showcase Strip (Lightweight, fast-loading, student book covers) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
            <div className="p-3 bg-white rounded-2xl border-2 border-indigo-100 shadow-2xs flex items-center gap-3 hover:-translate-y-1 transition-transform cursor-pointer">
              <div className="w-10 h-14 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-800 flex flex-col justify-between p-1.5 shadow-xs shrink-0 text-[8px] text-white font-bold">
                <span className="text-amber-300">PHY</span>
                <span className="truncate">HSC</span>
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-bold text-slate-900 truncate">HSC Physics 1st</h4>
                <p className="text-[11px] font-extrabold text-emerald-700">৳280 <span className="text-[10px] text-slate-400 line-through">৳580</span></p>
                <span className="text-[9px] font-semibold text-indigo-600">Nilkhet, Dhaka</span>
              </div>
            </div>

            <div className="p-3 bg-white rounded-2xl border-2 border-emerald-100 shadow-2xs flex items-center gap-3 hover:-translate-y-1 transition-transform cursor-pointer">
              <div className="w-10 h-14 rounded-lg bg-gradient-to-br from-emerald-600 to-teal-800 flex flex-col justify-between p-1.5 shadow-xs shrink-0 text-[8px] text-white font-bold">
                <span className="text-amber-300">MED</span>
                <span className="truncate">BIO</span>
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-bold text-slate-900 truncate">Medical Booster</h4>
                <p className="text-[11px] font-extrabold text-emerald-700">৳320 <span className="text-[10px] text-slate-400 line-through">৳720</span></p>
                <span className="text-[9px] font-semibold text-emerald-600">Farmgate, Dhaka</span>
              </div>
            </div>

            <div className="p-3 bg-white rounded-2xl border-2 border-amber-100 shadow-2xs flex items-center gap-3 hover:-translate-y-1 transition-transform cursor-pointer">
              <div className="w-10 h-14 rounded-lg bg-gradient-to-br from-amber-600 to-red-800 flex flex-col justify-between p-1.5 shadow-xs shrink-0 text-[8px] text-white font-bold">
                <span className="text-white">BCS</span>
                <span className="truncate">MP3</span>
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-bold text-slate-900 truncate">BCS Bangla MP3</h4>
                <p className="text-[11px] font-extrabold text-emerald-700">৳220 <span className="text-[10px] text-slate-400 line-through">৳490</span></p>
                <span className="text-[9px] font-semibold text-amber-600">Chawkbazar, CTG</span>
              </div>
            </div>

            <div className="p-3 bg-white rounded-2xl border-2 border-purple-100 shadow-2xs flex items-center gap-3 hover:-translate-y-1 transition-transform cursor-pointer">
              <div className="w-10 h-14 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-900 flex flex-col justify-between p-1.5 shadow-xs shrink-0 text-[8px] text-white font-bold">
                <span className="text-amber-300">MATH</span>
                <span className="truncate">CUET</span>
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-bold text-slate-900 truncate">Calculus 10th Ed</h4>
                <p className="text-[11px] font-extrabold text-emerald-700">৳350 <span className="text-[10px] text-slate-400 line-through">৳850</span></p>
                <span className="text-[9px] font-semibold text-purple-600">CUET Campus</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
