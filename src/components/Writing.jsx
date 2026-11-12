import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  Code2,
  BrainCircuit,
  Cloud,
  Calendar
} from "lucide-react";

import "./Writing.css";

const articles = [
  {
    number: "01",
    category: "PYTHON",
    icon: Code2,
    title: "Understanding Python Programming",
    description:
      "Exploring Python fundamentals, data structures, problem-solving techniques and practical implementations.",
    date: "Programming"
  },
  {
    number: "02",
    category: "ARTIFICIAL INTELLIGENCE",
    icon: BrainCircuit,
    title: "Introduction to Machine Learning",
    description:
      "Understanding supervised learning, regression, classification algorithms and real-world ML applications.",
    date: "AI & ML"
  },
  {
    number: "03",
    category: "CLOUD COMPUTING",
    icon: Cloud,
    title: "Exploring AWS Cloud Computing",
    description:
      "Learning cloud infrastructure, AWS services, deployment strategies and cloud architecture.",
    date: "Cloud"
  },
  {
    number: "04",
    category: "WEB DEVELOPMENT",
    icon: BookOpen,
    title: "Building Applications with MERN",
    description:
      "Exploring React, Node.js, Express and MongoDB to develop modern full-stack applications.",
    date: "Development"
  }
];

function Writing() {
  return (
    <section className="writing-section" id="writing">

      <div className="writing-container">

        <motion.div
          className="writing-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">
            03 / THOUGHTS & KNOWLEDGE
          </span>

          <h2>
            Words & <span>Ideas.</span>
          </h2>

          <p>
            Sharing my learning journey, technical knowledge,
            programming concepts and experiences in technology.
          </p>
        </motion.div>

        <div className="writing-grid">

          {articles.map((article, index) => {

            const Icon = article.icon;

            return (
              <motion.article
                className="writing-card"
                key={article.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1
                }}
                whileHover={{ y: -7 }}
              >

                <div className="writing-card-top">

                  <span>{article.number} /</span>

                  <span className="writing-category">
                    {article.category}
                  </span>

                </div>

                <div className="writing-icon">
                  <Icon size={25} />
                </div>

                <h3>{article.title}</h3>

                <p>{article.description}</p>

                <div className="writing-card-bottom">

                  <div className="writing-date">
                    <Calendar size={14} />
                    {article.date}
                  </div>

                  <a href="#newsletter">
                    EXPLORE
                    <ArrowUpRight size={16} />
                  </a>

                </div>

              </motion.article>
            );
          })}

        </div>

        <div className="writing-footer">
          <p>Always learning. Always building. Always growing.</p>
        </div>

      </div>

    </section>
  );
}

export default Writing;