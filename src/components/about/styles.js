import styled from 'styled-components';

export const Section = styled.section`position: relative; padding: 140px 32px; background: ${({ theme }) => theme.colors.light}; color: ${({ theme }) => theme.colors.dark}; scroll-margin-top: 80px; @media (max-width: ${({ theme }) => theme.breakpoints.sm}) { padding: 92px 16px; }`;
export const Inner = styled.div`width: min(100%, ${({ theme }) => theme.layout.contentMax}); margin: 0 auto;`;
export const Header = styled.div`
  display: grid; grid-template-columns: .65fr 1.35fr; gap: 40px; padding-bottom: 72px; border-bottom: 1px solid rgba(9,11,13,.18);
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) { grid-template-columns: 1fr; gap: 24px; padding-bottom: 48px; }
`;
export const Kicker = styled.p`font-size: 11px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; span { margin-right: 12px; color: #73777b; }`;
export const Intro = styled.h2`font-size: clamp(30px, 4.4vw, 62px); font-weight: 500; line-height: 1.05; letter-spacing: -.05em;`;
export const Content = styled.div`
  display: grid; grid-template-columns: minmax(0,.85fr) minmax(460px,1.15fr); gap: clamp(48px, 8vw, 120px); align-items: center; padding: 100px 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) { grid-template-columns: 1fr; padding: 72px 0; }
`;
export const Manifesto = styled.div`display: flex; flex-direction: column; align-items: flex-start; gap: 24px;`;
export const Title = styled.h3`font-size: clamp(36px, 4.5vw, 64px); font-weight: 600; line-height: .98; letter-spacing: -.055em; em { color: #6f7569; font-style: normal; }`;
export const Text = styled.p`max-width: 620px; color: #4e5356; font-size: ${({ theme }) => theme.typography.sizes.bodyLarge}; line-height: 1.65;`;
export const Signature = styled.div`margin-top: 18px; padding-top: 18px; border-top: 1px solid rgba(9,11,13,.18); color: ${({ theme }) => theme.colors.dark}; font-family: ${({ theme }) => theme.typography.display}; font-size: 18px; font-weight: 700; letter-spacing: .06em; small { display: block; margin-top: 5px; color: #777b7d; font-family: ${({ theme }) => theme.typography.body}; font-size: 10px; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; }`;
export const Gallery = styled.div`position: relative; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; align-items: end; @media (max-width: ${({ theme }) => theme.breakpoints.sm}) { gap: 10px; }`;
const Photo = styled.img`position: relative; width: 100%; aspect-ratio: 1 / 1; display: block; object-fit: cover; border-radius: 16px; box-shadow: 0 26px 70px rgba(13,16,18,.14);`;
export const MainPhoto = styled(Photo)`object-position: 62% center;`;
export const SecondPhoto = styled(Photo)`object-position: center;`;
export const ThirdPhoto = styled(Photo)`object-position: center 36%;`;
export const FourthPhoto = styled(Photo)`object-position: center;`;
export const PhotoLabel = styled.p`position: absolute; z-index: 2; top: -24px; right: 20px; max-width: 150px; padding: 12px 16px; border-radius: ${({ theme }) => theme.radii.round}; color: ${({ theme }) => theme.colors.dark}; background: ${({ theme }) => theme.colors.accent}; font-size: 11px; font-weight: 700; text-align: center; transform: rotate(5deg); @media (max-width: ${({ theme }) => theme.breakpoints.sm}) { top: -38px; right: 6px; }`;
export const Principles = styled.div`
  display: grid; grid-template-columns: repeat(3,1fr); gap: 40px;
  article { padding-top: 20px; border-top: 1px solid rgba(9,11,13,.2); }
  h3 { margin: 28px 0 10px; font-size: 22px; letter-spacing: -.03em; }
  p { color: #5d6265; line-height: 1.6; }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) { grid-template-columns: 1fr; gap: 32px; }
`;
export const PrincipleTop = styled.div`display: flex; justify-content: space-between; align-items: center; color: #777b7d; font-size: 11px; font-weight: 700; svg { color: ${({ theme }) => theme.colors.dark}; font-size: 22px; }`;
