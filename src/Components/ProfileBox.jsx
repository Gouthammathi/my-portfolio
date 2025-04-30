import React from 'react'

const ProfileBox = () => {
  return (
    <div className="bg-[#1a1a1a] rounded-3xl p-4 lg:p-5 h-auto lg:h-[calc(100vh-3rem)] w-full lg:w-[340px] flex flex-col lg:fixed">
      {/* Profile Header */}
      <div className="flex items-center gap-2 mb-3">
        <div className="w-9 h-9 rounded-full bg-[#e2a1f8] bg-opacity-20 flex items-center justify-center">
          <img src="/cat-icon.svg" alt="Cat Icon" className="w-4 h-4" />
        </div>
        <h2 className="text-lg font-medium text-white">Goutham Mathi</h2>
      </div>

      {/* Profile Image */}
      <div className="w-full h-[200px] lg:h-[240px] rounded-3xl overflow-hidden mb-3 bg-[#e2a1f8] bg-opacity-10 flex-shrink-0">
        <img
          src="\Images\profile.jpg"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Specialization */}
      <div className="mb-3">
        <p className="text-xs text-gray-400 mb-1">Specialization:</p>
        <p className="text-white text-sm leading-tight">
          AI&ML Engineer 
          <br />
          and Software developer
        </p>
      </div>

      {/* Location */}
      <div className="mb-3">
        <p className="text-xs text-gray-400 mb-1">Based in:</p>
        <p className="text-white text-sm">Hyderabad, India</p>
      </div>

      {/* Social Links */}
      <div className="flex gap-2 mb-3 justify-center lg:justify-start">
        <a href="#" className="w-7 h-7 rounded-full bg-[#e2a1f8] bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all">
          <img src="/dribbble.svg" alt="Dribbble" className="w-3.5 h-3.5" />
        </a>
        <a href="#" className="w-7 h-7 rounded-full bg-[#e2a1f8] bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all">
          <img src="/behance.svg" alt="Behance" className="w-3.5 h-3.5" />
        </a>
        <a href="#" className="w-7 h-7 rounded-full bg-[#e2a1f8] bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all">
          <img src="/instagram.svg" alt="Instagram" className="w-3.5 h-3.5" />
        </a>
        <a href="#" className="w-7 h-7 rounded-full bg-[#e2a1f8] bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all">
          <img src="/twitch.svg" alt="Twitch" className="w-3.5 h-3.5" />
        </a>
        <a href="#" className="w-7 h-7 rounded-full bg-[#e2a1f8] bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all">
          <img src="/pinterest.svg" alt="Pinterest" className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* CTA Button */}
      <button className="mt-auto w-full bg-[#e2a1f8] text-white py-2 px-5 rounded-full hover:bg-opacity-90 transition-all text-sm">
        Let's Work Together!
      </button>
    </div>
  )
}

export default ProfileBox
