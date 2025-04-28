import React from 'react'
import { ScrollAnimation } from '../Components/ScrollAnimation'

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl w-full px-6">
        <ScrollAnimation>
          <h1 className="text-4xl font-bold text-white mb-8">Get in Touch</h1>
        </ScrollAnimation>
        
        <ScrollAnimation delay={0.2}>
          <form className="space-y-6">
            <input type="text" placeholder="Your Name" className="mb-4 p-2 rounded" />
            <input type="email" placeholder="Your Email" className="mb-4 p-2 rounded" />
            <textarea placeholder="Your Message" className="mb-4 p-2 rounded" rows="4"></textarea>
            <button className="bg-gradient-to-r from-pink-400 to-purple-400 text-white py-2 px-4 rounded-lg hover:opacity-90 transition-all">
              Send Message
            </button>
          </form>
        </ScrollAnimation>
      </div>
    </div>
  )
}

export default Contact