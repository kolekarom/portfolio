const fs = require('fs');
const sharp = require('sharp');

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio built with React and TypeScript",
    techStack: ["React", "TypeScript", "Vite"],
    color: '#007bff'
  },
  {
    title: "Blog Platform",
    description: "A content management system for writers",
    techStack: ["Next.js", "Prisma", "Tailwind"],
    color: '#6f42c1'
  },
  {
    title: "E-commerce Store",
    description: "Full-stack online shopping platform",
    techStack: ["React", "Node.js", "MongoDB"],
    color: '#28a745'
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics and metrics tracking",
    techStack: ["React", "Chart.js", "Node.js"],
    color: '#fd7e14'
  },
  {
    title: "Fitness Tracker",
    description: "Mobile-first workout logging app",
    techStack: ["React Native", "Firebase"],
    color: '#dc3545'
  },
  {
    title: "Weather App",
    description: "Real-time weather information",
    techStack: ["React", "OpenWeather API"],
    color: '#17a2b8'
  }
];

async function generateImage(project, index) {
  const canvas = sharp({
    create: {
      width: 800,
      height: 400,
      channels: 4,
      background: { r: parseInt(project.color.slice(1, 3), 16), 
                    g: parseInt(project.color.slice(3, 5), 16), 
                    b: parseInt(project.color.slice(5, 7), 16),
                    alpha: 1 }
    }
  });

  // Add title
  await canvas
    .composite([
      {
        input: Buffer.from(`
          <svg width="800" height="400">
            <text x="50" y="100" font-family="Arial" font-size="36" fill="white">
              ${project.title}
            </text>
            <text x="50" y="150" font-family="Arial" font-size="24" fill="rgba(255,255,255,0.8)">
              ${project.description}
            </text>
            <text x="50" y="200" font-family="Arial" font-size="20" fill="rgba(255,255,255,0.6)">
              ${project.techStack.join(' • ')}
            </text>
          </svg>`),
        top: 0,
        left: 0
      }
    ])
    .png()
    .toFile(`./public/project-${index + 1}.png`);
}

async function generateAllImages() {
  for (let i = 0; i < projects.length; i++) {
    await generateImage(projects[i], i);
    console.log(`Generated project-${i + 1}.png`);
  }
}

// Create public directory if it doesn't exist
if (!fs.existsSync('./public')) {
  fs.mkdirSync('./public');
}

generateAllImages();
