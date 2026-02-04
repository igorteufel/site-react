import styled from 'styled-components';
import wordbackground from '../../assets/Works.png';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${wordbackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
`;

/* TEXTO CENTRAL ABSOLUTO */
export const CenterText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  text-align: center;
  color: white;
  z-index: 3;
  width: 100%;

  padding: 0 16px;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Title = styled.h1`
  font-size: clamp(20px, 2vw, 32px);
  font-weight: bold;
  margin: 0;
`;

export const Subtitle = styled.p`
  font-size: clamp(16px, 2vw, 20px);
  opacity: 0.8;
  line-height: 1.5;
  margin: 0;
`;

/* ORBITA */
export const Orbit = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  transform-origin: 50% 50%;
  z-index: 2;
`;

/* BALÃO */
export const Balloon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  background: #1c1c24;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: transform 0.3s ease;
  will-change: transform;
`;

/* LOGO */
export const Logo = styled.img`
  width: 70%;
  height: 70%;
  object-fit: contain;
  pointer-events: none;
`;

/* TOOLTIP */
export const Tooltip = styled.div`
  position: absolute;
  bottom: 110%;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 14px;
  white-space: nowrap;
  z-index: 10;
`;
