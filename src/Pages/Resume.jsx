import React, { useState } from 'react'; // Import useState
import { motion } from 'framer-motion';
// Add FaRocket, FaGraduationCap, FaBriefcase to the import
import { FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaRocket, FaGraduationCap, FaBriefcase } from 'react-icons/fa';

// Updated TimelineItem component - Add 'details' to props destructuring
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
      // Reverted background to transparent style, kept padding/rounding
      className="relative mb-10 bg-dark-gray/50 border border-steel-blue/20 text-white rounded-xl p-6 md:p-8 shadow-lg overflow-hidden flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8"
    >
      {/* Left Side - Logo and Basic Info */} 
      <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-1/3 flex-shrink-0">
        {correctedLogoPath && (
          <img 
            src={correctedLogoPath} 
            alt={`${institution} Logo`} 
            // Adjusted logo background slightly for contrast
            className="w-20 h-20 md:w-24 md:h-24 rounded-lg shadow-md object-contain bg-white/10 p-1 border border-steel-blue/30" 
          /> 
        )}
        <div className="text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-semibold text-off-white">{title}</h3> 
          {/* Adjusted text color for better contrast on transparent bg */}
          <p className="text-accent-orange text-base md:text-lg">{institution}</p> 
          <p className="text-sm text-light-gray/80 mt-1">{duration}</p> 
        </div> 
      </div> 
 
      {/* Right Side - Description & Carousel */} 
      <div className="flex flex-col gap-4 w-full md:w-2/3 flex-grow">
        {/* Adjusted text color */}
        <p className="text-light-gray/90 leading-relaxed">
          {description}
        </p> 
     
        {/* Optional: Render 'details' content if it exists */} 
        {details && details.length > 0 && (
          // Adjusted border color
          <div className="pt-4 mt-4 border-t border-steel-blue/30 space-y-3">
             {details.map((item, index) => {
                if (item.type === 'paragraph') {
                  return (
                    // Adjusted text color
                    <p key={index} className="text-sm text-light-gray leading-relaxed">
                      {item.content}
                    </p>
                  );
                } else if (item.type === 'image') {
                  return (
                    <div key={index} className="my-3">
                      <img 
                        src={item.src.replace('public/', '/')} // Correct path
                        alt={item.alt || `Detail image ${index + 1}`}
                        // Adjusted border color
                        className="w-full max-w-md h-auto rounded-md object-cover border border-steel-blue/30 shadow-sm mx-auto" 
                      />
                    </div>
                  );
                }
                return null;
              })}
          </div>
        )}

        {/* Separator - Adjusted border color */} 
        {(details && details.length > 0 || companyImages.length > 0) && (
           <hr className="border-steel-blue/30 my-2" /> 
        )}

        {/* Carousel - Adjusted border color */} 
        {correctedCompanyImages.length > 0 && (
          <div className="relative rounded-xl overflow-hidden border border-steel-blue/30 shadow-inner">
            {/* ... Carousel Img and Buttons ... */} 
            <img 
              src={correctedCompanyImages[currentImageIndex]} 
              alt={`Company image ${currentImageIndex + 1}`} 
              className="rounded-xl object-cover w-full max-h-[250px] md:max-h-[280px]" 
            /> 
            {correctedCompanyImages.length > 1 && (
              <>
                {/* ... Arrow Buttons ... */} 
                <div className="absolute inset-y-0 left-0 flex items-center px-3">
                  <button 
                    onClick={handlePrevImage} 
                    className="bg-black/50 hover:bg-accent-blue text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 transition-colors"
                    aria-label="Previous image"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                  </button> 
                </div> 
                <div className="absolute inset-y-0 right-0 flex items-center px-3">
                  <button 
                    onClick={handleNextImage} 
                    className="bg-black/50 hover:bg-accent-blue text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 transition-colors"
                    aria-label="Next image"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </button> 
                </div>
              </>
            )} 
          </div>
        )}

        {/* Optional Link - Adjusted text color */} 
        {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-accent-orange hover:text-accent-blue pt-4 mt-auto self-start transition border-t border-steel-blue/30"
            >
              View Details <FaExternalLinkAlt className="w-2.5 h-2.5" />
            </a>
          )}
      </div> 
    </motion.div>
  );
};

