import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = ({ className }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isToggling, setIsToggling] = useState(false);

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
    // Prevent rapid toggling
    if (isToggling) return;

    setIsToggling(true);

    // Disable transitions globally to prevent FOIT (Flash of Incorrect Theme) / smooth transition
    document.documentElement.classList.add("disable-transitions");

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

    // Force strict reflow to apply the theme change instantly without transitions
    const _ = window.getComputedStyle(document.documentElement).opacity;

    // Re-enable transitions after a tiny delay to ensure the DOM has updated
    setTimeout(() => {
      document.documentElement.classList.remove("disable-transitions");
      setIsToggling(false);
    }, 50); // Small buffer to ensure paint completes
  };

  return (
    <div
      onClick={toggleTheme}
      className={cn(
        "relative flex h-8 w-16 items-center rounded-full !border-2 border-primary bg-card cursor-pointer transition-colors duration-100 theme-toggle-custom overflow-hidden",
        className
      )}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleTheme();
        }
      }}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* Sliding Circle Indicator */}
      <div
        className={cn(
          "absolute left-0 top-0 h-full aspect-square rounded-full bg-primary/20 transition-transform duration-100 ease-smooth",
          isDarkMode ? "translate-x-0" : "translate-x-8"
        )}
      />

      {/* Icons */}
      <div className="flex w-full items-center justify-between px-1.5 relative z-10">
        <Moon
          className={cn(
            "h-4 w-4 transition-colors duration-100",
            isDarkMode
              ? "text-primary stroke-[2.5px]"
              : "text-muted-foreground/50 stroke-[2px]"
          )}
        />
        <Sun
          className={cn(
            "h-4 w-4 transition-colors duration-100",
            !isDarkMode
              ? "text-primary stroke-[2.5px]"
              : "text-muted-foreground/50 stroke-[2px]"
          )}
        />
      </div>
    </div>
  );
};
