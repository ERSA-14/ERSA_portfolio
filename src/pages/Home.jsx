import { useState, useEffect } from "react";
import { SpaceBackgroundLazy } from "../components/SpaceBackgroundLazy";
import { StarBackground } from "../components/StarBackground";
import { NavBar } from "../components/NavBar";
import { HomePage } from "../components/HomePage";
import { AboutMe } from "../components/AboutMe";
import { Skills } from "../components/Skills";
import { Project } from "../components/Project";
import { Contact } from "../components/Contact";
import { ScrollProgress } from "../components/ScrollProgress";

export const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isNameLoaded, setIsNameLoaded] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };
    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleTypingComplete = () => {
      setIsNameLoaded(true);
    };

    window.addEventListener("typingComplete", handleTypingComplete);
    return () =>
      window.removeEventListener("typingComplete", handleTypingComplete);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollProgress isNameLoaded={isNameLoaded} />

      <div
        className={`fixed inset-0 pointer-events-none transition-opacity duration-300 ${
          isDarkMode ? "opacity-0" : "opacity-100"
        }`}
      >
        <SpaceBackgroundLazy />
      </div>
      <div
        className={`fixed inset-0 pointer-events-none transition-opacity duration-300 ${
          isDarkMode ? "opacity-100" : "opacity-0"
        }`}
      >
        <StarBackground />
      </div>

      <NavBar />

      <main className="relative z-10">
        <HomePage />
        <AboutMe />
        <Skills />
        <Project />
        <Contact />
      </main>
    </div>
  );
};
