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
  TailwindCSS: TbBrandTailwind,
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
  { name: "Python", category: "Programming Language" },
  { name: "JavaScript", category: "Programming Language" },
  { name: "React", category: "Frontend" },
  { name: "Next", category: "Frontend" },
  { name: "Node", category: "Backend" },
  { name: "AWS", category: "Cloud" },
  { name: "SQL", category: "Programming Language" },
  { name: "Java", category: "Programming Language" },
  { name: "Postgres", category: "Database" },
  { name: "MySQL", category: "Database" },
  { name: "Oracle DBMS", category: "Database" },
  { name: "Git", category: "Dev Tools" },
  { name: "GitHub", category: "Dev Tools" },
  { name: "TailwindCSS", category: "Frontend" },
  { name: "Bootstrap", category: "Frontend" },
  { name: "Express", category: "Backend" },
  { name: "Django", category: "Backend" },
  { name: "Linux", category: "Dev Tools" },
  { name: "Postman", category: "Dev Tools" },
  { name: "Oracle Cloud", category: "Cloud" },
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
  }, [activeCategory, skills]);

  return (
    <section
      id="Skills"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 py-20"
    >
      <div className="container mx-auto max-w-5xl mt-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center ">
          My <span className="text-primary">Skillset</span>
        </h2>

        <p className="text-center text-muted-foreground mb-6 max-w-3xl mx-auto">
          This foundational framework and modern tools I leverage to architect
          scalable, efficient, and innovative Solutions—from the launchpad of
          the development stack to the cloud-native frontier
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full capitalize text-xs md:text-sm w-fit",
                activeCategory === category
                  ? "cosmic-button"
                  : "px-4 py-1.5 md:px-6 md:py-2 border-2 border-border/50 bg-background/50 text-muted-foreground hover:border-primary/50 hover:text-foreground hover:bg-secondary/50"
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
                <h3 className="font-medium text-sm">{skill.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
