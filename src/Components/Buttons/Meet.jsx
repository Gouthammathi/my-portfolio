import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button className="brutalist-button">
        <div className="button-text">
          <span>Hello 🎉</span>
          {/* <span>Meet</span> */}
        </div>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .brutalist-button {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 110px;
    height: 36px;
    background-color: #000;
    color: #fff;
    text-decoration: none;
    font-family: Arial, sans-serif;
    font-weight: bold;
    border: 2px solid #fff;
    outline: 2px solid #000;
    box-shadow: 4px 4px 0 #00a4ef;
    transition: all 0.1s ease-out;
    padding: 0 8px;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
  }

  .brutalist-button::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.8),
      transparent
    );
    z-index: 1;
    transition: none;
    opacity: 0;
  }

  @keyframes slide {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }

  .brutalist-button:hover::before {
    opacity: 1;
    animation: slide 2s infinite;
  }

  .brutalist-button:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 #000;
    background-color: #000;
    color: #fff;
  }

  .brutalist-button:active {
    transform: translate(2px, 2px);
    box-shadow: 0px 0px 0 #00a4ef;
    background-color: #fff;
    color: #000;
    border-color: #000;
  }

  .button-text {
    display: flex;
    flex-direction: column;
    line-height: 1.1;
    transition: transform 0.2s ease-out;
    position: relative;
    z-index: 1;
  }

  .brutalist-button:hover .button-text {
    transform: skew(-5deg);
  }

  .brutalist-button:active .button-text {
    transform: skew(5deg);
  }

  .button-text span:first-child {
    font-size: 8px;
    text-transform: uppercase;
  }

  .button-text span:last-child {
    font-size: 12px;
    text-transform: uppercase;
  }`;

export default Button;
