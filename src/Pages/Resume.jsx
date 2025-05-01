import React from 'react';
import { ScrollAnimation } from '../Components/ScrollAnimation';
import { FaExternalLinkAlt } from 'react-icons/fa'; // Added for website link
// Removed Button3 import

// Reusable Timeline Item Component
function TimelineItem({ year, title, institution, description }) {
  return (
    <div className="relative pl-8 pb-8 border-l border-[#a18cd1]/30 last:border-l-transparent last:pb-0">
      {/* Dot */}
      <div className="absolute left-[-9px] top-[5px] w-4 h-4 rounded-full bg-gradient-to-br from-[#fbc2eb] to-[#a18cd1] border-2 border-[#121212]"></div>
      {/* Content */}
      <p className="text-sm text-[#e6cfff] font-semibold mb-1">{year}</p>
      <h4 className="text-lg md:text-xl font-bold text-white mb-1">{title}</h4>
      <p className="text-sm text-white/70 mb-2">{institution}</p>
      <p className="text-sm text-white/60 leading-relaxed">{description}</p>
    </div>
  );
}

// Reusable Skill Category Component
function SkillCategory({ title, skills }) {
  return (
    <div className="bg-gradient-to-br from-[#232336]/80 via-[#2e2d2d]/50 to-[#18181b]/80 rounded-xl md:rounded-2xl p-6 shadow-lg border border-[#a18cd1]/20">
      <h4 className="text-lg md:text-xl font-semibold text-white mb-5 text-left">{title}</h4>
      <div className="grid grid-cols-2 gap-x-4 gap-y-3">
        {skills.map((skill) => (
          <div key={skill.name} className="flex items-center gap-3 group">
            <img
              src={skill.icon}
              alt={`${skill.name} icon`}
              aria-label={`${skill.name} icon`}
              className="w-6 h-6 object-contain transition-transform duration-200 group-hover:scale-110"
            />
            <span className="text-sm text-white/80 group-hover:text-white transition-colors duration-200">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Main Resume Component
const Resume = () => {
  const education = [
    { year: '2021 - 2025', title: 'B.Tech CSE (AI & ML)', institution: 'MRU', description: 'Pursuing specialization in Artificial Intelligence and Machine Learning, focusing on core computer science principles alongside advanced AI concepts.' },
    { year: '2019 - 2021', title: 'Intermediate MPC', institution: 'Sri Chaitanya Jr College', description: 'Completed intermediate education with a focus on Mathematics, Physics, and Chemistry, building a strong foundation for engineering studies.' },
    { year: '2019', title: 'Schooling', institution: 'Aditya High School', description: 'Completed secondary school education, achieving a strong academic record.' },
  ];

  // Removed the placeholder from experience
  const experience = [
    { year: 'Oct 2024 - Present', title: 'AI Intern', institution: 'Artihcus Global', description: 'Gaining hands-on experience in AI development, working on real-world projects involving machine learning models and data analysis.' },
    // Add more experience if available
  ];

  const frontendSkills = [
    { name: 'HTML', icon: '/icons/html.png' },
    { name: 'CSS', icon: '/icons/css.png' },
    { name: 'JavaScript', icon: '/icons/js.png' },
    { name: 'React', icon: '/icons/react.png' },
    // Add Tailwind if applicable
  ];

  const backendSkills = [
    { name: 'Node.js', icon: '/icons/node.png' },
    { name: 'Python', icon: '/icons/python.png' },
    { name: 'Java', icon: '/icons/java.png' },
    { name: 'SQL', icon: '/icons/sql.png' },
    { name: 'C', icon: '/icons/C.png' },
  ];

  const designSkills = [
    { name: 'Figma', icon: '/icons/figma.png' },
    { name: 'Illustrator', icon: '/icons/illustrator.png' },
    // Add other design tools if applicable
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 lg:px-0 pb-16">
      <ScrollAnimation delay={0.1}>
        <div className="flex flex-col items-start gap-4 mb-10">
          {/* Replaced Button3 with a simple tag */}
          <span className="inline-block px-5 py-1.5 rounded-full bg-gradient-to-r from-[#e2a1f8]/20 to-[#a18cd1]/20 border border-white/20 text-sm font-semibold text-white shadow-md">
            Resume
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-left text-white leading-tight">
            Education & Experience
          </h2>
        </div>
      </ScrollAnimation>

      {/* Education & Experience Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-12 md:mb-16">
        <ScrollAnimation delay={0.2}>
          <section>
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8 text-left">Education</h3>
            <div>
              {education.map((item, index) => (
                <TimelineItem key={`edu-${index}`} {...item} />
              ))}
            </div>
          </section>
        </ScrollAnimation>

        <ScrollAnimation delay={0.3}>
          <section>
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8 text-left">Experience</h3>
            <div>
              {experience.map((item, index) => (
                <TimelineItem key={`exp-${index}`} {...item} />
              ))}
            </div>
          </section>
        </ScrollAnimation>
      </div>

      {/* Entrepreneurial Journey Section - UPDATED */}
      <ScrollAnimation delay={0.4}>
        <section className="my-12 md:my-16">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-left text-white mb-10">
            Entrepreneurial Journey
          </h3>
          <div className="bg-gradient-to-br from-[#232336]/90 via-[#2e2d2d]/60 to-[#18181b]/90 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg border border-[#a18cd1]/20">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">
              {/* Updated H4 with styled tagline */}
              <h4 className="text-xl md:text-2xl font-bold text-white">
                Innovimagine
                <span className="block text-sm text-white/70 font-normal mt-1"> {/* Styled tagline */} 
                  Innovative Solutions for Unparalleled Digital Experiences
                </span>
              </h4>
              <span className="text-sm text-[#e6cfff] font-semibold sm:ml-4 flex-shrink-0">(Co-founder, 2024 - Present)</span> {/* Added margin for spacing */}
            </div>
            {/* Updated Description */}
            <div className="space-y-4 text-base text-white/80 leading-relaxed">
              <p>
                Co-founded Innovimagine during the final year of my B.Tech alongside three close friends, driven by a shared passion for building <span className="text-[#e6cfff] font-semibold">impactful, real-world tech solutions</span>. Our vision was to establish a <span className="text-[#e6cfff] font-semibold">dynamic innovation hub</span> focused on solving diverse challenges through creativity, collaboration, and cutting-edge technology.
              </p>
              <p>
                As a co-founder, I took a leading role in designing and developing <span className="text-[#e6cfff] font-semibold">intelligent software and AI-powered solutions</span> tailored to address real-world problems across industries. I was deeply involved in the ideation, research, prototyping, and full-stack development of our products — ensuring that each solution was not just functional, but also scalable and user-centric.
              </p>
              <p>
                My approach has always been <span className="text-[#e6cfff] font-semibold">problem-first</span> — identifying gaps in everyday systems, listening closely to end-user pain points, and engineering solutions that are both innovative and practical. I actively contributed to our technical strategy, participated in client interactions, and worked closely with our team to maintain agility in our workflows and effectiveness in our outcomes.
              </p>
              <p>
                As an entrepreneur, I embrace a mindset of <span className="text-[#e6cfff] font-semibold">continuous learning, adaptability, and impact</span>. Whether it’s exploring new tech stacks, integrating emerging AI models, or refining user experiences, I strive to push boundaries and bring meaningful change through technology.
              </p>
            </div>
            {/* Website Link */}
            <a
              href="https://www.innovimagine.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#e6cfff] transition border-b border-transparent hover:border-[#e6cfff]/50 focus:border-[#e6cfff] outline-none mt-4" // Added margin-top
              aria-label="Visit Innovimagine Website"
            >
              <span>www.innovimagine.com</span>
              <FaExternalLinkAlt size={12} />
            </a>
          </div>
        </section>
      </ScrollAnimation>

      {/* Skills Section */}
      <ScrollAnimation delay={0.5}> {/* Adjusted delay */}
        <section>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-left text-white mb-10">
            My Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SkillCategory title="Frontend" skills={frontendSkills} />
            <SkillCategory title="Backend & Languages" skills={backendSkills} />
            <SkillCategory title="Design Tools" skills={designSkills} />
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default Resume;
