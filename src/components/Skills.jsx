import { useState } from "react";
import { cn } from "../lib/utils";
import {
  FaNodeJs,
  FaPython,
  FaReact,
  FaAws,
  FaGitAlt,
  FaGithub,
  FaLinux,
} from "react-icons/fa";
import {
  SiMysql,
  SiOracle,
  SiPostman,
  SiJavascript,
  SiFlask,
} from "react-icons/si";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { Database, Code, GitBranch, Github } from "lucide-react";

const skillIcons = {
  Python: FaPython,
  SQL: Database,
  JavaScript: SiJavascript,
  ReactJS: FaReact,
  "Next.js": TbBrandNextjs,
  "Tailwind CSS": TbBrandTailwind,
  Flask: SiFlask,
  NodeJS: FaNodeJs,
  ExpressJS: Code,
  MySQL: SiMysql,
  "Oracle DB": SiOracle,
  AWS: FaAws,
  "Oracle Cloud": SiOracle,
  Git: FaGitAlt,
  GitHub: FaGithub,
  Postman: SiPostman,
  Linux: FaLinux,
};

const skills = [
  { name: "Python", category: "Programming Language" },
  { name: "SQL", category: "Programming Language" },
  { name: "JavaScript", category: "Programming Language" },
  { name: "ReactJS", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Flask", category: "Backend" },
  { name: "NodeJS", category: "Backend" },
  { name: "ExpressJS", category: "Backend" },
  { name: "MySQL", category: "Database" },
  { name: "Oracle DB", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Oracle Cloud", category: "Cloud" },
  { name: "Git", category: "Dev Tools" },
  { name: "GitHub", category: "Dev Tools" },
  { name: "Postman", category: "Dev Tools" },
  { name: "Linux", category: "Dev Tools" },
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
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );

  return (
    <section id="Skills" className="relative px-4 py-24 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 md:mb-12 text-center ">
          My <span className="text-primary">Skillset</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredSkills.map((skill, index) => {
            const Icon = skillIcons[skill.name];
            return (
              <div
                key={index}
                className="gradient-border p-4 card-hover flex flex-col items-center justify-center gap-2 text-center transition-all duration-300 group cursor-pointer"
              >
                {Icon && (
                  <Icon className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                )}
                <h3 className="font-semibold text-sm">{skill.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
