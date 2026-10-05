import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  inset: 18px 0 auto;
  z-index: 1000;
  padding: 0 24px;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) { inset: 10px 0 auto; padding: 0 10px; }
`;

export const Inner = styled.div`
  width: min(100%, 1160px);
  min-height: 58px;
  margin: 0 auto;
  padding: 7px 8px 7px 14px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 20px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: ${({ theme }) => theme.radii.round};
  background: rgba(9, 11, 13, 0.72);
  box-shadow: 0 12px 44px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(18px) saturate(150%);
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) { grid-template-columns: auto 1fr auto; }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) { min-height: 52px; padding-left: 8px; gap: 8px; }
`;

export const Brand = styled.a`
  display: inline-flex; align-items: center; gap: 10px; color: ${({ theme }) => theme.colors.text}; text-decoration: none; width: fit-content;
  strong { font-size: 13px; letter-spacing: -0.01em; }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) { strong { display: none; } }
`;

export const Avatar = styled.img`
  width: 38px;
  height: 38px;
  display: block;
  border: 2px solid ${({ theme }) => theme.colors.accent};
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  background: ${({ theme }) => theme.colors.accent};
`;

export const Nav = styled.nav`
  display: flex; align-items: center; gap: 4px;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) { justify-content: center; }
`;

export const NavLink = styled.a`
  min-height: 40px; padding: 0 13px; display: inline-flex; align-items: center; border-radius: ${({ theme }) => theme.radii.round}; color: rgba(245, 243, 238, 0.7); font-size: 12px; font-weight: 600; text-decoration: none; transition: color 180ms ease, background 180ms ease;
  &:hover { color: ${({ theme }) => theme.colors.text}; background: rgba(255,255,255,.07); }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) { padding: 0 7px; font-size: 10px; }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) { &:last-child { display: none; } }
`;

export const Contact = styled.a`
  justify-self: end; min-height: 44px; padding: 0 18px; display: inline-flex; align-items: center; justify-content: center; gap: 9px; border-radius: ${({ theme }) => theme.radii.round}; color: ${({ theme }) => theme.colors.dark}; background: ${({ theme }) => theme.colors.accent}; font-size: 12px; font-weight: 700; text-decoration: none; transition: transform 220ms ease, background 220ms ease;
  &:hover { transform: translateY(-2px); background: ${({ theme }) => theme.colors.light}; }
  svg { font-size: 11px; }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) { width: 38px; min-height: 38px; padding: 0; font-size: 0; }
`;
