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
  
  // Letter animation for the name
  const nameLetters = "Goutham".split("");
  
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        repeat: 0
      }
    })
    // Removed hover variant
  };

  // New button variants for enhanced effects
  const primaryButtonVariants = {
    initial: { boxShadow: "0px 0px 0px rgba(79, 70, 229, 0)" },
    hover: { 
      scale: 1.05, 
      boxShadow: "0px 0px 20px rgba(79, 70, 229, 0.6)",
      transition: { 
        type: 'spring', 
        stiffness: 400, 
        damping: 10,
        yoyo: Infinity,
        duration: 1
      } 
    },
    tap: { scale: 0.95 },
    // Add a subtle pulse effect
    animate: {
      scale: [1, 1.02, 1],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  const secondaryButtonVariants = {
    initial: { boxShadow: "0px 0px 0px rgba(148, 163, 184, 0)" },
    hover: { 
      scale: 1.05, 
      boxShadow: "0px 0px 15px rgba(148, 163, 184, 0.5)",
      transition: { 
        type: 'spring', 
        stiffness: 400, 
        damping: 10 
      } 
    },
    tap: { scale: 0.95 },
    // Add a subtle border animation
    animate: {
      borderColor: ["rgba(148, 163, 184, 0.3)", "rgba(148, 163, 184, 0.8)", "rgba(148, 163, 184, 0.3)"],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity
      }
    }
  };

  // Icon animation variants
  const codeIconVariants = {
    initial: { rotate: 0 },
    hover: { rotate: -15, transition: { duration: 0.3, yoyo: Infinity } }
  };

  const downloadIconVariants = {
    initial: { y: 0 },
    hover: { y: [-2, 2, -2], transition: { duration: 0.6, repeat: Infinity } }
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
        I'm {/* Animated name with letter-by-letter effects */}
        <motion.span 
          className="inline-flex font-bold relative" // Changed from font-normal to font-bold
          initial="hidden"
          animate="visible"
          // Removed whileHover="hover"
        >
          {nameLetters.map((letter, i) => (
            <motion.span
              key={`letter-${i}`}
              custom={i}
              variants={letterVariants}
              className="inline-block relative"
              style={{
                background: `linear-gradient(90deg, #4F46E5 ${i*10}%, #F97316 ${i*10 + 50}%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundSize: "200% auto",
                textShadow: "0 0 10px rgba(79, 70, 229, 0.3)"
              }}
            >
              {letter}
            </motion.span>
          ))}
          <motion.span 
            className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-accent-blue to-accent-orange rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 1.2, duration: 0.8 }}
          />
        </motion.span>
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
        {/* My Works Button - Enhanced with new effects */}
        <motion.button
          variants={primaryButtonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          animate="animate"
          className="group relative overflow-hidden inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-gradient-to-r from-accent-blue to-accent-orange text-navy text-base font-medium shadow-lg transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-blue focus:ring-offset-navy w-full sm:w-auto"
          onClick={() => {
            const section = document.getElementById('portfolio');
            if (section) section.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          {/* Animated background overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-accent-orange to-accent-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            style={{ backgroundSize: '200% 200%' }}
          />
          
          {/* Icon with enhanced animation */}
          <motion.div
            variants={codeIconVariants}
            className="relative z-10"
          >
            <FaCode className="text-lg" />
          </motion.div>
          
          {/* Text with relative positioning to appear above the animated background */}
          <span className="relative z-10">My Works</span>
          
          {/* Subtle particle effect on hover */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-white/70"
                initial={{ 
                  x: `${Math.random() * 100}%`, 
                  y: `${Math.random() * 100}%`, 
                  opacity: 0.7,
                  scale: 0
                }}
                animate={{ 
                  y: [
                    `${Math.random() * 100}%`, 
                    `${Math.random() * 100}%`
                  ],
                  x: [
                    `${Math.random() * 100}%`, 
                    `${Math.random() * 100}%`
                  ],
                  opacity: [0.7, 0],
                  scale: [0, 1.5]
                }}
                transition={{ 
                  duration: 1 + Math.random() * 2,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'easeInOut',
                  delay: Math.random() * 2
                }}
              />
            ))}
          </motion.div>
        </motion.button>

        {/* Download CV Button - Enhanced with new effects */}
        <motion.button
          variants={secondaryButtonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          animate="animate"
          onClick={handleDownload}
          className="group relative overflow-hidden inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-dark-gray text-off-white text-base font-medium shadow-lg border border-steel-blue/30 transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-steel-blue focus:ring-offset-navy w-full sm:w-auto"
        >
          {/* Subtle gradient overlay on hover */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-steel-blue/20 to-accent-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
          
          {/* Icon with enhanced animation */}
          <motion.div
            variants={downloadIconVariants}
            className="relative z-10"
          >
            <FaDownload className="text-lg" />
          </motion.div>
          
          {/* Text */}
          <span className="relative z-10">Download CV</span>
          
          {/* Ripple effect on click */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ scale: 0, opacity: 0.5, x: "-50%", y: "-50%" }}
            whileTap={{ 
              scale: 1.5, 
              opacity: 0,
              transition: { duration: 0.5 } 
            }}
            style={{ 
              left: "50%", 
              top: "50%", 
              background: "radial-gradient(circle, rgba(148,163,184,0.7) 0%, rgba(148,163,184,0) 70%)"
            }}
          />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Home;