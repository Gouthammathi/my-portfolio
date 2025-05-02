import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'; // Removed unused icons

// SpecializationCard Component - Updated for tags and image
const SpecializationCard = ({ title, tags, description, image, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay }}
    // Adjusted background, padding, added aspect ratio for image
    className="bg-dark-gray/60 border border-steel-blue/30 rounded-xl p-5 shadow-lg flex flex-col gap-3 overflow-hidden"
  >
    <h4 className="text-lg font-semibold text-off-white">{title}</h4>
    {/* Tags */} 
    <div className="flex flex-wrap gap-1.5">
      {tags.map((tag, i) => (
        <span
          key={i}
          className="inline-block px-2.5 py-0.5 rounded-md bg-charcoal/70 border border-steel-blue/40 text-accent-blue text-xs font-medium"
        >
          {tag}
        </span>
      ))}
    </div>
    <p className="text-sm text-light-gray/80 leading-relaxed flex-grow">{description}</p>
    {/* Image */} 
    <div className="aspect-video w-full rounded-md overflow-hidden mt-2">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
  </motion.div>
);

const AboutMe = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Images/AI_Intern-Goutham mathi Resume.pdf';
    link.download = 'AI_Intern-Goutham mathi Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Updated specialization data
  const specializations = [
    {
      title: "Artificial Intelligence",
      tags: ["Computer Vision", "NLP", "Intelligent Systems"],
      description: "Crafting intelligent systems with cutting-edge AI technologies to solve real-world problems.",
      image: "/Images/AI.png" // Replace with actual path
    },
    {
      title: "Machine Learning",
      tags: ["Model Training", "Prediction", "Smart Systems"],
      description: "Developing smart solutions powered by advanced Machine Learning algorithms and data analysis.",
      image: "/Images/ML.png" // Replace with actual path
    },
    {
      title: "Web Development",
      tags: ["React", "Node.js", "Fullstack"],
      description: "Creating attractive and interactive fully responsive web applications using modern frameworks.",
      image: "/Images/web.png" // Replace with actual path
    },
    {
      title: "Graphic Design",
      tags: ["Illustration", "UI/UX", "Branding"],
      description: "Designing creative visuals, user interfaces, and branding elements with a focus on aesthetics.",
      image: "/Images/graphic.png" // Replace with actual path
    }
  ];

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="max-w-5xl mx-auto px-4 lg:px-0 py-16" // Adjusted max-width and padding
    >
      {/* Intro Section - Updated layout and content */}
      <motion.section
        variants={itemVariants}
        className="w-full rounded-2xl bg-charcoal/80 p-8 md:p-12 flex flex-col md:flex-row gap-10 mb-16 shadow-xl border border-dark-gray"
      >
        {/* Left: Text and Download Button */}
        <div className="flex-1 flex flex-col justify-between gap-6">
          <div>
            <span className="inline-block px-4 py-1 mb-6 rounded-md bg-dark-gray/70 border border-steel-blue/30 text-sm font-semibold text-off-white shadow-sm w-fit">
              About Me
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-left text-off-white leading-tight mb-6">
              Turning complex problems into simple solutions
            </h2>
            <div className="space-y-4 text-light-gray/80 text-base md:text-lg leading-relaxed">
              <p>
                I often wonder — am I defined by the code I write, or the questions I keep asking between the lines? Each sunrise feels like an upgrade; not of my skills alone, but of how I see the world. I’m not just building software — <span className="text-off-white font-medium">I’m building myself</span>. Piece by piece. Project by project.
              </p>
              <p>
                To grow is to let curiosity lead — even if it takes you through detours. I may not have all the answers yet, but <span className="text-accent-blue font-semibold hover:underline underline-offset-2">I have the hunger to explore them</span>. And maybe that’s who I truly am — a work in progress with purpose.
              </p>
            </div>
          </div>
          {/* Download Button - Updated style */}
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#7c3aed" /* Purple */, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            className="group mt-6 inline-flex items-center justify-center gap-2 h-11 px-6 rounded-lg bg-purple-600 text-white text-sm font-semibold shadow-lg transition-colors duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 focus:ring-offset-charcoal w-fit"
          >
            <FaDownload className="text-base" />
            <span>Download CV</span>
          </motion.button>
        </div>
        {/* Right: Contact Info - Updated layout */}
        <div className="flex-shrink-0 md:w-60 space-y-5 border-l border-steel-blue/30 pl-8 pt-2">
          <div className="flex flex-col gap-0.5">
            <p className="text-xs text-light-gray/70">Name</p>
            <p className="text-base text-off-white font-medium">Goutham Mathi</p>
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="text-xs text-light-gray/70">Phone</p>
            <a href="tel:+919603672059" className="text-base text-off-white font-medium hover:text-accent-blue transition">+91-9603672059</a>
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="text-xs text-light-gray/70">Email</p>
            <a href="mailto:goouthamm@gmail.com" className="text-base text-off-white font-medium hover:text-accent-blue transition break-all">goouthamm@gmail.com</a>
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="text-xs text-light-gray/70">Location</p>
            <p className="text-base text-off-white font-medium">Hyderabad, India</p>
          </div>
        </div>
      </motion.section>

      {/* Removed Stats Grid */}

      {/* Specialization Section - Updated title and data */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.15 }} // Adjusted stagger
        className="mb-16"
      >
        <h3 className="text-3xl md:text-4xl font-bold text-left text-off-white mb-10">Specialization</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {specializations.map((spec, index) => (
            <SpecializationCard
              key={index}
              title={spec.title}
              tags={spec.tags}
              description={spec.description}
              image={spec.image}
              delay={index * 0.15}
            />
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
};

export default AboutMe;