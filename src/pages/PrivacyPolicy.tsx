
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900 transition-colors flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <button
          className="pill bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100 flex items-center whitespace-nowrap mb-8"
          onClick={() => navigate("/")}
        >
          <ArrowLeft size={20} className="mr-1" />
          Back to Home
        </button>

        <div className="card-glass p-8">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          
          <div className="space-y-6 text-left">
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-accent-dark">Introduction</h2>
              <p>
                Welcome to Bin Buddy's Privacy Policy. This document outlines how we collect, use, and protect your personal information when you use our AI-powered recycling assistant application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-accent-dark">Information We Collect</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Images:</strong> When you upload photos of items for recycling analysis, these images are temporarily processed but not permanently stored.</li>
                <li><strong>Language Preferences:</strong> We store your selected language preference locally on your device to provide a personalized experience.</li>
                <li><strong>Theme Preferences:</strong> Your choice of light or dark mode is saved locally on your device.</li>
                <li><strong>Usage Data:</strong> We collect anonymous usage statistics to improve our service.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-accent-dark">How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide AI-powered recycling and reuse suggestions for your uploaded items.</li>
                <li>To customize your experience based on your language and theme preferences.</li>
                <li>To improve our AI model's accuracy and effectiveness.</li>
                <li>To analyze usage patterns and enhance our application's features.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-accent-dark">Data Security</h2>
              <p>
                Your privacy is important to us. Images you upload are:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Transmitted securely using encryption.</li>
                <li>Processed by Google's Gemini AI model under their security protocols.</li>
                <li>Not permanently stored on our servers after processing.</li>
                <li>Not shared with third parties except as required to provide our service.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-accent-dark">Third-Party Services</h2>
              <p>
                We use Google's Gemini AI API to analyze images and provide recycling recommendations. Your use of Bin Buddy is subject to Google's applicable privacy policies when using this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-accent-dark">Your Choices</h2>
              <p>You can:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Choose not to upload images.</li>
                <li>Clear your local storage to remove saved preferences.</li>
                <li>Contact us to request information about your data.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-accent-dark">Updates to Privacy Policy</h2>
              <p>
                We may update this privacy policy periodically to reflect changes in our practices or for legal, operational, or regulatory reasons. We encourage you to review this policy whenever you access our application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-accent-dark">Contact Us</h2>
              <p>
                If you have questions or concerns about this privacy policy or your personal information, please contact us at privacy@binbuddy.com.
              </p>
            </section>

            <div className="text-sm text-gray-500 mt-8 pt-4 border-t dark:border-gray-700">
              Last updated: April 21, 2025
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
