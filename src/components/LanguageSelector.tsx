
import { useLanguage } from "@/hooks/useLanguage";
import { ChevronDown } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

export default function LanguageSelector() {
  const { lang, set, supported } = useLanguage();
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (btnRef.current && !btnRef.current.contains(e.target as any)) setOpen(false)
    }
    if (open) window.addEventListener("click", listener);
    return () => window.removeEventListener("click", listener);
  }, [open]);

  return (
    <div className="relative">
      <button
        ref={btnRef}
        className="pill flex items-center gap-2 bg-accent text-white px-4 py-1 text-base"
        onClick={() => setOpen((v) => !v)}
        aria-label="Select language"
      >
        {supported[lang]} <ChevronDown size={18} />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-white border rounded-xl shadow fade-in z-40 dark:bg-gray-800">
          {Object.entries(supported).map(([code, label]) => (
            <button
              key={code}
              className={`w-full text-left px-5 py-2 text-gray-800 hover:bg-accent/20 dark:text-white rounded-xl ${
                lang === code ? "font-bold" : ""
              }`}
              onClick={() => { set(code); setOpen(false); }}
            >{label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
