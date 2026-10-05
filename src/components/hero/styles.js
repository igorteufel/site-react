import styled from 'styled-components';

export const Section = styled.section`
  position: relative; min-height: 100svh; padding: 130px 32px 76px; display: flex; align-items: center; overflow: hidden; isolation: isolate;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) { padding: 120px 20px 90px; }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) { padding: 100px 16px 72px; align-items: flex-start; }
`;
export const Grid = styled.div`
  position: absolute; inset: 0; z-index: -3; opacity: .18; background-image: linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px); background-size: 72px 72px; mask-image: linear-gradient(to bottom, black, transparent 86%);
`;
export const Glow = styled.div`
  position: absolute; z-index: -2; top: -20%; right: -12%; width: 760px; height: 760px; border-radius: 50%; background: ${({ theme }) => theme.colors.accent}; opacity: .08; filter: blur(110px);
`;
export const Inner = styled.div`
  position: relative; z-index: 2; width: min(100%, ${({ theme }) => theme.layout.wideMax}); margin: 0 auto; display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(420px, .95fr); align-items: center; gap: clamp(30px, 6vw, 96px);
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) { grid-template-columns: minmax(0, 1fr) minmax(340px, .8fr); }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) { grid-template-columns: 1fr; max-width: 760px; }
`;
export const Copy = styled.div`display: flex; flex-direction: column; align-items: flex-start; gap: 24px; transform-origin: left center;`;
export const Eyebrow = styled.p`
  display: inline-flex; align-items: center; gap: 10px; color: rgba(245,243,238,.66); font-size: 11px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase;
  i { width: 8px; height: 8px; border-radius: 50%; background: ${({ theme }) => theme.colors.accent}; box-shadow: 0 0 18px rgba(200,255,61,.7); }
`;
export const Title = styled.h1`
  max-width: 850px; color: ${({ theme }) => theme.colors.text}; font-size: ${({ theme }) => theme.typography.sizes.hero}; font-weight: 600; line-height: .93; letter-spacing: -.065em;
  em { color: ${({ theme }) => theme.colors.accent}; font-style: normal; }
`;
export const Description = styled.p`max-width: 620px; color: ${({ theme }) => theme.colors.muted}; font-size: ${({ theme }) => theme.typography.sizes.bodyLarge}; line-height: 1.55;`;
export const Actions = styled.div`
  display: flex; flex-wrap: wrap; gap: 12px; margin-top: 6px;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) { width: 100%; }
`;
const Action = styled.a`
  min-height: 54px; padding: 0 22px; display: inline-flex; align-items: center; justify-content: center; gap: 12px; border-radius: ${({ theme }) => theme.radii.round}; font-size: 14px; font-weight: 700; text-decoration: none; transition: transform 220ms ease, background 220ms ease, color 220ms ease;
  &:hover { transform: translateY(-3px); }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) { flex: 1; min-width: 150px; }
`;
export const Primary = styled(Action)`color: ${({ theme }) => theme.colors.dark}; background: ${({ theme }) => theme.colors.accent}; &:hover { background: ${({ theme }) => theme.colors.light}; }`;
export const Secondary = styled(Action)`border: 1px solid ${({ theme }) => theme.colors.border}; color: ${({ theme }) => theme.colors.text}; background: rgba(255,255,255,.03); &:hover { background: rgba(255,255,255,.08); }`;
export const PortraitWrap = styled.figure`
  position: relative; width: 100%; aspect-ratio: 1 / 1; margin: 0; align-self: center; border-radius: 28px; background: radial-gradient(circle at 45% 38%, rgba(200,255,61,.2), transparent 38%), linear-gradient(145deg, #1c2226, #101316); overflow: hidden; transform-origin: center bottom;
  &::before { content: ''; position: absolute; inset: 20px; border: 1px solid rgba(255,255,255,.13); border-radius: inherit; z-index: 2; }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) { width: min(100%, 660px); margin-inline: auto; }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) { border-radius: 18px; }
`;
export const Portrait = styled.img`position: absolute; z-index: 1; inset: 0 auto 0 -7%; width: 107%; height: 100%; object-fit: cover; object-position: 100% center; filter: saturate(.88) contrast(1.04);`;
export const NameTag = styled.figcaption`
  position: absolute; z-index: 4; top: 17%; left: 7%; padding: 9px 14px; border-radius: ${({ theme }) => theme.radii.round}; color: ${({ theme }) => theme.colors.dark}; background: ${({ theme }) => theme.colors.light}; font-size: 12px; font-weight: 700; transform: rotate(-5deg);
  span { color: #687078; }
`;
export const Availability = styled.p`
  position: absolute; z-index: 4; right: 28px; bottom: 28px; width: max-content; max-width: calc(100% - 56px); padding: 13px 18px; display: flex; align-items: center; gap: 9px; border: 1px solid rgba(255,255,255,.16); border-radius: ${({ theme }) => theme.radii.round}; color: ${({ theme }) => theme.colors.text}; background: rgba(9,11,13,.7); backdrop-filter: blur(12px); font-size: 10px; font-weight: 600; line-height: 1; white-space: nowrap;
  i { width: 7px; height: 7px; flex: 0 0 auto; border-radius: 50%; background: ${({ theme }) => theme.colors.accent}; }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) { right: 18px; bottom: 18px; max-width: calc(100% - 36px); padding: 12px 14px; font-size: 9px; }
`;
export const FloatMark = styled.span`position: absolute; z-index: 0; top: 18%; right: -2%; color: rgba(200,255,61,.16); font-family: ${({ theme }) => theme.typography.display}; font-size: clamp(90px, 12vw, 170px); font-weight: 700; letter-spacing: -.08em;`;
export const BottomLine = styled.div`
  position: absolute; z-index: 4; left: 32px; right: 32px; bottom: 24px; display: flex; justify-content: space-between; align-items: center; color: rgba(245,243,238,.45); font-size: 10px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
  a { display: flex; align-items: center; gap: 9px; color: ${({ theme }) => theme.colors.text}; text-decoration: none; }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) { span:last-child { display: none; } }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) { left: 16px; right: 16px; a { display: none; } }
`;
export const GiantWord = styled.span`position: absolute; z-index: -1; left: 50%; bottom: -.18em; transform: translateX(-50%); color: rgba(245,243,238,.022); font-family: ${({ theme }) => theme.typography.display}; font-size: clamp(130px, 23vw, 370px); font-weight: 700; line-height: .8; letter-spacing: -.08em; white-space: nowrap;`;
