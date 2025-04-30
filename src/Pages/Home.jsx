import React from 'react'
import { ScrollAnimation } from '../Components/ScrollAnimation'
import { FaCode, FaFileDownload } from 'react-icons/fa'
import Button from '../Components/Buttons/Button' // <-- Import the Button
// Layout utility: ensures all top-level sections start directly below the sticky header
// Do not add top padding here — it breaks visual alignment with sticky header.
const SectionWrapper = ({ children }) => (
  <section id="home" className="w-full scroll-mt-[88px]">
    {children}
  </section>
)

const Home = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col items-start justify-center w-full max-w-2.8xl mx-auto min-h-[calc(100vh-5.5rem)] space-y-6">
        <ScrollAnimation delay={0.2}>
          <Button>let&apos;s meet!</Button>
        </ScrollAnimation>
        <ScrollAnimation delay={0.4}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extralight text-white">
            I'm <span className="text-white font-normal">Goutham</span>
          </h1>
        </ScrollAnimation>
        <ScrollAnimation delay={0.6}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-white leading-tight max-w-2xl">
            AI Tool Engineer & Software Developer
          </h2>
        </ScrollAnimation>
        <ScrollAnimation delay={0.8}>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              className="group relative h-12 rounded-full border-2 dark:border-[#e2a1f8] border-[#e2a1f8] bg-gradient-to-r from-[#e2a1f8] to-[#a18cd1] px-8 text-white hover:from-[#c084fc] hover:to-[#e2a1f8] transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto shadow-md hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#e2a1f8]"
              onClick={() => {
                const section = document.getElementById('portfolio');
                if (section) section.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <FaCode className="text-lg" />
              <span className="text-base font-medium">My Works</span>
            </button>
            <a
              href="/Images/AI_Intern-Goutham%20mathi%20Resume.pdf"
              download
              className="group flex items-center gap-2 h-12 rounded-full border-2 border-white bg-white text-[#a18cd1] px-8 font-semibold shadow-md transition-all duration-300 hover:bg-[#e2a1f8] hover:text-white hover:border-[#e2a1f8] focus:outline-none focus:ring-2 focus:ring-[#e2a1f8] contrast-125 w-full sm:w-auto"
              style={{textDecoration: 'none'}}
            >
              <FaFileDownload className="text-lg transition-transform duration-300 group-hover:scale-110" />
              <span className="text-base font-medium">Download CV</span>
            </a>
          </div>
        </ScrollAnimation>
        
      </div>
    </SectionWrapper>
  )
}

export default Home