
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
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-[92vw] md:w-[500px] flex flex-col gap-6 items-center relative card-glass">
        <h2 className="text-2xl font-bold">Welcome to Bin Buddy 👋</h2>
        <p className="text-gray-700 text-center">Select your preferred language to get personalized AI recycling instructions in your language.</p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full mt-2">
          {Object.entries(supported).map(([code, name]) => (
            <button
              key={code}
              onClick={() => setLang(code)}
              className={`px-4 py-3 rounded-lg transition-all text-center ${
                lang === code 
                  ? "bg-accent text-white font-bold" 
                  : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
              }`}
            >
              {name}
            </button>
          ))}
        </div>
        
        <button className="pill mt-4 w-full" onClick={() => setVisible(false)}>
          Continue
        </button>
      </div>
    </div>
  );
}
