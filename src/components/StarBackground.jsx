import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 13500
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
    setStars(newStars);
  };

  const generateMeteors = () => {
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
    setMeteors(newMeteors);
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!prefersReducedMotion) {
      generateStars();
      generateMeteors();
    }

    const handleResize = () => {
      if (!prefersReducedMotion) {
        generateStars();
        generateMeteors();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
