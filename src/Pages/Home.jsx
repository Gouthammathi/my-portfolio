import React from 'react'
import { ScrollAnimation } from '../Components/ScrollAnimation'
import { FaCode, FaFileDownload } from 'react-icons/fa'
import Button from '../Components/Buttons/Button' // <-- Import the Button
import Button2 from '../Components/Buttons/Button2'
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
      <div className="flex flex-col items-start justify-center w-full max-w-3xl mx-auto min-h-[calc(100vh-5.5rem)] space-y-6">
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
            <button className="group relative h-12 rounded-full border-2 dark:border-[#e2a1f8] border-[#e2a1f8] bg-[#e2a1f8] px-8 text-white hover:bg-opacity-90 transition-all flex items-center justify-center gap-3 w-full sm:w-auto">
              <FaCode className="text-lg" />
              <span className="text-base font-medium">My Works</span>
            </button>
            <Button2 />
          </div>
        </ScrollAnimation>
      </div>
    </SectionWrapper>
  )
}

export default Home