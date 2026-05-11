import { HomePage } from "../components/HomePage";
import { Certifications } from "../components/Certifications";
import { Skills } from "../components/Skills";
import { Project } from "../components/Project";
import { Contact } from "../components/Contact";

export const Home = () => {
	return (
		<div className="min-h-screen text-foreground overflow-x-hidden portfolio-scale">
			<main id="main-content" className="relative z-10 flex flex-col gap-32 md:gap-48 px-6 md:px-16 lg:px-32">
				<HomePage />
				<Certifications />
				<Skills />
				<Project />
				<Contact />
			</main>
		</div>
	);
};
