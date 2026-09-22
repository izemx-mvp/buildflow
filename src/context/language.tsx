import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Language } from "@/content/site";

type LanguageContextValue = { language: Language; setLanguage: (language: Language) => void };
const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr");
  useEffect(() => {
    const saved = window.localStorage.getItem("buildflow-language");
    if (saved === "fr" || saved === "en") setLanguage(saved);
  }, []);
  useEffect(() => { window.localStorage.setItem("buildflow-language", language); document.documentElement.lang = language; }, [language]);
  const value = useMemo(() => ({ language, setLanguage }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("useLanguage must be used inside LanguageProvider");
  return value;
}
