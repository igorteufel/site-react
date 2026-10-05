import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
 
  html {
    scroll-behavior: smooth;
    background: ${({ theme }) => theme.colors.background};
    overflow-x: hidden;
    text-size-adjust: 100%;
  }

  body {
    font-family: ${({ theme }) => theme.typography.body};
    font-size: 16px;
    line-height: 1.5;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    min-width: 320px;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }

  #root { min-height: 100vh; }

  img, video, svg { max-width: 100%; }

  button, a, input, textarea { font: inherit; }

  h1, h2, h3 {
    font-family: ${({ theme }) => theme.typography.display};
    text-wrap: balance;
  }

  a, button { -webkit-tap-highlight-color: transparent; }

  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 4px;
  }

  ::selection {
    color: ${({ theme }) => theme.colors.dark};
    background: ${({ theme }) => theme.colors.accent};
  }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;
