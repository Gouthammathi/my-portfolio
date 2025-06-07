import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Cards from '../Components/Portfolio/Cards';
import FigmaShowcase from '../Components/FigmaShowcase';
import { FaChevronLeft, FaChevronRight, FaTimes, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: "Nike 3D Web-app",
    category: "Web Applications",
    image: "/Images/nike.png",
    video: "/Images/videos/nike.mp4",
    link: "https://gouthamnike.vercel.app/",
    description: "A fully responsive and visually striking web application showcasing Nike products with interactive 3D models. Built using Three.js, the app offers an immersive user experience with a sleek and modern design. Optimized for all devices, it blends performance with aesthetics to engage users effectively.",
    overview: "This project demonstrates advanced 3D rendering techniques using Three.js integrated with React. I implemented custom shaders for realistic material rendering and optimized the 3D models for web performance. The application features smooth animations, dynamic lighting effects, and intuitive camera controls that allow users to examine products from any angle. Key technical achievements include efficient texture mapping, responsive design that adapts the 3D experience across devices, and implementation of a custom color picker that updates the 3D model in real-time.",
    challenges: "Optimizing 3D model loading times and maintaining smooth performance across different devices presented significant challenges. I implemented progressive loading techniques and level-of-detail adjustments to ensure a consistent experience regardless of hardware capabilities.",
    technologies: "React.js, Three.js, WebGL, Tailwind CSS, Framer Motion, Vite",
    types: [
      { label: "React Js" },
      { label: "Three.js" },
      { label: "Tailwind CSS" }
    ]
  },
  {
    id: 2,
    title: "Emotion Detection",
    category: "AI & Machine Learning",
    image: "/Images/emotion.png",
    video: "/Images/videos/emotion.mp4",
    link: "https://github.com/Gouthammathi/EmotionDetection",
    description: "This project uses machine learning to detect human emotions by analyzing facial expressions. It can recognize feelings like happy, sad, angry, or surprised from images or live video. Built with tools like OpenCV and trained on emotion datasets, it shows the detected emotion with a simple and clear visual output.",
    overview: "This emotion detection system leverages computer vision and deep learning to analyze facial expressions in real-time. I implemented a convolutional neural network (CNN) architecture trained on the FER-2013 dataset containing over 35,000 facial expression images. The system first detects faces using Haar cascades, extracts facial landmarks with dlib, and then classifies the emotion into seven categories: angry, disgust, fear, happy, sad, surprise, and neutral. The model achieves 68% accuracy on validation data, which is competitive with state-of-the-art approaches given the subjective nature of emotion interpretation.",
    challenges: "Handling varying lighting conditions and partial face occlusions required implementing robust preprocessing techniques. I also addressed class imbalance in the training data by using data augmentation and weighted loss functions to improve detection accuracy for underrepresented emotions.",
    technologies: "Python, TensorFlow, Keras, OpenCV, dlib, NumPy, Matplotlib",
    types: [
      { label: "Machine Learning" },
      { label: "OpenCV" },
      { label: "Python" }
    ]
  },
  {
    id: 3,
    title: "Pedestrian Detection",
    category: "AI & Machine Learning",
    image: "/Images/pede.png",
    video: "/Images/videos/Pedestrian.mp4",
    link: "https://github.com/Gouthammathi/PedestrianDetection",
    description: "A computer vision project that detects pedestrians in images or video using machine learning. It highlights people with bounding boxes to make them easy to spot. Built with OpenCV and trained models, it can be used in real-time for applications like smart surveillance or driver assistance systems.",
    overview: "This pedestrian detection system implements the Histogram of Oriented Gradients (HOG) algorithm combined with a Support Vector Machine (SVM) classifier for robust human detection in various environments. I enhanced the standard implementation with multi-scale detection to identify pedestrians at different distances from the camera. The system processes video at 15-20 frames per second on standard hardware, making it suitable for real-time applications. I also implemented a tracking algorithm that maintains consistent IDs for detected pedestrians across frames, enabling path analysis and reducing computational load.",
    challenges: "Balancing detection accuracy with processing speed was a major challenge. I optimized the algorithm by implementing region proposal techniques that focus computational resources on areas likely to contain pedestrians. Additionally, I developed custom post-processing filters to reduce false positives in complex urban environments with many vertical structures.",
    technologies: "Python, OpenCV, NumPy, SciPy, scikit-learn, CUDA acceleration",
    types: [
      { label: "Python" },
      { label: "OpenCV" }
    ]
  },
  {
    id: 4,
    title: "Credit Card Fraud Detection",
    category: "AI & Machine Learning",
    image: "/Images/credit.png",
    video: "/Images/videos/credit.mp4",
    link: "https://applicationdevelopment.streamlit.app/",
    description: "A machine learning project that identifies fraudulent credit card transactions by analyzing patterns in transaction data. It uses classification algorithms to detect suspicious activity with high accuracy, helping prevent financial fraud. The model was trained on real-world datasets and tested for performance using metrics like precision and recall.",
    overview: "This fraud detection system employs an ensemble of machine learning algorithms including Random Forest, XGBoost, and Isolation Forest to identify anomalous transaction patterns. I implemented a feature engineering pipeline that extracts temporal patterns and transaction characteristics, significantly improving detection accuracy. The system handles highly imbalanced data (less than 0.2% fraud cases) through SMOTE oversampling and cost-sensitive learning approaches. The deployed model achieves 99.3% accuracy with a precision of 0.92 and recall of 0.87 for fraudulent transactions, outperforming single-algorithm approaches by 7-12%.",
    challenges: "The extreme class imbalance in credit card fraud data presented a significant challenge. I developed a custom evaluation framework that prioritizes recall for fraudulent transactions while maintaining acceptable precision. Additionally, I implemented a feature importance analysis that provides explainable results, helping financial analysts understand why specific transactions were flagged as potentially fraudulent.",
    technologies: "Python, scikit-learn, XGBoost, Pandas, Streamlit, Plotly, AWS deployment",
    types: [
      { label: "Machine Learning" },
      { label: "Python" },
      { label: "Streamlit" }
    ]
  },
  {
    id: 5,
    title: "Time Stamp Creator",
    category: "Web Applications",
    image: "/Images/timestamp.png",
    video: "/Images/videos/timestamps.mp4",
    link: "https://yttimestamp.vercel.app/",
    description: "A web-based utility that simplifies the process of generating timestamp links for YouTube videos. It allows users to paste a YouTube video link and easily create clickable timestamps with corresponding titles for different sections of the video.",
    overview: "The tool enhances user engagement and accessibility by enabling quick navigation to specific video segments. Built with React and deployed on Vercel, the app parses video duration and user-defined labels to produce formatted timestamp links. This is especially useful for content creators, educators, or anyone who needs to share precise video references. The UI is minimal, fast, and optimized for usability across devices.",
    challenges: "Ensuring accurate parsing of varied YouTube URL formats and handling edge cases like invalid timestamps or missing video metadata were key technical challenges. The app was also designed to support a seamless user experience with minimal delay and smooth copy-to-clipboard functionality.",
    technologies: "React, JavaScript, Vercel, HTML5, CSS3",
    types: [
      { label: "Web Application" },
      { label: "YouTube Utility" },
      { label: "React" }
    ]
  },
  {
    id: 6,
    title: "Ransome Font Generator",
    category: "Web Applications",
    image: "/Images/ransome.png",
    video: "/Images/ransome.mp4",
    link: "https://ransome-font-generator.vercel.app",
    description: "A modern web application that generates stylish ransom note-style text with customizable fonts and effects. Built with React and Vite, it features Supabase backend integration for data persistence and API endpoints for dynamic image fetching. The app offers an intuitive interface for creating eye-catching text designs perfect for creative projects and social media content.",
    overview: "This project implements a sophisticated text manipulation system that allows users to create ransom note-style text with various font combinations and effects. I developed a custom font rendering engine that handles multiple font families simultaneously, with real-time preview and instant copy functionality. The application integrates with Supabase for backend services, implementing secure authentication and real-time data synchronization. I also implemented RESTful APIs for fetching and managing images, ensuring efficient content delivery and caching strategies. The application features a responsive design that works seamlessly across all devices, with a focus on user experience and performance optimization.",
    challenges: "Implementing smooth font switching and maintaining consistent text alignment across different font families required careful handling of font metrics and kerning. Integrating Supabase backend services while maintaining optimal performance presented unique challenges, which I solved by implementing efficient data fetching patterns and caching strategies. I also optimized the application's performance by implementing efficient font loading strategies and minimizing re-renders during text manipulation.",
    technologies: "React.js, Vite, Tailwind CSS, Framer Motion, Custom Font Engine, Supabase,API",
    types: [
      { label: "React Js" },
      { label: "Web App" },
      { label: "Supabase" }
    ]
  },
];

