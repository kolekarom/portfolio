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
    title: "Movie Explorer",
    description: "Full-stack online shopping platform",
    techStack: ["React 18","Node.js","MongoDB","Axios","Redux Toolkit"],
    imageUrl: "/movie.png",
    githubLink: "https://github.com/kolekarom/search-movie",
    demoLink: "https://search-movie-gold-gamma.vercel.app/"
  },
    {
      title: "Portfolio Website",
      description: "A modern portfolio built with React and TypeScript",
      techStack: ["React", "TypeScript", "Vite" , "CSS3"],
      imageUrl: "/portfolio.png", // this should exist in /public/img/pro_img/
      githubLink: "https://github.com/kolekarom/portfolio", // ✅
      demoLink: "https://portfolio-beige-six-45.vercel.app/"
    },
    {
      title: "JourneyMate",
      description: "🌍 JourneyMate – Plan, organize, and track your travel itinerary easily.",
      techStack: ["Html", "CSS", "JavaScript","mysql","API","NodeJs"],
      imageUrl: "/journeymate.png",
      githubLink: "https://github.com/kolekarom/JourneyMate",
      demoLink: "https://journey-mate-umber.vercel.app/"
    },
  
    {
      title: "Apex English School Website",
      description: "🎓Apex English School Website – Showcases school info. ",
      techStack: ["ReactJs", "EmailJs", "Node.js","Tailwind-CSS"],
      imageUrl: "/school.png",
      githubLink: "https://github.com/rehansw00/AES-Website-Project",
      demoLink: "https://apexenglishschoolpatoda.vercel.app/"
    },
    {
      title: "weather-app",
      description: "⛅ Real-time weather information with location-based forecasts.",
      techStack: ["Html","CSS","javaScript", "OpenWeather API"],
      imageUrl: "/weatherApp.png",
      githubLink: "https://github.com/kolekarom/weather-app",
      demoLink: "https://weatherforcasting-tawny.vercel.app/"
    },
    {
      title: "get-job",
      description: "💼 Track your job application with real-time status, updates, and insights.",
      techStack: ["ReactJs", "Tailwind-CSS","API","NodeJs"],
      imageUrl: "/getjob.png",
      githubLink: "https://github.com/kolekarom/get-job",
      demoLink: "https://get-job-beige.vercel.app/"
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
                   Live Demo
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
