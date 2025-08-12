import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="laptop">
        <div className="screen">
          <div className="header" />
          <div className="text"> Bringing ideas to life with clean design <br /> and powerful technology</div>
        </div>
        <div className="keyboard" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  .laptop {
    transform: scale(1);
    transition: transform 0.3s ease-in-out;
  }

   .screen {
    border-radius: 2vw;
    box-shadow: inset 0 0 0 0.3vw #c8cacb, inset 0 0 0 1.5vw #000;
    height: 40vw;
    width: 65vw;
    max-width: 520px;
    max-height: 320px;
    margin: 0 auto;
    padding: 1vw 1vw 3vw 1vw;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(
      15deg,
      #458496 0%,
      #80B6C1 100%
    );

    transform-style: preserve-3d;
    transform: perspective(1900px) rotateX(-88.5deg);
    transform-origin: 50% 100%;
    animation: open 4s infinite alternate;
  }


  @keyframes open {
    0% {
      transform: perspective(1900px) rotateX(-88.5deg);
    }
    100% {
      transform: perspective(1000px) rotateX(0deg);
    }
  }

  .screen::before {
    content: "";
    width: 100%;
    height: 0.7vw;
    position: absolute;
    background: linear-gradient(#979899, transparent);
    top: -0.3vw;
    transform: rotateX(90deg);
    border-radius: 0.4vw 0.4vw;
  }

  .screen::after {
    background: linear-gradient(to bottom, #272727, #0d0d0d);
    border-radius: 0 0 2vw 2vw;
    bottom: 0.3vw;
    content: "";
    height: 3vw;
    left: 0.3vw;
    position: absolute;
    width: calc(100% - 0.6vw);
  }

  .header {
    width: 20%;
    height: 1.5vw;
    position: absolute;
    // background-color: #000;
    top: 1.2vw;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 0 0 1vw 1vw;
  }

  .text {
   font-family: San Francisco;
    font-size: 1.5vw;
    color: #fff;
    letter-spacing: 0.2vw;
    text-shadow: 0 0 0.2vw #fff;
    text-align: center;
  }

  .keyboard {
    background: radial-gradient(circle at center, #e2e3e4 85%, #a9abac 100%);
    border: solid #a0a3a7;
    border-radius: 0.5vw 0.5vw 2vw 2vw;
    border-width: 0.1vw 0.3vw 0 0.3vw;
    box-shadow: inset 0 -0.2vw 0.5vw 0 #6c7074;
    height: 3vw;
    margin-top: -1vw;
    width: 80vw;
    max-width: 620px;
    position: relative;
    z-index: 9;
  }

  .keyboard::after {
    background: #e2e3e4;
    border-radius: 0 0 1vw 1vw;
    box-shadow: inset 0 0 0.3vw 0.2vw #babdbf;
    content: "";
    height: 1.2vw;
    left: 50%;
    position: absolute;
    top: 0;
    width: 12vw;
  }

  .keyboard::before {
    background: transparent;
    border-radius: 0 0 0.4vw 0.4vw;
    box-shadow: -30vw 0 #272727, 28vw 0 #272727;
    content: "";
    height: 0.3vw;
    left: 50%;
    position: absolute;
  }

  @media (max-width: 768px) {
    .laptop {
      transform: scale(0.8);
    }

    .text {
      font-size: 3vw;
    }

    .keyboard {
      height: 5vw;
    }

    .screen {
      height: 50vw;
      width: 85vw;
    }
  }

  @media (max-width: 480px) {
    .laptop {
      transform: scale(0.65);
    }

    .text {
      font-size: 4vw;
    }

    .keyboard {
      height: 6vw;
    }

    .screen {
      height: 60vw;
      width: 90vw;
    }
  }
`;

export default Card;
