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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background shadow-sm" : "py-5"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-0">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#Home"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Saksham Gupta's</span>{" "}
            Portfolio
          </span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navItems
            .filter((item) => item.name !== "Contact")
            .map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          <a
            href="#Contact"
            className="available-button hover:scale-105 group relative"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-50"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-300 dark:bg-emerald-400"></span>
            </span>
            <span className="text-xs font-semibold tracking-wide">
              Available to work!
            </span>
            <span className="hidden md:block absolute top-full right-0 mt-2 px-2 py-1 bg-foreground text-background text-[10px] font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-50">
              Contact
            </span>
          </a>
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground p-1 cursor-pointer"
            aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
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
        <div className="md:hidden absolute top-full right-4 mt-2 w-max bg-background/95 backdrop-blur-md border border-border rounded-xl p-2 flex flex-col gap-0.5 shadow-xl animate-in slide-in-from-top-2 fade-in-20">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors px-3 py-1.5 rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="pt-1 mt-1 border-t border-border flex justify-center">
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
};
