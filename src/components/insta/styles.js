import styled from 'styled-components';
import Futurista from '../../assets/Futurista.png';

export const Wrapper = styled.div`
  padding: 80px 0;
  width: 100%;
`;

export const Section = styled.section`
  min-height: 700px;
  border-radius: 24px;
  background-image: url(${Futurista});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  color: white;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: 400px;
    height: 50%;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 64px 60px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Title = styled.h1`
  font-size: clamp(24px, 5vw, 32px);
  margin: 0;
  font-family: 'Inter', sans-serif;
  font-weight: 900;
`;

export const Icons = styled.div`
  display: flex;
  gap: 24px;
`;

export const IconLink = styled.a`
  font-size: 32px;
  color: white;
  transition:
    transform 0.3s ease,
    color 0.3s ease;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 20px;
  }
`;
