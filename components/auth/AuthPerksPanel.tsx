"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n";
import {
  BookOpen,
  Sparkles,
  ShieldCheck,
  Zap,
  GraduationCap,
  Users,
  CheckCircle2,
  MapPin,
  TrendingDown,
} from "lucide-react";

export function AuthPerksPanel() {
  const { lang, t } = useLanguage();

  const perkIcons = [
    <Zap key="1" className="w-5 h-5 text-amber-300" />,
    <Users key="2" className="w-5 h-5 text-emerald-300" />,
    <TrendingDown key="3" className="w-5 h-5 text-indigo-200" />,
  ];

  return (
    <div className="relative hidden lg:flex flex-col justify-between p-10 xl:p-12 rounded-3xl bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-950 text-white shadow-xl overflow-hidden min-h-[640px] border border-indigo-700/50">
      {/* Background Decorative Blur Spheres */}
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-orange-500/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

      {/* Top Section: Brand & Tagline */}
      <div className="relative z-10">
        <a
          href="/"
          className="inline-flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-2xl p-1"
        >
          <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-inner group-hover:scale-105 transition-transform">
            <BookOpen className="w-6 h-6 text-amber-300" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-extrabold tracking-tight text-white">
                {t.nav.brand}
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                <Sparkles className="w-2.5 h-2.5 mr-0.5" />
                {lang === "bn" ? "১০০% ফ্রি" : "100% Free"}
              </span>
            </div>
            <p className="text-xs text-indigo-200 font-medium">{t.nav.tagline}</p>
          </div>
        </a>

        {/* Dynamic Catchphrase */}
        <div className="mt-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/30 border border-indigo-400/30 text-xs font-bold text-amber-300 backdrop-blur-sm">
            <GraduationCap className="w-4 h-4 text-amber-300" />
            <span>{lang === "bn" ? "🇧🇩 দেশের বৃহত্তম শিক্ষার্থী বই নেটওয়ার্ক" : "🇧🇩 BD's Largest Student Book Network"}</span>
          </div>
          <h2 className="text-3xl xl:text-4xl font-extrabold tracking-tight leading-tight text-white">
            {lang === "bn" ? (
              <>
                পড়াশোনার খরচ বাঁচান, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-amber-200">
                  সহপাঠীদের সাথে বই
                </span>{" "}
                বিনিময় করুন
              </>
            ) : (
              <>
                Cut study costs, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-amber-200">
                  trade textbooks
                </span>{" "}
                peer-to-peer.
              </>
            )}
          </h2>
          <p className="text-sm text-indigo-200/90 leading-relaxed max-w-md">
            {lang === "bn"
              ? "কোনো অতিরিক্ত চার্জ ছাড়া নিজের কলেজ ও ভার্সিটির সহপাঠীদের সাথে সরাসরি দেখা করে বই কেনাবেচা করুন।"
              : "Zero commission. Meet classmates safely on campus, verify the pages, and pay cash in hand."}
          </p>
        </div>
      </div>

      {/* Middle Section: Highlights / Value Props */}
      <div className="relative z-10 my-8 space-y-4">
        {t.auth.perks.map((perk, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
          >
            <div className="p-2 rounded-xl bg-white/10 shrink-0 mt-0.5">
              {perkIcons[idx] || <CheckCircle2 className="w-5 h-5 text-amber-300" />}
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">{perk.title}</h4>
              <p className="text-xs text-indigo-200/80 leading-snug mt-0.5">
                {perk.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section: Student Testimonial & Badges */}
      <div className="relative z-10 pt-4 border-t border-indigo-700/60">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2 overflow-hidden">
              <div className="inline-block h-8 w-8 rounded-full ring-2 ring-indigo-900 bg-amber-400 text-indigo-950 text-xs font-extrabold flex items-center justify-center">
                TH
              </div>
              <div className="inline-block h-8 w-8 rounded-full ring-2 ring-indigo-900 bg-emerald-400 text-emerald-950 text-xs font-extrabold flex items-center justify-center">
                SB
              </div>
              <div className="inline-block h-8 w-8 rounded-full ring-2 ring-indigo-900 bg-indigo-300 text-indigo-950 text-xs font-extrabold flex items-center justify-center">
                RK
              </div>
            </div>
            <div className="text-xs">
              <p className="font-extrabold text-white">
                {lang === "bn" ? "৫০,০০০+ শিক্ষার্থী" : "50,000+ Students"}
              </p>
              <p className="text-indigo-200 text-[11px] flex items-center gap-1">
                <MapPin className="w-3 h-3 text-amber-400" />
                {lang === "bn" ? "৬৪ জেলায় সক্রিয়" : "Active in 64 Districts"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 text-xs font-bold text-emerald-300 bg-emerald-500/20 border border-emerald-400/30 px-3 py-1.5 rounded-full">
            <ShieldCheck className="w-4 h-4 text-emerald-300" />
            <span>{lang === "bn" ? "ভেরিফাইড ডিল" : "Verified Deals"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
