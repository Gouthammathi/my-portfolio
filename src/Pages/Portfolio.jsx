import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Cards from '../Components/Portfolio/Cards';
import { FaChevronLeft, FaChevronRight, FaTimes, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: "Nike 3D Web-app",
    image: "/Images/nike.png",
    video: "/Images/nike.mp4",
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
    image: "/Images/emotion.png",
    video: "/Images/emotion.mp4",
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
    image: "/Images/pede.png",
    video: "/Images/Pedestrian.mp4",
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
    image: "/Images/credit.png",
    video: "/Images/credit.mp4",
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
    image: "/Images/timestamp.png",
    video: "public/Images/timestamps.mp4",
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

  const [selectedIdx, setSelectedIdx] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false); // Define isDesktop state here

  // Check screen size on mount and resize
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)'); // Tailwind's 'md' breakpoint
    const handleResize = () => setIsDesktop(mediaQuery.matches);
    handleResize(); // Initial check
    mediaQuery.addEventListener('change', handleResize);
    return () => mediaQuery.removeEventListener('change', handleResize); // Cleanup listener
  }, []); // Empty dependency array ensures this runs only once on mount and cleans up on unmount

  const closeModal = () => setSelectedIdx(null);
  const showPrev = () => setSelectedIdx((idx) => (idx === 0 ? projects.length - 1 : idx - 1));
  const showNext = () => setSelectedIdx((idx) => (idx === projects.length - 1 ? 0 : idx + 1));
  const selectedProject = selectedIdx !== null ? projects[selectedIdx] : null;

  // Carousel state
  const [carouselIdx, setCarouselIdx] = useState(0);
  const carouselMedia = selectedProject ? [selectedProject.video || selectedProject.image] : [];
  const carouselNext = () => setCarouselIdx((i) => (i + 1) % carouselMedia.length);
  const carouselPrev = () => setCarouselIdx((i) => (i - 1 + carouselMedia.length) % carouselMedia.length);

  // --- New: Define modal content variable --- 
  let modalContent = null;

  // --- New: Assign modal JSX conditionally --- 
  if (selectedProject && isDesktop) {
    modalContent = (
      <motion.div // <<<--- Modal Overlay Container
        key="modal" // Add a key for Framer Motion AnimatePresence (good practice)
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-6 lg:p-8"
        onClick={closeModal}
      >
        {/* Prev Project Button (Side) */}
        <button
          onClick={(e) => { e.stopPropagation(); showPrev(); setCarouselIdx(0); }}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-dark-gray/60 text-off-white hover:bg-accent-blue transition-colors text-xl md:text-2xl"
          aria-label="Previous project"
        >
          <FaChevronLeft />
        </button>

        {/* Inner Modal Container */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="relative bg-charcoal rounded-2xl shadow-2xl max-w-3xl lg:max-w-4xl w-full h-[90vh] md:h-[85vh] flex flex-col mx-auto overflow-hidden border border-steel-blue/30"
          onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-3 right-3 text-light-gray/70 hover:text-accent-orange text-2xl z-20 p-2 rounded-full bg-dark-gray/50 hover:bg-dark-gray transition-colors"
            aria-label="Close project details"
          >
            <FaTimes />
          </button>

          {/* Carousel Section */}
          <div className="relative w-full bg-dark-gray flex items-center justify-center overflow-hidden flex-shrink-0 max-h-[40vh] md:max-h-[45vh]">
            {/* ... Carousel content (nav buttons, media display) ... */}
             {/* Carousel Navigation (Left) */} 
             {carouselMedia.length > 1 && (
                <button
                  onClick={(e) => { e.stopPropagation(); carouselPrev(); }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 rounded-full p-2.5 text-off-white hover:bg-accent-blue/80 transition-colors z-10"
                  aria-label="Previous media"
                >
                  <FaChevronLeft size={18} />
                </button>
              )}

              {/* Media Display */} 
              {carouselMedia[carouselIdx].endsWith('.mp4') ? (
                <video src={carouselMedia[carouselIdx]} controls autoPlay loop muted className="w-full h-full object-contain" />
              ) : (
                <img src={carouselMedia[carouselIdx]} alt={selectedProject.title} className="w-full h-full object-contain" />
              )}

              {/* Carousel Navigation (Right) */} 
              {carouselMedia.length > 1 && (
                <button
                  onClick={(e) => { e.stopPropagation(); carouselNext(); }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 rounded-full p-2.5 text-off-white hover:bg-accent-blue/80 transition-colors z-10"
                  aria-label="Next media"
                >
                  <FaChevronRight size={18} />
                </button>
              )}
          </div>

          {/* Project Details Section */}
          <div className="p-6 md:p-8 lg:p-10 flex flex-col gap-4 md:gap-5 overflow-y-auto flex-grow">
            {/* Title as Link */}
            <a 
              href={selectedProject.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xl md:text-2xl lg:text-3xl font-bold text-off-white hover:text-accent-blue transition-colors inline-flex items-center gap-2 group"
              aria-label={`Visit project: ${selectedProject.title}`}
            >
              {selectedProject.title}
              <FaExternalLinkAlt size={14} md:size={16} className="opacity-70 group-hover:opacity-100 transition-opacity" />
            </a>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2"> 
              {selectedProject.types.map((type, i) => (
                <span key={i} className="inline-block px-3 py-1 rounded-full bg-dark-gray/70 border border-steel-blue/40 text-accent-blue text-xs font-medium shadow-sm">{type.label}</span>
              ))}
            </div>

            {/* Description */}
            <p className="text-light-gray text-sm md:text-base leading-relaxed md:leading-loose pt-2">
              {selectedProject.description}
            </p>
            
            {/* Project Overview Section */}
            <div className="mt-2">
              <h3 className="text-lg font-semibold text-accent-blue mb-2">Project Overview</h3>
              <p className="text-light-gray text-sm md:text-base leading-relaxed">
                {selectedProject.overview}
              </p>
            </div>
            
            {/* Challenges Section */}
            <div className="mt-2">
              <h3 className="text-lg font-semibold text-accent-blue mb-2">Challenges & Solutions</h3>
              <p className="text-light-gray text-sm md:text-base leading-relaxed">
                {selectedProject.challenges}
              </p>
            </div>
            
            {/* Technologies Section */}
            <div className="mt-2">
              <h3 className="text-lg font-semibold text-accent-blue mb-2">Technologies Used</h3>
              <p className="text-light-gray text-sm md:text-base leading-relaxed">
                {selectedProject.technologies}
              </p>
            </div>
          </div>
        </motion.div> {/* <<<--- End Inner Modal Container */} 

        {/* Next Project Button (Side) */}
        <button
          onClick={(e) => { e.stopPropagation(); showNext(); setCarouselIdx(0); }}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-dark-gray/60 text-off-white hover:bg-accent-orange transition-colors text-xl md:text-2xl"
          aria-label="Next project"
        >
          <FaChevronRight />
        </button>

      </motion.div> // <<<--- End Modal Overlay Container
    );
  }

  return (
    <> {/* Start React Fragment */}
      <motion.div // Main Page Container
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full max-w-5xl mx-auto px-4 lg:px-0"
      >
        <div className="flex flex-col items-start gap-4 mb-10">
          <span className="inline-block px-5 py-1.5 rounded-full bg-dark-gray/50 border border-steel-blue/30 text-sm font-semibold text-accent-blue shadow-md">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-left text-off-white leading-tight">
            Check out my featured projects
          </h2>
        </div>
        
        <motion.div // Grid Container
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-y-16 justify-items-center pb-16"
        >
          {projects.map((project, idx) => (
            <Cards
              key={project.id}
              project={project}
              align={idx % 2 === 0 ? 'left' : 'right'}
              onClick={isDesktop ? () => { setSelectedIdx(idx); setCarouselIdx(0); } : undefined}
            />
          ))}
        </motion.div> {/* End Grid Container - Comment moved or removed */}

      </motion.div> {/* End Main Page Container - Comment moved or removed */}

      {/* Render the modal content variable */}
      {modalContent}

    </> 
  );
};

export default Portfolio;