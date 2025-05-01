import React from 'react';
// Removed ScrollAnimation import
import { motion } from 'framer-motion'; // Import motion
import Cards from '../Components/Portfolio/Cards';

const projects = [
  {
    id: 1,
    title: "Nike 3D Web-app",
    image: "/Images/nike.png",
    video: "/Images/nike.mp4",
    link: "https://gouthamnike.vercel.app/",
    description: "A fully responsive and visually striking web application showcasing Nike products with interactive 3D models. Built using Three.js, the app offers an immersive user experience with a sleek and modern design. Optimized for all devices, it blends performance with aesthetics to engage users effectively.",
    types: [
      { label: "React Js" },
      { label: "Three.js" },
      { label: "Tailwind CSS" }
    ]
  },
  {
    id: 2,
    title: "Emotion Detection",
    image: "/Images/emotion.png",
    video: "/Images/emotion.mp4",
    link: "https://github.com/Gouthammathi/EmotionDetection",
    description: "This project uses machine learning to detect human emotions by analyzing facial expressions. It can recognize feelings like happy, sad, angry, or surprised from images or live video. Built with tools like OpenCV and trained on emotion datasets, it shows the detected emotion with a simple and clear visual output.",
    types: [
      { label: "Machine Learning" },
      { label: "OpenCV" },
      { label: "Python" }
    ]
  },
  {
    id: 3,
    title: "Pedestrian Detection",
    image: "/Images/pede.png",
    video: "/Images/Pedestrian.mp4",
    link: "https://github.com/Gouthammathi/PedestrianDetection",
    description: "A computer vision project that detects pedestrians in images or video using machine learning. It highlights people with bounding boxes to make them easy to spot. Built with OpenCV and trained models, it can be used in real-time for applications like smart surveillance or driver assistance systems.",
    types: [
      { label: "Computer Vision" },
      { label: "Python" },
      { label: "OpenCV" }
    ]
  },
  {
    id: 4,
    title: "Credit Card Fraud Detection",
    image: "/Images/credit.png",
    video: "/Images/credit.mp4",
    link: "https://applicationdevelopment.streamlit.app/",
    description: "A machine learning project that identifies fraudulent credit card transactions by analyzing patterns in transaction data. It uses classification algorithms to detect suspicious activity with high accuracy, helping prevent financial fraud. The model was trained on real-world datasets and tested for performance using metrics like precision and recall.",
    types: [
      { label: "Machine Learning" },
      { label: "Python" },
      { label: "Streamlit" }
    ]
  }
];

const Portfolio = () => {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2, // Delay grid appearance slightly
        staggerChildren: 0.3, // Stagger project cards
      },
    },
  };

  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full max-w-5xl mx-auto px-4 lg:px-0"
    >
      <div className="flex flex-col items-start gap-4 mb-10">
        {/* Updated tag background, border, text colors */}
        <span className="inline-block px-5 py-1.5 rounded-full bg-dark-gray/50 border border-steel-blue/30 text-sm font-semibold text-accent-blue shadow-md">
          Portfolio
        </span>
        {/* Updated heading text color */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-left text-off-white leading-tight">
          Check out my featured projects
        </h2>
      </div>

      <motion.div
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }} // Trigger when grid starts entering view
        className="grid grid-cols-1 gap-y-16 justify-items-center pb-16"
      >
        {projects.map((project, idx) => (
          // Cards component will need motion integration internally
          <Cards key={project.id} project={project} align={idx % 2 === 0 ? 'left' : 'right'} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;