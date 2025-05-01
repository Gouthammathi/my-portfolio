import React from 'react'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'about', label: 'About Me' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

const Header = ({ activeSection }) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    // Added check for section existence
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // Adjusted padding, removed sticky/z-index (handled in App.jsx)
    <nav className="flex items-center justify-center py-4 px-8">
      <div className="flex items-center space-x-3"> {/* Reduced space slightly */}
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            // Replaced GlassButton with Tailwind classes
            className={`
              relative px-6 py-2 rounded-full 
              bg-white/10 backdrop-blur-md 
              border border-white/15 
              text-white font-semibold text-sm tracking-wide /* Adjusted text size/tracking */
              shadow-md hover:shadow-lg 
              transition-all duration-250 ease-out /* Adjusted transition */
              hover:bg-white/20 hover:scale-105 
              active:scale-95 active:bg-white/30 
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fbc2eb] focus:ring-offset-[#121212] 
              ${activeSection === item.id ? 'ring-2 ring-white shadow-lg scale-105' : ''} /* Highlight active */
            `}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Header

