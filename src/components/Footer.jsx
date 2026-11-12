import { motion } from "framer-motion";
import {
  ArrowUp,
  ArrowUpRight,
  Code2,
  Mail
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import "./Footer.css";

function Footer() {

  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-main">

          {/* Branding */}

          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <a href="#intro" className="footer-logo">
              NARENDRA<span>.</span>
            </a>

            <p>
              Building digital experiences through
              creativity, technology and innovation.
            </p>

            <div className="footer-socials">

              <a
                href="https://github.com/Narendra7672"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/enarendra7672"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href="mailto:narendragoud805@gmail.com"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>

            </div>

          </motion.div>

          {/* Navigation */}

          <div className="footer-links">

            <h4>NAVIGATION</h4>

            <a href="#intro">Introduction</a>
            <a href="#writing">Writing</a>
            <a href="#projects">Projects</a>
            <a href="#speaking">Speaking</a>
            <a href="#about">About</a>

          </div>

          {/* Contact */}

          <div className="footer-contact">

            <h4>GET IN TOUCH</h4>

            <p>
              Have a project or opportunity?
              Let's connect.
            </p>

            <a href="mailto:narendragoud805@gmail.com">
              <Mail size={16} />
              Email Me
              <ArrowUpRight size={15} />
            </a>

          </div>

        </div>

        {/* Bottom Footer */}

        <div className="footer-bottom">

          <p>
            © {currentYear} Narendra Goud. All rights reserved.
          </p>

          <div className="footer-status">
            <span></span>
            Designed & Developed with passion
            <Code2 size={14} />
          </div>

          <button
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            BACK TO TOP
            <ArrowUp size={16} />
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;