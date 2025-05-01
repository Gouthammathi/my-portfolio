import React from 'react'

const socialLinks = [
  { href: 'https://www.linkedin.com/in/gouthammathi', icon: '/icons/linkedin.png', label: 'Linkedin', color: 'hover:bg-[#e2a1f8]' },
  { href: 'https://github.com/Gouthammathi', icon: '/icons/git.png', label: 'Github', color: 'hover:bg-[#a18cd1]' },
  { href: 'https://pin.it/1HKMtEMs0', icon: '/icons/pin.png', label: 'Pintrest', color: 'hover:bg-[#fbc2eb]' },
  { href: 'https://www.instagram.com/goouthamm?igsh=dWRqaTlheGd6eHh6', icon: '/icons/insta.png', label: 'Instagram', color: 'hover:bg-[#232336]' },
];

const ProfileBox = () => {
  return (
    <div className="bg-[#18171c] rounded-[2rem] p-6 lg:p-7 w-full max-w-[340px] flex flex-col lg:fixed shadow-2xl border border-[#232336] top-6 left-0 items-center">
      {/* Profile Header */}
      <div className="flex flex-col items-center mb-4">
        
        <h2 className="text-2xl font-bold text-white leading-tight text-center">Goutham Mathi</h2>
      </div>

      {/* Profile Image */}
      <div className="w-[300px] h-[170px] rounded-2xl overflow-hidden mb-5 bg-[#232336] flex-shrink-0">
        <img
          src="/Images/profile.jpg"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Specialization & Location - Vertical Layout */}
      <div className="w-full mb-5 ">
        <p className="text-xs text-[#bdbdbd] mb-1">Specialization:</p>
        <p className="text-[11px] text-white font-semibold leading-snug">AI & ML Engineer<br/>and Software Developer</p>
        <p className="text-xs text-[#bdbdbd] mt-3 mb-1">Based in:</p>
        <p className="text-[11px] text-white font-semibold">Hyderabad, India</p>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-3 w-full mb-6">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`group w-12 h-12 rounded-full bg-[#232336] flex items-center justify-center ${link.color} transition-all duration-200 shadow border-2 border-transparent bg-clip-padding relative before:content-[''] before:absolute before:inset-0 before:rounded-full before:p-[2px] before:bg-gradient-to-tr before:from-[#a18cd1] before:to-[#fbc2eb] before:z-0 group-hover:border-white group-hover:before:from-[#fff] group-hover:before:to-[#a18cd1]`}
            aria-label={link.label}
            target="_blank"
            rel="noopener noreferrer"
            style={{overflow: 'visible'}}
          >
            <span className="relative z-10 flex items-center justify-center w-full h-full bg-[#232336] rounded-full transition-transform duration-200 group-hover:scale-125 group-hover:bg-[#fbc2eb]/60">
              <img src={link.icon} alt={link.label} className="w-7 h-7" />
            </span>
          </a>
        ))}
      </div>

      {/* CTA Button */}
      <a
        href="mailto:goouthamm@gmail.com"
        className="w-full py-2.5 rounded-full bg-gradient-to-r from-[#fbc2eb] to-[#a18cd1] text-[#232336] font-semibold text-base shadow-md transition-all duration-200 hover:from-[#a18cd1] hover:to-[#fbc2eb] flex items-center justify-center text-center"
        style={{ textDecoration: 'none' }}
      >
        Let's Work Together!
      </a>
    </div>
  );
};

export default ProfileBox
