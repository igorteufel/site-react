import styled from 'styled-components';

export const Section = styled.section`position: relative; padding: 150px 32px; color: ${({ theme }) => theme.colors.text}; scroll-margin-top: 80px; @media (max-width: ${({ theme }) => theme.breakpoints.sm}) { padding: 96px 16px; }`;
export const Inner = styled.div`width: min(100%, ${({ theme }) => theme.layout.contentMax}); margin: 0 auto;`;
export const Header = styled.div`display: grid; grid-template-columns: .6fr 1.25fr .65fr; gap: 36px; align-items: end; margin-bottom: 72px; @media (max-width: ${({ theme }) => theme.breakpoints.md}) { grid-template-columns: 1fr; gap: 22px; }`;
export const Kicker = styled.p`align-self: start; color: rgba(245,243,238,.68); font-size: 11px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; span { margin-right: 12px; color: ${({ theme }) => theme.colors.accent}; }`;
export const Title = styled.h2`font-size: ${({ theme }) => theme.typography.sizes.section}; font-weight: 600; line-height: .98; letter-spacing: -.055em; em { color: ${({ theme }) => theme.colors.accent}; font-style: normal; }`;
export const HeaderText = styled.p`color: ${({ theme }) => theme.colors.muted}; font-size: 15px; line-height: 1.7;`;
export const Grid = styled.div`display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 22px; @media (max-width: ${({ theme }) => theme.breakpoints.lg}) { grid-template-columns: repeat(2,minmax(0,1fr)); } @media (max-width: ${({ theme }) => theme.breakpoints.sm}) { grid-template-columns: 1fr; }`;
export const Card = styled.article`
  display: flex; flex-direction: column; overflow: hidden; border: 1px solid ${({ theme }) => theme.colors.border}; border-radius: ${({ theme }) => theme.radii.lg}; color: ${({ theme }) => theme.colors.text}; background: ${({ theme }) => theme.colors.surface}; text-decoration: none; transition: transform 400ms ${({ theme }) => theme.motion.ease}, border-color 300ms ease;
  &:is(a):hover { transform: translateY(-7px); border-color: rgba(200,255,61,.45); }
`;
export const Visual = styled.div`position: relative; aspect-ratio: 1.18 / 1; overflow: hidden; background: #20252a;`;
export const ProjectImage = styled.img`width: 100%; height: 100%; display: block; object-fit: cover; transition: transform 700ms ${({ theme }) => theme.motion.ease}, filter 500ms ease; ${Card}:is(a):hover & { transform: scale(1.045); filter: saturate(1.08); }`;
export const ProjectNumber = styled.span`position: absolute; z-index: 3; top: 18px; left: 18px; width: 38px; height: 38px; display: grid; place-items: center; border-radius: 50%; color: ${({ theme }) => theme.colors.dark}; background: ${({ theme }) => theme.colors.accent}; font-size: 10px; font-weight: 700;`;
export const OpenIcon = styled.span`position: absolute; z-index: 3; top: 18px; right: 18px; width: 38px; height: 38px; display: grid; place-items: center; border-radius: 50%; color: ${({ theme }) => theme.colors.text}; background: rgba(9,11,13,.68); backdrop-filter: blur(10px); font-size: 12px;`;
export const CardBody = styled.div`
  flex: 1; padding: 24px; display: flex; flex-direction: column; justify-content: space-between; align-items: flex-start; gap: 22px;
  h3 { margin-top: 8px; font-size: clamp(24px,2vw,32px); line-height: 1.05; letter-spacing: -.04em; }
  > p { color: ${({ theme }) => theme.colors.muted}; line-height: 1.65; }
`;
export const Type = styled.p`color: ${({ theme }) => theme.colors.accent}; font-size: 10px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;`;
export const CardAction = styled.span`display: inline-flex; align-items: center; gap: 10px; color: ${({ theme }) => theme.colors.text}; font-size: 12px; font-weight: 700; svg { transition: transform 220ms ease; } ${Card}:is(a):hover & svg { transform: translateX(5px); }`;
export const AllWork = styled.a`width: fit-content; margin: 56px auto 0; padding: 14px 20px; display: flex; align-items: center; gap: 12px; border-bottom: 1px solid rgba(200,255,61,.5); color: ${({ theme }) => theme.colors.text}; font-size: 14px; font-weight: 700; text-decoration: none; transition: color 180ms ease; &:hover { color: ${({ theme }) => theme.colors.accent}; }`;
