
import React, { useState, useEffect } from "react";
import { getRandomFact } from "@/utils/randomFacts";
import { Package, Recycle } from "lucide-react";
export default function DidYouKnowBox() {
  const [fact, setFact] = useState(getRandomFact());

  useEffect(() => {
    const i = setInterval(() => setFact(getRandomFact()), 15000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="absolute bottom-8 left-8 max-w-[300px] bg-gradient-to-r from-accent to-blobGreen2 shadow-xl rounded-xl p-5 z-40 fade-in flex gap-3 items-center border border-accent-dark bg-opacity-95">
      <Recycle size={32} /> 
      <div>
        <div className="font-bold text-lg mb-1">Did you know?</div>
        <div className="text-sm font-medium">{fact}</div>
      </div>
    </div>
  );
}
