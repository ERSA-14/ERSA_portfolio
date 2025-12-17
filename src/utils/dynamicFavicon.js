/**
 * Dynamic Favicon Generator
 * Updates favicon in real-time based on theme changes
 * Uses the letter-s-svgrepo-com.svg design
 */

const createFaviconSVG = (isDark) => {
  const bgColor = isDark ? "#ffa31a" : "#0a85c2"; // Neon-golden-flame-orange for dark mode
  const letterColor = isDark ? "#000000" : "#ffffff"; // Contrasting letter color

  const svg = `
    <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision">
      <path fill="${bgColor}" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28z"/>
      <g transform="translate(18, 18) scale(1.10) translate(-18, -18)">
        <path fill="${letterColor}" shape-rendering="geometricPrecision" d="M24.125 9.652c0 1.209-.806 2.294-2.076 2.294c-1.271 0-2.264-.93-4.125-.93c-1.333 0-2.542.713-2.542 2.016c0 3.193 10.357 1.147 10.357 9.146c0 4.434-3.659 7.193-7.938 7.193c-2.388 0-7.534-.558-7.534-3.473c0-1.209.806-2.201 2.077-2.201c1.457 0 3.193 1.209 5.209 1.209c2.046 0 3.163-1.147 3.163-2.667c0-3.658-10.356-1.457-10.356-8.65c0-4.341 3.565-7.038 7.689-7.038c1.736.001 6.076.652 6.076 3.101z"/>
      </g>
    </svg>
  `.trim();

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};

// Pre-calculate favicons for instant switching
const LIGHT_FAVICON_URI = createFaviconSVG(false);
const DARK_FAVICON_URI = createFaviconSVG(true);

export const updateFavicon = (isDark) => {
  const faviconLink = document.querySelector('link[rel="icon"]');
  if (faviconLink) {
    faviconLink.href = isDark ? DARK_FAVICON_URI : LIGHT_FAVICON_URI;
  }
};

export const initDynamicFavicon = () => {
  // Set initial favicon based on current theme
  const isDark = document.documentElement.classList.contains("dark");
  updateFavicon(isDark);

  // Watch for theme changes using MutationObserver
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === "class") {
        const isDark = document.documentElement.classList.contains("dark");
        updateFavicon(isDark);
      }
    });
  });

  // Observe the html element for class changes
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });

  return observer;
};
