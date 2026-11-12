import { useState } from "react";
import { motion } from "framer-motion";

import {
  Mail,
  Code2,
  Globe,
  MapPin,
  Send,
  ArrowUpRight
} from "lucide-react";

import "./Newsletter.css";

function Newsletter() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href =
      `mailto:narendragoud805@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="newsletter-section" id="newsletter">

      <div className="newsletter-container">

        <motion.div
          className="newsletter-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">
            06 / GET IN TOUCH
          </span>

          <h2>
            Let's build something <span>together.</span>
          </h2>

          <p>
            Have an interesting project, opportunity or idea?
            I'd love to hear from you. Let's connect and create
            something meaningful.
          </p>
        </motion.div>

        <div className="newsletter-grid">

          {/* Contact Information */}

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <h3>Contact Information</h3>

            <p className="contact-description">
              Feel free to reach out for opportunities,
              collaborations and technical discussions.
            </p>

            <a
              href="mailto:narendragoud805@gmail.com"
              className="contact-item"
            >
              <Mail size={20} />

              <div>
                <span>EMAIL</span>
                <h4>narendragoud805@gmail.com</h4>
              </div>

              <ArrowUpRight size={17} />
            </a>

            <div className="contact-item">
              <MapPin size={20} />

              <div>
                <span>LOCATION</span>
                <h4>Hyderabad, India</h4>
              </div>
            </div>

            <div className="social-links">

              <a
                href="https://github.com/Narendra7672"
                target="_blank"
                rel="noreferrer"
              >
                <Code2 size={19} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/enarendra7672"
                target="_blank"
                rel="noreferrer"
              >
                <Globe size={19} />
                LinkedIn
              </a>

            </div>

          </motion.div>

          {/* Contact Form */}

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <h3>Send Me a Message</h3>

            <div className="form-group">

              <label>Your Name</label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />

            </div>

            <div className="form-group">

              <label>Your Email</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>

            <div className="form-group">

              <label>Your Message</label>

              <textarea
                name="message"
                rows="5"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
              />

            </div>

            <button type="submit" className="send-button">

              Send Message
              <Send size={17} />

            </button>

          </motion.form>

        </div>

      </div>

    </section>
  );
}

export default Newsletter;