import React from 'react';
// Removed ScrollAnimation import
import { motion } from 'framer-motion'; // Import motion
import { FaCode, FaDownload } from 'react-icons/fa';

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Images/AI_Intern-Goutham mathi Resume.pdf';
    link.download = 'AI_Intern-Goutham mathi Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Animation variants for staggering
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger delay between children
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-start justify-center w-full max-w-4xl mx-auto min-h-[calc(100vh-theme(spacing.16))] py-10 space-y-6"
    >
      <motion.span
        variants={itemVariants}
        // Updated tag background, border, text colors
        className="inline-block px-4 py-1.5 rounded-full bg-dark-gray/50 border border-steel-blue/30 text-sm font-semibold text-accent-blue shadow-md"
      >
        Hello There! 👋
      </motion.span>

      <motion.h1
        variants={itemVariants}
        // Updated text colors
        className="text-5xl sm:text-6xl lg:text-7xl font-extralight text-off-white"
      >
        I'm <span className="font-normal text-accent-blue">Goutham</span>
      </motion.h1>

      <motion.h2
        variants={itemVariants}
        // Updated text colors
        className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-off-white leading-tight max-w-3xl"
      >
        AI & ML Engineer <br /> Software Developer
      </motion.h2>

      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row gap-4 mt-8"
      >
        {/* My Works Button - Added motion.button and whileHover */}
        <motion.button
          whileHover={{ scale: 1.1, transition: { type: 'spring', stiffness: 300 } }} // Enhanced hover
          whileTap={{ scale: 0.95 }}
          className="group relative inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-gradient-to-r from-accent-blue to-accent-orange text-navy text-base font-medium shadow-lg transition-colors duration-300 ease-out hover:from-accent-orange hover:to-accent-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-blue focus:ring-offset-navy w-full sm:w-auto"
          onClick={() => {
            const section = document.getElementById('portfolio');
            if (section) section.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <FaCode className="text-lg transition-transform duration-300 group-hover:rotate-[-15deg]" />
          <span>My Works</span>
        </motion.button>

        {/* Download CV Button - Added motion.button and whileHover */}
        <motion.button
          whileHover={{ scale: 1.1, transition: { type: 'spring', stiffness: 300 } }} // Enhanced hover
          whileTap={{ scale: 0.95 }}
          onClick={handleDownload}
          className="group relative inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-dark-gray text-off-white text-base font-medium shadow-lg transition-colors duration-300 ease-out hover:bg-steel-blue hover:text-navy focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-steel-blue focus:ring-offset-navy w-full sm:w-auto"
        >
          <FaDownload className="text-lg transition-transform duration-300 group-hover:translate-y-[-2px]" />
          <span>Download CV</span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Home;