const Portfolio = () => {
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [carouselIdx, setCarouselIdx] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Group projects by category
  const groupedProjects = projects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {});

  // Define category order with AI/ML first
  const categoryOrder = ['AI & Machine Learning', 'Web Applications'];

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const gridVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  // Modal content
  const modalContent = selectedIdx !== null && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={() => setSelectedIdx(null)}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-4xl bg-dark-gray rounded-xl overflow-hidden shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={() => setSelectedIdx(null)}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-dark-gray/80 text-off-white hover:bg-accent-blue transition-colors"
        >
          <FaTimes size={20} />
        </button>

        {/* Carousel Section */}
        <div className="relative w-full bg-dark-gray flex items-center justify-center overflow-hidden flex-shrink-0 max-h-[40vh] md:max-h-[45vh]">
          {/* Carousel Navigation (Left) */}
          <button
            onClick={(e) => { e.stopPropagation(); setCarouselIdx(0); }}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 rounded-full p-2.5 text-off-white hover:bg-accent-blue/80 transition-colors z-10"
            aria-label="Previous media"
          >
            <FaChevronLeft size={18} />
          </button>

          {/* Media Display */}
          {projects[selectedIdx].video ? (
            <video 
              src={projects[selectedIdx].video} 
              controls 
              autoPlay 
              loop 
              muted 
              className="w-full h-full object-contain"
            />
          ) : (
            <img 
              src={projects[selectedIdx].image} 
              alt={projects[selectedIdx].title} 
              className="w-full h-full object-contain"
            />
          )}

          {/* Carousel Navigation (Right) */}
          <button
            onClick={(e) => { e.stopPropagation(); setCarouselIdx(1); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 rounded-full p-2.5 text-off-white hover:bg-accent-blue/80 transition-colors z-10"
            aria-label="Next media"
          >
            <FaChevronRight size={18} />
          </button>
        </div>

        {/* Project Details Section */}
        <div className="p-6 md:p-8 lg:p-10 flex flex-col gap-4 md:gap-5 overflow-y-auto max-h-[50vh]">
          {/* Title as Link */}
          <a 
            href={projects[selectedIdx].link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xl md:text-2xl lg:text-3xl font-bold text-off-white hover:text-accent-blue transition-colors inline-flex items-center gap-2 group"
          >
            {projects[selectedIdx].title}
            <FaExternalLinkAlt size={14} className="opacity-70 group-hover:opacity-100 transition-opacity" />
          </a>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2"> 
            {projects[selectedIdx].types.map((type, i) => (
              <span 
                key={i} 
                className="inline-block px-3 py-1 rounded-full bg-dark-gray/70 border border-steel-blue/40 text-accent-blue text-xs font-medium shadow-sm"
              >
                {type.label}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-light-gray text-sm md:text-base leading-relaxed md:leading-loose pt-2">
            {projects[selectedIdx].description}
          </p>
          
          {/* Project Overview Section */}
          <div className="mt-2">
            <h3 className="text-lg font-semibold text-accent-blue mb-2">Project Overview</h3>
            <p className="text-light-gray text-sm md:text-base leading-relaxed">
              {projects[selectedIdx].overview}
            </p>
          </div>
          
          {/* Challenges Section */}
          <div className="mt-2">
            <h3 className="text-lg font-semibold text-accent-blue mb-2">Challenges & Solutions</h3>
            <p className="text-light-gray text-sm md:text-base leading-relaxed">
              {projects[selectedIdx].challenges}
            </p>
          </div>
          
          {/* Technologies Section */}
          <div className="mt-2">
            <h3 className="text-lg font-semibold text-accent-blue mb-2">Technologies Used</h3>
            <p className="text-light-gray text-sm md:text-base leading-relaxed">
              {projects[selectedIdx].technologies}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
      className="w-full max-w-5xl mx-auto px-4 lg:px-0"
    >
      <div className="flex flex-col items-start gap-4 mb-10">
        <span className="inline-block px-5 py-1.5 rounded-full bg-dark-gray/50 border border-steel-blue/30 text-sm font-semibold text-accent-blue shadow-md">
          Projects
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-left text-off-white leading-tight">
          Check out my featured projects
        </h2>
      </div>
      
      {categoryOrder.map(category => (
        groupedProjects[category] && (
          <motion.div
            key={category}
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-accent-blue mb-8">{category}</h3>
            <motion.div
              variants={gridVariants}
              className="grid grid-cols-1 gap-y-16 justify-items-center"
            >
              {groupedProjects[category].map((project, idx) => (
                <motion.div
                  key={project.id}
                  variants={gridVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Cards
                    project={project}
                    align={idx % 2 === 0 ? 'left' : 'right'}
                    onClick={isDesktop ? () => { setSelectedIdx(projects.indexOf(project)); setCarouselIdx(0); } : undefined}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )
      ))}

      {/* Figma Showcase Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="mt-24"
      >
        <FigmaShowcase />
      </motion.div>

      {/* Render the modal content */}
      {modalContent}
    </motion.div>
  );
};

export default Portfolio;