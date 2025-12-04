import { useEffect, useState } from "react";

export const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(10);

  useEffect(() => {
    const sections = [
      { id: "home", weight: 20 },
      { id: "about", weight: 20 },
      { id: "skills", weight: 20 },
      { id: "projects", weight: 20 },
      { id: "contact", weight: 20 },
    ];

    const updateScrollProgress = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let progress = 10; // Start at 10%

      for (let i = 0; i < sections.length; i++) {
        const element = document.getElementById(sections[i].id);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        const elementTop = window.scrollY + rect.top;
        const elementBottom = elementTop + rect.height;

        // If we're past this section
        if (scrollPosition > elementBottom) {
          progress = 10 + (i + 1) * sections[i].weight;
        }
        // If we're in this section
        else if (
          scrollPosition >= elementTop &&
          scrollPosition <= elementBottom
        ) {
          const sectionProgress = (scrollPosition - elementTop) / rect.height;
          progress =
            10 + i * sections[i].weight + sectionProgress * sections[i].weight;
          break;
        }
        // If we haven't reached this section yet
        else {
          break;
        }
      }

      setScrollProgress(Math.min(100, Math.max(10, progress)));
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress);
    window.addEventListener("resize", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-border/30 z-[9999] pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-primary via-primary/80 to-primary transition-all duration-300 ease-out shadow-[0_0_10px_rgba(59,189,219,0.5)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};
