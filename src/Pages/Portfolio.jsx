import React from 'react';
import { ScrollAnimation } from '../Components/ScrollAnimation';
import Cards from '../Components/Portfolio/Cards';
// Removed Button3 import

const projects = [
  {
    id: 1,
    title: "Nike 3D Web-app",
    image: "/Images/nike.png",
    video: "/Images/nike.mp4", // Added video path
    link: "https://gouthamnike.vercel.app/", // Added direct link
    description: "A fully responsive and visually striking web application showcasing Nike products with interactive 3D models. Built using Three.js, the app offers an immersive user experience with a sleek and modern design. Optimized for all devices, it blends performance with aesthetics to engage users effectively.",
    types: [
      { label: "React Js" },
      { label: "Three.js" },
      { label: "Tailwind CSS" } // Added relevant tech
    ]
  },
  {
    id: 2,
    title: "Emotion Detection",
    image: "/Images/emotion.png",
    video: "/Images/emotion.mp4", // Added video path
    link: "https://github.com/Gouthammathi/EmotionDetection", // Added direct link
    description: "This project uses machine learning to detect human emotions by analyzing facial expressions. It can recognize feelings like happy, sad, angry, or surprised from images or live video. Built with tools like OpenCV and trained on emotion datasets, it shows the detected emotion with a simple and clear visual output.",
    types: [
      { label: "Machine Learning" },
      { label: "OpenCV" },
      { label: "Python" } // Added relevant tech
    ]
  },
  {
    id: 3,
    title: "Pedestrian Detection",
    image: "/Images/pede.png",
    video: "/Images/Pedestrian.mp4", // Added video path
    link: "https://github.com/Gouthammathi/PedestrianDetection", // Added direct link
    description: "A computer vision project that detects pedestrians in images or video using machine learning. It highlights people with bounding boxes to make them easy to spot. Built with OpenCV and trained models, it can be used in real-time for applications like smart surveillance or driver assistance systems.",
    types: [
      { label: "Computer Vision" }, // More specific term
      { label: "Python" },
      { label: "OpenCV" }
    ]
  },
  {
    id: 4,
    title: "Credit Card Fraud Detection", // Slightly more descriptive title
    image: "/Images/credit.png",
    video: "/Images/credit.mp4", // Added video path
    link: "https://applicationdevelopment.streamlit.app/", // Added direct link
    description: "A machine learning project that identifies fraudulent credit card transactions by analyzing patterns in transaction data. It uses classification algorithms to detect suspicious activity with high accuracy, helping prevent financial fraud. The model was trained on real-world datasets and tested for performance using metrics like precision and recall.",
    types: [
      { label: "Machine Learning" },
      { label: "Python" },
      { label: "Streamlit" }
    ]
  }
];

const Portfolio = () => {
  return (
    // Added max-width and centering
    <div className="w-full max-w-5xl mx-auto px-4 lg:px-0">
      <ScrollAnimation delay={0.1}>
        <div className="flex flex-col items-start gap-4 mb-10"> {/* Adjusted gap and margin */}
          {/* Replaced Button3 with a simple tag */}
          <span className="inline-block px-5 py-1.5 rounded-full bg-gradient-to-r from-[#e2a1f8]/20 to-[#a18cd1]/20 border border-white/20 text-sm font-semibold text-white shadow-md">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-left text-white leading-tight"> {/* Changed color, adjusted leading */}
            Check out my featured projects
          </h2>
        </div>
      </ScrollAnimation>
      {/* Added ScrollAnimation to the grid */}
      <ScrollAnimation delay={0.3}>
        <div className="grid grid-cols-1 gap-y-16 justify-items-center pb-16"> {/* Adjusted gap and padding */}
          {projects.map((project, idx) => (
            <Cards key={project.id} project={project} align={idx % 2 === 0 ? 'left' : 'right'} />
          ))}
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Portfolio;