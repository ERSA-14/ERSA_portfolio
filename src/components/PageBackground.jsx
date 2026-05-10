import { useEffect, useState } from "react";
import { SpaceBackgroundLazy } from "./SpaceBackgroundLazy";
import { StarBackground } from "./StarBackground";

export const PageBackground = () => {
	const [isDarkMode, setIsDarkMode] = useState(true);

	useEffect(() => {
		const checkTheme = () => {
			setIsDarkMode(document.documentElement.classList.contains("dark"));
		};
		checkTheme();

		const observer = new MutationObserver(checkTheme);
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["class"],
		});

		return () => observer.disconnect();
	}, []);

	return !isDarkMode ? (
		<div className="fixed inset-0 pointer-events-none z-0">
			<SpaceBackgroundLazy />
		</div>
	) : (
		<div className="fixed inset-0 pointer-events-none transition-opacity duration-300 z-10 opacity-100 animate-in fade-in">
			<StarBackground />
		</div>
	);
};
