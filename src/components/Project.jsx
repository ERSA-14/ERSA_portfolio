import { useState, useEffect, useRef } from "react";
import { MoveUpRight, Github, MoveLeft, MoveRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { debounce } from "../utils/debounce";
import { projects } from "../data/projects";

export const Project = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [itemsPerSlide, setItemsPerSlide] = useState(1);
	const prevItemsPerSlideRef = useRef(itemsPerSlide);
	const navigate = useNavigate();

	// Determine items per slide based on screen size
	useEffect(() => {
		const handleResize = () => {
			let newItemsPerSlide;
			if (window.innerWidth >= 1024) {
				newItemsPerSlide = 3;
			} else if (window.innerWidth >= 768) {
				newItemsPerSlide = 2;
			} else {
				newItemsPerSlide = 1;
			}

			if (newItemsPerSlide !== prevItemsPerSlideRef.current) {
				prevItemsPerSlideRef.current = newItemsPerSlide;
				setItemsPerSlide(newItemsPerSlide);
				setCurrentIndex(0);
			}
		};

		handleResize();

		const debouncedResize = debounce(handleResize, 100);
		window.addEventListener("resize", debouncedResize);
		return () => window.removeEventListener("resize", debouncedResize);
	}, []);

	const totalSlides = Math.ceil(projects.length / itemsPerSlide);

	const handlePrev = () => {
		setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
	};

	const handleNext = () => {
		setCurrentIndex((prev) => (prev + 1) % totalSlides);
	};

	const visibleProjects = projects.slice(
		currentIndex * itemsPerSlide,
		(currentIndex + 1) * itemsPerSlide,
	);

	const handleOpenProject = (projectId) => {
		navigate(`/projects/${projectId}`);
	};

	return (
		<section id="Projects" className="relative">
			<div className="container mx-auto max-w-7xl pb-4 mt-8">
				<h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
					Highlighted <span className="text-primary">Projects</span>
				</h2>

				<p className="text-center text-lg md:text-xl text-muted-foreground mb-8 max-w-4xl lg:max-w-5xl mx-auto">
					These projects{" "}
					<span className="text-primary font-semibold">reflect my journey</span>{" "}
					as a developer from conceptualisation to deployment. Each application
					showcases practical implementation of modern technologies, solving
					real-world challenges through thoughtful engineering and innovative
					solutions.
				</p>

				{/* Carousel Container */}
				<div className="relative bg-card/80 rounded-2xl px-6 py-8 shadow-sm transition-all duration-300">
					{/* Project Cards */}
					<div
						className={`grid gap-6 md:gap-8 transition-all duration-300 ${itemsPerSlide === 3
							? "grid-cols-3"
							: itemsPerSlide === 2
								? "grid-cols-2"
								: "grid-cols-1"
							}`}
					>
						{visibleProjects.map((project) => (
							<div
								key={project.id}
								className="project-card group bg-card gradient-border rounded-lg overflow-hidden shadow-sm card-hover cursor-pointer"
								onClick={() => handleOpenProject(project.id)}
								role="link"
								tabIndex={0}
								aria-label={`Open details for ${project.title}`}
								onKeyDown={(e) => {
									if (e.key === "Enter" || e.key === " ") {
										e.preventDefault();
										handleOpenProject(project.id);
									}
								}}
							>
								{/* Thumbnail */}
								<div className="h-48 overflow-hidden bg-secondary flex items-center justify-center relative">
									<img
										src={project.image}
										alt={project.title}
										loading="lazy"
										onError={(e) => {
											e.target.onerror = null;
											e.target.src =
												"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1000&auto=format&fit=crop";
											e.target.classList.add("opacity-50");
										}}
										className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-110"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent pointer-events-none" />
								</div>

								<div className="project-card-content p-4">
									<h3 className="text-lg md:text-xl text-primary font-bold mb-2 items-center justify-center font-['Poppins']">
										{project.title}
									</h3>
									<div className="flex flex-wrap gap-2 mb-4 items-center justify-center">
										{project.tags.map((tag) => (
											<span
												key={tag}
												className="px-2 py-1 text-sm md:text-base font-bold font-['Roboto_Mono'] bg-transparent text-foreground border-none"
											>
												{tag}
											</span>
										))}
									</div>
									<p className="text-muted-foreground text-sm md:text-base mb-4 items-center font-['Inter']">
										{project.description}
									</p>
									<div className="mt-auto flex justify-between items-center">
										<div className="flex space-x-3 items-center">
											{/* GitHub icon — stops propagation so clicking it goes to GitHub directly */}
											<a
												href={project.githubUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="text-foreground hover:text-primary transition-colors duration-200 hover:drop-shadow-[0_0_8px_rgba(59,189,219,0.6)]"
												aria-label={`View ${project.title} on GitHub`}
												onClick={(e) => e.stopPropagation()}
											>
												<Github strokeWidth={2} className="icon-lg" />
											</a>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>

					{/* Carousel Navigation */}
					{totalSlides > 1 && (
						<div className="flex justify-center items-center gap-4 mt-8">
							<button
								onClick={handlePrev}
								className="rounded-full border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-300 px-3 py-1.5"
								aria-label="Previous projects"
							>
								<MoveLeft strokeWidth={3} className="icon-md" />
							</button>

							{/* Indicator Dots */}
							<div className="flex gap-3 items-center">
								{Array.from({ length: totalSlides }).map((_, index) => (
									<button
										key={index}
										onClick={() => setCurrentIndex(index)}
										className={`rounded-full transition-all duration-300 ${index === currentIndex
											? "w-5 h-2 bg-primary shadow-lg"
											: "w-2 h-2 bg-foreground dark:bg-foreground hover:bg-foreground/60 dark:hover:bg-foreground/70"
											}`}
										aria-label={`Go to slide ${index + 1}`}
										aria-current={index === currentIndex}
									/>
								))}
							</div>

							<button
								onClick={handleNext}
								className="rounded-full border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-300 px-3 py-1.5"
								aria-label="Next projects"
							>
								<MoveRight strokeWidth={3} className="icon-md" />
							</button>
						</div>
					)}
				</div>

				<div className="text-center mt-8 ">
					<a
						href="https://github.com/ERSA-14"
						target="_blank"
						rel="noopener noreferrer"
						className="cosmic-button w-fit flex items-center mx-auto gap-1"
					>
						Explore my GitHub work <MoveUpRight className="icon-sm" />
					</a>
				</div>
			</div>
		</section>
	);
};
