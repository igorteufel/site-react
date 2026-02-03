import styled from 'styled-components';
import backgroundHero from '../assets/backgroundhero.png';

export const LandingPage = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${backgroundHero});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  min-height: 100vh;
  width: 100%;
  padding: 32px 100px;
  overflow-x: hidden;
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 16px;
  }
`;

export const LandingPageContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1366px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-x: hidden;
  flex-direction: column;
  gap: 64px;
`;

export const BackToTopButton = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  border-radius: 50%;
  padding: 12px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.2);
  }
`;
