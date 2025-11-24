import { Moon, Sun } from 'lucide-react';
import { useState } from 'react';


export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

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
            className="fixed top-6 right-6 z-50 p-4 rounded-full bg-card/80 backdrop-blur-sm border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
        >
            {isDarkMode ? (
                <Sun className='w-6 h-6 text-yellow-400'/> 
            ) : ( 
                <Moon className='w-6 h-6 text-blue-900'/>
            )}
        </button>
    )
};
