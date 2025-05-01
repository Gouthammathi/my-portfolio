import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'; // Add icons you want

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/in/your-profile' }, // Replace with your URL
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com/your-username' },       // Replace with your URL
    { name: 'Instagram', icon: FaInstagram, url: 'https://instagram.com/your-profile' }, // Replace with your URL
    // Add more links if needed
  ];

  return (
    <footer className="bg-charcoal/70 border-t border-steel-blue/20 mt-16 py-8">
      <div className="max-w-5xl mx-auto px-4 lg:px-0 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Copyright */}
        <p className="text-sm text-light-gray/60 text-center md:text-left">
          &copy; {currentYear} Goutham Mathi. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Link to ${link.name}`}
              className="text-light-gray/70 hover:text-accent-blue transition-colors duration-200"
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;