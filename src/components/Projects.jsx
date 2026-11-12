import { motion } from "framer-motion";
import { Code2, ExternalLink, ArrowUpRight } from "lucide-react";
import "./Projects.css";

const projects = [
  {
    number: "01",
    title: "Excel Analytical Platform",
    category: "FULL STACK DEVELOPMENT",
    description:
      "A full-stack platform that allows users to upload Excel files and analyze data using interactive 2D and 3D visualizations.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Narendra7672/Excel-Analytical-Platform",
    demo: "#",
  },
  {
    number: "02",
    title: "Live Poll Application",
    category: "REAL-TIME WEB APPLICATION",
    description:
      "An interactive real-time polling application that allows users to create polls and view live voting results.",
    technologies: ["React", "Node.js", "Socket.io", "Express"],
    github: "https://github.com/Narendra7672/Live-Poll-Project",
    demo: "#",
  },
  {
    number: "03",
    title: "AI Logics",
    category: "ARTIFICIAL INTELLIGENCE",
    description:
      "An AI-focused project exploring intelligent application development and modern AI technologies.",
    technologies: ["Python", "AI", "Machine Learning"],
    github: "https://github.com/Narendra7672/ailogics",
    demo: "#",
  },
  {
    number: "04",
    title: "Jarvis AI Assistant",
    category: "AI DEVELOPMENT",
    description:
      "An intelligent personal assistant designed to interact with users and perform useful tasks using voice-based commands.",
    technologies: ["Python", "AI", "Speech Recognition"],
    github: "#",
    demo: "#",
  },
  {
    number: "05",
    title: "Smart Irrigation System",
    category: "IOT DEVELOPMENT",
    description:
      "A smart agriculture solution using Raspberry Pi Pico W to monitor weather conditions and support automated irrigation.",
    technologies: ["Python", "IoT", "Raspberry Pi Pico W"],
    github: "#",
    demo: "#",
  },
  {
    number: "06",
    title: "ESP32-CAM Robot",
    category: "EMBEDDED SYSTEMS",
    description:
      "A camera-based robot project that enables live video monitoring using an ESP32-CAM module.",
    technologies: ["ESP32", "Embedded C", "IoT"],
    github: "#",
    demo: "#",
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">

      <div className="projects-container">

        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">02 / SELECTED WORK</span>

          <h2>
            Things I've <span>Built.</span>
          </h2>

          <p>
            A collection of projects showcasing my passion for
            software development, AI and innovative technology.
          </p>
        </motion.div>

        <div className="projects-grid">

          {projects.map((project, index) => (

            <motion.article
              className="project-card"
              key={project.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >

              <div className="project-top">
                <span className="project-number">
                  {project.number} /
                </span>

                <span className="project-category">
                  {project.category}
                </span>
              </div>

              <div className="project-icon">
                <ArrowUpRight size={28} />
              </div>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="tech-stack">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-links">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`GitHub for ${project.title}`}
                >
                  <Code2 size={17} />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>

              </div>

            </motion.article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;