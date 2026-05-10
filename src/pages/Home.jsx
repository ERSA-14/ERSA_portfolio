import { HomePage } from "../components/HomePage";
import { Certifications } from "../components/Certifications";
import { Skills } from "../components/Skills";
import { Project } from "../components/Project";
import { Contact } from "../components/Contact";

export const Home = () => {
	return (
		<div className="min-h-screen text-foreground overflow-x-hidden portfolio-scale">
			<main id="main-content" className="relative z-10">
				<HomePage />
				<Certifications />
				<Skills />
				<Project />
				<Contact />
			</main>
		</div>
	);
};
