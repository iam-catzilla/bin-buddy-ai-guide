
import { Trash } from "lucide-react";
import LanguageSelector from "./LanguageSelector";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-2 md:px-10 py-6 z-10 relative">
      <div className="flex items-center gap-3">
        <span className="rounded-full bg-accent p-2 mr-3 shadow-lg">
          <Trash color="#fff" size={30} strokeWidth={2.7} className="bg-accent rounded-full" />
        </span>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-wider" style={{fontFamily: "Montserrat"}}>
            Bin Buddy
          </h1>
          <span className="text-xs md:text-base tracking-tight font-semibold text-accent-dark">Bin it right, with Bin Buddy</span>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <ThemeToggle />
        <LanguageSelector />
      </div>
    </header>
  );
}
