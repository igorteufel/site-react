const headerStyles = {
  header: {
    margin: '32px auto 0',
    zIndex: 1000,
    borderRadius: '40px',
    padding: '8px 24px',
    background: 'rgba(255, 255, 255, 0.1)',
    WebkitBackdropFilter: 'blur(12px) saturate(180%)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
    width: 'fit-content', // 🔑 pega só o tamanho do conteúdo
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  nav: {
    display: 'flex',
    gap: '32px',
    alignItems: 'center',
    justifyContent: 'center',
  },

  link: {
    color: 'white',
    fontSize: '16px',
    fontWeight: 500,
    textDecoration: 'none',
    transition: 'all 0.3s ease',
  },

  linkHover: {
    color: '#B7F62B',
    textShadow: '0 0 8px rgba(183, 246, 43,)',
  },
};

export { headerStyles };
