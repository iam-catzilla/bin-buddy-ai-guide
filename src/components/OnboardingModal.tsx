
import React, { useEffect, useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";

export default function OnboardingModal() {
  const { lang, set: setLang, supported } = useLanguage();
  const [visible, setVisible] = useState<boolean>(() => !localStorage.getItem("bb_seenOnboard"));
  useEffect(() => {
    if (!visible) localStorage.setItem("bb_seenOnboard", "y");
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-30 backdrop-blur-md flex items-center justify-center fade-in overflow-hidden">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-[92vw] md:w-[400px] flex flex-col gap-6 items-center relative card-glass">
        <h2 className="text-2xl font-bold">Welcome to Bin Buddy 👋</h2>
        <p className="text-gray-700 text-center">Select your preferred language to get personalized AI recycling instructions in your language.</p>
        <select
          value={lang}
          onChange={e => setLang(e.target.value)}
          className="rounded-full border-2 border-accent px-6 py-2 outline-accent text-lg font-semibold focus:border-accent focus:ring-accent"
        >
          {Object.entries(supported).map(([code, name]) => (
            <option key={code} value={code}>{name}</option>
          ))}
        </select>
        <button className="pill mt-4 w-full" onClick={() => setVisible(false)}>
          Continue
        </button>
      </div>
    </div>
  );
}
