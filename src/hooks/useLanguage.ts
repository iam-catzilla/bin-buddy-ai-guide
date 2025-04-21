
import { useState, useEffect } from "react";

const LANG_KEY = "binbuddy_language";
const DEFAULT = "en";

export const supportedLanguages: { [code: string]: string } = {
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  hi: "हिन्दी",
  zh: "中文",
  ar: "العربية",
  ja: "日本語",
  ru: "Русский",
  pt: "Português",
  it: "Italiano",
};

export function useLanguage() {
  const [lang, setLang] = useState<string>(() => {
    return localStorage.getItem(LANG_KEY) || DEFAULT;
  });

  useEffect(() => {
    localStorage.setItem(LANG_KEY, lang);
  }, [lang]);

  const set = (code: string) => {
    setLang(code);
    localStorage.setItem(LANG_KEY, code);
    window.location.reload();
  };

  return { lang, set, supported: supportedLanguages };
}
