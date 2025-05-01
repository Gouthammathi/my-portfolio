import React from 'react';
import { ScrollAnimation } from '../Components/ScrollAnimation';
import { FaCode, FaDownload } from 'react-icons/fa'; // Corrected import for FaDownload

// Removed SectionWrapper as layout is handled in App.jsx and index.css

const Home = () => {
  // Function to trigger PDF download (moved from Button component)
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Images/AI_Intern-Goutham mathi Resume.pdf'; // Ensure path is correct relative to public folder
    link.download = 'AI_Intern-Goutham mathi Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    // Adjusted min-height, padding, max-width, and centering
    <div className="flex flex-col items-start justify-center w-full max-w-4xl mx-auto min-h-[calc(100vh-theme(spacing.16))] py-10 space-y-6">
      <ScrollAnimation delay={0.2}>
        {/* Replaced Meet component with Tailwind button */}
        <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-[#e2a1f8]/20 to-[#a18cd1]/20 border border-white/20 text-sm font-semibold text-white shadow-md">
          Hello There! 👋
        </span>
      </ScrollAnimation>
      <ScrollAnimation delay={0.4}>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extralight text-white">
          I'm <span className="font-normal">Goutham</span>
        </h1>
      </ScrollAnimation>
      <ScrollAnimation delay={0.6}>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-white leading-tight max-w-3xl"> {/* Increased max-w slightly */}
          AI & ML Engineer <br/> Software Developer
        </h2>
      </ScrollAnimation>
      <ScrollAnimation delay={0.8}>
        {/* Adjusted button layout and styling */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          {/* My Works Button - Refactored with Tailwind */}
          <button
            className="group relative inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-gradient-to-r from-[#e2a1f8] to-[#a18cd1] text-white text-base font-medium shadow-lg transition-all duration-300 ease-out hover:from-[#c084fc] hover:to-[#e2a1f8] hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e2a1f8] focus:ring-offset-[#121212] w-full sm:w-auto"
            onClick={() => {
              const section = document.getElementById('portfolio');
              if (section) section.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <FaCode className="text-lg transition-transform duration-300 group-hover:rotate-[-15deg]" />
            <span>My Works</span>
          </button>

          {/* Download CV Button - Replaced Button component */}
          <button
            onClick={handleDownload}
            className="group relative inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-[#404660] text-white text-base font-medium shadow-lg transition-all duration-300 ease-out hover:bg-[#3A4059] hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5C86FF] focus:ring-offset-[#121212] w-full sm:w-auto"
          >
            <FaDownload className="text-lg transition-transform duration-300 group-hover:translate-y-[-2px]" />
            <span>Download CV</span>
          </button>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Home;