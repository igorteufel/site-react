import styled from 'styled-components';
import meImage from '../../assets/Igor.png';

export const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  background-image: url(${meImage});
  background-size: cover;
  background-position: right center;
  background-repeat: no-repeat;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: unset;
    background: unset;
    width: unset;
  }
`;

export const imageSection = styled.section`
  height: 49vh;
  position: relative;
  background-image: url(${meImage});
  background-size: cover;
  background-position: right center;
  background-repeat: no-repeat;

  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  color: white;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 16px;
  }
`;

export const Body = styled.p`
  color: #b7f62b;
  font-size: clamp(16px, 2vw, 24px);
  margin: 0;
  padding: 4px 0 0;
  font-weight: bold;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: center;
  }
`;

export const Complement = styled.p`
  color: #ededf3;
  font-size: clamp(16px, 2vw, 24px);
  margin: 0;
  padding: 4px 0 0;
  font-weight: lighter;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: clamp(40px, 2vw, 64px);
  font-weight: bold;
  margin: 0;
  line-height: 1.1;
  color: #fff;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: center;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;
  flex-wrap: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-wrap: wrap;
  }
`;

export const Button = styled.a`
  width: 220px;
  height: 32px;
  display: flex;
  align-items: center;

  gap: 16px;
  border: 2px solid #1f1b26;
  border-radius: 12px;
  padding: 32px;
  cursor: pointer;
  background-color: #0b090d;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  text-decoration: none;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.35);

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      justify-content: center;
      width: 300px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      flex-wrap: wrap;
      justify-content: center;
      width: 300px;
    }
  }
`;

export const ButtonLogo = styled.img`
  width: 28px;
  height: 28px;
`;

export const ButtonText = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  gap: 2px;
`;

export const ButtonTitle = styled.span`
  font-weight: bold;
  font-size: 20px;
`;

export const ButtonBody = styled.span`
  font-size: clamp(12px, 5vw, 14px);
  opacity: 0.8;
`;
