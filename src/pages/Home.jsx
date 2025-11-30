import { useState, useEffect } from "react";
import { SpaceBackground } from "../components/SpaceBackground";
import { StarBackground } from "../components/StarBackground";
import { NavBar } from "../components/NavBar";
import { HomePage } from "../components/HomePage";
import { AboutMe } from "../components/AboutMe";
import { Skills } from "../components/Skills";
import { Project } from "../components/Project";

export const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };
    checkTheme();

    // Observe theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col">
      <div
        className={`transition-opacity duration-300 ${
          isDarkMode ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <SpaceBackground />
      </div>
      <div
        className={`transition-opacity duration-300 ${
          isDarkMode ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <StarBackground />
      </div>

      <NavBar />

      <main className="flex-grow container mx-auto px-4 pt-24">
        <HomePage />
        <AboutMe />
        <Skills />
        <Project />
      </main>
    </div>
  );
};
