"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n";
import {
  BookOpen,
  GraduationCap,
  Briefcase,
  Library,
  BookMarked,
  Sparkles,
  Baby,
  Layers,
  ArrowUpRight,
} from "lucide-react";

export function CategoryShortcuts() {
  const { t } = useLanguage();

  const getIcon = (id: string) => {
    const iconClass = "w-6 h-6 transition-transform duration-200 group-hover:scale-110";
    switch (id) {
      case "ssc-hsc":
        return <BookOpen className={`${iconClass} text-blue-600`} aria-hidden="true" />;
      case "admission":
        return <GraduationCap className={`${iconClass} text-emerald-600`} aria-hidden="true" />;
      case "bcs-job":
        return <Briefcase className={`${iconClass} text-amber-600`} aria-hidden="true" />;
      case "university":
        return <Library className={`${iconClass} text-indigo-600`} aria-hidden="true" />;
      case "novels":
        return <BookMarked className={`${iconClass} text-rose-600`} aria-hidden="true" />;
      case "islamic":
        return <Sparkles className={`${iconClass} text-teal-600`} aria-hidden="true" />;
      case "kids":
        return <Baby className={`${iconClass} text-pink-600`} aria-hidden="true" />;
      case "others":
      default:
        return <Layers className={`${iconClass} text-slate-600`} aria-hidden="true" />;
    }
  };

  const getBgClass = (id: string) => {
    switch (id) {
      case "ssc-hsc":
        return "bg-blue-50 border-blue-100 hover:border-blue-300";
      case "admission":
        return "bg-emerald-50 border-emerald-100 hover:border-emerald-300";
      case "bcs-job":
        return "bg-amber-50 border-amber-100 hover:border-amber-300";
      case "university":
        return "bg-indigo-50 border-indigo-100 hover:border-indigo-300";
      case "novels":
        return "bg-rose-50 border-rose-100 hover:border-rose-300";
      case "islamic":
        return "bg-teal-50 border-teal-100 hover:border-teal-300";
      case "kids":
        return "bg-pink-50 border-pink-100 hover:border-pink-300";
      case "others":
      default:
        return "bg-slate-50 border-slate-200 hover:border-slate-300";
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-100" id="categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {t.categories.title}
            </h2>
            <p className="mt-1 text-sm sm:text-base text-slate-600">
              {t.categories.subtitle}
            </p>
          </div>
        </div>

        {/* Categories Grid (2 cols on mobile, 4 cols on tablet and desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {t.categories.items.map((category) => (
            <a
              key={category.id}
              href="#listings"
              className={`group relative p-4 sm:p-5 rounded-xl border ${getBgClass(
                category.id
              )} transition-all duration-200 hover:shadow-sm transform hover:-translate-y-0.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-600`}
              aria-label={`Browse ${category.name}`}
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-lg bg-white/90 shadow-2xs flex items-center justify-center border border-white">
                  {getIcon(category.id)}
                </div>
                <ArrowUpRight
                  className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors"
                  aria-hidden="true"
                />
              </div>

              <div className="mt-3.5">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {category.name}
                </h3>
                <p className="mt-1 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {category.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
