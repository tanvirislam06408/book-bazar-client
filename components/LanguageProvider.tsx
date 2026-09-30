"use client";

import React, { useSyncExternalStore } from "react";
import { Language, LanguageContext, translations } from "@/lib/i18n";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("boibazar_lang_change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("boibazar_lang_change", callback);
  };
}

function getSnapshot(): Language {
  if (typeof window === "undefined") return "bn";
  const saved = localStorage.getItem("boibazar_lang");
  if (saved === "en" || saved === "bn") return saved;
  return "bn";
}

function getServerSnapshot(): Language {
  return "bn";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleLang = () => {
    const next = lang === "bn" ? "en" : "bn";
    localStorage.setItem("boibazar_lang", next);
    window.dispatchEvent(new Event("boibazar_lang_change"));
  };

  const setLanguage = (newLang: Language) => {
    localStorage.setItem("boibazar_lang", newLang);
    window.dispatchEvent(new Event("boibazar_lang_change"));
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        t: translations[lang],
        toggleLang,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
