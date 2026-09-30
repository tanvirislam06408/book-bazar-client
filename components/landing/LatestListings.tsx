"use client";

import React, { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { SAMPLE_BOOKS } from "@/lib/sample-data";
import { BookCoverPlaceholder } from "./BookCoverPlaceholder";
import {
  MapPin,
  Phone,
  MessageCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export function LatestListings() {
  const { lang, t } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredBooks =
    selectedFilter === "all"
      ? SAMPLE_BOOKS
      : SAMPLE_BOOKS.filter((b) => b.category === selectedFilter);

  const getConditionColor = (cond: string) => {
    switch (cond) {
      case "Like New":
      case "নতুন মতো":
        return "bg-emerald-100 text-emerald-800 border-emerald-200";
      case "Good":
      case "ভালো অবস্থা":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Highlighted":
      case "দাগানো আছে":
        return "bg-amber-100 text-amber-800 border-amber-200";
      default:
        return "bg-slate-100 text-slate-800 border-slate-200";
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200/80" id="listings">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-100/90 text-blue-800 text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" aria-hidden="true" />
              <span>{t.listings.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {t.listings.title}
            </h2>
            <p className="mt-1 text-sm sm:text-base text-slate-600">
              {t.listings.subtitle}
            </p>
          </div>

          <a
            href="#listings"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-600 rounded px-1"
          >
            <span>{t.listings.viewAll}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </a>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none text-xs sm:text-sm">
          <button
            type="button"
            onClick={() => setSelectedFilter("all")}
            className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all cursor-pointer shrink-0 ${
              selectedFilter === "all"
                ? "bg-blue-600 text-white shadow-xs"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            {t.hero.allCategories}
          </button>
          <button
            type="button"
            onClick={() => setSelectedFilter("ssc-hsc")}
            className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all cursor-pointer shrink-0 ${
              selectedFilter === "ssc-hsc"
                ? "bg-blue-600 text-white shadow-xs"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            {lang === "bn" ? "এসএসসি ও এইচএসসি" : "SSC & HSC"}
          </button>
          <button
            type="button"
            onClick={() => setSelectedFilter("admission")}
            className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all cursor-pointer shrink-0 ${
              selectedFilter === "admission"
                ? "bg-blue-600 text-white shadow-xs"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            {lang === "bn" ? "ভর্তি প্রস্তুতি" : "Admission Prep"}
          </button>
          <button
            type="button"
            onClick={() => setSelectedFilter("university")}
            className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all cursor-pointer shrink-0 ${
              selectedFilter === "university"
                ? "bg-blue-600 text-white shadow-xs"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            {lang === "bn" ? "ভার্সিটি বই" : "University Textbooks"}
          </button>
          <button
            type="button"
            onClick={() => setSelectedFilter("bcs-job")}
            className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all cursor-pointer shrink-0 ${
              selectedFilter === "bcs-job"
                ? "bg-blue-600 text-white shadow-xs"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            {lang === "bn" ? "বিসিএস ও চাকরি" : "BCS & Job Prep"}
          </button>
        </div>

        {/* 8 Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredBooks.map((book) => {
            const title = lang === "bn" ? book.titleBn : book.titleEn;
            const author = lang === "bn" ? book.authorBn : book.authorEn;
            const condition = lang === "bn" ? book.conditionBn : book.conditionEn;
            const district = lang === "bn" ? book.districtBn : book.districtEn;
            const area = lang === "bn" ? book.areaBn : book.areaEn;
            const campus = lang === "bn" ? book.sellerCampusBn : book.sellerCampusEn;
            const badge = lang === "bn" ? book.badgeBn : book.badgeEn;

            return (
              <article
                key={book.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
              >
                {/* Card Top: Cover Placeholder & Quick Badges */}
                <div className="p-4 pb-0 relative">
                  <div className="relative">
                    <BookCoverPlaceholder
                      title={title}
                      author={author}
                      category={book.category}
                      subjectCode={book.subjectCode}
                      gradientClass={book.coverBg}
                    />

                    {/* Discount Badge */}
                    {badge && (
                      <div className="absolute top-2.5 right-2.5 bg-emerald-600 text-white text-[11px] font-extrabold px-2 py-0.5 rounded-md shadow-sm">
                        {badge}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Condition & Category Tag */}
                    <div className="flex items-center gap-1.5 mb-2">
                      <span
                        className={`text-[11px] font-semibold px-2 py-0.5 rounded border ${getConditionColor(
                          condition
                        )}`}
                      >
                        {condition}
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium truncate">
                        {campus}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-slate-900 text-base leading-snug line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {title}
                    </h3>

                    {/* Author */}
                    <p className="text-xs text-slate-600 mt-1 font-medium truncate">
                      {author}
                    </p>
                  </div>

                  {/* Location & Pricing */}
                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-2.5">
                    {/* Location Pin */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-600">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
                      <span className="truncate">{area}, {district}</span>
                    </div>

                    {/* Price Block */}
                    <div className="flex items-baseline justify-between">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-lg sm:text-xl font-extrabold text-emerald-700">
                          ৳{book.price}
                        </span>
                        <span className="text-xs text-slate-400 line-through font-normal">
                          ৳{book.originalPrice}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-500 font-medium bg-slate-100 px-1.5 py-0.5 rounded">
                        {t.listings.directDeal}
                      </span>
                    </div>

                    {/* Action Contact Buttons */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <a
                        href={`https://wa.me/${book.whatsapp}?text=Hello, I am interested in your book: ${encodeURIComponent(title)} listed on BoiBazar.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200 transition-colors cursor-pointer"
                        aria-label={`WhatsApp seller for ${title}`}
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                        <span>{t.listings.contactWhatsApp}</span>
                      </a>

                      <a
                        href={`tel:${book.phone}`}
                        className="inline-flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-800 text-xs font-bold border border-blue-200 transition-colors cursor-pointer"
                        aria-label={`Call seller for ${title}`}
                      >
                        <Phone className="w-3.5 h-3.5 text-blue-600" aria-hidden="true" />
                        <span>{t.listings.contactCall}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom View All Link */}
        <div className="mt-10 text-center">
          <a
            href="#listings"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white hover:bg-slate-50 border-2 border-blue-600 text-blue-700 font-bold text-sm shadow-xs transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <span>{t.listings.viewAll} (500+ Books Listed)</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
