import React from 'react';
// Removed ScrollAnimation import
import { motion } from 'framer-motion'; // Import motion
import { FaExternalLinkAlt, FaGraduationCap, FaBriefcase, FaRocket, FaLink } from 'react-icons/fa';

// TimelineItem Component - Updated colors and added motion
// TimelineItem Component - Simplified layout to match image
// TimelineItem Component - Added color emphasis
// TimelineItem Component - Using orange accent for contrast
const TimelineItem = ({ title, institution, duration, description, link, isLeft, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.6, delay }}
    className={`relative mb-8 pl-6 before:content-[''] before:absolute before:left-[-3px] before:top-[7px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent-blue/80 ${isLeft ? 'md:pr-6 md:pl-0 md:text-right md:before:left-auto md:before:right-[-3px]' : ''}`}
  >
    <p className="text-xs text-light-gray/70 mb-1 font-medium">{duration}</p> {/* Muted duration */}
    <h4 className="text-lg font-semibold text-off-white mb-0.5">{title}</h4> {/* Bright title */}
    <p className="text-sm text-accent-orange mb-1.5 font-medium">{institution}</p> {/* Accent ORANGE color for institution */}
    <p className="text-sm text-light-gray/70 leading-relaxed">{description}</p> {/* Muted description */}
    {link && (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        // Consistent link style with icon
        className="inline-flex items-center gap-1.5 text-xs text-accent-orange hover:text-accent-blue hover:underline underline-offset-2 mt-2 transition-colors duration-200"
      >
        View Details <FaExternalLinkAlt className="w-2.5 h-2.5" />
      </a>
    )}
  </motion.div>
);

