import React from 'react'
import { ScrollAnimation } from '../Components/ScrollAnimation'

const Resume = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <section className="w-full rounded-3xl bg-gradient-to-br from-[#2e2d2d] via-[#a18cd1]/30 to-[#fbc2eb]/20 p-8 md:p-12 flex flex-col gap-8 mb-12 shadow-2xl">
          <button className="px-5 py-2 rounded-full bg-black/60 text-white font-semibold shadow-lg hover:bg-black/80 transition w-fit mb-3">Resume</button>
          <h2 className="text-4xl md:text-6xl font-bold text-left text-[#e6cfff] mb-2">Education and practical<br/>experience</h2>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-6">
            Be what you would seem to be - or, if you'd like it put more simply - never imagine yourself not to be otherwise than what it might appear to others that what you were or might have been was not otherwise than what you had been would have appeared to them to be otherwise.
          </p>
        </section>
        
        
        <ScrollAnimation delay={0.6}>
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-left">My Education</h2>
            <div className="divide-y divide-white/10">
              {/* Education Item 1 */}
              <div className="flex flex-col md:flex-row md:items-center py-8 gap-6">
                <div className="md:w-1/4 text-white/70 text-base md:text-lg font-semibold mb-2 md:mb-0"> 2019</div>
                <div className="md:w-1/2">
                  <div className="text-xl md:text-2xl font-bold text-white mb-1">Primary & Secondary Schooling</div>
                  <div className="text-white/60 text-sm mb-2"><span className="font-bold">Aditya High School</span></div>
                </div>
                <div className="md:w-1/4 text-white/80 text-base md:text-lg">Completed foundational education with a focus on mathematics, science, and communication skills.</div>
              </div>
              {/* Education Item 2 */}
              <div className="flex flex-col md:flex-row md:items-center py-8 gap-6">
                <div className="md:w-1/4 text-white/70 text-base md:text-lg font-semibold mb-2 md:mb-0">2019 - 2021</div>
                <div className="md:w-1/2">
                  <div className="text-xl md:text-2xl font-bold text-white mb-1">Intermediate (MPC)</div>
                  <div className="text-white/60 text-sm mb-2"><span className="font-bold">Sri Chaitanya Junior College</span></div>
                </div>
                <div className="md:w-1/4 text-white/80 text-base md:text-lg">Specialized in Mathematics, Physics, and Chemistry, preparing for engineering entrance exams.</div>
              </div>
              {/* Education Item 3 */}
              <div className="flex flex-col md:flex-row md:items-center py-8 gap-6">
                <div className="md:w-1/4 text-white/70 text-base md:text-lg font-semibold mb-2 md:mb-0">2021 - 2025</div>
                <div className="md:w-1/2">
                  <div className="text-xl md:text-2xl font-bold text-white mb-1">Bachelor of Technology (B.Tech), Computer Science & Engineering (AI&ML)</div>
                  <div className="text-white/60 text-sm mb-2"><span className="font-bold">Malla Reddy University</span></div>
                </div>
                <div className="md:w-1/4 text-white/80 text-base md:text-lg">Pursuing a degree in Computer Science & Engineering with a focus on AI, ML, and software development.</div>
              </div>
            </div>
          </section>
        </ScrollAnimation>
        <ScrollAnimation delay={0.8}>
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-left">Work experience</h2>
            <div className="divide-y divide-white/10">
              {/* Experience Item 1 */}
              <div className="flex flex-col md:flex-row md:items-center py-8 gap-6">
                <div className="md:w-1/4 text-white/70 text-base md:text-lg font-semibold mb-2 md:mb-0">2023 - 2024</div>
                <div className="md:w-1/2">
                  <div className="text-xl md:text-2xl font-bold text-white mb-1">Chegg Expert</div>
                  <div className="text-white/60 text-sm mb-2">at <span className="font-bold underline">Chegg</span></div>
                </div>
                <div className="md:w-1/4 text-white/80 text-base md:text-lg">Solved academic questions and provided detailed solutions for students on the Chegg platform.</div>
              </div>
              {/* Experience Item 2 */}
              <div className="flex flex-col md:flex-row md:items-center py-8 gap-6">
                <div className="md:w-1/4 text-white/70 text-base md:text-lg font-semibold mb-2 md:mb-0">Oct 2024 - Present</div>
                <div className="md:w-1/2">
                  <div className="text-xl md:text-2xl font-bold text-white mb-1">AI Intern</div>
                  <div className="text-white/60 text-sm mb-2">at <span className="font-bold underline">Arthicus Global Private Limited</span></div>
                </div>
                <div className="md:w-1/4 text-white/80 text-base md:text-lg">Working on AI-driven projects, developing intelligent solutions and contributing to research and development.</div>
              </div>
            </div>
          </section>
        </ScrollAnimation>
        <ScrollAnimation delay={0.95}>
          <section className="mb-12 rounded-3xl bg-gradient-to-br from-[#232336]/90 via-[#a18cd1]/40 to-[#fbc2eb]/40 p-8 md:p-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">My Slills </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6">
              {/* Tool Card Example */}
              <div className="flex flex-col items-center bg-black/60 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition">
                <img src="/Images/photoshop.png" alt="Photoshop" className="w-14 h-14 mb-3" />
                <span className="text-white font-semibold text-lg">Photoshop</span>
              </div>
              <div className="flex flex-col items-center bg-black/60 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition">
                <img src="/Images/figma.png" alt="Figma" className="w-14 h-14 mb-3" />
                <span className="text-white font-semibold text-lg">Figma</span>
              </div>
              <div className="flex flex-col items-center bg-black/60 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition">
                <img src="/Images/illustrator.png" alt="Illustrator" className="w-14 h-14 mb-3" />
                <span className="text-white font-semibold text-lg">Illustrator</span>
              </div>
              <div className="flex flex-col items-center bg-black/60 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition">
                <img src="/Images/sketch.png" alt="Sketch" className="w-14 h-14 mb-3" />
                <span className="text-white font-semibold text-lg">Sketch</span>
              </div>
              <div className="flex flex-col items-center bg-black/60 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition">
                <img src="/Images/blender.png" alt="Blender" className="w-14 h-14 mb-3" />
                <span className="text-white font-semibold text-lg">Blender</span>
              </div>
              <div className="flex flex-col items-center bg-black/60 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition">
                <img src="/Images/html5.png" alt="HTML5" className="w-14 h-14 mb-3" />
                <span className="text-white font-semibold text-lg">HTML5</span>
              </div>
              <div className="flex flex-col items-center bg-black/60 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition">
                <img src="/Images/css3.png" alt="CSS3" className="w-14 h-14 mb-3" />
                <span className="text-white font-semibold text-lg">CSS3</span>
              </div>
              <div className="flex flex-col items-center bg-black/60 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition">
                <img src="/Images/notion.png" alt="Notion" className="w-14 h-14 mb-3" />
                <span className="text-white font-semibold text-lg">Notion</span>
              </div>
            </div>
          </section>
        </ScrollAnimation>
        <ScrollAnimation delay={1.0}>
          <section className="mb-22 pb-8 rounded-3xl bg-gradient-to-br from-[#a18cd1]/80 via-[#fbc2eb]/40 to-[#232336]/90 p-10 shadow-2xl border-2 border-[#e6cfff]/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-20 text-[10rem] pointer-events-none select-none">
              🚀
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-left  mb-6 flex items-center gap-4">
              <span className="inline-block bg-black/60 rounded-full px-4 py-2 text-2xl mr-2">Entrepreneurial Journey</span>
            </h2>
            <div className="text-[#e6cfff] text-2xl md:text-3xl font-bold mb-2">
              <a href="https://www.innovimagine.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition">Innovimagine</a>
            </div>
            <div className="text-white/90 text-lg md:text-xl mb-8 font-semibold">
              Co-founder | The ultimate tech solutions
            </div>
            <div className="bg-black/40 rounded-xl p-8 shadow-lg">
              <p className="text-white/90 text-base md:text-lg leading-relaxed">
                In our final year of B.Tech, four friends driven by a shared passion for technology and innovation came together to embark on an entrepreneurial journey. We founded <a href="https://www.innovimagine.com" target="_blank" rel="noopener noreferrer" className="underline text-[#e6cfff]">Innovimagine</a>, aspiring to deliver the ultimate tech solutions. Our adventure began with brainstorming sessions, late-night discussions, and a vision to make a difference. We designed and launched our official website, secured our domain, and established a strong online presence. With the encouragement and support of our college management, we gained momentum, organizing campus campaigns and printing posters to spread the word. Each step, from ideation to execution, was a testament to our teamwork and determination. Today, Innovimagine stands as a symbol of our relentless pursuit of innovation, empowering others and expanding our services to shape a brighter technological future.
              </p>
            </div>
          </section>
        </ScrollAnimation>
      </div>
    </div>
  )
}

export default Resume