import React, { useState } from "react";
import cn from "../lib/utils";

const skills = [
  //frontend
  {
    imgLink: "/Html.png",
    name: "HTML/CSS",
    category: "frontend",
  },
  {
    imgLink: "/Bootstrap.png",
    name: "Bootstrap",
    category: "frontend",
  },
  {
    imgLink: "/Javascript.png",
    name: "JavaScript",
    category: "frontend",
  },
  {
    imgLink: "/React.png",
    name: "React",
    category: "frontend",
  },
  {
    imgLink: "/tailwind.png",
    name: "Tailwind CSS",
    category: "frontend",
  },

  //backend
  {
    imgLink: "/Node-js.png",
    name: "Node.js",
    category: "backend",
  },
  {
    imgLink: "/express.png",
    name: "Express.js",
    category: "backend",
  },
  {
    imgLink: "/php.png",
    name: "PHP",
    category: "backend",
  },
  {
    imgLink: "/Laravel.png",
    name: "Laravel",
    category: "backend",
  },
  {
    imgLink: "/Python.png",
    name: "Python",
    category: "backend",
  },
  {
    imgLink: "/Java.png",
    name: "Java",
    category: "backend",
  },

  //tools
  {
    imgLink: "/vs-code.png",
    name: "VS Code",
    category: "tools",
  },
  {
    imgLink: "/Github.png",
    name: "Github",
    category: "tools",
  },
  {
    imgLink: "/MySQL.png",
    name: "MySQL",
    category: "tools",
  },
  {
    imgLink: "/mongo-db.png",
    name: "MongoDB",
    category: "tools",
  },
  {
    imgLink: "/SQLite.png",
    name: "SQLite",
    category: "tools",
  },
  {
    imgLink: "/Postman.png",
    name: "Postman",
    category: "tools",
  },
  {
    imgLink: "/Figma.png",
    name: "Figma",
    category: "tools",
  },
  {
    imgLink: "/Linux.png",
    name: "Linux",
    category: "tools",
  },
];

const categories = ["all", "frontend", "backend", "tools"];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card w-[180px] h-[180px] p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center justify-center group cursor-pointer border border-transparent hover:border-primary/40"
            >
              <div className="flex flex-col items-center justify-center">
                <img
                  src={skill.imgLink}
                  alt={skill.name}
                  className="w-16 h-16 object-contain mb-3 group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="font-semibold text-lg text-center text-foreground group-hover:text-primary transition-colors duration-300">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
