import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '../lib/utils';

export const ThemeToggle = ({ className }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(()=>{
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
    },[])

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
        setIsDarkMode(!isDarkMode);
    };

    return (
        <button 
            onClick={toggleTheme}
            className={cn("p-2 rounded-full bg-card/60 backdrop-blur-sm border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95", className)}
        >
            {isDarkMode ? (
                <Sun className='w-6 h-6 text-yellow-400'/> 
            ) : ( 
                <Moon className='w-6 h-6 text-blue-900'/>
            )}
        </button>
    )
};
