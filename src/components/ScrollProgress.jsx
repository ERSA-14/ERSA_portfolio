import { useEffect, useState } from "react";

export const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(10);

  useEffect(() => {
    const sections = [
      { id: "Home", weight: 20 },
      { id: "About", weight: 20 },
      { id: "Skills", weight: 20 },
      { id: "Projects", weight: 20 },
      { id: "Contact", weight: 20 },
    ];

    let animationFrameId;
    let sectionElements = [];

    // Cache elements significantly improves performance
    const cacheElements = () => {
      sectionElements = sections
        .map((section) => ({
          ...section,
          element: document.getElementById(section.id),
        }))
        .filter((section) => section.element);
    };

    const updateScrollProgress = () => {
      if (sectionElements.length === 0) cacheElements();

      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let progress = 10; // Start at 10%

      for (let i = 0; i < sectionElements.length; i++) {
        const { element, weight } = sectionElements[i];

        // Use offsetTop for better performance than getBoundingClientRect where possible,
        // but rect is needed for precise viewport intersection.
        // To avoid layout thrashing, we assume smooth flow.
        const rect = element.getBoundingClientRect();
        const elementTop = window.scrollY + rect.top;
        const elementBottom = elementTop + rect.height;

        // If we're past this section
        if (scrollPosition > elementBottom) {
          progress = 10 + (i + 1) * weight;
        }
        // If we're in this section
        else if (
          scrollPosition >= elementTop &&
          scrollPosition <= elementBottom
        ) {
          const sectionProgress = (scrollPosition - elementTop) / rect.height;
          progress = 10 + i * weight + sectionProgress * weight;
          break;
        }
        // If we haven't reached this section yet
        else {
          break;
        }
      }

      setScrollProgress(Math.min(100, Math.max(10, progress)));
    };

    const handleScroll = () => {
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(() => {
          updateScrollProgress();
          animationFrameId = null;
        });
      }
    };

    const handleResize = () => {
      cacheElements();
      handleScroll();
    };

    // Initial cache and update
    // Small delay to ensure DOM is fully ready
    setTimeout(() => {
      cacheElements();
      updateScrollProgress();
    }, 100);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-border/30 z-[9999] pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-primary via-primary/80 to-primary ease-out shadow-[0_0_10px_rgba(59,189,219,0.5)]"
        style={{
          width: `${scrollProgress}%`,
          clipPath:
            scrollProgress >= 99
              ? "none"
              : "polygon(0 0, calc(100% - 4px) 0, 100% 100%, 0 100%)",
        }}
      />
    </div>
  );
};
