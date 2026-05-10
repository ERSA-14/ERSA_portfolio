import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MoveLeft, Github, ExternalLink } from "lucide-react";
import { projects } from "../data/projects";
import { ThemeToggle } from "../components/ThemeToggle";
import { SpaceBackgroundLazy } from "../components/SpaceBackgroundLazy";
import { StarBackground } from "../components/StarBackground";
import { ProjectReadmeSection } from "../components/ProjectReadmeSection";
import { NotFound } from "./NotFound";

export const ProjectDetail = () => {
	const { projectId } = useParams();
	const project = projects.find((item) => item.id.toString() === projectId);
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

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "auto" });
	}, [projectId]);

	if (!project) {
		return <NotFound />;
	}

	return (
		<div className="min-h-screen text-foreground overflow-x-hidden">
			{!isDarkMode ? (
				<div className="fixed inset-0 pointer-events-none z-0">
					<SpaceBackgroundLazy />
				</div>
			) : (
				<div className="fixed inset-0 pointer-events-none transition-opacity duration-300 z-10 opacity-100 animate-in fade-in">
					<StarBackground />
				</div>
			)}

			<header className="relative z-20 w-full">
				<div className="container mx-auto flex items-center justify-between px-4 py-4">
					<Link
						to="/"
						className="inline-flex items-center gap-2 text-sm md:text-base font-semibold text-foreground hover:text-primary transition-colors"
					>
						<MoveLeft className="icon-sm" />
						Back to Portfolio
					</Link>
					<ThemeToggle />
				</div>
			</header>

			<main id="main-content" className="relative z-10">
				<section className="container mx-auto max-w-5xl pt-4 pb-16">
					<div className="project-detail-content flex flex-col gap-6 text-left">
						<p className="text-xs md:text-sm uppercase tracking-[0.3em] text-muted-foreground font-['Roboto_Mono']">
							Project Case Study
						</p>
						<h1 className="text-3xl md:text-5xl font-bold tracking-tight">
							{project.title}
						</h1>
						<p className="text-muted-foreground text-base md:text-lg leading-relaxed">
							{project.description}
						</p>

						<div className="flex flex-wrap gap-3">
							<a
								href={project.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="cosmic-button flex items-center gap-2"
							>
								<Github className="icon-sm" />
								View GitHub
								<ExternalLink className="icon-sm" />
							</a>
							{project.docsUrl && (
								<a
									href={project.docsUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="px-4 py-2 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition-colors"
								>
									Documentation
									<ExternalLink className="icon-sm ml-2" />
								</a>
							)}
						</div>

						<div className="flex flex-col gap-4 md:flex-row">
							<div className="flex-1 rounded-xl border-2 border-primary/30 bg-card/80 p-4">
								<p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-['Roboto_Mono']">
									Tech Stack
								</p>
								<div className="flex flex-wrap gap-2 mt-3">
									{project.tags.map((tag) => (
										<span
											key={`${tag}-stack`}
											className="px-2 py-1 text-xs font-semibold rounded-full border border-border text-foreground/80"
										>
											{tag}
										</span>
									))}
								</div>
							</div>
							<div className="flex-1 rounded-xl border-2 border-primary/30 bg-card/80 p-4">
								<p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-['Roboto_Mono']">
									Repository
								</p>
								<p className="text-sm text-muted-foreground mt-3">
									Open the source code, issues, and commits on GitHub.
								</p>
								<a
									href={project.githubUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 text-primary font-semibold mt-3"
								>
									View repository <ExternalLink className="icon-sm" />
								</a>
							</div>
						</div>

						<ProjectReadmeSection project={project} />
					</div>
				</section>
			</main>
		</div>
	);
};
