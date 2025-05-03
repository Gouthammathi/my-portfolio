import React, { useState } from 'react'; // Import useState
import { motion } from 'framer-motion';
// Add FaRocket, FaGraduationCap, FaBriefcase to the import
import { FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaRocket, FaGraduationCap, FaBriefcase } from 'react-icons/fa';

// Updated TimelineItem component - Add 'details' to props destructuring
// Enhanced TimelineItem component with better styling and structure
const TimelineItem = ({ title, institution, duration, description, link, logo, companyImages = [], details = [], delay }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? companyImages.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === companyImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Correct paths assuming images are in public/Images and icons in public/icons
  const correctedLogoPath = logo ? logo.replace('public/', '/') : null;
  const correctedCompanyImages = companyImages.map(img => img.replace('public/', '/'));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }} 
      transition={{ duration: 0.5, delay }}
      className="relative mb-10 bg-gradient-to-br from-dark-gray/70 to-charcoal/50 border border-steel-blue/30 text-white rounded-xl p-6 md:p-8 shadow-lg overflow-hidden flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 hover:border-accent-orange/50 transition-all duration-300"
    >
      {/* Timeline dot for visual enhancement (only visible on md screens) */}
      <div className="absolute left-[-30px] top-8 w-6 h-6 rounded-full bg-accent-orange border-2 border-steel-blue/50 shadow-md hidden md:block"></div>
      
      {/* Left Side - Logo and Basic Info */} 
      <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-1/3 flex-shrink-0">
        {correctedLogoPath && (
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-orange to-accent-blue opacity-0 group-hover:opacity-30 rounded-lg transition-opacity duration-300"></div>
            <img 
              src={correctedLogoPath} 
              alt={`${institution} Logo`} 
              className="w-20 h-20 md:w-24 md:h-24 rounded-lg shadow-md object-contain bg-white/10 p-1 border border-steel-blue/30 transition-transform duration-300 group-hover:scale-105" 
            /> 
          </div>
        )}
        <div className="text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-semibold text-off-white bg-gradient-to-r from-white to-light-gray bg-clip-text">{title}</h3> 
          <p className="text-accent-orange text-base md:text-lg font-medium">{institution}</p> 
          <div className="flex items-center gap-2 mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-steel-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-sm text-light-gray/90">{duration}</p> 
          </div>
        </div> 
      </div> 
 
      {/* Right Side - Description & Carousel */} 
      <div className="flex flex-col gap-4 w-full md:w-2/3 flex-grow">
        {/* Description with subtle highlight */}
        <p className="text-light-gray/90 leading-relaxed border-l-2 border-accent-orange/30 pl-4">
          {description}
        </p> 
     
        {/* Optional: Render 'details' content if it exists */} 
        {details && details.length > 0 && (
          <div className="pt-4 mt-2 border-t border-steel-blue/30 space-y-3">
            <h4 className="text-sm uppercase tracking-wider text-accent-blue font-medium mb-3">Key Contributions & Achievements</h4>
            {details.map((item, index) => {
              if (item.type === 'paragraph') {
                return (
                  <p key={index} className="text-sm text-light-gray leading-relaxed">
                    {item.content}
                  </p>
                );
              } else if (item.type === 'image') {
                return (
                  <div key={index} className="my-3">
                    <img 
                      src={item.src.replace('public/', '/')} 
                      alt={item.alt || `Detail image ${index + 1}`}
                      className="w-full max-w-md h-auto rounded-md object-cover border border-steel-blue/30 shadow-sm mx-auto" 
                    />
                  </div>
                );
              }
              return null;
            })}
          </div>
        )}

        {/* Separator with gradient */} 
        {(details && details.length > 0 || companyImages.length > 0) && (
          <div className="h-px w-full bg-gradient-to-r from-transparent via-steel-blue/30 to-transparent my-3"></div>
        )}

        {/* Carousel with enhanced styling */} 
        {correctedCompanyImages.length > 0 && (
          <div className="relative rounded-xl overflow-hidden border border-steel-blue/30 shadow-inner group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            <img 
              src={correctedCompanyImages[currentImageIndex]} 
              alt={`Company image ${currentImageIndex + 1}`} 
              className="rounded-xl object-cover w-full max-h-[250px] md:max-h-[280px] transition-transform duration-500 group-hover:scale-105" 
            /> 
            {correctedCompanyImages.length > 1 && (
              <>
                <div className="absolute inset-y-0 left-0 flex items-center px-3 z-20">
                  <button 
                    onClick={handlePrevImage} 
                    className="bg-black/50 hover:bg-accent-blue text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 transition-colors transform hover:scale-110"
                    aria-label="Previous image"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                  </button> 
                </div> 
                <div className="absolute inset-y-0 right-0 flex items-center px-3 z-20">
                  <button 
                    onClick={handleNextImage} 
                    className="bg-black/50 hover:bg-accent-blue text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 transition-colors transform hover:scale-110"
                    aria-label="Next image"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </button> 
                </div>
                
                {/* Image counter indicator */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-black/60 text-white text-xs px-2 py-1 rounded-full z-20">
                  {currentImageIndex + 1} / {correctedCompanyImages.length}
                </div>
              </>
            )} 
          </div>
        )}

        {/* Optional Link with enhanced styling */} 
        {link && (
          <a
            href={'https://artihcus.com/'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-accent-orange hover:text-accent-blue pt-3 mt-auto self-start transition-colors duration-200 group"
          >
            <span className="border-b border-accent-orange/30 group-hover:border-accent-blue pb-0.5">Visit Company Website</span> 
            <FaExternalLinkAlt className="w-2.5 h-2.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        )}
      </div> 
    </motion.div>
  );
};

// Main Resume Component
const Resume = () => {
  const education = [
    { title: 'B.Tech CSE (AI & ML)', institution: 'MRU', duration: '2021 - 2025', description: 'Concentrated on foundational Computer Science principles with a specialized focus in Artificial Intelligence and Machine Learning.' },
    { title: 'Intermediate (MPC)', institution: 'Sri Chaitanya', duration: '2019 - 2021', description: 'Focused on Mathematics, Physics, and Chemistry. Built strong analytical and problem-solving skills as a foundation for technical studies.' },
    { title: 'Schooling', institution: 'Aditya High SChool', duration: '2019', description: 'Built a strong academic foundation with a focus on analytical thinking, problem-solving, and effective communication. Actively participated in academic and co-curricular activities, laying the groundwork for future success in technology and engineering disciplines.' },

  ];

  const experience = [
    {
      title: 'AI/ML Intern',
      institution: 'Artihcus Global',
      duration: 'Oct 2024 - Present',
      description: 'Gained hands-on experience applying AI/ML concepts to real-world challenges through projects focused on data analysis and predictive modeling. Revamped company websites to improve user experience and performance using modern web development frameworks. Additionally, explored AI integration into warehouse management systems to enhance operational efficiency and automation.',
      logo: 'public/icons/Articus.png',
      companyImages: [
        'public/Images/arti2.jpg',
        'public/Images/arti1.jpg',
        'public/Images/arti3.jpg',
        'public/Images/arti4.jpg',
        'public/Images/arti5.jpg'
      ],
      details: [
        {
          type: 'paragraph',
          content: '• Developed predictive models for customer behavior analysis, improving forecasting accuracy by over 30% compared to previous methods.'
        },
        {
          type: 'paragraph',
          content: '• Implemented responsive web designs using React.js and Tailwind CSS, resulting in a 25% increase in user engagement metrics.'
        },
        {
          type: 'paragraph',
          content: '• Designed and prototyped an AI-powered inventory management solution that reduced manual processing time by 40% in pilot tests.'
        },
        {
          type: 'paragraph',
          content: '• Collaborated with cross-functional teams to integrate machine learning algorithms into existing business workflows, enhancing decision-making processes.'
        }
      ],
      link: 'https://www.articusglobal.com'
    },
    // Add other experiences as needed
  ];

  

  const allSkills = [
    // Languages
    { name: 'Python', icon: '/icons/python.png' },
    { name: 'Java', icon: '/icons/java.png' },
    { name: 'C', icon: '/icons/C.png' },
    { name: 'JavaScript', icon: '/icons/js.png' },
    // Web Development (Frontend)
    { name: 'HTML', icon: '/icons/html.png' },
    { name: 'CSS', icon: '/icons/css.png' },
    { name: 'React', icon: '/icons/react.png' },
    // Backend
    { name: 'Node.js', icon: '/icons/node.png' },
    // Database & BaaS
    { name: 'SQL', icon: '/icons/sql.png' },
    { name: 'Firebase', icon: '/icons/firebase.png' },
    // Version Control
    { name: 'Git', icon: '/icons/gitlogo.png' },
    { name: 'Github', icon: '/icons/github.png' },
    // Design Tools
    { name: 'Figma', icon: '/icons/figma.png' },
    { name: 'Illustrator', icon: '/icons/illustrator.png' },
    { name: 'Canva', icon: '/icons/can.png' },
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

  // In the return statement, reorder the sections
  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="w-full max-w-5xl mx-auto px-4 lg:px-0 pb-16"
    >
      {/* Header Tag and Title */} 
      <div className="flex flex-col items-start gap-4 mb-12">
        <span className="inline-block px-5 py-1.5 rounded-full bg-dark-gray/50 border border-steel-blue/30 text-sm font-semibold text-accent-blue shadow-md">
          Resume
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-left bg-gradient-to-r from-accent-blue via-steel-blue to-accent-orange bg-clip-text leading-tight">
          My Journey & Skills 
        </h2>
      </div>
  
      {/* Education Section */} 
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.15 }}
        className="mb-16"
      >
        <h3 className="text-3xl md:text-4xl font-bold text-left text-off-white mb-10 border-b border-steel-blue/30 pb-3">
          Education
        </h3>
        <div> {/* Container for timeline items */} 
          {education.map((item, index) => (
            <TimelineItem key={index} {...item} delay={index * 0.15} />
          ))}
        </div>
      </motion.section>
  
      {/* Experience Section */} 
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.15 }}
        className="mb-20"
      >
        <div className="flex items-center gap-4 mb-10">
          <FaBriefcase className="text-accent-orange text-3xl md:text-4xl" />
          <h3 className="text-3xl md:text-4xl font-bold text-left bg-gradient-to-r from-accent-orange via-steel-blue to-accent-blue bg-clip-text">
            Professional Experience
          </h3>
        </div>
        
        {/* Add a decorative line under the heading */}
        <div className="h-1 w-full bg-gradient-to-r from-accent-orange via-steel-blue to-accent-blue rounded-full mb-10 opacity-80"></div>
        
        {/* Enhanced container for timeline items */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[24px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-accent-orange via-steel-blue to-accent-blue opacity-30 hidden md:block"></div>
          
          {experience.map((item, index) => (
            <TimelineItem key={index} {...item} delay={index * 0.15} />
          ))}
        </div>
      </motion.section>
  
      {/* Notable Achievements Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <div className="flex items-center gap-3 mb-8 border-b border-steel-blue/30 pb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <h3 className="text-xl md:text-2xl font-semibold text-off-white"> Achievements</h3>
        </div>
        
        {/* Achievement Content Area with Enhanced Styling */}
        <div className="bg-gradient-to-br from-dark-gray/70 to-charcoal/50 border border-steel-blue/20 rounded-lg p-6 md:p-8 space-y-4 text-light-gray text-base leading-relaxed shadow-lg">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Left side - Event details */}
            <div className="md:w-2/3">
              <h4 className="text-lg font-semibold text-accent-orange mb-3">HYSEA AI Summit 2025 Showcase</h4>
              <p className="text-sm md:text-base mb-4">
                Our AI team proudly represented <span className="text-accent-blue font-medium">Artihcus Global</span> at the nationwide 32nd HYSEA AI Summit held at Novotel on February 11. We successfully showcased our prototype for AI integration in warehouse management systems to industry leaders and government officials.
              </p>
              <div className="space-y-2 mt-4">
                <p className="text-sm flex items-start gap-2">
                  <span className="text-accent-orange">•</span> 
                  <span>Presented our innovative solution to <span className="text-off-white font-medium">Telangana IT Minister Shri D. Sridhar Babu</span> and received positive feedback</span>
                </p>
                <p className="text-sm flex items-start gap-2">
                  <span className="text-accent-orange">•</span> 
                  <span>Demonstrated how AI can optimize inventory tracking, order fulfillment, and resource allocation in warehouse operations</span>
                </p>
                <p className="text-sm flex items-start gap-2">
                  <span className="text-accent-orange">•</span> 
                  <span>Networked with industry professionals and potential clients, creating valuable connections for future collaborations</span>
                </p>
                <p className="text-sm flex items-start gap-2">
                  <span className="text-accent-orange">•</span> 
                  <span>Contributed to a successful event that enhanced our company's visibility in the AI innovation space</span>
                </p>
              </div>
            </div>
            
            {/* Right side - HYSEA Logo */}
            <div className="md:w-1/3 flex justify-center">
              <div className="relative group w-full max-w-[200px]">
                <div className="absolute inset-0 bg-gradient-to-r from-accent-orange to-accent-blue opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300"></div>
                <div className="bg-dark-gray/70 rounded-lg p-4 border border-steel-blue/30 shadow-md text-center">
                  <img 
                    src="/Images/hysea.png" 
                    alt="HYSEA AI Summit Logo" 
                    className="w-full h-auto object-contain mx-auto mb-3" 
                  />
                  <h5 className="text-accent-orange font-semibold mb-1">HYSEA AI Summit</h5>
                  <p className="text-xs text-light-gray mb-2">February 11, 2025</p>
                  <p className="text-xs text-light-gray/80">Novotel, Hyderabad</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-4 mt-2 border-t border-steel-blue/20">
            <p className="text-sm italic text-light-gray/80">
              "The experience of showcasing our AI solution at the HYSEA Summit was incredibly rewarding. The positive reception from industry leaders and government officials validated our innovative approach and motivated our team to push the boundaries of AI integration in warehouse management even further."
            </p>
          </div>
        </div>
      </motion.section>
  
      {/* MOVED: Entrepreneurial Journey Section */}
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
            <a 
              href="https://www.innovimagine.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-blue font-semibold hover:underline underline-offset-2 transition"
            >
              Innovimagine
            </a>{' '}
            with three close friends — driven by a shared vision to create <span className="text-off-white font-medium">innovative tech solutions</span> that address real-world challenges. What started as brainstorming over coffee quickly evolved into a <span className="text-off-white font-medium">collaborative platform</span> where ideas turned into actionable projects.
          </p>
          <p>
            As a co-founder, I was actively involved in designing and developing <span className="text-off-white font-medium">smart software systems</span>, with a strong focus on <span className="text-accent-blue font-semibold">AI-driven problem solving</span> and <span className="text-accent-blue font-semibold">user-centric design</span>. I constantly looked around the world asking: "What's not working? How can we fix it <span className="text-off-white font-medium">better, faster, smarter</span>?"
          </p>
          <p>
            This journey wasn't just about building products — it was about building a <span className="text-accent-blue font-semibold">mindset</span>. I learned how to <span className="text-off-white font-medium">lead from the front</span>, work with cross-functional teams, talk to clients, and turn <span className="text-accent-blue font-semibold">uncertainty into opportunity</span>. It sparked a deeper passion for <span className="text-off-white font-medium">technology with purpose</span>, and gave me the confidence to take bold steps outside the traditional path.
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
