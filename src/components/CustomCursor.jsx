import { useEffect, useRef } from "react";

export const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
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

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);

    const handleMouseOut = (e) => {
      if (!e.relatedTarget && !e.toElement) {
        cursor.style.opacity = "0";
      }
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = "1";
    };

    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
};
