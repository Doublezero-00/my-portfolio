import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Payroll Calculator System (Ongoing)",
    description:
      "Developed a full-stack payroll system for automated salary processing with secure access control, PDF reports, and a responsive UI using React, Node.js, Express, and MongoDB.",
    image: "/projects/Payroll.PNG",
    tags: ["React", "Node.js", "Express.js", "MySQL", "TailwindCSS"],
    githubUrls: [
      "https://github.com/Doublezero-00/payroll-calculator-system-frontend.git",
      "https://github.com/Doublezero-00/payroll-calculator-system-backend.git",
    ],
  },
  {
    id: 2,
    title: "KV Audio Rentals System",
    description:
      "Built a MERN-based equipment rental web app with Google OAuth, product browsing, order management, and an admin dashboard. Designed a responsive UI with Tailwind CSS and deployed on Vercel (frontend) and Render (backend) for secure and reliable performance.",
    image: "/projects/audio.jpeg",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
    demoUrl: "https://kv-audio-frontend-rkmf.vercel.app/",
    githubUrls: [
      "https://github.com/Doublezero-00/kv-audio-frontend.git",
      "https://github.com/Doublezero-00/kv-audio-backend.git",
    ],
  },
  {
    id: 3,
    title: "Agricultural Information Platform with Crop Calendar",
    description:
      "Developed the Crop Calendar module for a full-stack agricultural information system, integrating React and Laravel for dynamic crop data and seasonal insights, while strengthening skills in API integration and team collaboration.",
    image: "/projects/agriculture.jpeg",
    tags: ["React", "Laravel", "MySQL"],
    githubUrls:
      "https://github.com/sahansara/Agricultural-Information-Platform-with-Crop-Calendar.git",
  },
  {
    id: 4,
    title: "Coffee Shop Management System (Ongoing)",
    description:
      "Developed a Laravel-based coffee shop management system with authentication, menu management, reservations, and PayPal payments, featuring a responsive admin dashboard for efficient order and menu control.",
    image: "/projects/coffee-shop.jpg",
    tags: ["Laravel", "MySQL"],
    githubUrls: "https://github.com/Doublezero-00/Coffeeblend.git",
  },
  {
    id: 5,
    title: "E-commerce Application",
    description:
      "Developed a Laravel-based e-commerce platform with cart management, product search, and secure role-based authentication, emphasizing backend logic, data handling, and efficient feature integration.",
    image: "/projects/E-commerce.png",
    tags: ["Laravel", "MySQL"],
    githubUrls: "https://github.com/Doublezero-00/E-commerce-app.git",
  },
  {
    id: 6,
    title: "News Mobile App",
    description:
      "Developed a Java-based mobile app with Firebase for real-time authentication and data management, integrated SQLite for offline access, and designed a responsive, user-friendly interface for seamless navigation.",
    image: "/projects/news.avif",
    tags: ["Java", "Firebase", "SQLite"],
    githubUrls: "https://github.com/Doublezero-00/FotPulse-app.git",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}

                    {project.githubUrls && (
                      <div className="flex space-x-3">
                        {Array.isArray(project.githubUrls) ? (
                          project.githubUrls.map((url, i) => (
                            <a
                              key={i}
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            >
                              <Github size={20} />
                            </a>
                          ))
                        ) : (
                          <a
                            href={project.githubUrls}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                          >
                            <Github size={20} />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Doublezero-00"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
