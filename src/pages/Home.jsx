import { useState, useEffect } from "react";
import { SpaceBackground } from "../components/SpaceBackground";
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
        className={`fixed inset-0 transition-opacity duration-700 pointer-events-none ${
          isDarkMode ? "opacity-0" : "opacity-100"
        }`}
      >
        <SpaceBackground />
      </div>
      <div
        className={`fixed inset-0 transition-opacity duration-700 pointer-events-none ${
          isDarkMode ? "opacity-100" : "opacity-0"
        }`}
      >
        <StarBackground />
      </div>

      <NavBar />

      <main className="relative z-10">
        <section id="home">
          <div className="container mx-auto px-4 pt-24">
            <HomePage />
          </div>
        </section>

        <section id="about">
          <div className="container mx-auto px-4 py-20">
            <AboutMe />
          </div>
        </section>

        <section id="skills">
          <div className="container mx-auto px-4 py-20">
            <Skills />
          </div>
        </section>

        <section id="projects">
          <div className="container mx-auto px-4 py-20">
            <Project />
          </div>
        </section>

        <section id="contact">
          <div className="container mx-auto px-4 py-20 pb-0">
            <Contact />
          </div>
        </section>
      </main>
    </div>
  );
};
