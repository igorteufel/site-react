import { breakpoints } from './breakpoints';

export const theme = {
  typography: {
    display: "'Lato', system-ui, sans-serif",
    body: "'Lato', system-ui, sans-serif",
    sizes: {
      display: 'clamp(58px, 9vw, 138px)',
      hero: 'clamp(48px, 7vw, 104px)',
      section: 'clamp(38px, 5vw, 72px)',
      subheading: 'clamp(24px, 3vw, 40px)',
      bodyLarge: 'clamp(18px, 1.7vw, 23px)',
      body: '16px',
      label: '12px',
    },
    weights: { regular: 400, medium: 500, semibold: 600, bold: 700 },
  },
  colors: {
    accent: '#C8FF3D',
    accentStrong: '#AEE51E',
    background: '#090B0D',
    surface: '#111418',
    surfaceRaised: '#181C21',
    text: '#F5F3EE',
    muted: '#A6A9AE',
    border: 'rgba(245, 243, 238, 0.14)',
    dark: '#090B0D',
    light: '#F5F3EE',
  },
  spacing: {
    1: '4px', 2: '8px', 3: '12px', 4: '16px', 6: '24px',
    8: '32px', 10: '40px', 12: '48px', 16: '64px', 20: '80px', 24: '96px',
  },
  radii: { sm: '8px', md: '14px', lg: '24px', round: '999px' },
  motion: { fast: '180ms', normal: '300ms', slow: '700ms', ease: 'cubic-bezier(0.22, 1, 0.36, 1)' },
  layout: { contentMax: '1280px', wideMax: '1440px', headerHeight: '84px' },
  breakpoints,
};
