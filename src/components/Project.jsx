import { ArrowDown, MoveUpRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Secure Authentication System",
    description:
      "Full-stack authentication system built with Node.js, Express, and PostgreSQL. Implements user registration, login with bcrypt password hashing, session management, and server-side rendering using EJS templates.",
    image: "/ProjectSS/one.jpeg",
    tags: ["Node", "Express", "Postgres", "Sessions", "Authentication"],
    docsUrl: "",
    githubUrl: "https://github.com/ERSA-14/Authentication_frontend",
  },
  {
    id: 2,
    title: "Invoice Processing Automation",
    description:
      "Serverless bill receipt automation system using AWS Lambda functions written in Python. Automates invoice processing and receipt generation through event-driven cloud architecture.",
    image: "/ProjectSS/two.jpeg",
    tags: ["Python", "AWS Cloud", "Serverless", "Event-driven", "Automation"],
    docsUrl: "",
    githubUrl: "https://github.com/ERSA-14/AWS-lambda",
  },
  {
    id: 3,
    title: "Agentic AI Coding Assistant",
    description:
      "A command-line autonomous AI agent powered by  Gemini that reads, writes, and executes Python files while intelligently debugging code through multi-step reasoning and iterative function calling.",
    image: "/ProjectSS/four.png",
    tags: [
      "Python",
      "File-handling",
      "Prompt",
      "Autonomous",
      "Function-calling",
    ],
    docsUrl: "",
    githubUrl: "https://github.com/ERSA-14/Python-AI",
  },
];

export const Project = () => {
  return (
    <section id="Projects" className="py-20 px-4 relative mt-4">
      <div className="container mx-auto max-w-6xl pb-4 mt-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Highlighted <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-4 max-w-3xl mx-auto">
          Navigating the infinite expanse of technology, these projects serve as
          my waypoints. A collection of ideas turned into reality, demonstrating
          the power of exploration and engineering.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-sm card-hover justify-center items-center border-2 border-transparent hover:border-primary transition-none"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-none"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg text-primary font-semibold mb-2 items-center justify-center">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4 items-center justify-center">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 items-center justify-center text-xs font-medium bg-secondary text-secondary-foreground rounded-full dark:border-2 dark:border-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm mb-4 items-center">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3 items-center">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-none hover:drop-shadow-[0_0_8px_rgba(59,189,219,0.6)]"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github strokeWidth={2} size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8 ">
          <a
            href="https://github.com/ERSA-14"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button w-fit flex items-center mx-auto gap-1"
          >
            Explore my GitHub work <MoveUpRight size={20} />
          </a>
        </div>
      </div>
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex items-center animate-bounce">
        <a href="#Contact" aria-label="Scroll to Contact">
          <ArrowDown className="h-5 w-5 text-primary" />
        </a>
      </div>
    </section>
  );
};
