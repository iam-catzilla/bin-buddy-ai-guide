
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-center py-8 z-10 relative">
      <div className="text-xs text-gray-500 dark:text-gray-300">
        &copy; {new Date().getFullYear()} Bin Buddy | <a href="/privacy-policy" className="underline hover:text-accent" target="_blank" rel="noopener">Privacy Policy</a>
      </div>
    </footer>
  );
}
