import { useState, useEffect, useRef } from "react";
import { SpaceBackground } from "../components/SpaceBackground";
import { StarBackground } from "../components/StarBackground";
import { NavBar } from "../components/NavBar";
import { HomePage } from "../components/HomePage";
import { AboutMe } from "../components/AboutMe";
import { Skills } from "../components/Skills";
import { Project } from "../components/Project";
import { Contact } from "../components/Contact";
import { ScrollProgress } from "../components/ScrollProgress";

const Section = ({ children, id, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay]);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </section>
  );
};

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
        <Section id="home">
          <div className="container mx-auto px-4 pt-24">
            <HomePage />
          </div>
        </Section>

        <Section id="about" delay={100}>
          <div className="container mx-auto px-4 py-20">
            <AboutMe />
          </div>
        </Section>

        <Section id="skills" delay={150}>
          <div className="container mx-auto px-4 py-20">
            <Skills />
          </div>
        </Section>

        <Section id="projects" delay={200}>
          <div className="container mx-auto px-4 py-20">
            <Project />
          </div>
        </Section>

        <Section id="contact" delay={250}>
          <div className="container mx-auto px-4 py-20 pb-0">
            <Contact />
          </div>
        </Section>
      </main>
    </div>
  );
};
