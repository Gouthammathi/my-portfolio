import React, { useRef } from 'react';
import styled from 'styled-components';
import { FaExternalLinkAlt } from "react-icons/fa";

function VideoPreview({ src, poster }) {
  const videoRef = useRef(null);
  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      className="project-img"
      style={{ cursor: 'pointer', objectFit: 'cover', width: '100%', height: '100%' }}
      muted
      preload="metadata"
      onMouseEnter={() => videoRef.current && videoRef.current.play()}
      onMouseLeave={() => videoRef.current && videoRef.current.pause()}
      onMouseOut={() => videoRef.current && videoRef.current.pause()}
    />
  );
}

const Cards = ({ project, align, index }) => {
  let link = project.link;
  if (project.image === "/Images/nike.png") {
    link = "https://gouthamnike.vercel.app/";
  } else if (project.image === "/Images/emotion.png") {
    link = "https://github.com/Gouthammathi/EmotionDetection";
  } else if (project.image === "/Images/pede.png") {
    link = "https://github.com/Gouthammathi/PedestrianDetection";
  } else if (project.image === "/Images/credit.png") {
    link = "https://applicationdevelopment.streamlit.app/";
  }
  return (
    <StyledWrapper $hoverDirection={align === 'right' ? 'right' : 'left'}>
      <div className={`card-fixed-size article-wrapper ${align === 'right' ? 'flex-row-reverse' : ''}`}>
        <div className="image-section">
          {project.image === "/Images/nike.png" ? (
            <a href={project.link} target="" rel="noopener noreferrer" style={{ display: 'block' }}>
              <VideoPreview src="/Images/nike.mp4" poster="/Images/nike.png" />
            </a>
          ) : project.image === "/Images/emotion.png" ? (
            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
              <VideoPreview src="/Images/emotion.mp4" poster="/Images/emotion.png" />
            </a>
          ) : project.image === "/Images/pede.png" ? (
            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
              <VideoPreview src="/Images/Pedestrian.mp4" poster="/Images/pede.png" />
            </a>
          ) : project.image === "/Images/credit.png" ? (
            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
              <VideoPreview src="/Images/credit.mp4" poster="/Images/credit.png" />
            </a>
          ) : (
            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
              <img src={project.image} alt={project.title} className="project-img" style={{ cursor: 'pointer' }} />
            </a>
          )}
        </div>
        <div className="project-info">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5em' }}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="title-link"
              style={{ textDecoration: 'underline', color: '#e6cfff', fontWeight: 700, fontSize: '1.5em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-block', margin: 0 }}
              aria-label={`Open ${project.title}`}
            >
              {project.title}
            </a>
            <a href={link} target="_blank" rel="noopener noreferrer" style={{ color: '#e6cfff', display: 'inline-flex', alignItems: 'center' }}>
              <FaExternalLinkAlt size={18} />
            </a>
          </div>
          <p className="project-desc-full">{project.description}</p>
          <div className="types">
            {project.types.map((type, i) => (
              <span key={i} className="project-type">{type.label}</span>
            ))}
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  margin-top: 2.5rem;

  .card-fixed-size {
    width: 800px;
    max-width: 800px;
    min-width: 320px;
    height: 340px;
    min-height: 220px;
    max-height: 400px;
    box-sizing: border-box;
  }

  .article-wrapper {
    display: flex;
    align-items: stretch;
    width: 100%;
    height: 100%;
    transition: transform 0.35s cubic-bezier(.4,2,.6,1), box-shadow 0.35s cubic-bezier(.4,2,.6,1), border-color 0.35s cubic-bezier(.4,2,.6,1), background 0.35s cubic-bezier(.4,2,.6,1);
    border-radius: 22px;
    padding: 0;
    border: 2.5px solid #232336;
    cursor: pointer;
    background: linear-gradient(120deg, #232336 60%, #18181b 100%);
    box-shadow: 0 6px 24px rgba(30,64,175,0.10), 0 2px 16px #000a;
    overflow: hidden;
    position: relative;
    will-change: transform, box-shadow, border-color, background;
  }

  .article-wrapper:hover {
    box-shadow: 0 32px 64px #e2a1f899, 0 48px 96px #a18cd199;
    border-color: #e2a1f8;
    background: linear-gradient(120deg, #2e2d2d 60%, #a18cd1 100%);
    transform: ${({ $hoverDirection }) =>
      $hoverDirection === 'left'
        ? 'perspective(900px) rotateY(8deg) scale(1.045) translateY(-14px);'
        : 'perspective(900px) rotateY(-8deg) scale(1.045) translateY(-14px);'}
  }

  .image-section {
    flex: 0 0 340px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #232336;
    border-radius: 18px 0 0 18px;
    overflow: hidden;
    position: relative;
    transition: border-radius 0.2s;
  }

  .article-wrapper.flex-row-reverse .image-section {
    border-radius: 0 18px 18px 0;
  }

  .article-wrapper:hover .project-img {
    transform: scale(0.92) rotate(-2deg);
    transition: transform 0.35s cubic-bezier(.4,2,.6,1);
    filter: brightness(0.93) contrast(1.08);
  }

  .project-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 18px 0 0 18px;
    display: block;
    background: #18181b;
    transition: border-radius 0.2s, transform 0.35s cubic-bezier(.4,2,.6,1), filter 0.35s cubic-bezier(.4,2,.6,1);
  }

  .article-wrapper.flex-row-reverse .project-img {
    border-radius: 0 18px 18px 0;
  }

  .project-info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 28px 32px;
    gap: 10px;
    height: 100%;
    overflow: hidden;
    background: transparent;
  }

  .title-link {
    text-decoration: none;
    color: inherit;
    display: inline-block;
    max-width: 90%;
  }

  .project-title {
    font-size: 1.5em;
    margin: 0;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #e6cfff;
    display: inline-block;
  }

  .project-desc-full {
    font-size: 1em;
    line-height: 1.6em;
    margin-bottom: 8px;
    color: #eaeaea;
    background: #232336;
    border-radius: 8px;
    padding: 10px 14px;
    box-shadow: 0 1px 4px #0008;
    font-weight: 500;
    word-break: break-word;
    max-height: 120px;
    overflow-y: auto;
  }

  .project-type {
    background: #b2b2fd;
    color: #1a41cd;
    font-weight: bold;
    padding: 0.2em 0.9em;
    border-radius: 15px;
    font-size: 12px;
    letter-spacing: -0.6px;
    white-space: nowrap;
    box-shadow: 0 2px 8px #b2b2fd33;
  }

  .types {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
    max-width: 100%;
    overflow: hidden;
  }

  @media (max-width: 900px) {
    .card-fixed-size {
      width: 100vw;
      max-width: 100vw;
      min-width: 0;
      height: auto;
      min-height: 180px;
      max-height: none;
      margin-left: 0;
      margin-right: 0;
    }

    .article-wrapper {
      flex-direction: column !important;
      min-height: 420px;
      padding: 0 2vw 18px 2vw;
      border-radius: 18px;
      background: linear-gradient(120deg, #232336 60%, #18181b 100%);
      box-shadow: 0 8px 32px #000a, 0 2px 16px #18181b;
      border: 2.5px solid #232336;
    }

    .image-section {
      width: 100vw;
      height: 180px;
      border-radius: 18px 18px 0 0 !important;
    }

    .project-img {
      width: 100vw;
      height: 100%;
      border-radius: 18px 18px 0 0 !important;
    }

    .project-info {
      padding: 18px 10px 10px 10px;
      min-height: 180px;
    }

    .project-title {
      font-size: 1.18em;
    }

    .project-desc-full {
      font-size: 1.08em;
    }

    .project-type {
      font-size: 11px;
      padding: 0.18em 0.7em;
    }
  }

  @media (max-width: 600px) {
    .image-section {
      height: 140px;
    }

    .project-info {
      padding: 10px 4px 12px 4px;
    }

    .project-title {
      font-size: 1em;
    }

    .project-desc-full {
      font-size: 1em;
    }

    .project-type {
      font-size: 10px;
      padding: 0.15em 0.5em;
    }
  }
`;

export default Cards;
