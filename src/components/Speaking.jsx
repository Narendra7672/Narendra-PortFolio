import { motion } from "framer-motion";
import {
  Mic2,
  Video,
  Users,
  ArrowUpRight,
  MessageCircle
} from "lucide-react";

import "./Speaking.css";

const talks = [
  {
    number: "01",
    category: "TECHNICAL PRESENTATION",
    icon: Mic2,
    title: "Introduction to Artificial Intelligence",
    description:
      "Understanding AI fundamentals, intelligent systems and the future of artificial intelligence.",
    type: "Technical Topic"
  },
  {
    number: "02",
    category: "COMMUNICATION",
    icon: MessageCircle,
    title: "The Importance of Data Privacy",
    description:
      "Discussing data protection, online security and the importance of responsible digital practices.",
    type: "Communication Skills"
  },
  {
    number: "03",
    category: "KNOWLEDGE SHARING",
    icon: Users,
    title: "Learning from Failure",
    description:
      "Sharing thoughts about overcoming challenges, learning from mistakes and personal development.",
    type: "Personal Development"
  },
  {
    number: "04",
    category: "TECHNOLOGY",
    icon: Video,
    title: "Cloud Computing and AWS",
    description:
      "Exploring cloud computing concepts, AWS services and the importance of cloud technology.",
    type: "Technical Topic"
  }
];

function Speaking() {
  return (
    <section className="speaking-section" id="speaking">

      <div className="speaking-container">

        <motion.div
          className="speaking-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <span className="section-label">
            05 / COMMUNICATION & PRESENTATIONS
          </span>

          <h2>
            Ideas Worth <span>Sharing.</span>
          </h2>

          <p>
            Exploring technology, sharing knowledge and continuously
            improving my communication and presentation skills.
          </p>

        </motion.div>

        <div className="speaking-grid">

          {talks.map((talk, index) => {

            const Icon = talk.icon;

            return (

              <motion.div
                className="speaking-card"
                key={talk.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1
                }}
                whileHover={{ y: -8 }}
              >

                <div className="speaking-top">

                  <span>{talk.number} /</span>

                  <span className="speaking-category">
                    {talk.category}
                  </span>

                </div>

                <div className="speaking-icon">
                  <Icon size={27} />
                </div>

                <h3>{talk.title}</h3>

                <p>{talk.description}</p>

                <div className="speaking-bottom">

                  <span>{talk.type}</span>

                  <ArrowUpRight size={18} />

                </div>

              </motion.div>

            );

          })}

        </div>

        <motion.div
          className="speaking-message"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span>MY PHILOSOPHY</span>

          <h3>
            "Knowledge grows when it is shared."
          </h3>

          <p>
            Every conversation is an opportunity to learn,
            communicate and grow.
          </p>

        </motion.div>

      </div>

    </section>
  );
}

export default Speaking;