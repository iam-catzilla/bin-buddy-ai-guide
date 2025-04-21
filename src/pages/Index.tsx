
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBlobs from "@/components/FloatingBlobs";
import OnboardingModal from "@/components/OnboardingModal";
import ImageUploadBox from "@/components/ImageUploadBox";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const [file, setFile] = useState<File | null>(null);
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <FloatingBlobs />
      <OnboardingModal />
      <Header />
      <main className="flex flex-col flex-1 items-center justify-start z-10 relative" style={{minHeight:"55vh"}}>
        {/* Upload Section */}
        <section className="w-full flex flex-col items-center z-10 mb-0 mt-4">
          <ImageUploadBox
            onFile={setFile}
            selected={file}
            onRemove={() => setFile(null)}
          />
          <button
            className="pill mt-6 w-full max-w-sm transition-all duration-150"
            disabled={!file}
            onClick={() => file && navigate("/response", { state: { file } })}
          >
            Bin it
          </button>
        </section>
        {/* Product Info Section */}
        <section className="mt-12 mb-4 w-full max-w-3xl text-center flex flex-col items-center card-glass py-8 px-6 fade-in z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-accent-dark">Why Choose Bin Buddy?</h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-4">
            Bin Buddy leverages AI to help you dispose, recycle, or reuse everyday items—quickly, accurately, and in your preferred language. 
            Snap a photo, and get clear, actionable instructions to respect the planet and reduce your waste, every single time.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-4">
            <div className="bg-accent px-6 py-3 rounded-xl text-white font-semibold shadow-md fade-in">Instant AI Image Analysis</div>
            <div className="bg-blobGreen1 px-6 py-3 rounded-xl text-accent-dark font-semibold shadow-md fade-in">Multi-language Support</div>
            <div className="bg-blobGreen4 px-6 py-3 rounded-xl text-accent-dark font-semibold shadow-md fade-in">Eco-friendly Guidance</div>
            <div className="bg-accent-dark px-6 py-3 rounded-xl text-white font-semibold shadow-md fade-in">Mobile Camera Ready</div>
          </div>
        </section>
        {/* Advantages Section */}
        <section className="mt-4 w-full max-w-3xl text-center flex flex-col items-center card-glass py-8 px-6 fade-in z-10">
          <h3 className="text-xl font-semibold mb-2 text-accent-dark">What Makes Us Different?</h3>
          <ul className="list-disc list-inside text-left space-y-2 text-base md:text-lg text-gray-600 dark:text-gray-300 mx-auto max-w-lg">
            <li>No confusing menus – just upload or snap a picture</li>
            <li>Fast, accurate AI powered by Google Gemini</li>
            <li>Personalized answers for your region and language</li>
            <li>Engaging, educational eco-facts every visit</li>
            <li>Dark mode and mobile friendly for every device</li>
            <li>100% Private: your images never leave your browser except for the AI call</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
