
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBlobs from "@/components/FloatingBlobs";
import { useLocation, useNavigate } from "react-router-dom";
import ResponseBox from "@/components/ResponseBox";
import DidYouKnowBox from "@/components/DidYouKnowBox";
import { ArrowLeft } from "lucide-react";
import { useGeminiAPI } from "@/hooks/useGeminiAPI";
import { useLanguage } from "@/hooks/useLanguage";

export default function Response() {
  const navigate = useNavigate();
  const { state } = useLocation();
  // Image was passed via nav state
  const file: File | null = state?.file || null;
  const [response, setResponse] = useState<string>("");
  const { lang } = useLanguage();
  const { askGemini, loading, error } = useGeminiAPI();

  useEffect(() => {
    if (!file) navigate("/");
    else {
      setResponse("");
      askGemini({ file, lang }).then(txt => txt && setResponse(txt));
    }
    // eslint-disable-next-line
  }, [file]);

  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900 transition-colors flex flex-col">
      <FloatingBlobs />
      <Header />
      <div className="flex-1 flex items-start justify-center relative w-full" style={{ minHeight: "60vh" }}>
        {/* Did You Know Box on the left bottom (absolute) */}
        <DidYouKnowBox />
        
        {/* Back Button - repositioned with better alignment */}
        <button
          className="absolute left-8 top-4 z-50 pill bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100 flex items-center whitespace-nowrap"
          onClick={() => navigate("/")}
        >
          <ArrowLeft size={20} className="mr-1" />
          Back to Home
        </button>
        
        {/* Response Box (centered, expanded) */}
        <div className="w-full flex flex-col items-center justify-center fade-in mt-16">
          <div className="w-full max-w-4xl px-3">
            <ResponseBox response={error ? ("❌ " + error) : response} image={file} loading={loading} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