// Main Resume Component
const Resume = () => {
  const education = [
    { title: 'B.Tech CSE (AI & ML)', institution: 'MRU', duration: '2021 - 2025', description: 'Focused on core computer science principles with specialization in Artificial Intelligence and Machine Learning.' },
    { title: 'Intermediate (MPC)', institution: 'Sri Chaitanya', duration: '2019 - 2021', description: 'Completed intermediate education with a focus on Mathematics, Physics, and Chemistry.' },
    { title: 'Schooling', institution: 'Aditya High SChool', duration: '2019', description: 'Build my strong foundation and developed skills' },

  ];

  const experience = [
    {
      title: 'AI/ML Intern',
      institution: 'Artihcus Global',
      duration: 'Oct 2024 - Present',
      description: 'Gained practical experience in applying AI/ML concepts to real-world problems, working on projects involving data analysis and model development.',
      logo: 'public/icons/Articus.png', // <-- Add logo path
      companyImages: [ // <-- Add array of image paths
        'public/Images/arti2.jpg',
        'public/Images/arti1.jpg',
        'public/Images/arti3.jpg',
        'public/Images/arti4.jpg',
        'public/Images/arti5.jpg'
      ]
    },
    // Add other relevant experiences with logo and companyImages
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

  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="w-full max-w-5xl mx-auto px-4 lg:px-0 pb-16"
    >
      {/* Header Tag and Title - Adjusted title maybe? */} 
      <div className="flex flex-col items-start gap-4 mb-12">
        <span className="inline-block px-5 py-1.5 rounded-full bg-dark-gray/50 border border-steel-blue/30 text-sm font-semibold text-accent-blue shadow-md">
          Resume
        </span>
        {/* This is the heading in question */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-left bg-gradient-to-r from-accent-blue via-steel-blue to-accent-orange bg-clip-text  leading-tight">
        My Journey & Skills 
        </h2>
      </div>

      {/* Education Section */} 
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.15 }}
        className="mb-16" // Added margin-bottom
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
        className="mb-20" // Keep margin-bottom before next section
      >
        {/* REMOVED Duplicate Education Heading */}
        {/* <h3 className="text-3xl md:text-4xl font-bold text-left bg-gradient-to-r from-accent-blue via-steel-blue to-accent-orange bg-clip-text text-transparent mb-10 border-b border-steel-blue/30 pb-3">
          Education
        </h3> */}
        
        {/* Correct Experience Heading */}
        <h3 className="text-3xl md:text-4xl font-bold text-left bg-gradient-to-r from-accent-orange via-steel-blue to-accent-blue bg-clip-text  mb-10 border-b border-steel-blue/30 pb-3">
          Internship Experience 
        </h3>
        <div> {/* Container for timeline items */} 
          {experience.map((item, index) => (
            <TimelineItem key={index} {...item} delay={index * 0.15} />
          ))}
        </div>
      </motion.section>

      {/* Optional: Innovimagine Narrative Section */}
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
              className="text-accent-blue font-semibold  hover:underline underline-offset-2 transition"
            >
              Innovimagine
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

      {/* NEW: Company Blog Section Placeholder */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mb-20" // Add margin before the Skills section
      >
        {/* Blog Section Heading */}
        <div className="flex items-center gap-3 mb-8 border-b border-steel-blue/30 pb-2">
          {/* You can choose an appropriate icon, e.g., FaBlog, FaNewspaper */}
          {/* <FaBlog className="text-accent-orange text-2xl" /> */}
          <h3 className="text-xl md:text-2xl font-semibold text-off-white">Company Insights & Blog</h3>
        </div>
        
        {/* Blog Content Area */}
        <div className="bg-charcoal/50 border border-steel-blue/20 rounded-lg p-6 md:p-8 space-y-4 text-light-gray text-base leading-relaxed shadow-sm">
          <p>
            Here you can add content about your company, recent updates, blog posts, or insights.
            You might want to fetch blog posts dynamically or create separate components for each entry.
          </p>
          {/* Example Placeholder for a Blog Post Teaser */}
          <div className="pt-4 border-t border-steel-blue/20">
            <h4 className="text-lg font-semibold text-accent-orange mb-2">Exciting New Project Launch!</h4>
            <p className="text-sm mb-2">We're thrilled to announce the launch of our latest project... [Read More]</p>
            <span className="text-xs text-light-gray/70">Published on: [Date]</span>
          </div>
           {/* Add more blog post teasers or full content here */}
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

// Remember to ensure the experience data uses correct paths:
// const experience = [
//   {
//     // ... other fields
//     logo: '/icons/Articus.png', // Path from public root
//     companyImages: [
//       '/Images/arti2.jpg',    // Path from public root
//       '/Images/arti1.jpg',
//       // ... etc
//     ],
//     details: [
//       { type: 'paragraph', content: '...' },
//       { type: 'image', src: '/Images/ML.png', alt: '...' }, // Path from public root
//       // ... etc
//     ]
//   }
// ];
