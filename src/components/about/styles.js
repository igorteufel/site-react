import styled, { keyframes } from 'styled-components';

const aboutScroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export const Section = styled.section`
  color: white;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: clamp(24px, 5vw, 32px);
  font-weight: bold;
  margin-bottom: 24px;
`;

export const Subtitle = styled.p`
  font-size: clamp(16px, 5vw, 20px);
  opacity: 0.8;
  line-height: 1.5;
  margin-bottom: 24px;
`;

export const Wrapper = styled.div`
  overflow: hidden;
  margin-top: 32px;
`;

export const Carousel = styled.div`
  display: flex;
  gap: 24px;
  width: fit-content;
  animation: ${aboutScroll} 40s linear infinite;
  will-change: transform;
`;

export const Slide = styled.div`
  flex: 0 0 360px;
  aspect-ratio: 4 / 3;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  display: block;
`;
