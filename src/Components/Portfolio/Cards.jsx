import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from "react-icons/fa";
import { useEffect, useState } from 'react';
import VideoPreview from './VideoPreview'; // Assuming VideoPreview is in the same folder

function isMobileDevice() {
  if (typeof window === 'undefined') return false;
  return /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(window.navigator.userAgent);
}

const Cards = ({ project, align, onClick }) => {
  const hoverEffect = align === 'right'
    ? 'md:group-hover:-rotate-y-2'
    : 'md:group-hover:rotate-y-2';

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.article
      variants={cardVariants}
      className={`
        group w-full max-w-md md:max-w-3xl mx-auto 
        flex flex-col md:flex-row ${align === 'right' ? 'md:flex-row-reverse' : ''}
        bg-charcoal/80 
        rounded-xl md:rounded-2xl 
        shadow-lg md:shadow-xl 
        border border-dark-gray 
        overflow-hidden 
        transition-all duration-350 ease-out 
        ${onClick ? 'hover:shadow-[0_10px_30px_rgba(99,179,237,0.2)] hover:border-steel-blue/70 md:hover:scale-[1.02] md:hover:-translate-y-1' : ''}
        transform-style-3d 
        gap-0 
        p-0
      `}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {/* Media Section - Increased height */}
      <div className={`w-full md:w-[340px] lg:w-[400px] h-56 md:h-64 flex-shrink-0 bg-dark-gray overflow-hidden m-0`}> {/* Increased h-56 md:h-64 */}
        {/* Link only if no onClick (mobile) */}
        {!onClick ? (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
            {project.video ? (
              <VideoPreview src={project.video} poster={project.image} />
            ) : (
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            )}
          </a>
        ) : (
          // Render media directly for desktop/tablet
          <>
            {project.video ? (
              <VideoPreview src={project.video} poster={project.image} />
            ) : (
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            )}
          </>
        )}
      </div>

      {/* Project Info Section */}
      <div className="flex flex-col justify-start p-4 md:p-6 lg:p-8 gap-2 md:gap-3 flex-grow">
        {/* Title and Link */}
        <div className="flex items-center justify-between gap-3"> {/* Use justify-between */}
          {/* Title (link or text based on onClick) */}
          {!onClick ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg md:text-xl font-bold text-off-white hover:text-accent-blue focus:text-accent-blue outline-none truncate transition-colors"
              aria-label={`Visit project: ${project.title}`}
            >
              {project.title}
            </a>
          ) : (
            <h3 className="text-lg md:text-xl font-bold text-off-white truncate">
              {project.title}
            </h3>
          )}
          {/* External link icon */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-gray/70 hover:text-accent-blue transition-colors duration-200 flex-shrink-0"
            aria-label={`Open ${project.title} in new tab`}
          >
            <FaExternalLinkAlt size={14} md:size={16} />
          </a>
        </div>

        {/* Description - Truncated with line-clamp */}
        <p className="text-sm md:text-base text-light-gray leading-relaxed line-clamp-3"> {/* Added line-clamp-3 */}
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 md:gap-2 mt-auto pt-2">
          {project.types.map((type, i) => (
            <span key={i} className="inline-block px-3 py-1 rounded-full bg-dark-gray/70 border border-steel-blue/40 text-accent-blue text-xs font-medium shadow-sm">{type.label}</span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default Cards;
