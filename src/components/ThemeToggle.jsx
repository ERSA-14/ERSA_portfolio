import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = ({ className }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "light") {
        setIsDarkMode(false);
        document.documentElement.classList.remove("dark");
      } else if (savedTheme === "dark") {
        setIsDarkMode(true);
        document.documentElement.classList.add("dark");
      } else {
        // No saved preference -> respect system preference if available
        const prefersDark =
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches;
        setIsDarkMode(!!prefersDark);
        document.documentElement.classList.toggle("dark", !!prefersDark);
      }
    } catch (e) {
      // Theme init failed
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
        // Failed to save theme persistence
      }
    } else {
      document.documentElement.classList.remove("dark");
      try {
        localStorage.setItem("theme", "light");
      } catch (e) {
        // Failed to save theme persistence
      }
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "relative p-1 rounded-full theme-toggle-btn cursor-pointer z-50",
        "bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-md",
        isDarkMode
          ? "border-2 border-primary hover:border-[2px]"
          : "border-2 border-primary hover:border-[2px]",
        className
      )}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        <Sun className="icon-md text-yellow-500" />
      ) : (
        <Moon className="icon-md text-primary" />
      )}
    </button>
  );
};
