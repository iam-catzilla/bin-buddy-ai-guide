
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/components/**/*.{ts,tsx}",
    "./src/pages/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Montserrat", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        accent: {
          light: "#F2FCE2",
          DEFAULT: "#76d275",
          dark: "#43a047",
        },
        blobGreen1: "#abecd6",
        blobGreen2: "#fbed96",
        blobGreen3: "#76d275",
        blobGreen4: "#e0ffd6",
      },
      borderRadius: {
        full: "9999px",
        xl: "1.25rem",
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(0px) scale(1)" },
          "50%": { transform: "translateY(-40px) scale(1.04)" },
          "100%": { transform: "translateY(0px) scale(1)" },
        },
      },
      animation: {
        float: "float 18s ease-in-out infinite",
        "fade-in": "fade-in 0.3s ease-in",
        "typewriter": "typewriter 1.5s steps(22) 1 normal both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
