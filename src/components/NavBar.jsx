import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#Home" },
  { name: "About", href: "#About" },
  { name: "Skills", href: "#Skills" },
  { name: "Projects", href: "#Projects" },
  { name: "Contact", href: "#Contact" },
];

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let animationFrameId;

    const handleScroll = () => {
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10);
          animationFrameId = null;
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300 ease-in-out",
        isScrolled
          ? "py-4 bg-background shadow-sm border-b border-border/50"
          : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <a
          className="text-xl font-bold text-primary flex items-center gap-2 group !no-underline"
          href="#Home"
          aria-label="Home"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Saksham Gupta's</span>{" "}
            Portfolio
          </span>
        </a>

        <div className="hidden md:flex items-center gap-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground p-3 rounded-full hover:bg-secondary/50 transition-colors duration-300 cursor-pointer touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full right-4 mt-2 w-max bg-background/95 backdrop-blur-md border border-primary rounded-xl p-2 flex flex-col gap-1 shadow-2xl animate-in slide-in-from-top-2 fade-in duration-200 origin-top-right will-change-transform">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground hover:text-primary hover:bg-secondary/50 transition-all duration-200 px-4 py-2 rounded-lg flex items-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="pt-2 mt-1 border-t border-border flex justify-center pb-1">
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
};
