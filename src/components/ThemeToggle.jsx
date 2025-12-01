import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = ({ className }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
      try {
        localStorage.setItem("theme", "dark");
      } catch (e) {
        console.error("Failed to save theme preference:", e);
      }
    } else {
      document.documentElement.classList.remove("dark");
      try {
        localStorage.setItem("theme", "light");
      } catch (e) {
        console.error("Failed to save theme preference:", e);
      }
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "relative p-2 rounded-full transition-all duration-300 theme-toggle-btn cursor-pointer z-50",
        "bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-md",
        isDarkMode
          ? "border-2 border-yellow-400 hover:border-[2px]"
          : "border-2 border-primary hover:border-[2px]",
        className
      )}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        <Sun className="w-5 h-5 text-yellow-400 transition-colors duration-300" />
      ) : (
        <Moon className="w-5 h-5 text-primary transition-colors duration-300" />
      )}
    </button>
  );
};
