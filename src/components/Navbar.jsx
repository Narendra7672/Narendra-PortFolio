import { useState } from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  FileText,
  GitBranch,
  Mic2,
  UserRound,
  Mail
} from "lucide-react";

import "./Navbar.css";

const navItems = [
  { name: "INTRO", icon: Terminal, id: "intro" },
  { name: "WRITING", icon: FileText, id: "writing" },
  { name: "PROJECTS", icon: GitBranch, id: "projects" },
  { name: "SPEAKING", icon: Mic2, id: "speaking" },
  { name: "ABOUT", icon: UserRound, id: "about" },
  { name: "NEWSLETTER", icon: Mail, id: "newsletter" }
];

function Navbar() {
  const [active, setActive] = useState("INTRO");
  const [hovered, setHovered] = useState(null);

  const selected = hovered || active;

  return (
    <header className="navbar-wrapper">
      <nav
        className="navbar"
        onMouseLeave={() => setHovered(null)}
      >
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.name}
              href={`#${item.id}`}
              className={`nav-link ${
                active === item.name ? "active" : ""
              }`}
              onMouseEnter={() => setHovered(item.name)}
              onClick={() => setActive(item.name)}
            >
              {selected === item.name && (
                <motion.div
                  className="nav-highlight"
                  layoutId="nav-highlight"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30
                  }}
                />
              )}

              <Icon size={14} strokeWidth={1.7} />

              <span>{item.name}</span>
            </a>
          );
        })}
      </nav>
    </header>
  );
}

export default Navbar;