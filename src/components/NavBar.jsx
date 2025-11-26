
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";

const navItems = [
    {name: "Home", href: "#Home"},
    {name: "About", href: "#About"},
    {name: "Skills", href: "#Skills"},
    {name: "Projects", href: "#Projects"},
    {name: "Contact", href: "#Contact"},
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
    <nav className={cn("fixed w-full z-40 transition-all duration-300",isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs": "py-5")}>
      <div className="container flex items-center justify-between">
        <a className="text-xl font-bold text-primary flex items-center" href="#Home">
          <span className="relative z-10">
            <span className="text-glow text-foreground">
              Saksham Gupta
            </span>
              {" "} Portfolio
          </span>
        </a>

        {/*DeskTop NavBar*/}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item,key)=>(
            <a key = {key} href = {item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium">{item.name}</a>
          ))}
        </div>

        {/*Mobile NavBar*/}
        <button onClick={()=>setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-foreground z-50" aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}>
          {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
        </button>

        <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center","transition-all duration-300 md:hidden",isMobileMenuOpen ? "opacity-100 pointer-events-auto":"opacity-0 pointer-events-none")}>
          <div className="flex flex-col space-y-9 text-lg">
            {navItems.map((item,key)=>(
              <a key = {key} href = {item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300 font-semibold" onClick={()=>setIsMobileMenuOpen(false)}>{item.name}</a>
            ))}
          </div>
        </div>

      </div>
    </nav>
  )
}