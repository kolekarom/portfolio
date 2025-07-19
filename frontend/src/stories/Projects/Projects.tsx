import React from 'react';
import './Projects.css';
import { useTheme } from '../../context/ThemeContext';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  githubLink: string;
  demoLink?: string;
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio built with React and TypeScript",
    techStack: ["React", "TypeScript", "Vite"],
    imageUrl: "/project-1.png",
    githubLink: "https://github.com/kolekarom/portfolio",
    demoLink: "https://kolekarom.github.io/portfolio/"
  },
  {
    title: "Blog Platform",
    description: "A content management system for writers",
    techStack: ["Next.js", "Prisma", "Tailwind"],
    imageUrl: "/project-2.png",
    githubLink: "https://github.com/kolekarom/blog-platform",
    demoLink: "https://blog-platform.kolekarom.com"
  },
  {
    title: "E-commerce Store",
    description: "Full-stack online shopping platform",
    techStack: ["React", "Node.js", "MongoDB"],
    imageUrl: "/project-3.png",
    githubLink: "https://github.com/kolekarom/ecommerce",
    demoLink: "https://store.kolekarom.com"
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics and metrics tracking",
    techStack: ["React", "Chart.js", "Node.js"],
    imageUrl: "/project-4.png",
    githubLink: "https://github.com/kolekarom/social-dashboard",
    demoLink: "https://social-dashboard.kolekarom.com"
  },
  {
    title: "Fitness Tracker",
    description: "Mobile-first workout logging app",
    techStack: ["React Native", "Firebase"],
    imageUrl: "/project-5.png",
    githubLink: "https://github.com/kolekarom/fitness-tracker",
    demoLink: "https://fitness-tracker.kolekarom.com"
  },
  {
    title: "Weather App",
    description: "Real-time weather information",
    techStack: ["React", "OpenWeather API"],
    imageUrl: "/project-6.png",
    githubLink: "https://github.com/kolekarom/weather-app",
    demoLink: "https://weather.kolekarom.com"
  }
];

export const Projects = () => {
  const { activeTheme } = useTheme();
  
  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.imageUrl} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`project-button ${activeTheme === 'light' ? 'light-theme' : 'dark-theme'}`}
                >
                  GitHub
                </a>
                {project.demoLink && (
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`project-button ${activeTheme === 'light' ? 'light-theme' : 'dark-theme'}`}
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
