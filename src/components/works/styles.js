import { motion } from 'framer-motion';
import styled, { css, keyframes } from 'styled-components';

const orbitPulse = keyframes`50% { transform: translate(-50%, -50%) rotate(180deg); opacity: .42; } 100% { transform: translate(-50%, -50%) rotate(360deg); }`;
const float = keyframes`50% { transform: translateY(-7px); }`;

export const Section = styled.section`padding: 150px 32px 120px; color: ${({ theme }) => theme.colors.dark}; background: ${({ theme }) => theme.colors.accent}; scroll-margin-top: 80px; overflow: hidden; @media (max-width: ${({ theme }) => theme.breakpoints.sm}) { padding: 96px 16px; }`;
export const Inner = styled.div`width: min(100%, ${({ theme }) => theme.layout.contentMax}); margin: 0 auto;`;
export const Header = styled.div`display: grid; grid-template-columns: .55fr 1.15fr .75fr; gap: 40px; margin-bottom: 44px; align-items: end; @media (max-width: ${({ theme }) => theme.breakpoints.md}) { grid-template-columns: 1fr; gap: 24px; margin-bottom: 60px; }`;
export const Kicker = styled.p`align-self: start; font-size: 11px; font-weight: 900; letter-spacing: .12em; text-transform: uppercase; span { margin-right: 12px; opacity: .5; }`;
export const Title = styled.h2`font-size: ${({ theme }) => theme.typography.sizes.section}; font-weight: 900; line-height: .95; letter-spacing: -.055em; em { opacity: .5; font-style: normal; }`;
export const Intro = styled.p`font-size: 16px; line-height: 1.7; opacity: .72;`;

export const Orbit = styled.div`
  position: relative; min-height: 690px; isolation: isolate;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) { min-height: 620px; }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) { min-height: auto; padding-left: 20px; }
`;
export const Ring = styled.div`
  position: absolute; z-index: -1; left: 50%; top: 50%; width: ${({ $outer }) => $outer ? '86%' : '62%'}; aspect-ratio: 1.9 / 1; border: 1px ${({ $outer }) => $outer ? 'solid' : 'dashed'} rgba(9,11,13,${({ $outer }) => $outer ? '.34' : '.22'}); border-radius: 50%; transform: translate(-50%,-50%);
  &::after { content: ''; position: absolute; top: -5px; left: 50%; width: 9px; height: 9px; border-radius: 50%; background: ${({ theme }) => theme.colors.dark}; }
  ${({ $outer }) => $outer && css`animation: ${orbitPulse} 32s linear infinite;`}
  @media (prefers-reduced-motion: reduce) { animation: none; }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) { display: none; }
`;
export const Center = styled(motion.div)`
  position: absolute; left: 50%; top: 50%; width: 230px; height: 230px; translate: -50% -50%; display: flex; flex-direction: column; align-items: center; justify-content: center; border-radius: 50%; color: ${({ theme }) => theme.colors.text}; background: ${({ theme }) => theme.colors.dark}; box-shadow: 0 24px 60px rgba(9,11,13,.24); text-align: center;
  strong { font-size: 72px; font-weight: 900; line-height: .9; letter-spacing: -.06em; }
  span { margin-top: 12px; color: rgba(245,243,238,.68); font-size: 11px; font-weight: 700; line-height: 1.4; text-transform: uppercase; letter-spacing: .08em; }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) { width: 190px; height: 190px; strong { font-size: 58px; } }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) { position: relative; left: auto; top: auto; width: 170px; height: 170px; translate: none; margin: 0 auto 52px; }
`;
export const CompanyList = styled.ol`list-style: none; margin: 0; padding: 0; @media (max-width: ${({ theme }) => theme.breakpoints.sm}) { position: relative; display: grid; gap: 20px; &::before { content: ''; position: absolute; left: 28px; top: 0; bottom: 0; width: 1px; background: rgba(9,11,13,.3); } }`;
export const CompanyNode = styled(motion.li)`
  position: absolute; z-index: 2; display: flex; align-items: center; gap: 12px;
  ${({ $index }) => [
    'left: 2%; top: 55%;',
    'left: 14%; top: 16%;',
    'left: 50%; top: 3%; translate: -50% 0;',
    'right: 14%; top: 16%; flex-direction: row-reverse; text-align: right;',
    'right: 2%; top: 55%; flex-direction: row-reverse; text-align: right;',
  ][$index]}
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    ${({ $index }) => [
      'left: 0; top: 58%;', 'left: 8%; top: 16%;', 'left: 50%; top: 1%;', 'right: 8%; top: 16%;', 'right: 0; top: 58%;'
    ][$index]}
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) { position: relative; inset: auto; translate: none; transform: none; flex-direction: row; text-align: left; animation: none; }
`;
export const Step = styled.span`position: absolute; top: -14px; left: 62px; font-size: 9px; font-weight: 900; opacity: .52; @media (max-width: ${({ theme }) => theme.breakpoints.sm}) { left: 72px; }`;
export const LogoWrap = styled.div`width: 74px; height: 74px; padding: 7px; flex: 0 0 auto; display: grid; place-items: center; overflow: hidden; border: 4px solid ${({ theme }) => theme.colors.dark}; border-radius: 50%; background: ${({ $surface }) => $surface === 'dark' ? '#030a3c' : '#fff'}; box-shadow: 0 12px 30px rgba(9,11,13,.22); animation: ${float} 4s ease-in-out infinite; img { width: 100%; height: 100%; display: block; object-fit: contain; opacity: 1; filter: none; transform: translate(${({ $offsetX }) => $offsetX || 0}px, ${({ $offsetY }) => $offsetY || 0}px) scale(${({ $scale }) => $scale || 1}); } @media (max-width: ${({ theme }) => theme.breakpoints.md}) { width: 70px; height: 70px; } @media (prefers-reduced-motion: reduce) { animation: none; }`;
export const CompanyCopy = styled.div`display: flex; flex-direction: column; gap: 4px; white-space: nowrap; strong { font-size: 15px; font-weight: 900; } span { font-size: 10px; opacity: .62; } @media (max-width: ${({ theme }) => theme.breakpoints.md}) { span { display: none; } } @media (max-width: ${({ theme }) => theme.breakpoints.sm}) { span { display: block; white-space: normal; } }`;
export const Direction = styled.div`position: absolute; left: 50%; bottom: 58px; width: min(52%, 560px); transform: translateX(-50%); display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 14px; font-size: 9px; font-weight: 900; letter-spacing: .1em; text-transform: uppercase; i { height: 1px; background: rgba(9,11,13,.4); position: relative; } i::after { content: ''; position: absolute; right: 0; top: -3px; width: 7px; height: 7px; border-top: 1px solid; border-right: 1px solid; transform: rotate(45deg); } @media (max-width: ${({ theme }) => theme.breakpoints.sm}) { display: none; }`;
export const Expertise = styled.div`display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-top: 10px; span { padding: 11px 15px; border-radius: ${({ theme }) => theme.radii.round}; color: ${({ theme }) => theme.colors.text}; background: ${({ theme }) => theme.colors.dark}; font-size: 11px; font-weight: 700; }`;
