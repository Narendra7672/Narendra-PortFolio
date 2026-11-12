import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  BrainCircuit,
  MapPin,
  BriefcaseBusiness
} from "lucide-react";

import "./About.css";

const skills = [
  "Python",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "HTML",
  "CSS",
  "Machine Learning",
  "Deep Learning",
  "LLMs",
  "Git & GitHub",
  "AWS",
  "SQL"
];

function About() {
  return (
    <section className="about-section" id="about">

      <div className="about-container">

        <motion.div
          className="about-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">04 / ABOUT ME</span>

          <h2>
            A little about <span>myself.</span>
          </h2>
        </motion.div>

        <div className="about-grid">

          <motion.div
            className="about-intro"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <div className="about-icon">
              <Code2 size={25} />
            </div>

            <h3>Who I Am</h3>

            <p>
              I'm Narendra Goud, a passionate Full Stack Developer
              interested in building modern web applications and
              exploring emerging technologies.

              <br /><br />

              I enjoy solving problems, developing creative solutions
              and continuously improving my technical skills.

              <br /><br />

              My interests include Artificial Intelligence,
              Machine Learning, Deep Learning, Large Language Models
              and Cloud Computing.
            </p>

            <div className="about-location">
              <MapPin size={16} />
              Hyderabad, India
            </div>

          </motion.div>

          <motion.div
            className="about-details"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <div className="detail-card">

              <GraduationCap size={24} />

              <div>
                <span>EDUCATION</span>
                <h3>B.Tech – Electronics & Communication Engineering</h3>
                <p>Kasireddy Narayan Reddy College of Engineering</p>
              </div>

            </div>

            <div className="detail-card">

              <BriefcaseBusiness size={24} />

              <div>
                <span>PROFESSIONAL INTEREST</span>
                <h3>Full Stack Development</h3>
                <p>Web Development & Software Engineering</p>
              </div>

            </div>

            <div className="detail-card">

              <BrainCircuit size={24} />

              <div>
                <span>TECHNICAL INTEREST</span>
                <h3>Artificial Intelligence</h3>
                <p>Machine Learning, Deep Learning & LLMs</p>
              </div>

            </div>

          </motion.div>

        </div>

        <div className="skills-container">

          <div className="skills-heading">
            <span className="section-label">TECHNICAL EXPERTISE</span>
            <h3>Tools & Technologies</h3>
          </div>

          <div className="skills-grid">

            {skills.map((skill, index) => (

              <motion.div
                className="skill-item"
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;