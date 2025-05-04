import React from 'react';
import { motion } from 'framer-motion'; // Import motion

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'portfolio', label: 'Projects' },
  { id: 'about', label: 'About Me' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

const Header = ({ activeSection }) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // Added motion.nav for subtle entrance
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex items-center justify-center py-4 px-8"
    >
      {/* Updated background, border, text, hover, focus, and active colors */}
      <div className="flex items-center space-x-3 bg-charcoal/60 backdrop-blur-md p-2 rounded-full border border-steel-blue/30 shadow-lg">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`
              relative px-5 py-1.5 rounded-full
              text-light-gray font-medium text-sm tracking-wide
              transition-all duration-250 ease-out
              hover:text-off-white hover:bg-dark-gray/70
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-blue focus:ring-offset-charcoal
              ${activeSection === item.id
                ? 'bg-accent-blue text-navy shadow-md scale-105' // Active state with new colors
                : 'bg-transparent' // Default state
              }
            `}
          >
            {item.label}
          </button>
        ))}
      </div>
    </motion.nav>
  );
};

export default Header;

