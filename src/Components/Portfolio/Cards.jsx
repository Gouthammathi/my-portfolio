import React from 'react';
import styled from 'styled-components';

const Cards = ({ project, index }) => {
  const handleCardClick = () => {
    if (index === 1) {
      window.open("https://github.com/Gouthammathi/EmotionDetection", "_blank");
    } else if (index === 2) {
      window.open("https://github.com/Gouthammathi/PedestrianDetection", "_blank");
    } else if (index === 3) {
      window.open("https://applicationdevelopment.streamlit.app/", "_blank");
    } else {
      window.open("https://www.gouthamnike.vercel.app/portfolio", "_blank");
    }
  };
  const isReversed = index % 2 !== 0;
  return (
    <StyledWrapper $hoverDirection={index % 2 === 0 ? 'left' : 'right'}>
      <div
        className={`article-wrapper flex card-fixed-size mx-auto${isReversed ? ' flex-row-reverse' : ''}`}
        onClick={handleCardClick}
        style={{ cursor: "pointer" }}
      >
        <div className="image-section">
          <img
            src={project.image}
            alt={project.title}
            className="project-img"
          />
        </div>
        <div className="project-info flex-1 flex flex-col justify-between">
          <div className="flex-pr">
            <div className="project-title text-nowrap">{project.title}</div>
            <div className="project-hover">
              <svg style={{color: '#1a41cd'}} xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" strokeLinejoin="round" strokeLinecap="round" viewBox="0 0 24 24" strokeWidth={2} fill="none" stroke="currentColor"><line y2={12} x2={19} y1={12} x1={5} /><polyline points="12 5 19 12 12 19" /></svg>
            </div>
          </div>
          {project.description && (
            <div className="project-desc-full">{project.description}</div>
          )}
          <div className="types">
            {project.types && project.types.map((type, idx) => (
              <span key={idx} className="project-type" style={type.style}>{type.label}</span>
            ))}
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

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
    transition: transform 0.18s cubic-bezier(.4,2,.6,1), box-shadow 0.18s cubic-bezier(.4,2,.6,1);
    border-radius: 18px;
    padding: 0;
    border: 3px solid transparent;
    cursor: pointer;
    background: linear-gradient(90deg, #f8faff 60%, #e3eaff 100%);
    box-shadow: 0 6px 24px rgba(30,64,175,0.10);
    overflow: hidden;
    position: relative;
    will-change: transform;
  }
  .article-wrapper:hover {
    box-shadow: 0 32px 64px #4e84ff44, 0 48px 96px #4444bd22;
    border-color: #0578c5;
    transform: ${({ $hoverDirection }) =>
      $hoverDirection === 'left'
        ? 'perspective(900px) rotateY(8deg) scale(1.04) translateY(-12px);'
        : 'perspective(900px) rotateY(-8deg) scale(1.04) translateY(-12px);'}
  }
  .article-wrapper:active {
    box-shadow: none;
    transform: none;
  }
  .article-wrapper.flex-row-reverse {
    flex-direction: row-reverse;
  }
  .image-section {
    flex: 0 0 340px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e3eaff;
    border-radius: 18px 0 0 18px;
    overflow: hidden;
    position: relative;
    transition: border-radius 0.2s;
  }
  .article-wrapper.flex-row-reverse .image-section {
    border-radius: 0 18px 18px 0;
  }
  .article-wrapper:hover .project-img {
    transform: scale(0.93);
    transition: transform 0.18s cubic-bezier(.4,2,.6,1);
  }
  .project-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 18px 0 0 18px;
    display: block;
    background: #fff;
    transition: border-radius 0.2s, transform 0.18s cubic-bezier(.4,2,.6,1);
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
  }
  .project-title {
    font-size: 1.5em;
    margin: 0;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #1a41cd;
    max-width: 90%;
  }
  .flex-pr {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
  }
  .project-desc-full {
    font-size: 1em;
    color: #444;
    overflow: visible;
    text-overflow: unset;
    display: block;
    max-height: none;
    line-height: 1.4em;
    margin-bottom: 8px;
  }
  .types {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
    max-width: 100%;
    overflow: hidden;
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
    /* Remove max-width, overflow, and text-overflow to allow full label display */
    box-shadow: 0 2px 8px #b2b2fd33;
  }
  .project-hover {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    padding: 7px;
    transition: all 0.3s cubic-bezier(.4,2,.6,1);
    background: #e3eaff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .article-wrapper:hover .project-hover {
    transform: rotate(-45deg) scale(1.1);
    background-color: #a6c2f0;
  }
  .project-link-btn {
    display: inline-block;
    background: linear-gradient(90deg, #1a41cd 60%, #4e84ff 100%);
    color: #fff;
    font-weight: 600;
    padding: 0.5em 1.5em;
    border-radius: 10px;
    text-decoration: none;
    font-size: 1em;
    transition: background 0.2s, transform 0.2s;
    margin-top: 8px;
    box-shadow: 0 2px 8px #1a41cd33;
  }
  .project-link-btn:hover {
    background: linear-gradient(90deg, #4e84ff 60%, #1a41cd 100%);
    transform: scale(1.05);
  }
  @media (max-width: 900px) {
    padding-left: 8px;
    padding-right: 8px;
    .card-fixed-size {
      width: 100vw;
      max-width: 100vw;
      min-width: 0;
      height: auto;
      min-height: 180px;
      max-height: none;
      box-sizing: border-box;
      margin-left: 0;
      margin-right: 0;
    }
    .article-wrapper {
      flex-direction: column !important;
      min-height: 420px;
      height: auto;
      border-radius: 18px;
      padding: 0 2vw 18px 2vw;
      box-sizing: border-box;
      overflow: hidden;
      max-width: 100vw;
      background: linear-gradient(120deg, #f8faff 60%, #e3eaff 100%);
      box-shadow: 0 8px 32px rgba(30,64,175,0.13);
    }
    .image-section {
      flex: none;
      width: 100vw;
      max-width: 100vw;
      height: 180px;
      border-radius: 18px 18px 0 0 !important;
      margin-bottom: 0;
      overflow: hidden;
      background: #e3eaff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .project-img {
      width: 100vw;
      max-width: 100vw;
      height: 100%;
      border-radius: 18px 18px 0 0 !important;
      object-fit: cover;
      display: block;
      box-shadow: 0 2px 12px #b2b2fd33;
    }
    .project-info {
      padding: 18px 10px 10px 10px;
      gap: 10px;
      height: auto;
      min-height: 180px;
      border-radius: 0 0 18px 18px;
      box-sizing: border-box;
      max-width: 100vw;
      overflow-x: auto;
      background: #fff;
      box-shadow: 0 2px 8px #e3eaff33;
    }
    .project-title {
      font-size: 1.18em;
      max-width: 100%;
      color: #1a41cd;
      font-weight: 700;
      margin-bottom: 2px;
    }
    .flex-pr {
      gap: 10px;
    }
    .project-desc-full {
      font-size: 1em;
      line-height: 1.6em;
      margin-bottom: 8px;
      color: #444;
      background: #f8faff;
      border-radius: 8px;
      padding: 8px 10px;
      box-shadow: 0 1px 4px #b2b2fd22;
    }
    .types {
      gap: 8px;
      margin-top: 4px;
      flex-wrap: wrap;
    }
    .project-type {
      font-size: 11px;
      padding: 0.18em 0.7em;
      background: #b2b2fd;
      color: #1a41cd;
      border-radius: 15px;
      box-shadow: 0 2px 8px #b2b2fd33;
      margin-bottom: 2px;
    }
    .project-hover {
      width: 32px;
      height: 32px;
      padding: 4px;
    }
  }
  @media (max-width: 600px) {
    padding-left: 0;
    padding-right: 0;
    .card-fixed-size {
      width: 100vw;
      max-width: 100vw;
      min-width: 0;
    }
    .image-section {
      height: 140px;
      width: 100vw;
      max-width: 100vw;
    }
    .project-img {
      width: 100vw;
      max-width: 100vw;
    }
    .project-info {
      padding: 10px 4px 12px 4px;
      gap: 8px;
      max-width: 100vw;
    }
    .project-title {
      font-size: 1em;
    }
    .project-desc-full {
      font-size: 0.95em;
      padding: 7px 6px;
    }
    .project-type {
      font-size: 10px;
      padding: 0.15em 0.5em;
    }
    .project-hover {
      width: 26px;
      height: 26px;
      padding: 2px;
    }
  }
`;

export default Cards;
