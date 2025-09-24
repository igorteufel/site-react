import Futurista from '../../assets/Futurista.png';

export const socialStyles = {
  // novo wrapper para espaçamento externo
  wrapper: {
    padding: '80px 0',
  },

  section: {
    width: '100%',
    minHeight: '700px',
    borderRadius: '24px',
    backgroundImage: `url(${Futurista})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    color: 'white',
  },

  content: {
    width: '100%',
    maxWidth: '14400px',
    padding: '64px 60px',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
  },

  title: {
    fontSize: 'clamp(64px, 5vw, 64px)',
    margin: 0,
    fontFamily: "'Inter', sans-serif",
    fontWeight: 900,
  },

  icons: {
    display: 'flex',
    gap: '24px',
  },

  icon: {
    fontSize: '32px',
    color: 'white',
    transition: 'transform 0.3s ease, color 0.3s ease',
    textDecoration: 'none',
    cursor: 'pointer',
  },
};
