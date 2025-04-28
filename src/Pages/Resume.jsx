import React from 'react'
import { ScrollAnimation } from '../Components/ScrollAnimation'

const Resume = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollAnimation>
          <h1 className="text-4xl font-bold text-white mb-8">Resume</h1>
        </ScrollAnimation>
        
        <ScrollAnimation delay={0.2}>
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6">Experience</h2>
            <div className="flex flex-col items-center justify-center text-center h-full p-6">
              <h1 className="text-white text-4xl font-bold mb-4">My Resume</h1>
              <p className="text-gray-300 text-lg mb-8">
                Here you can find my professional experience, skills, and education.
              </p>
              <button className="bg-gradient-to-r from-pink-400 to-purple-400 text-white py-2 px-4 rounded-lg hover:opacity-90 transition-all">
                Download CV
              </button>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.4}>
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6">Education</h2>
            <div className="flex flex-col items-center justify-center text-center h-full p-6">
              <h1 className="text-white text-4xl font-bold mb-4">My Resume</h1>
              <p className="text-gray-300 text-lg mb-8">
                Here you can find my professional experience, skills, and education.
              </p>
              <button className="bg-gradient-to-r from-pink-400 to-purple-400 text-white py-2 px-4 rounded-lg hover:opacity-90 transition-all">
                Download CV
              </button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}

export default Resume