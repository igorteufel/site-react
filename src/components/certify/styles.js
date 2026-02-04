import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export const Section = styled.section`
  width: 100%;
  color: white;
  padding: 80px 0;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Title = styled.h1`
  font-size: clamp(20px, 2vw, 32px);
  font-weight: bold;
  margin: 0;
`;

export const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const Carousel = styled.div`
  display: flex;
  gap: 24px;
  width: max-content;
  animation: ${scroll} 50s linear infinite;
  animation-play-state: ${({ paused }) => (paused ? 'paused' : 'running')};
`;

export const Card = styled.div`
  flex: 0 0 auto;
  width: 360px;
  border-radius: 12px;
  background: #1a1a1d;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

/* Modal */

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  cursor: pointer;
`;

export const ModalContent = styled.div`
  background-color: #1a1a1d;
  border-radius: 12px;
  padding: 20px;
  max-width: 90%;
  max-height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
`;

export const ModalImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;
