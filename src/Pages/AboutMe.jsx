import React from 'react';
import { ScrollAnimation } from '../Components/ScrollAnimation';
import { FaDownload } from 'react-icons/fa'; // Import download icon
// Removed Download component import

// Refactored StatCard with Tailwind
function StatCard({ value, label }) {
  return (
    <div className="bg-black/60 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center shadow-lg border border-white/10 hover:border-white/20 hover:scale-[1.03] hover:shadow-xl transition-all duration-300 ease-out">
      <span className="text-4xl md:text-5xl font-bold text-[#e6cfff] mb-2">{value}</span>
      <span className="text-base md:text-lg text-white/80 font-medium">{label}</span>
    </div>
  );
}

// Refactored Specialization Card
function SpecializationCard({ title, tags, description, imageSrc, imageAlt }) {
  return (
    <div className="relative bg-gradient-to-br from-[#232336] via-[#2e2d2d]/80 to-[#18181b] rounded-xl md:rounded-2xl shadow-lg border border-[#a18cd1]/20 p-6 md:p-7 flex flex-col h-full justify-between overflow-hidden transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-[0_8px_32px_rgba(226,161,248,0.2)] hover:border-[#a18cd1]/40">
      <div> {/* Content wrapper */}
        <h4 className="text-xl md:text-2xl font-bold text-white mb-3 text-left">{title}</h4>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="inline-block px-3 py-1 rounded-full bg-[#e2a1f8]/10 border border-[#e2a1f8]/30 text-[#e6cfff] text-xs font-medium shadow-sm">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-white/80 text-sm md:text-base mb-4 text-left leading-relaxed">
          {description}
        </p>
      </div>
      <img src={imageSrc} alt={imageAlt} className="w-full h-32 md:h-40 object-cover rounded-lg md:rounded-xl mt-4 shadow-md self-end" /> {/* Ensure image is at bottom */}
    </div>
  );
}

const AboutMe = () => {
  // Function to trigger PDF download
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Images/AI_Intern-Goutham mathi Resume.pdf';
    link.download = 'AI_Intern-Goutham mathi Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 lg:px-0">
      {/* Intro Section */}
      <ScrollAnimation delay={0.1}>
        <section className="w-full rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#2e2d2d] via-[#a18cd1]/20 to-[#fbc2eb]/10 p-6 md:p-10 flex flex-col gap-8 mb-12 shadow-xl border border-white/10">
          {/* Replaced button with span tag */}
          <span className="inline-block px-5 py-1.5 rounded-full bg-black/50 border border-white/15 text-sm font-semibold text-white shadow-md w-fit">
            About Me
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-left text-white mb-2 leading-tight">Turning complex problems<br />into simple solutions</h2>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Left: Quote and Description */}
            <div className="flex-1 flex flex-col justify-between gap-6">
              <div>
                <p className="text-white/80 text-base md:text-lg leading-relaxed mb-4">
                  I often wonder — am I defined by the code I write, or the questions I keep asking between the lines?
                  Each sunrise feels like an upgrade; not of my skills alone, but of how I see the world.
                  I’m not just building software — <span className="text-[#e6cfff]">I’m building myself</span>. Piece by piece. Project by project.
                </p>
                <p className="text-white/70 text-sm md:text-base leading-relaxed">
                  To grow is to let curiosity lead — even if it takes you through detours.
                  I may not have all the answers yet, but <span className="underline text-[#e6cfff]">I have the hunger to explore them</span>.
                  And maybe that’s who I truly am — a work in progress with purpose.
                </p>
              </div>
              {/* Replaced Download component with Tailwind button */}
              <button
                onClick={handleDownload}
                className="group mt-4 relative inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-[#7808d0] text-white text-sm font-semibold shadow-lg transition-all duration-300 ease-out hover:bg-black hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#a18cd1] focus:ring-offset-[#121212] w-fit"
              >
                <FaDownload className="text-base transition-transform duration-300 group-hover:translate-y-[-1px]" />
                <span>Download CV</span>
              </button>
            </div>
            {/* Right: Contact Info */}
            <div className="flex flex-col gap-4 md:gap-5 min-w-[200px] md:min-w-[220px] items-start text-left border-t border-white/10 md:border-t-0 md:border-l md:pl-8 pt-6 md:pt-0">
              <div>
                <span className="block text-white/60 text-xs md:text-sm mb-1">Name</span>
                <span className="block text-base md:text-lg font-semibold text-white">Goutham Mathi</span>
              </div>
              <div>
                <span className="block text-white/60 text-xs md:text-sm mb-1">Phone</span>
                <a
                  href="tel:+919603672059" // Corrected tel format
                  className="block text-base md:text-lg font-semibold text-[#e6cfff] transition border-b border-transparent hover:border-[#e6cfff]/50 focus:border-[#e6cfff] outline-none"
                  aria-label="Call Goutham Mathi"
                >
                  +91-9603672059
                </a>
              </div>
              <div>
                <span className="block text-white/60 text-xs md:text-sm mb-1">Email</span>
                <a
                  href="mailto:goouthamm@gmail.com" // Corrected href
                  className="block text-base md:text-lg font-semibold text-[#e6cfff] transition border-b border-transparent hover:border-[#e6cfff]/50 focus:border-[#e6cfff] outline-none break-all" // Added break-all
                  aria-label="Email Goutham Mathi"
                >
                  goouthamm@gmail.com
                </a>
              </div>
              <div>
                <span className="block text-white/60 text-xs md:text-sm mb-1">Location</span>
                {/* Made location non-interactive */}
                <span className="block text-base md:text-lg font-semibold text-white">
                  Hyderabad, India
                </span>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Stats Grid */}
      <ScrollAnimation delay={0.3}>
        <section className="my-12 md:my-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            <StatCard value="5+" label="Completed Projects" />
            <StatCard value="7+" label="Months Internship" />
            <StatCard value="10+" label="Certifications" />
          </div>
        </section>
      </ScrollAnimation>

      {/* Specialization Section */}
      <ScrollAnimation delay={0.5}>
        <section className="w-full rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#2e2d2d]/70 via-[#a18cd1]/10 to-[#fbc2eb]/5 p-6 md:p-10 flex flex-col gap-6 md:gap-8 shadow-xl border border-white/10 mb-16 md:mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-left">Specialization</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <SpecializationCard
              title="Artificial Intelligence"
              tags={['Computer Vision', 'NLP', 'Intelligent Systems']}
              description="Crafting intelligent systems with cutting-edge AI technologies to solve real-world problems."
              imageSrc="/Images/AI.png"
              imageAlt="Artificial Intelligence Showcase"
            />
            <SpecializationCard
              title="Machine Learning"
              tags={['Model Training', 'Prediction', 'Smart Systems']}
              description="Developing smart solutions powered by advanced Machine Learning algorithms and data analysis."
              imageSrc="/Images/ML.png"
              imageAlt="Machine Learning Showcase"
            />
            <SpecializationCard
              title="Web Development"
              tags={['React', 'Node.js', 'Fullstack', 'Responsive']}
              description="Creating attractive and interactive fully responsive web applications using modern frameworks."
              imageSrc="/Images/web.png"
              imageAlt="Web Development Showcase"
            />
            <SpecializationCard
              title="Graphic Design"
              tags={['Illustration', 'UI/UX', 'Branding']}
              description="Designing creative visuals, user interfaces, and branding elements with a focus on aesthetics."
              imageSrc="/Images/graphic.png"
              imageAlt="Graphic Design Showcase"
            />
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default AboutMe;