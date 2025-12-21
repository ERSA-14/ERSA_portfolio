import { useState, useEffect } from "react";
import { MoveUpRight, Github, MoveLeft, MoveRight } from "lucide-react";
import { debounce } from "../utils/debounce";

const projects = [
  {
    id: 1,
    title: "Agentic AI Coding Assistant",
    description:
      "This is a command-line autonomous AI coding agent powered by Gemini that reads, writes, and executes Python files while intelligently debugging code with real-time error analysis and automatic iterative code correction through multiple sequential function calling operations.",
    image: "/ProjectSS/four.png",
    tags: [
      "Python",
      "File-handling",
      "Prompt",
      "Function-calling",
      "Autonomous",
    ],
    docsUrl: "",
    githubUrl: "https://github.com/ERSA-14/Python-AI",
  },
  {
    id: 2,
    title: "Invoice Processing Automation",
    description:
      "This is a Automated Lambda function that extracts receipt data (vendor, date, total, items) from an S3-uploaded image using AWS Textract for OCR processing and stores it in DynamoDB. It then sends an email notification with the extracted receipt details via SES.",
    image: "/ProjectSS/two.jpeg",
    tags: ["Python", "AWS Cloud", "Serverless", "Event-driven", "Automation"],
    docsUrl: "",
    githubUrl: "https://github.com/ERSA-14/AWS-lambda",
  },
  {
    id: 3,
    title: "Secure Authentication System",
    description:
      "This is a Express.js authentication system using Passport.js with local strategy (bcrypt + AES crypto) and Google OAuth2, storing user data in PostgreSQL. Authenticated users access protected routes with session-based authentication managed by express-session.",
    image: "/ProjectSS/one.jpeg",
    tags: ["Node", "Express", "Authentication", "Postgres", "Sessions"],
    docsUrl: "",
    githubUrl: "https://github.com/ERSA-14/Authentication_frontend",
  },
];

export const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(1);

  // Determine items per slide based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerSlide(3); // Large screens
      } else if (window.innerWidth >= 768) {
        setItemsPerSlide(2); // Medium screens
      } else {
        setItemsPerSlide(1); // Small screens
      }
    };

    handleResize();

    const debouncedResize = debounce(handleResize, 100);
    window.addEventListener("resize", debouncedResize);
    return () => window.removeEventListener("resize", debouncedResize);
  }, []);

  // Reset current index when items per slide changes to avoid empty views
  useEffect(() => {
    if (currentIndex !== 0) {
      setCurrentIndex(0);
    }
  }, [itemsPerSlide]);

  const totalSlides = Math.ceil(projects.length / itemsPerSlide);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const visibleProjects = projects.slice(
    currentIndex * itemsPerSlide,
    (currentIndex + 1) * itemsPerSlide
  );

  return (
    <section
      id="Projects"
      className="relative min-h-screen flex flex-col justify-center items-center py-20 px-4 md:px-8 lg:px-12 xl:px-24"
    >
      <div className="container mx-auto max-w-7xl pb-4 mt-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Highlighted <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          These projects reflect my journey as a{" "}
          <span className="text-primary font-semibold">Developer</span> from
          conceptualisation to deployment. Each application showcases practical
          implementation of modern technologies, solving real-world challenges
          through thoughtful engineering and innovative solutions.
        </p>

        {/* Carousel Container */}
        <div className="relative bg-background rounded-lg px-6 py-8 shadow-sm border-b border-border/50 transition-all duration-300">
          {/* Project Cards */}
          <div
            className={`grid gap-6 md:gap-8 transition-all duration-300 ${
              itemsPerSlide === 3
                ? "grid-cols-3"
                : itemsPerSlide === 2
                ? "grid-cols-2"
                : "grid-cols-1"
            }`}
          >
            {visibleProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-card gradient-border rounded-lg overflow-hidden shadow-sm card-hover justify-center items-center"
              >
                <div className="h-48 overflow-hidden bg-secondary flex items-center justify-center relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1000&auto=format&fit=crop"; // Unique Cosmic Space Placeholder
                      e.target.classList.add("opacity-50");
                    }}
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent pointer-events-none" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg md:text-xl text-primary font-bold mb-2 items-center justify-center font-['Poppins']">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4 items-center justify-center">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 items-center justify-center text-xs font-medium bg-secondary text-secondary-foreground rounded-full dark:border-2 dark:border-white font-['Roboto_Mono']"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm md:text-base mb-4 items-center font-['Inter']">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3 items-center">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors duration-200 hover:drop-shadow-[0_0_8px_rgba(59,189,219,0.6)]"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github strokeWidth={2} className="icon-lg" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Navigation - Resume Button Style */}
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
                    className={`rounded-full transition-all duration-300 ${
                      index === currentIndex
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
