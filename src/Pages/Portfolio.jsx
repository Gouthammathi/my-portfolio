import React from 'react'
import { ScrollAnimation } from '../Components/ScrollAnimation'
import Cards from '../Components/Portfolio/Cards';

const projects = [
  {
    id: 1,
    title: "Nike 3D Web-app",
    image: "/src/Images/nike.png",
    description: "A fully responsive and visually striking web application showcasing Nike products with interactive 3D models. Built using Three.js, the app offers an immersive user experience with a sleek and modern design. Optimized for all devices, it blends performance with aesthetics to engage users effectively.",
    types: [
      { label: "• React" },
      { label: "• Three.js" }
    ]
  },
  {
    id: 2,
    title: "Emotion Detection",
    image: "/src/Images/emotion.png",
    description: "This project uses machine learning to detect human emotions by analyzing facial expressions. It can recognize feelings like happy, sad, angry, or surprised from images or live video. Built with tools like OpenCV and trained on emotion datasets, it shows the detected emotion with a simple and clear visual output.",
    types: [
      { label: "• Machine Learning " },
      { label: "• Open CV" }
    ]
  },
  {
    id: 3,
    title: "Pedestrain Detection",
    image: "/src/Images/pede.png",
    description: "A computer vision project that detects pedestrians in images or video using machine learning. It highlights people with bounding boxes to make them easy to spot. Built with OpenCV and trained models, it can be used in real-time for applications like smart surveillance or driver assistance systems.",
    types: [
      { label: "• NLP" },
      { label: "• API Integration" }
    ]
  },
  {
    id: 4,
    title: "Credit Card Fraud",
    image: "/src/Images/credit.png",
    description: "A machine learning project that identifies fraudulent credit card transactions by analyzing patterns in transaction data. It uses classification algorithms to detect suspicious activity with high accuracy, helping prevent financial fraud. The model was trained on real-world datasets and tested for performance using metrics like precision and recall.",
    types: [
      { label: "• React" },
      { label: "• Responsive Design" }
    ]
  }
];

function Portfolio() {
  return (
    <div className="grid grid-cols-1 gap-y-16 justify-items-center pb-24">
      {projects.map((project, idx) => (
        <Cards key={project.id} project={project} index={idx} />
      ))}
    </div>
  );
}

export default Portfolio;