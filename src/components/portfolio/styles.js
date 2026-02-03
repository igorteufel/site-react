import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  color: white;
`;

export const Title = styled.h1`
  font-size: clamp(16px, 5vw, 32px);
  font-weight: bold;
  margin-bottom: 24px;
  color: white;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Card = styled.a`
  background: #1a1a1d;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  color: white;
  aspect-ratio: 1 / 1;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.35);
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const CardTitle = styled.p`
  padding: 16px;
  text-align: center;
  font-weight: 400;
  font-size: clamp(16px, 5vw, 20px);
  background: #1a1a1d;
  margin: 0;
`;

export const Badge = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 8px 16px;
  border-radius: 40px;
  font-size: clamp(10px, 1vw, 12px);
  color: #b5ff49;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  text-transform: uppercase;
  letter-spacing: 1px;
  z-index: 2;
`;
