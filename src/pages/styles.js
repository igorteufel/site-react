import styled from 'styled-components';
export const LandingPage = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  background:
    radial-gradient(circle at 12% 10%, rgba(200, 255, 61, 0.055), transparent 24%),
    ${({ theme }) => theme.colors.background};

  &::before {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 20;
    opacity: 0.035;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.95' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E");
  }
`;

export const LandingPageContainer = styled.div`
  width: 100%;
`;

export const Progress = styled.div`
  position: fixed;
  inset: 0 0 auto;
  width: 100%;
  height: 3px;
  z-index: 2000;
  transform-origin: left center;
  background: ${({ theme }) => theme.colors.accent};
`;

export const BackToTopButton = styled.button`
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  background: ${({ theme }) => theme.colors.accent};
  border: 0;
  color: ${({ theme }) => theme.colors.dark};
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.34);
  z-index: 1000;
  transition: transform ${({ theme }) => theme.motion.normal} ${({ theme }) => theme.motion.ease};

  &:hover { transform: translateY(-4px) rotate(-8deg); }
`;
