"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { DICT, type Lang } from "@/lib/i18n";
import type { Product } from "@/lib/products";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (typeof DICT)["en"];
  /** Translated name + description for a product. */
  pt: (p: Product) => { name: string; desc: string };
};

const LangCtx = createContext<Ctx | null>(null);
export const useLang = () => {
  const c = useContext(LangCtx);
  if (!c) throw new Error("useLang outside LangProvider");
  return c;
};

const KEY = "8am-lang";

export default function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // English by default; only a language the user picked themselves is restored
  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved === "es" || saved === "en") setLangState(saved);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem(KEY, l); } catch {}
  };

  const pt = (p: Product) => (lang === "es" ? p.es : { name: p.name, desc: p.desc });

  return <LangCtx.Provider value={{ lang, setLang, t: DICT[lang], pt }}>{children}</LangCtx.Provider>;
}
