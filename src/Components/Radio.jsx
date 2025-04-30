import React, { useState } from 'react';

const navItems = [
  { id: 'home', label: 'Home', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M4.5 10.5V21h15V10.5" />
    </svg>
  ) },
  { id: 'portfolio', label: 'Portfolio', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
      <rect x="3" y="7" width="18" height="13" rx="2" /><path d="M16 3v4M8 3v4" />
    </svg>
  ) },
  { id: 'about', label: 'About', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  ) },
  { id: 'resume', label: 'Resume', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 2h9a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 0v20m0-20h9m-9 0v20" />
    </svg>
  ) },
  { id: 'contact', label: 'Contact', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4.5M21 10.5v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7m18 0l-9 6-9-6" />
    </svg>
  ) },
];

const Radio = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const handleNav = (id, idx) => {
    setActiveIdx(idx);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="fixed left-1/2 -translate-x-1/2 bottom-6 z-50 w-[90vw] max-w-[340px] mx-auto bg-gradient-to-br from-[#23272fdd] via-[#23272fbb] to-[#e3eaff33] backdrop-blur-xl shadow-xl rounded-[2rem] flex justify-around py-1.5 px-2 border border-blue-200/20 transition-all duration-300">
      <nav className="flex w-full justify-between items-center">
        {navItems.map((item, idx) => (
          <button
            key={item.id}
            aria-label={item.label}
            onClick={() => handleNav(item.id, idx)}
            className={`flex flex-col items-center px-2 py-1 rounded-2xl group transition-all duration-200 ${activeIdx === idx ? 'bg-white text-gray-900 shadow-md' : 'text-gray-400 hover:text-white'} ${activeIdx === idx ? 'shadow-lg' : ''}`}
            style={{ minWidth: 40 }}
          >
            <span className="group-hover:scale-110 group-focus:scale-110 transition-transform">
              {React.cloneElement(item.icon, { className: 'w-5 h-5' })}
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Radio;
