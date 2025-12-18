import { useState, useEffect } from "react";
import { SpaceBackgroundLazy } from "../components/SpaceBackgroundLazy";
import { StarBackground } from "../components/StarBackground";
import { NavBar } from "../components/NavBar";
import { HomePage } from "../components/HomePage";
import { Certifications } from "../components/Certifications";
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
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <ScrollProgress isNameLoaded={isNameLoaded} />

      {!isDarkMode ? (
        <div className="fixed inset-0 pointer-events-none z-0">
          <SpaceBackgroundLazy />
        </div>
      ) : (
        <div className="fixed inset-0 pointer-events-none transition-opacity duration-300 z-10 opacity-100 animate-in fade-in">
          <StarBackground />
        </div>
      )}

      <NavBar />

      <main id="main-content" className="relative z-10">
        <HomePage />
        <Certifications />
        <Skills />
        <Project />
        <Contact />
      </main>
    </div>
  );
};
