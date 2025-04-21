
import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      className="pill flex items-center gap-2 px-4 py-1 bg-gray-200 text-black dark:bg-gray-700 dark:text-white shadow"
      onClick={toggle}
      aria-label="Toggle theme"
    >
      {theme === "light" ? <Sun size={18} /> : <Moon size={18} />}
      <span className="hidden md:inline">{theme === "light" ? "Light" : "Dark"}</span>
    </button>
  );
}
