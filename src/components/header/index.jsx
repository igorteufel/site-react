import React from 'react';
import * as S from './styles';

export default function Header() {
  const menuItems = [
    { label: 'Sobre', href: 'about' },
    { label: 'Portfólio', href: 'portfolio' },
    { label: 'Empresas', href: 'works' },
    { label: 'Conectar', href: 'insta' },
  ];

  const handleScroll = (id) => (e) => {
    e.preventDefault();

    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <S.StyledHeader>
      <S.Nav>
        {menuItems.map((item, i) => (
          <S.NavLink
            key={i}
            href={`#${item.href}`}
            onClick={handleScroll(item.href)}
          >
            {item.label}
          </S.NavLink>
        ))}
      </S.Nav>
    </S.StyledHeader>
  );
}
