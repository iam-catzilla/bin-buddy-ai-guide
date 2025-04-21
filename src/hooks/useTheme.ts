
import { useEffect, useState } from "react";

const THEME_KEY = "binbuddy_theme";

export function useTheme() {
  const [theme, setTheme] = useState<string>(() => {
    return localStorage.getItem(THEME_KEY) || "light";
  });

  useEffect(() => {
    document.documentElement.classList[theme === "dark" ? "add" : "remove"]("dark");
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return { theme, setTheme, toggle };
}
