import { useEffect, useRef } from "react";

export const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Add transition for smooth opacity change
    cursor.style.transition = "opacity 0.1s";

    // Use transform for hardware acceleration
    const moveCursor = (e) => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${
        e.clientY + 12
      }px, 0) translate(-50%, -50%) rotate(45deg)`;
    };

    const handleHover = (e) => {
      const isInteractive = e.target.closest(
        'a, button, [role="button"], input, textarea, select, .cursor-pointer'
      );

      if (isInteractive) {
        cursor.classList.add("hover");
      } else {
        cursor.classList.remove("hover");
      }
    };

    // Inactivity timer
    let inactivityTimer;
    const resetInactivityTimer = () => {
      if (cursor.style.opacity === "0") {
        cursor.style.opacity = "1";
      }
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        cursor.style.opacity = "0";
      }, 2800);
    };

    const handleMouseMoveWithTimer = (e) => {
      moveCursor(e);
      resetInactivityTimer();
    };

    window.addEventListener("mousemove", handleMouseMoveWithTimer);
    window.addEventListener("mouseover", handleHover);

    // Initialize timer
    resetInactivityTimer();

    const handleMouseOut = (e) => {
      if (!e.relatedTarget && !e.toElement) {
        cursor.style.opacity = "0";
        clearTimeout(inactivityTimer);
      }
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = "1";
      resetInactivityTimer();
    };

    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMoveWithTimer);
      window.removeEventListener("mouseover", handleHover);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mouseenter", handleMouseEnter);
      clearTimeout(inactivityTimer);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
};
