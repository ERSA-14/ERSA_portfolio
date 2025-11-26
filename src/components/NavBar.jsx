import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
    {name: "Home", href: "#Home"},
    {name: "About me", href: "#About"},
    {name: "Skills", href: "#Skills"},
    {name: "Projects", href: "#Projects"},
    {name: "Contact me", href: "#Contact"},
];

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(()=>{
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  },[])

  return (
    <nav className={cn("fixed w-full z-40 transition-all duration-300", isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-sm" : "py-5")}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <a className="text-xl font-bold text-primary flex items-center" href="#Home">
          <span className="relative z-10">
            <span className="text-glow text-foreground">Saksham Gupta</span>
            {" "} Portfolio
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground p-1"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-border p-4 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-base font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}