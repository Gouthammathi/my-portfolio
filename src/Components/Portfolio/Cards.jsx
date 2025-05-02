import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from "react-icons/fa";
import { useEffect, useState } from 'react';

function isMobileDevice() {
  if (typeof window === 'undefined') return false;
  return /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(window.navigator.userAgent);
}

function VideoPreview({ src, poster }) {
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileDevice());
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      className="w-full h-full object-cover cursor-pointer"
      muted
      loop
      preload="metadata"
      autoPlay
      playsInline
      onMouseEnter={() => !isMobile && videoRef.current?.play()}
      onMouseLeave={() => !isMobile && videoRef.current?.pause()}
    />
  );
}

const Cards = ({ project, align }) => {
  // Determine hover direction class based on alignment
  const hoverEffect = align === 'right'
    ? 'md:group-hover:-rotate-y-2' // Reduced rotation slightly
    : 'md:group-hover:rotate-y-2';

  // Animation variant for the card itself
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    // Replaced article with motion.article and added variants
    <motion.article
      variants={cardVariants}
      className={`
        group w-full max-w-3xl mx-auto
        flex flex-col md:flex-row ${align === 'right' ? 'md:flex-row-reverse' : ''}
        bg-charcoal/80
        rounded-xl md:rounded-2xl
        shadow-lg md:shadow-xl
        border border-dark-gray
        overflow-hidden
        transition-all duration-350 ease-out
        hover:shadow-[0_10px_30px_rgba(99,179,237,0.2)]
        hover:border-steel-blue/70
        md:hover:scale-[1.02] md:hover:-translate-y-1
        ${hoverEffect}
        transform-style-3d
        gap-0 md:gap-0
        p-0 md:p-0
      `}
    >
      <div className="w-full md:w-[340px] h-48 md:h-auto flex-shrink-0 bg-dark-gray overflow-hidden m-0">
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
          {project.video ? (
            <VideoPreview src={project.video} poster={project.image} />
          ) : (
            <img src={project.image} alt={project.title} className="w-full h-full object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105" /> // Added image scale on hover
          )}
        </a>
      </div>

      {/* Project Info Section */}
      <div className="flex flex-col justify-start p-6 md:p-8 gap-3 md:gap-4 flex-grow">
        {/* Title and Link - Updated text colors */}
        <div className="flex items-center gap-3">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            // Updated text color and hover
            className="text-xl md:text-2xl font-bold text-off-white hover:text-accent-blue focus:text-accent-blue outline-none truncate transition-colors"
            aria-label={`Visit project: ${project.title}`}
          >
            {project.title}
          </a>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            // Updated icon color and hover
            className="text-light-gray/70 hover:text-accent-blue transition-colors duration-200 flex-shrink-0"
            aria-label={`Open ${project.title} in new tab`}
          >
            <FaExternalLinkAlt size={16} />
          </a>
        </div>

        {/* Description - Updated text color and scrollbar (needs CSS) */}
        <p className="text-sm md:text-base text-light-gray leading-relaxed md:max-h-24 md:overflow-y-auto custom-scrollbar-new">
          {project.description}
        </p>

        {/* Tags - Updated background, border, text colors */}
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {project.types.map((type, i) => (
            <span
              key={i}
              // Updated background, border, text colors
              className="inline-block px-3 py-1 rounded-full bg-dark-gray/70 border border-steel-blue/40 text-accent-blue text-xs font-medium shadow-sm"
            >
              {type.label}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

// Add helper classes to your index.css or tailwind.config.js if needed:
/*
@layer utilities {
  .transform-style-3d { transform-style: preserve-3d; }
  .rotate-y-2 { transform: rotateY(2deg); }
  .-rotate-y-2 { transform: rotateY(-2deg); }
  .custom-scrollbar-new::-webkit-scrollbar {
     @apply w-[5px];
  }
  .custom-scrollbar-new::-webkit-scrollbar-track {
    @apply bg-transparent;
  }
  .custom-scrollbar-new::-webkit-scrollbar-thumb {
     @apply bg-steel-blue/40 rounded;
  }
  .custom-scrollbar-new::-webkit-scrollbar-thumb:hover {
     @apply bg-steel-blue/60;
  }
}
*/

export default Cards;
