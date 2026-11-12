import { motion } from "framer-motion";

import {
  Code2,
  Globe,
  Download,
  ArrowDown,
  Sparkles
} from "lucide-react";

import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="intro">

      <div className="hero-glow"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
       
<motion.div className="hero-photo-wrapper">

    <div className="photo-glow"></div>

    <div className="photo-circle">
        <img
            src="/narendra.jpg"
            alt="Narendra Goud"
            className="hero-photo"
        />
    </div>

    <div className="photo-status">
        <span></span>
        Available for Opportunities
    </div>

    <div className="code-badge">
        &lt;/&gt;
    </div>

</motion.div>

        <div className="availability">
          <span className="status-dot"></span>
          AVAILABLE FOR OPPORTUNITIES
        </div>

        <motion.p
          className="hero-greeting"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Hello, I'm
        </motion.p>

        <h1 className="hero-title">
          NARENDRA
          <span>GOUD.</span>
        </h1>

        <h2 className="hero-subtitle">
          Full Stack Developer
          <span className="hero-divider"> / </span>
          AI Enthusiast
        </h2>

        <p className="hero-description">
          I build modern, scalable and interactive web applications.
          Passionate about technology, artificial intelligence,
          machine learning and creating solutions that make a difference.
        </p>

        <div className="hero-buttons">

          <a
            href="https://github.com/Narendra7672"
            target="_blank"
            rel="noreferrer"
            className="hero-btn primary-btn"
          >
            <Code2 size={18} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/enarendra7672"
            target="_blank"
            rel="noreferrer"
            className="hero-btn secondary-btn"
          >
            <Globe size={18} />
            LinkedIn
          </a>

          <a
            href="/resume.pdf"
            download
            className="hero-btn secondary-btn"
          >
            <Download size={18} />
            Resume
          </a>

        </div>

        <div className="hero-bottom">
          <div className="hero-location">
            <Sparkles size={15} />
            Hyderabad, India
          </div>

          <a href="#projects" className="explore-link">
            EXPLORE MY WORK
            <ArrowDown size={16} />
          </a>
        </div>

      </motion.div>

      <div className="hero-decoration decoration-one"></div>
      <div className="hero-decoration decoration-two"></div>

    </section>
  );
}

export default Hero;