import { useState, useRef, useEffect } from "react";
import { cn } from "../lib/utils";
import {
  FaNodeJs,
  FaPython,
  FaReact,
  FaAws,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaJava,
  FaDatabase,
} from "react-icons/fa";
import {
  SiMysql,
  SiOracle,
  SiPostman,
  SiJavascript,
  SiDjango,
  SiPostgresql,
  SiBootstrap,
  SiExpress,
} from "react-icons/si";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { Database } from "lucide-react";

const skillIcons = {
  Python: FaPython,
  Java: FaJava,
  SQL: FaDatabase,
  JavaScript: SiJavascript,
  React: FaReact,
  Next: TbBrandNextjs,
  "Tailwind CSS": TbBrandTailwind,
  Bootstrap: SiBootstrap,
  Django: SiDjango,
  Node: FaNodeJs,
  Express: SiExpress,
  MySQL: SiMysql,
  Postgres: SiPostgresql,
  "Oracle DBMS": SiOracle,
  AWS: FaAws,
  "Oracle Cloud": SiOracle,
  Git: FaGitAlt,
  GitHub: FaGithub,
  Postman: SiPostman,
  Linux: FaLinux,
};

const skills = [
  { name: "AWS", category: "Cloud" },
  { name: "Bootstrap", category: "Frontend" },
  { name: "Django", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "Git", category: "Dev Tools" },
  { name: "GitHub", category: "Dev Tools" },
  { name: "Java", category: "Programming Language" },
  { name: "JavaScript", category: "Programming Language" },
  { name: "Linux", category: "Dev Tools" },
  { name: "MySQL", category: "Database" },
  { name: "Next", category: "Frontend" },
  { name: "Node", category: "Backend" },
  { name: "Oracle Cloud", category: "Cloud" },
  { name: "Oracle DBMS", category: "Database" },
  { name: "Postgres", category: "Database" },
  { name: "Postman", category: "Dev Tools" },
  { name: "Python", category: "Programming Language" },
  { name: "React", category: "Frontend" },
  { name: "SQL", category: "Programming Language" },
  { name: "Tailwind CSS", category: "Frontend" },
];

const categories = [
  "All",
  "Programming Language",
  "Frontend",
  "Backend",
  "Database",
  "Cloud",
  "Dev Tools",
];

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [minHeight, setMinHeight] = useState("auto");
  const containerRef = useRef(null);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );

  useEffect(() => {
    if (activeCategory === "All" && containerRef.current) {
      setMinHeight(`${containerRef.current.offsetHeight}px`);
    }
  }, [activeCategory]);

  return (
    <section id="Skills" className="relative">
      <div className="container mx-auto max-w-7xl mt-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center ">
          My <span className="text-primary">Skillset</span>
        </h2>

        <p className="text-center text-lg md:text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
          A <span className="text-primary font-semibold">comprehensive </span>{" "}
          toolkit spanning frontend frameworks, backend technologies, and cloud
          infrastructure. These are the technologies I work with regularly to
          build scalable applications, each one selected for its ability to
          solve real-world problems efficiently.
        </p>

        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 w-full pb-2 px-2">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full capitalize w-fit transition-colors duration-300",
                "text-[clamp(0.90rem,1.5vw,1rem)]",
                activeCategory === category
                  ? "cosmic-button"
                  : "font-['Poppins'] px-3 py-1 md:px-6 md:py-2 border-2 border-border/50 bg-background/50 text-muted-foreground hover:border-primary/50 hover:text-foreground hover:bg-secondary/50"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div
          ref={containerRef}
          style={{ minHeight: activeCategory === "All" ? "auto" : minHeight }}
          className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-4 content-start"
        >
          {filteredSkills.map((skill, index) => {
            const Icon = skillIcons[skill.name];
            return (
              <div
                key={index}
                className="gradient-border p-4 card-hover flex flex-col items-center justify-center gap-2 text-center group cursor-pointer"
              >
                {Icon && <Icon className="icon-xl text-primary" />}
                <h3 className="font-['Roboto_Mono'] font-medium text-[clamp(0.95rem,1.70vw,1.15rem)]">
                  {skill.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
