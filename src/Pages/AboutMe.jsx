import React from 'react'
import { ScrollAnimation } from '../Components/ScrollAnimation'

const AboutMe = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl px-6">
        <ScrollAnimation>
          <h1 className="text-4xl font-bold text-white mb-8">About Me</h1>
        </ScrollAnimation>
        
        <ScrollAnimation delay={0.2}>
          <p className="text-gray-300 mb-6">
            I am a passionate UI/UX designer and frontend developer with a love for creating beautiful and functional user experiences.
          </p>
        </ScrollAnimation>

        <ScrollAnimation delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <p className="text-gray-300 text-lg mb-8">
              Based in Odesa, Ukraine, I specialize in designing intuitive interfaces and developing responsive web applications.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}

export default AboutMe