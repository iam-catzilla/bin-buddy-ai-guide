
import { useState } from "react";

const GEMINI_KEY = "AIzaSyDektoljoG7mk0yug7fLS0kJ7EfF69bs7g";
const GEMINI_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";
const SYSTEM_PROMPT = `You are an expert in recylcing, reusing and managing waste products and household items. Give me summarized bulleted instructions to recycle or reuse this? (Give answer that are applicable on an individual scale. Also Don't give instruction's on living things or potentialy dangeours or illegal objects.) Keep your context limited to the submitted image/ the tags you identify in the image, do not answer out of context. You may analyze the image and answer using pre stored information about the object you have.`;

function b64(file: File): Promise<{dataUrl: string, mimeType: string}> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve({ dataUrl: (reader.result as string).split(",")[1], mimeType: file.type });
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// Gemini response
export function useGeminiAPI() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function askGemini({file, lang}: {file: File, lang: string}): Promise<string | null> {
    setLoading(true);
    setError(null);
    try {
      const { dataUrl, mimeType } = await b64(file);
      const prompt = SYSTEM_PROMPT + "\nPlease respond in: " + lang + ".";

      const res = await fetch(`${GEMINI_URL}?key=${GEMINI_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  inlineData: { mimeType, data: dataUrl }
                },
                { text: prompt }
              ]
            }
          ],
        }),
      });
      const data = await res.json();
      if (data?.candidates?.[0]?.content?.parts?.[0]?.text) {
        return data.candidates[0].content.parts[0].text;
      }
      setError(data?.error?.message || "Unknown error.");
      return null;
    } catch (e: any) {
      setError(e?.message || "Unexpected error");
      return null;
    } finally {
      setLoading(false);
    }
  }

  return { askGemini, loading, error };
}
