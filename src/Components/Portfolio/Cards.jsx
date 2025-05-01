import React, { useRef } from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";

// Video Preview Component (minor adjustments)
function VideoPreview({ src, poster }) {
  const videoRef = useRef(null);
  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      className="w-full h-full object-cover cursor-pointer" // Simplified classes
      muted
      loop // Added loop for continuous preview
      preload="metadata"
      onMouseEnter={() => videoRef.current?.play()} // Optional chaining
      onMouseLeave={() => videoRef.current?.pause()} // Optional chaining
      // Removed onMouseOut as onMouseLeave covers it
    />
  );
}

const Cards = ({ project, align }) => {
  // Determine hover direction class based on alignment
  const hoverEffect = align === 'right'
    ? 'md:group-hover:-rotate-y-3'
    : 'md:group-hover:rotate-y-3';

  return (
    // Replaced StyledWrapper with Tailwind classes
    // Added group class for hover effects
    <article
      className={`
        group w-full max-w-3xl mx-auto 
        flex flex-col md:flex-row ${align === 'right' ? 'md:flex-row-reverse' : ''} 
        bg-gradient-to-br from-[#232336] via-[#2e2d2d]/80 to-[#18181b] 
        rounded-xl md:rounded-2xl 
        shadow-lg md:shadow-xl 
        border border-[#232336] 
        overflow-hidden 
        transition-all duration-350 ease-out 
        hover:shadow-[0_16px_48px_rgba(161,140,209,0.3)] /* Adjusted hover shadow */
        hover:border-[#a18cd1]/50 
        md:hover:scale-[1.03] md:hover:-translate-y-2 
        ${hoverEffect} /* Apply perspective rotation */
        transform-style-3d /* Enable 3D transforms */
      `}
    >
      {/* Image/Video Section - Adjusted responsive sizing and rounding */}
      <div className="w-full md:w-[340px] h-48 md:h-auto flex-shrink-0 bg-[#18181b] overflow-hidden">
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
          {project.video ? (
            <VideoPreview src={project.video} poster={project.image} />
          ) : (
            <img src={project.image} alt={project.title} className="w-full h-full object-cover cursor-pointer" />
          )}
        </a>
      </div>

      {/* Project Info Section - Adjusted padding and text sizes */}
      <div className="flex flex-col justify-start p-6 md:p-8 gap-3 md:gap-4 flex-grow">
        {/* Title and Link */}
        <div className="flex items-center gap-3">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl md:text-2xl font-bold text-[#e6cfff] hover:underline focus:underline outline-none truncate" // Added truncate
            aria-label={`Visit project: ${project.title}`}
          >
            {project.title}
          </a>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e6cfff]/80 hover:text-[#e6cfff] transition-colors duration-200 flex-shrink-0"
            aria-label={`Open ${project.title} in new tab`}
          >
            <FaExternalLinkAlt size={16} /> {/* Adjusted size */}
          </a>
        </div>

        {/* Description - Adjusted text size, added max-height and scroll */}
        <p className="text-sm md:text-base text-gray-300 leading-relaxed md:max-h-24 md:overflow-y-auto custom-scrollbar">
          {project.description}
        </p>

        {/* Tags - Adjusted styling */}
        <div className="flex flex-wrap gap-2 mt-auto pt-2"> {/* Pushes tags to bottom */}
          {project.types.map((type, i) => (
            <span
              key={i}
              className="inline-block px-3 py-1 rounded-full bg-[#e2a1f8]/10 border border-[#e2a1f8]/30 text-[#e6cfff] text-xs font-medium shadow-sm"
            >
              {type.label}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

// Add helper classes to your index.css or tailwind.config.js if needed:
/*
@layer utilities {
  .transform-style-3d { transform-style: preserve-3d; }
  .rotate-y-3 { transform: rotateY(3deg); }
  .-rotate-y-3 { transform: rotateY(-3deg); }
  .custom-scrollbar::-webkit-scrollbar {
     width: 5px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
     background: rgba(226, 161, 248, 0.3);
     border-radius: 10px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
     background: rgba(226, 161, 248, 0.5);
  }
}
*/

export default Cards;
