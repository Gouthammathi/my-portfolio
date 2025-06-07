import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFigma, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const figmaProjects = [
  {
    id: 1,
    title: "Portfolio Design",
    description: "A modern and responsive portfolio design showcasing my work and skills with a clean, professional layout.",
    image: "/Images/Figma/portfolio.png",
    link: "https://www.figma.com/proto/I92d0Mc53KvUnkt5tVgLOF/portfolio?node-id=1-2&starting-point-node-id=1%3A2&t=8j7zHApls4QzuqW3-1",
    tags: ["UI/UX", "Portfolio", "Responsive"]
  },
  {
    id: 2,
    title: "Admin Dashboard",
    description: "A comprehensive admin dashboard interface with data visualization, user management, and analytics features.",
    image: "/Images/Figma/Dashboard.png",
    link: "https://www.figma.com/proto/mtDj6PIIoQDIFb0e3Yp7s9/admin-login?node-id=552-1518&starting-point-node-id=552%3A1518&t=npiDrCggLocDyQqC-1",
    tags: ["Dashboard", "Admin", "Analytics"]
  },
  {
    id: 3,
    title: "Restaurant Menu",
    description: "An elegant restaurant menu design with food categories, pricing, and special offers in a user-friendly layout.",
    image: "/Images/Figma/Menu.png",
    link: "https://www.figma.com/proto/WoZS1373JOE6su2BkmTsPr/menu?node-id=0-3&scaling=scale-down-width&content-scaling=fixed&t=8H74XJwrNPG9KuAh-1",
    tags: ["Menu", "Restaurant", "Food"]
  },
  {
    id: 4,
    title: "E-commerce UI",
    description: "A modern e-commerce interface with product listings, shopping cart, and user-friendly navigation.",
    image: "/Images/Figma/Ecommerce.png",
    link: "https://www.figma.com/proto/XYojmCrhS750WGxX4tdqSc/Untitled?node-id=1-2&starting-point-node-id=1%3A2&scaling=scale-down-width&content-scaling=fixed&t=0fqFuc2zLOGfjImY-1",
    tags: ["E-commerce", "Shopping", "Products"]
  },
  {
    id: 5,
    title: "School Management",
    description: "A comprehensive school management system interface with student records, attendance tracking, and academic management.",
    image: "/Images/Figma/School.png",
    link: "https://www.figma.com/proto/NfmxMlZA1CFWrX2fTVeVS4/Untitled?node-id=8-62&p=f&t=qB2LIX8YZvcUbbwi-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
    tags: ["Education", "Management", "School"]
  },
  {
    id: 6,
    title: "Mobile App Design",
    description: "A minimalist and clean mobile application interface focusing on user experience with intuitive navigation and modern aesthetics.",
    image: "/Images/Figma/Mobile.png",
    link: "https://www.figma.com/proto/1poeFW9vbZbKqccbcJweAl/Untitled?node-id=1-2&p=f&t=iHxiSrtfaaKULtLz-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
    tags: ["Mobile", "Minimalist", "Clean Design"]
  },
  {
    id: 7,
    title: "Landing Page Design",
    description: "An engaging landing page design with compelling visuals and clear call-to-action elements.",
    image: "/Images/Figma/Landing.png",
    link: "https://www.figma.com/proto/r4MNz1GCHdJ3hRfMkyAjqK/Untitled?node-id=1-4&t=yRfDhr9gSTeQIqt4-1",
    tags: ["Landing Page", "Marketing", "Web Design"]
  },
  {
    id: 8,
    title: "Creative Design System",
    description: "A comprehensive design system with reusable components, typography, and color schemes for consistent UI development.",
    image: "/Images/Figma/Creative.png",
    link: "https://www.figma.com/design/kMjdgA5seR5Y1D0aVDHAzh/Untitled?node-id=0-1&t=KHHHZ5DHYz13CDdP-1",
    tags: ["Design System", "Components", "UI Library"]
  },
  {
    id: 9,
    title: "Food App Dashboard",
    description: "A dynamic and interactive dashboard interface with real-time data visualization and user-friendly controls.",
    image: "/Images/Figma/swiggy.png",
    link: "https://www.figma.com/proto/rXUJqKGC2SejZgH4KMDIGq/Untitled?node-id=67-39&t=TztJVFRBLH7VyUwk-1",
    tags: ["Dashboard", "Interactive", "Data Viz"]
  }
];

const FigmaShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextProject = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev + 1) % figmaProjects.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevProject = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev - 1 + figmaProjects.length) % figmaProjects.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextProject();
    }
    if (isRightSwipe) {
      prevProject();
    }
  };

  const currentProject = figmaProjects[activeIndex];

  return (
    <section className="py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Description */}
        <div className="mb-8 md:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <FaFigma className="text-2xl md:text-3xl text-[#F24E1E]" />
            <h2 className="text-2xl md:text-3xl font-bold text-off-white">Figma Designs</h2>
          </div>
          <div className="max-w-3xl">
            <p className="text-light-gray text-sm md:text-base leading-relaxed">
              Explore my collection of UI/UX designs created in Figma. Each project showcases different aspects of design thinking, 
              from user interface layouts to interactive prototypes. Browse through various projects including portfolio designs, 
              admin dashboards, mobile apps, and more.
            </p>
          </div>
        </div>

        {/* Main Showcase */}
        <div className="relative">
          {/* Project Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative rounded-xl md:rounded-2xl overflow-hidden bg-dark-gray/50 border border-steel-blue/30 shadow-lg"
              onMouseEnter={() => !isMobile && setIsHovered(true)}
              onMouseLeave={() => !isMobile && setIsHovered(false)}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Project Image Container */}
              <div className="relative aspect-[4/3] md:aspect-video overflow-hidden">
                <motion.img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-full object-contain bg-dark-gray"
                  loading="lazy"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {/* Project Info with Text Background */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
                <div className="flex flex-col gap-2 md:gap-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div className="bg-dark-gray/90 px-4 py-2 rounded-lg">
                      <h3 className="text-lg md:text-3xl font-bold text-off-white tracking-tight">
                        {currentProject.title}
                      </h3>
                    </div>
                    <a
                      href={currentProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-lg bg-accent-blue/20 hover:bg-accent-blue/30 text-accent-blue hover:text-accent-orange transition-all duration-300 text-sm md:text-base"
                    >
                      <span className="font-medium">View in Figma</span>
                      <FaExternalLinkAlt size={isMobile ? 12 : 14} />
                    </a>
                  </div>
                  <div className="bg-dark-gray/90 px-4 py-3 rounded-lg">
                    <p className="text-light-gray text-xs md:text-base max-w-2xl leading-relaxed">
                      {currentProject.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {currentProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 md:px-3 py-1 md:py-1.5 rounded-full bg-dark-gray/90 border border-steel-blue/40 text-accent-blue text-[10px] md:text-xs font-medium tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-2 md:left-4 right-2 md:right-4 flex justify-between pointer-events-none">
            <button
              onClick={prevProject}
              disabled={isTransitioning}
              className={`p-2 md:p-3 rounded-full bg-dark-gray/90 text-off-white hover:bg-accent-blue transition-all transform pointer-events-auto shadow-lg ${
                isMobile || isHovered ? 'translate-x-0' : '-translate-x-4'
              } ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}`}
              aria-label="Previous project"
            >
              <FaChevronLeft size={isMobile ? 14 : 20} />
            </button>
            <button
              onClick={nextProject}
              disabled={isTransitioning}
              className={`p-2 md:p-3 rounded-full bg-dark-gray/90 text-off-white hover:bg-accent-blue transition-all transform pointer-events-auto shadow-lg ${
                isMobile || isHovered ? 'translate-x-0' : 'translate-x-4'
              } ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}`}
              aria-label="Next project"
            >
              <FaChevronRight size={isMobile ? 14 : 20} />
            </button>
          </div>

          {/* Project Indicators */}
          <div className="flex justify-center gap-1.5 md:gap-2 mt-4 md:mt-6">
            {figmaProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => !isTransitioning && setActiveIndex(index)}
                disabled={isTransitioning}
                className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-accent-blue w-6 md:w-8'
                    : 'bg-dark-gray hover:bg-accent-blue/50 w-1.5 md:w-2'
                } ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FigmaShowcase; 