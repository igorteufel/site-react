import React, { useState } from 'react';
import { headerStyles } from './styles';

export default function Header() {
  const [hovered, setHovered] = useState(null);

  const menuItems = [
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Sobre', href: '#about' },
    { label: 'Empresas', href: '#works' },
    { label: 'Insta', href: '#insta' },
  ];

  return (
    <header style={headerStyles.header}>
      <nav style={headerStyles.nav}>
        {menuItems.map((item, i) => (
          <a
            key={i}
            href={item.href}
            style={{
              ...headerStyles.link,
              ...(hovered === i ? headerStyles.linkHover : {}),
            }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
