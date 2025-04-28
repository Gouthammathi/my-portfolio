import React from 'react'
import { ScrollAnimation } from '../Components/ScrollAnimation'
import { FaCode, FaFileDownload } from 'react-icons/fa'

const Home = () => {
  return (
    <div className="flex flex-col items-start justify-center h-full pl-8">
      <div className="space-y-6 max-w-2xl">
        <ScrollAnimation delay={0.2}>
          <div className="inline-block bg-[#e2a1f8] bg-opacity-20 text-white px-4 py-2 rounded-full">
            Let's meet!
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation delay={0.4}>
          <h1 className="text-7xl font-light text-white">
            I'm <span className="text-white font-normal">Goutham</span>
          </h1>
        </ScrollAnimation>
        
        <ScrollAnimation delay={0.6}>
          <h2 className="text-7xl font-light text-white">
            AI Tool Engineer & Software Developer
          </h2>
        </ScrollAnimation>
        
        <ScrollAnimation delay={0.10}>
          <div className="flex gap-6 mt-12">
            <button className="group relative h-12 rounded-full border-2 dark:border-[#e2a1f8] border-[#e2a1f8] bg-[#e2a1f8] px-8 text-white hover:bg-opacity-90 transition-all flex items-center gap-2">
              <FaCode className="text-lg" />
              <span className="relative inline-flex overflow-hidden">
                <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
                  My Works
                </div>
                <div className="absolute translate-y-[114%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                  My Works
                </div>
              </span>
            </button>
            <button className="group relative h-12 rounded-full border-2 border-[#e2a1f8] px-8 text-white hover:bg-[#e2a1f8] hover:bg-opacity-10 transition-all flex items-center gap-2">
              <FaFileDownload className="text-lg" />
              <span className="relative inline-flex overflow-hidden">
                <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
                  Download CV
                </div>
                <div className="absolute translate-y-[114%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                  Download CV
                </div>
              </span>
            </button>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}

export default Home