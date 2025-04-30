import React from 'react';
import styled from 'styled-components';

const Cards = ({ project, align }) => {
  return (
    <StyledWrapper $hoverDirection={align === 'right' ? 'right' : 'left'}>
      <div className={`card-fixed-size article-wrapper ${align === 'right' ? 'flex-row-reverse' : ''}`}>
        <div className="image-section">
          <img src={project.image} alt={project.title} className="project-img" />
        </div>
        <div className="project-info">
          <h3 className="project-title">{project.title}</h3>
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
    transition: transform 0.18s cubic-bezier(.4,2,.6,1), box-shadow 0.18s cubic-bezier(.4,2,.6,1);
    border-radius: 18px;
    padding: 0;
    border: 2.5px solid #232336;
    cursor: pointer;
    background: linear-gradient(120deg, #232336 60%, #18181b 100%);
    box-shadow: 0 6px 24px rgba(30,64,175,0.10), 0 2px 16px #000a;
    overflow: hidden;
    position: relative;
    will-change: transform;
  }
  .article-wrapper:hover {
    box-shadow: 0 32px 64px #e2a1f844, 0 48px 96px #a18cd144;
    border-color: #e2a1f8;
    transform: ${({ $hoverDirection }) =>
      $hoverDirection === 'left'
        ? 'perspective(900px) rotateY(8deg) scale(1.04) translateY(-12px);'
        : 'perspective(900px) rotateY(-8deg) scale(1.04) translateY(-12px);'}
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
  .project-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 18px 0 0 18px;
    display: block;
    background: #18181b;
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
    background: transparent;
  }
  .project-title {
    font-size: 1.5em;
    margin: 0;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #e6cfff;
    max-width: 90%;
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
    background: #e2a1f8;
    color: #232336;
    font-weight: bold;
    padding: 0.2em 0.9em;
    border-radius: 15px;
    font-size: 12px;
    letter-spacing: -0.6px;
    white-space: nowrap;
    box-shadow: 0 2px 8px #e2a1f833;
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
    box-shadow: 0 2px 8px #b2b2fd33;
  }
  @media (max-width: 900px) {
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
      background: linear-gradient(120deg, #232336 60%, #18181b 100%);
      box-shadow: 0 8px 32px #000a, 0 2px 16px #18181b;
      border: 2.5px solid #232336;
    }
    .image-section {
      flex: none;
      width: 100vw;
      max-width: 100vw;
      height: 180px;
      border-radius: 18px 18px 0 0 !important;
      margin-bottom: 0;
      overflow: hidden;
      background: #232336;
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
      box-shadow: 0 2px 12px #0008;
      background: #18181b;
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
      background: transparent;
      box-shadow: none;
    }
    .project-title {
      font-size: 1.18em;
      max-width: 100%;
      color: #e6cfff;
      font-weight: 700;
      margin-bottom: 2px;
    }
    .project-desc-full {
      font-size: 1.08em;
      line-height: 1.7em;
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
      font-size: 11px;
      padding: 0.18em 0.7em;
      background: #e2a1f8;
      color: #232336;
      border-radius: 15px;
      box-shadow: 0 2px 8px #e2a1f833;
      margin-bottom: 2px;
    }
  }
  @media (max-width: 600px) {
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
      font-size: 1em;
      line-height: 1.6em;
      margin-bottom: 8px;
      color: #eaeaea;
      background: #232336;
      border-radius: 8px;
      padding: 8px 10px;
      box-shadow: 0 1px 4px #0008;
      font-weight: 500;
      word-break: break-word;
      max-height: 120px;
      overflow-y: auto;
    }
    .project-type {
      font-size: 10px;
      padding: 0.15em 0.5em;
    }
  }
`;

export default Cards;

