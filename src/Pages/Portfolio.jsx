import React from 'react'
import { ScrollAnimation } from '../Components/ScrollAnimation'

const projects = [
  {
    id: 1,
    title: "AI Chat Assistant",
    description: "A sophisticated AI-powered chat interface built with React and OpenAI's GPT",
    image: "/project1.jpg"
  },
  {
    id: 2,
    title: "Machine Learning Dashboard",
    description: "Real-time analytics dashboard for ML model performance monitoring",
    image: "/project2.jpg"
  },
  {
    id: 3,
    title: "Neural Network Visualizer",
    description: "Interactive tool for visualizing neural network architectures",
    image: "/project3.jpg"
  }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center justify-center text-center h-full p-6">
        <ScrollAnimation>
          <h1 className="text-white text-4xl font-bold mb-6">Check out my featured projects</h1>
        </ScrollAnimation>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ScrollAnimation key={project.id} delay={index * 0.2}>
              <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-white">{project.title}</h2>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio