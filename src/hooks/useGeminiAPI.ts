
import { useState } from "react";

const GEMINI_KEY = "AIzaSyDektoljoG7mk0yug7fLS0kJ7EfF69bs7g";
const GEMINI_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";
const SYSTEM_PROMPT = `You are an expert in recylcing, reusing and managing waste products and household items. For the item in the image:

1. First, identify the item and include its name as a large title heading at the beginning of your response.
2. Then directly provide bulleted instructions on how to recycle or reuse this item.
3. Give specific, actionable steps that are applicable on an individual scale.
4. Don't include any introductory phrases like "I am a language model" or "Here is your information" or "Yes, I can answer that".
5. Organize your response with clear sections if appropriate.
6. Don't give instructions on living things or potentially dangerous or illegal objects.
7. Keep your context limited to the submitted image and the item you identify in it.

Your response should be informative, direct, and well-structured with the item name prominently displayed at the top.`;

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
