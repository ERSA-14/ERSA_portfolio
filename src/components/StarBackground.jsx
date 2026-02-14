import { useEffect, useState, useCallback } from "react";

const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const StarBackground = () => {
  const generateStars = useCallback(() => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 13500,
    );
    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 1.0 + 0.5,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDelay: Math.random() * 4,
      });
    }
    return newStars;
  }, []);

  const generateMeteors = useCallback(() => {
    const numberOfMeteors = 7;
    const newMeteors = [];
    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 1.5 + 0.5,
        x: Math.random() * 95,
        y: Math.random() * 15,

        delay: (i * 4) / numberOfMeteors,

        animationDuration: 3 + Math.random() * 1.5,
      });
    }
    return newMeteors;
  }, []);

  // Use lazy state initializer - generates on first render, no effect needed
  const [stars, setStars] = useState(() =>
    prefersReducedMotion ? [] : generateStars(),
  );
  const [meteors, setMeteors] = useState(() =>
    prefersReducedMotion ? [] : generateMeteors(),
  );

  // Only handle resize in the effect
  useEffect(() => {
    const handleResize = () => {
      if (!prefersReducedMotion) {
        setStars(generateStars());
        setMeteors(generateMeteors());
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [generateStars, generateMeteors]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            left: star.x + "%",
            top: star.y + "%",
            width: star.size + "px",
            height: star.size + "px",
            opacity: star.opacity,
            animationDuration: star.animationDelay + "s",
          }}
        ></div>
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            left: meteor.x + "%",
            top: meteor.y + "%",
            width: meteor.size * 48 + "px",
            height: meteor.size * 1.15 + "px",
            animationDelay: meteor.delay + "s",
            animationDuration: meteor.animationDuration + "s",
          }}
        ></div>
      ))}
    </div>
  );
};
