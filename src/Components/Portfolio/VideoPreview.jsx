import React, { useRef, useEffect, useState } from 'react';

function VideoPreview({ src, poster }) {
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Simple check for mobile based on touch events
    const checkMobile = () => {
      try {
        document.createEvent('TouchEvent');
        setIsMobile(true);
      } catch (e) {
        setIsMobile(false);
      }
    };
    checkMobile();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || isMobile) return; // Don't autoplay on mobile

    const handleMouseEnter = () => {
      video.play().catch(error => {
        // Autoplay was prevented, ignore or log if needed
        // console.log('Autoplay prevented:', error);
      });
    };

    const handleMouseLeave = () => {
      video.pause();
      video.currentTime = 0; // Optional: Reset video to start
    };

    const parentCard = video.closest('article'); // Find the parent card article
    if (parentCard) {
      parentCard.addEventListener('mouseenter', handleMouseEnter);
      parentCard.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        parentCard.removeEventListener('mouseenter', handleMouseEnter);
        parentCard.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [isMobile]); // Re-run if mobile status changes

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      muted
      loop
      playsInline // Important for iOS
      preload="metadata" // Load enough to get dimensions/poster
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      // Do not add controls or autoPlay here; handled by effect
    />
  );
}

export default VideoPreview;