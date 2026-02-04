import styled, { keyframes } from 'styled-components';

const aboutScroll = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
`;

export const Section = styled.section`
  color: white;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: clamp(20px, 2vw, 32px);
  font-weight: bold;
  margin-bottom: 24px;
`;

export const Subtitle = styled.p`
  font-size: clamp(16px, 2vw, 20px);
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
  animation: ${aboutScroll} 30s linear infinite;
  will-change: transform;

  @media (max-width: 768px) {
    animation-duration: 18s;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const Slide = styled.div`
  flex: 0 0 360px;
  aspect-ratio: 4 / 3;

  @media (max-width: 768px) {
    flex: 0 0 260px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  display: block;
`;