// Main Resume Component
const Resume = () => {
  const education = [
    { title: 'B.Tech CSE (AI & ML)', institution: 'MRU', duration: '2021 - 2025', description: 'Focused on core computer science principles with specialization in Artificial Intelligence and Machine Learning.' },
    { title: 'Intermediate (MPC)', institution: 'Sri Chaitanya', duration: '2019 - 2021', description: 'Completed intermediate education with a focus on Mathematics, Physics, and Chemistry.' },
    { title: 'Schooling', institution: 'Aditya High SChool', duration: '2019', description: 'Build my strong foundation and developed skills' },

  ];

  const experience = [
    { title: 'AI/ML Intern', institution: 'Artihcus Global', duration: 'July 2024 - Present', description: 'Gained practical experience in applying AI/ML concepts to real-world problems, working on projects involving data analysis and model development.' },
    // Add other relevant experiences
  ];

  

  const allSkills = [
    { name: 'HTML', icon: '/icons/html.png' }, { name: 'CSS', icon: '/icons/css.png' }, { name: 'JavaScript', icon: '/icons/js.png' }, { name: 'React', icon: '/icons/react.png' },
    { name: 'Node.js', icon: '/icons/node.png' }, { name: 'Python', icon: '/icons/python.png' }, { name: 'Java', icon: '/icons/java.png' }, { name: 'SQL', icon: '/icons/sql.png' },
    { name: 'C', icon: '/icons/C.png' }, { name: 'Git', icon: '/icons/git.png' }, { name: 'Firebase', icon: '/icons/firebase.png' }, { name: 'Figma', icon: '/icons/figma.png' },
    { name: 'Illustrator', icon: '/icons/illustrator.png' }, { name: 'Canva', icon: '/icons/can.png' },
  ];

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const timelineVariants = {
    hidden: {}, // No initial animation needed for container
    visible: { transition: { staggerChildren: 0.15 } }, // Stagger timeline items
  };

  const skillsContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.3, staggerChildren: 0.05 } }, // Stagger skills
  };

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 150, damping: 10 } },
  };

  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="w-full max-w-5xl mx-auto px-4 lg:px-0 pb-16"
    >
      {/* Header Tag and Title */}
      <div className="flex flex-col items-start gap-4 mb-10">
        {/* Updated tag */}
        <span className="inline-block px-5 py-1.5 rounded-full bg-dark-gray/50 border border-steel-blue/30 text-sm font-semibold text-accent-blue shadow-md">
          Resume
        </span>
        {/* Updated heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-left text-off-white leading-tight">
          My Journey & Skills
        </h2>
      </div>

      {/* Combined Timeline Section - Increased bottom margin */}
      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 relative before:content-[''] before:absolute before:left-0 md:before:left-1/2 before:top-0 before:bottom-0 before:w-0.5 before:bg-steel-blue/30 before:-ml-[1px]">
          {/* Education Column */}
          <div className="mb-12 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8 md:justify-end border-b border-steel-blue/30 pb-2"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-off-white">Education</h3>
              <FaGraduationCap className="text-accent-blue text-2xl" />
            </motion.div>
            <motion.div variants={timelineVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {education.map((item, index) => (
                <TimelineItem key={index} {...item} isLeft={true} delay={index * 0.15} />
              ))}
            </motion.div>
          </div>

          {/* Experience & Entrepreneurial Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }} // Slight delay for the second column header
              className="flex items-center gap-3 mb-8 border-b border-steel-blue/30 pb-2"
            >
              <FaBriefcase className="text-accent-orange text-2xl" />
              <h3 className="text-xl md:text-2xl font-semibold text-off-white">Experience</h3>
            </motion.div>
            <motion.div variants={timelineVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {experience.map((item, index) => (
                <TimelineItem key={index} {...item} isLeft={false} delay={index * 0.15} />
              ))}
            </motion.div>

            {/* Removed Entrepreneurial Journey Timeline Items */}
          </div>
        </div>
      </section>

      {/* NEW: Innovimagine Narrative Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <div className="flex items-center gap-3 mb-8 border-b border-steel-blue/30 pb-2">
          <FaRocket className="text-accent-blue text-2xl" />
          <h3 className="text-xl md:text-2xl font-semibold text-off-white">Entrepreneurial Journey: Innovimagine</h3>
        </div>
        <div className="bg-charcoal/50 border border-steel-blue/20 rounded-lg p-6 md:p-8 space-y-4 text-light-gray text-base leading-relaxed shadow-sm">
          <p>
            During the final year of my B.Tech, I co-founded{' '}
            {/* Added link to Innovimagine */}
            <a 
              href="https://www.innovimagine.com"
              target="_blank"
              rel="noopener noreferrer"
              // Updated link style with icon
              className="inline-flex items-center gap-1 text-accent-blue font-semibold hover:underline underline-offset-2 transition"
            >
              Innovimagine <FaLink className="w-3 h-3 opacity-70" />
            </a>{' '}
            with three close friends — driven by a shared vision to create <span className="text-off-white font-medium">innovative tech solutions</span> that address real-world challenges. What started as brainstorming over coffee quickly evolved into a <span className="text-off-white font-medium">collaborative platform</span> where ideas turned into actionable projects.
          </p>
          <p>
            As a co-founder, I was actively involved in designing and developing <span className="text-off-white font-medium">smart software systems</span>, with a strong focus on <span className="text-accent-blue font-semibold">AI-driven problem solving</span> and <span className="text-accent-blue font-semibold">user-centric design</span>. I constantly looked around the world asking: “What’s not working? How can we fix it <span className="text-off-white font-medium">better, faster, smarter</span>?”
          </p>
          <p>
            This journey wasn’t just about building products — it was about building a <span className="text-accent-blue font-semibold">mindset</span>. I learned how to <span className="text-off-white font-medium">lead from the front</span>, work with cross-functional teams, talk to clients, and turn <span className="text-accent-blue font-semibold">uncertainty into opportunity</span>. It sparked a deeper passion for <span className="text-off-white font-medium">technology with purpose</span>, and gave me the confidence to take bold steps outside the traditional path.
          </p>
        </div>
      </motion.section>

      {/* Skills Section - UNIFIED GRID */}
      <section>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          // Added bottom border and padding
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-left text-off-white mb-12 border-b border-steel-blue/30 pb-3"
        >
          My Skills
        </motion.h3>
        {/* Container for the unified skills grid - Simplified background, removed shadow */}
        <motion.div
          variants={skillsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          // Simplified background, removed inner shadow, adjusted border
          className="bg-charcoal/50 rounded-xl md:rounded-2xl p-8 md:p-10 border border-steel-blue/20"
        >
          {/* Increased grid gap */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
            {allSkills.map((skill) => (
              // Styling for each individual skill 'badge' - Reduced shadow, solid hover bg
              <motion.div
                key={skill.name}
                variants={skillItemVariants}
                whileHover={{ scale: 1.08, y: -4, transition: { type: 'spring', stiffness: 300 } }} // Adjusted hover slightly
                // Reduced shadow (shadow-sm), solid hover background
                className="group flex flex-col items-center justify-center gap-3 p-4 rounded-lg bg-dark-gray/60 border border-steel-blue/30 shadow-sm hover:bg-steel-blue/20 hover:border-steel-blue/50 transition-colors duration-200 ease-out cursor-default"
              >
                <motion.img
                  whileHover={{ scale: 1.15 }}
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  aria-label={`${skill.name} icon`}
                  className="w-8 h-8 md:w-10 md:h-10 object-contain transition-transform duration-250"
                />
                <span className="text-sm md:text-base text-light-gray group-hover:text-off-white transition-colors duration-250 font-medium text-center truncate w-full">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Resume;
