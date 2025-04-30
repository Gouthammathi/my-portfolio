import React from 'react'
import { ScrollAnimation } from '../Components/ScrollAnimation'
import Cards from '../Components/Portfolio/Cards';
import Button3 from '../Components/Buttons/Button3';

const projects = [
  {
    id: 1,
    title: "Nike 3D Web-app",
    image: "/Images/nike.png",
    description: "A fully responsive and visually striking web application showcasing Nike products with interactive 3D models. Built using Three.js, the app offers an immersive user experience with a sleek and modern design. Optimized for all devices, it blends performance with aesthetics to engage users effectively.",
    types: [
      { label: "• React" },
      { label: "• Three.js" }
    ]
  },
  {
    id: 2,
    title: "Emotion Detection",
    image: "/Images/emotion.png",
    description: "This project uses machine learning to detect human emotions by analyzing facial expressions. It can recognize feelings like happy, sad, angry, or surprised from images or live video. Built with tools like OpenCV and trained on emotion datasets, it shows the detected emotion with a simple and clear visual output.",
    types: [
      { label: "• Machine Learning " },
      { label: "• Open CV" }
    ]
  },
  {
    id: 3,
    title: "Pedestrain Detection",
    image: "/Images/pede.png",
    description: "A computer vision project that detects pedestrians in images or video using machine learning. It highlights people with bounding boxes to make them easy to spot. Built with OpenCV and trained models, it can be used in real-time for applications like smart surveillance or driver assistance systems.",
    types: [
      { label: "• NLP" },
      { label: "• API Integration" }
    ]
  },
  {
    id: 4,
    title: "Credit Card Fraud",
    image: "/Images/credit.png",
    description: "A machine learning project that identifies fraudulent credit card transactions by analyzing patterns in transaction data. It uses classification algorithms to detect suspicious activity with high accuracy, helping prevent financial fraud. The model was trained on real-world datasets and tested for performance using metrics like precision and recall.",
    types: [
      { label: "• React" },
      { label: "• Responsive Design" }
    ]
  }
];

const Portfolio = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-start gap-3 px-4 pt-4">
        <Button3 text="Portfolio" className="px-6 py-2 text-base rounded-full font-semibold shadow-none border border-white/20 bg-black/40 text-white" />
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-left text-[#e6cfff]" style={{lineHeight:'1.1'}}>
          Check out my featured projects
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-y-12 justify-items-center pb-32">
        {projects.map((project, idx) => (
          <Cards key={project.id} project={project} align={idx % 2 === 0 ? 'left' : 'right'} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;