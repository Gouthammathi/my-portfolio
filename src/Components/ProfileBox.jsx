import React from 'react';
import { motion } from 'framer-motion'; // Import motion

const socialLinks = [
  // Using accent-blue for hover, can alternate with accent-orange if desired
  { href: 'https://www.linkedin.com/in/gouthammathi', icon: '/icons/linkedin.png', label: 'Linkedin', color: 'hover:bg-accent-blue' },
  { href: 'https://github.com/Gouthammathi', icon: '/icons/git.png', label: 'Github', color: 'hover:bg-accent-blue' }, // Assuming git.png is GitHub icon
  { href: 'https://pin.it/1HKMtEMs0', icon: '/icons/pin.png', label: 'Pinterest', color: 'hover:bg-accent-orange' }, // Changed label, used orange
  { href: 'https://www.instagram.com/goouthamm?igsh=dWRqaTlheGd6eHh6', icon: '/icons/insta.png', label: 'Instagram', color: 'hover:bg-accent-orange' }, // Used orange
];

const ProfileBox = () => {
  return (
    // Added motion.div for entrance animation
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      // Updated background, border, shadow
      className="bg-charcoal rounded-[2rem] p-6 lg:p-7 w-full max-w-[340px] flex flex-col lg:fixed shadow-2xl border border-dark-gray top-6 left-0 items-center"
    >
      {/* Profile Header - Updated text colors */}
      <div className="flex flex-col items-center mb-4">
        <h2 className="text-2xl font-bold text-off-white leading-tight text-center">Goutham Mathi</h2>
      </div>

      {/* Profile Image - Updated background */}
      <div className="w-[300px] h-[170px] rounded-2xl overflow-hidden mb-5 bg-dark-gray flex-shrink-0">
        <img
          src="/Images/profile.jpg"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Specialization & Location - Updated text colors */}
      <div className="w-full mb-5 ">
        <p className="text-xs text-light-gray mb-1">Specialization:</p>
        <p className="text-[11px] text-off-white font-semibold leading-snug">AI & ML Engineer<br/>and Software Developer</p>
        <p className="text-xs text-light-gray mt-3 mb-1">Based in:</p>
        <p className="text-[11px] text-off-white font-semibold">Hyderabad, India</p>
      </div>

      {/* Social Links - Updated background, border, hover */}
      <div className="flex justify-center gap-3 w-full mb-6">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            // Updated base bg, hover bg, gradient border colors
            className={`group w-11 h-11 rounded-full bg-dark-gray flex items-center justify-center ${link.color} transition-all duration-200 shadow border-2 border-transparent bg-clip-padding relative before:content-[''] before:absolute before:inset-0 before:rounded-full before:p-[2px] before:bg-gradient-to-tr before:from-steel-blue before:to-accent-blue/70 before:opacity-60 group-hover:before:opacity-100 group-hover:before:from-accent-blue group-hover:before:to-accent-orange`}
            aria-label={link.label}
            target="_blank"
            rel="noopener noreferrer"
            style={{ overflow: 'visible' }}
          >
            {/* Updated inner span background and hover */}
            <span className={`relative z-10 flex items-center justify-center w-full h-full bg-dark-gray rounded-full transition-all duration-200 group-hover:scale-110 group-hover:bg-opacity-80 ${link.color.replace('hover:', '')}`}>
              <img src={link.icon} alt={link.label} className="w-6 h-6" /> {/* Adjusted size slightly */}
            </span>
          </a>
        ))}
      </div>

      {/* CTA Button - Updated gradient, text color, hover */}
      <a
        href="mailto:goouthamm@gmail.com"
        className="w-full py-2.5 rounded-full bg-gradient-to-r from-accent-blue to-accent-orange text-navy font-semibold text-base shadow-md transition-all duration-300 hover:from-accent-orange hover:to-accent-blue hover:scale-[1.03] flex items-center justify-center text-center"
        style={{ textDecoration: 'none' }}
      >
        Let's Work Together!
      </a>
    </motion.div>
  );
};

export default ProfileBox;
