import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Github, MoveUpRight } from "lucide-react";
import { projects } from "../data/projects";
import { ProjectReadmeSection } from "../components/ProjectReadmeSection";
import { NotFound } from "./NotFound";

export const ProjectDetail = () => {
	const { projectId } = useParams();
	const project = projects.find((item) => item.id.toString() === projectId);

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "auto" });
	}, [projectId]);

	if (!project) {
		return <NotFound />;
	}

	return (
		<div className="min-h-screen text-foreground overflow-x-hidden">
			<main id="main-content" className="relative z-10">
				<section className="container mx-auto max-w-5xl pt-24 pb-16">
					<div className="project-detail-content flex flex-col gap-6 text-left">
						<p className="text-xs md:text-sm uppercase tracking-[0.3em] text-muted-foreground font-['Roboto_Mono'] font-bold">
							Project Case Study
						</p>
						<div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
							<h1 className="text-3xl md:text-5xl font-bold tracking-tight">
								{project.title}
							</h1>
							<div className="flex flex-wrap items-center gap-3">
								<a
									href="https://github.com/ERSA-14"
									target="_blank"
									rel="noopener noreferrer"
									className="cosmic-button flex items-center gap-2 no-underline"
								>
									View GitHub
									<MoveUpRight className="icon-sm" />
								</a>
								{project.docsUrl && (
									<a
										href={project.docsUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="px-4 py-2 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition-colors"
									>
										Documentation
										<MoveUpRight className="icon-sm ml-2" />
									</a>
								)}
							</div>
						</div>
						<p className="text-muted-foreground text-base md:text-lg leading-relaxed">
							{project.description}
						</p>

						<div className="flex flex-col gap-6 lg:flex-row">
							<div className="flex-1 rounded-2xl bg-card p-6 border-2 border-primary shadow-none flex flex-col gap-4">
								<div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-black pb-3">
									<p className="text-lg uppercase tracking-[0.2em] text-muted-foreground font-bold font-['Poppins']">
										Tech Stack
									</p>
								</div>
								<div className="flex flex-wrap gap-2">
									{project.tags.map((tag) => (
										<span
											key={`${tag}-stack`}
											className="px-2 py-1 text-sm md:text-base font-bold font-['Roboto_Mono'] bg-transparent text-foreground border-none"
										>
											{tag}
										</span>
									))}
								</div>
							</div>
							<div className="w-full lg:w-[34%] rounded-2xl bg-card p-6 border-2 border-primary shadow-none flex flex-col justify-between gap-4">
								<div className="space-y-3">
									<p className="text-lg uppercase tracking-[0.2em] text-muted-foreground font-bold font-['Poppins']">
										Repository
									</p>
									<p className="text-base text-muted-foreground leading-relaxed font-['Poppins']">
										Open the source code, issues, and commits on GitHub.
									</p>
								</div>
								<a
									href={project.githubUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="cosmic-button w-fit !px-4 !py-2 !text-sm no-underline"
								>
									View repository <Github className="icon-sm" />
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
