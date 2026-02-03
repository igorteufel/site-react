import styled from 'styled-components';

export const StyledHeader = styled.header`
  margin: 32px auto 0;
  z-index: 1000;
  border-radius: 40px;
  padding: 8px 24px;
  background: rgba(255, 255, 255, 0.1);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  backdrop-filter: blur(12px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 32px;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 12px;
  }
`;

export const NavLink = styled.a`
  color: white;
  font-size: clamp(12px, 1.2vw, 14px);
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #b7f62b;
    text-shadow: 0 0 8px rgba(183, 246, 43, 0.8);
  }
`;
