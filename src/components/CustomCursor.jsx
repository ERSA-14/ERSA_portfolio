import { useEffect, useRef, useState } from "react";

export const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [hasMovedOnce, setHasMovedOnce] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Edge detection threshold (pixels from edge)
    const edgeThreshold = 20;

    // Check if cursor is near edges
    const isNearEdge = (x, y) => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      return (
        x <= edgeThreshold ||
        x >= windowWidth - edgeThreshold ||
        y <= edgeThreshold ||
        y >= windowHeight - edgeThreshold
      );
    };

    // Use transform for hardware acceleration
    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      // Show cursor on first movement
      if (!hasMovedOnce) {
        setHasMovedOnce(true);
        cursor.style.opacity = "1";
      }

      // Hide cursor near edges
      if (isNearEdge(clientX, clientY)) {
        cursor.style.opacity = "0";
      } else if (hasMovedOnce) {
        cursor.style.opacity = "1";
      }

      cursor.style.transform = `translate3d(${clientX}px, ${clientY}px, 0) translate(-50%, -50%) rotate(45deg)`;
    };

    const handleHover = (e) => {
      const target = e.target;

      const isSystemCursor = target.closest(".use-system-cursor");
      if (isSystemCursor) {
        cursor.classList.add("hidden-cursor");
      } else {
        cursor.classList.remove("hidden-cursor");
      }

      const isInteractive = target.closest(
        'a, button, [role="button"], input, textarea, select, .cursor-pointer'
      );

      if (isInteractive && !isSystemCursor) {
        cursor.classList.add("hover");
      } else {
        cursor.classList.remove("hover");
      }
    };

    // Handle click/active state
    const handleMouseDown = () => {
      cursor.classList.add("active");
    };

    const handleMouseUp = () => {
      cursor.classList.remove("active");
    };

    // Inactivity timer
    let inactivityTimer;
    const resetInactivityTimer = () => {
      if (cursor.style.opacity === "0" && hasMovedOnce) {
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
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Initialize timer only after first movement
    if (hasMovedOnce) {
      resetInactivityTimer();
    }

    const handleMouseOut = (e) => {
      if (!e.relatedTarget && !e.toElement) {
        cursor.style.opacity = "0";
        clearTimeout(inactivityTimer);
      }
    };

    const handleMouseEnter = () => {
      if (hasMovedOnce) {
        cursor.style.opacity = "1";
        resetInactivityTimer();
      }
    };

    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMoveWithTimer);
      window.removeEventListener("mouseover", handleHover);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mouseenter", handleMouseEnter);
      clearTimeout(inactivityTimer);
    };
  }, [hasMovedOnce]);

  return <div ref={cursorRef} className="custom-cursor" />;
};
