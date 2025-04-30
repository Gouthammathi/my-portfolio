import React from 'react'
import { ScrollAnimation } from '../Components/ScrollAnimation'
import Download from '../Components/Buttons/Download'

function StatCard({ value, label }) {
  return (
    <div className="bg-black/70 rounded-3xl p-8 flex flex-col items-center shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300">
      <span className="text-5xl font-extrabold text-[#e6cfff] mb-2">{value}</span>
      <span className="text-lg text-white/80 font-medium text-center">{label}</span>
    </div>
  );
}

const AboutMe = () => {
  // Function to trigger PDF download
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Images/AI_Intern-Goutham%20mathi%20Resume.pdf';
    link.download = 'AI_Intern-Goutham mathi Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Profile/Intro and Contact Info section moved to the top */}
      <section className="w-full rounded-3xl bg-gradient-to-br from-[#2e2d2d] via-[#a18cd1]/30 to-[#fbc2eb]/20 p-8 md:p-12 flex flex-col gap-12 mb-12 shadow-2xl">
        <button className="px-5 py-2 rounded-full bg-black/60 text-white font-semibold shadow-lg hover:bg-black/80 transition w-fit mb-3">About Me</button>
        <h2 className="text-4xl md:text-6xl font-bold text-left text-[#e6cfff] mb-2">Turning complex problems<br/>into simple solutions</h2>
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left: Quote and Description */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-6">
                I often wonder — am I defined by the code I write, or the questions I keep asking between the lines?
                Each sunrise feels like an upgrade; not of my skills alone, but of how I see the world.
                I’m not just building software — <span className="text-[#e6cfff]">I’m building myself</span>. Piece by piece. Project by project.
              </p>
              <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8">
                To grow is to let curiosity lead — even if it takes you through detours.
                I may not have all the answers yet, but <span className="underline text-[#e6cfff]">I have the hunger to explore them</span>.
                And maybe that’s who I truly am — a work in progress with purpose.
              </p>
            </div>
            <div onClick={handleDownload} style={{cursor: 'pointer', width: 'fit-content'}}>
              <Download />
            </div>
          </div>
          {/* Right: Contact Info */}
          <div className="flex flex-col gap-6 min-w-[220px] items-start text-left">
            <div>
              <span className="block text-white/60 text-sm mb-1">Name</span>
              <span className="block text-lg md:text-xl font-bold text-white">Goutham Mathi</span>
            </div>
            <div>
              <span className="block text-white/60 text-sm mb-1">Phone</span>
              <a
                href="tel:+12127089400"
                className="block text-lg font-bold text-[#e6cfff] transition border-b-2 border-transparent hover:border-[#e6cfff] focus:border-[#e6cfff] outline-none"
              >
                +91-9603672059
              </a>
            </div>
            <div>
              <span className="block text-white/60 text-sm mb-1">Email</span>
              <a
                href="goouthamm@gmail.com"
                className="block text-lg font-bold text-[#e6cfff] transition border-b-2 border-transparent hover:border-[#e6cfff] focus:border-[#e6cfff] outline-none"
              >
                goouthamm@gmail.com
              </a>
            </div>
            <div>
              <span className="block text-white/60 text-sm mb-1">Location</span>
              <a
                className="block text-lg font-bold text-white transition border-b-2 border-transparent hover:border-[#e6cfff] focus:border-[#e6cfff] outline-none"
              >
                Hyderabad, India
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* The rest of your sections (stats grid, cards, etc.) now come after */}
      {/* Stats Grid with ScrollAnimation */}
      <ScrollAnimation>
        <section className="my-12">
          <ScrollAnimation delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <StatCard value="5+" label="Completed mock projects" />
              <StatCard value="7+" label="Months of Internship experience " />
              <StatCard value="10+" label="Certifications in Emerging Technologies" />
            </div>
          </ScrollAnimation>
        </section>
      </ScrollAnimation>
      <div className="mt-8 pb-26">
        <section className="w-full rounded-3xl bg-gradient-to-br from-[#2e2d2d] via-[#a18cd1]/30 to-[#fbc2eb]/20 p-6 md:p-10 flex flex-col gap-8 shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-[#e6cfff] mb-6 text-left">Specialization</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Card 1: Artificial Intelligence */}
            <div className="relative bg-gradient-to-br from-[#232336] via-[#2e2d2d]/80 to-[#18181b] rounded-2xl shadow-xl border border-[#a18cd1]/30 p-7 flex flex-col h-full justify-between overflow-hidden transition-transform hover:scale-105 hover:shadow-[0_8px_32px_#e2a1f899]">
              <div className="flex items-center gap-3 mb-4">
                <h4 className="text-xl md:text-2xl font-extrabold text-white text-left">Artificial Intelligence</h4>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-[#e2a1f8]/10 border border-[#e2a1f8]/40 text-[#e6cfff] px-2 py-0.5 rounded-full text-xs font-semibold shadow">Computer Vision</span>
                <span className="bg-[#e2a1f8]/10 border border-[#e2a1f8]/40 text-[#e6cfff] px-2 py-0.5 rounded-full text-xs font-semibold shadow">Real impact</span>
              </div>
              <p className="text-white/90 text-base md:text-lg mb-4 text-left leading-relaxed">
                <span className="font-semibold ">Intelligent systems crafted with cutting-edge AI technologies</span>
              </p>
              <img src="/Images/AI.png" alt="Frontend Showcase" className="w-full h-40 object-cover rounded-xl mt-2 shadow-md" />
            </div>
            {/* Card 2: Machine Learning */}
            <div className="relative bg-gradient-to-br from-[#232336] via-[#2e2d2d]/80 to-[#18181b] rounded-2xl shadow-xl border border-[#a18cd1]/30 p-7 flex flex-col h-full justify-between overflow-hidden transition-transform hover:scale-105 hover:shadow-[0_8px_32px_#e2a1f899]">
              <div className="flex items-center gap-3 mb-4">
                <h4 className="text-xl md:text-2xl font-extrabold text-white text-left">Machine Learning</h4>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-[#e2a1f8]/10 border border-[#e2a1f8]/40 text-[#e6cfff] px-2 py-0.5 rounded-full text-xs font-semibold shadow">Smart System</span>
                <span className="bg-[#e2a1f8]/10 border border-[#e2a1f8]/40 text-[#e6cfff] px-2 py-0.5 rounded-full text-xs font-semibold shadow">Model Training</span>
              </div>
              <p className="text-white/90 text-base md:text-lg mb-4 text-left leading-relaxed">
                <span className="font-semibold text-">I develop smart solutions powered by advanced Machine Learning.</span>
              </p>
              <img src="/Images/ML.png" alt="Digital Art Showcase" className="w-full h-40 object-cover rounded-xl mt-2 shadow-md" />
            </div>
            {/* Card 3: Data Analytics */}
            <div className="relative bg-gradient-to-br from-[#232336] via-[#2e2d2d]/80 to-[#18181b] rounded-2xl shadow-xl border border-[#a18cd1]/30 p-7 flex flex-col h-full justify-between overflow-hidden transition-transform hover:scale-105 hover:shadow-[0_8px_32px_#e2a1f899]">
              <div className="flex items-center gap-3 mb-4">
                <h4 className="text-xl md:text-2xl font-extrabold text-white text-left">Web Development</h4>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-[#e2a1f8]/10 border border-[#e2a1f8]/40 text-[#e6cfff] px-2 py-0.5 rounded-full text-xs font-semibold shadow">Responsive</span>
                <span className="bg-[#e2a1f8]/10 border border-[#e2a1f8]/40 text-[#e6cfff] px-2 py-0.5 rounded-full text-xs font-semibold shadow">Fullstack</span>
              </div>
              <p className="text-white/90 text-base md:text-lg mb-4 text-left leading-relaxed">
                <span className="font-semibold ">I create Arrtactive and Interactive fully responsive Web-apps</span> 
              </p>
              <img src="/Images/web.png" alt="Data Analytics Showcase" className="w-full h-40 object-cover rounded-xl mt-2 shadow-md" />
            </div>
            {/* Card 4: Digital Art & Design */}
            <div className="relative bg-gradient-to-br from-[#232336] via-[#2e2d2d]/80 to-[#18181b] rounded-2xl shadow-xl border border-[#a18cd1]/30 p-7 flex flex-col h-full justify-between overflow-hidden transition-transform hover:scale-105 hover:shadow-[0_8px_32px_#e2a1f899]">
              <div className="flex items-center gap-3 mb-4">
                <h4 className="text-xl md:text-2xl font-extrabold text-white text-left">Graphic Design</h4>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-[#e2a1f8]/10 border border-[#e2a1f8]/40 text-[#e6cfff] px-2 py-0.5 rounded-full text-xs font-semibold shadow">Illustration</span>
                <span className="bg-[#e2a1f8]/10 border border-[#e2a1f8]/40 text-[#e6cfff] px-2 py-0.5 rounded-full text-xs font-semibold shadow">Designing</span>
              </div>
              <p className="text-white/90 text-base md:text-lg mb-4 text-left leading-relaxed">
                <span className="font-semibold ">Creative visuals and branding</span> 
              </p>
              <img src="/Images/graphic.png" alt="Digital Art Showcase" className="w-full h-40 object-cover rounded-xl mt-2 shadow-md" />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutMe