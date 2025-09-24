import background from '../assets/backgroundhero.png';

const landingpageStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    width: '100%',
    padding: '32px 100px',
    overflowX: 'hidden', // 🚀 garante que nada vaze na horizontal
    boxSizing: 'border-box', // impede que o padding some com width
  },

  content: {
    width: '100%',
    height: '100%',
    maxWidth: '1366px',
    margin: '0 auto',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflowX: 'hidden', // protege o conteúdo também
  },

  backToTop: {
    position: 'fixed',
    bottom: '40px',
    right: '40px',
    background: 'rgba(255,255,255,0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.2)',
    color: 'white',
    borderRadius: '50%',
    padding: '12px',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    zIndex: 1000,
    transition: 'all 0.3s ease',
  },
};

export default landingpageStyles;
