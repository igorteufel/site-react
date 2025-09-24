import wordbackground from '../../assets/Works.png';

const styleJourney = {
  container: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${wordbackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: '100px 0',
  },

  centerText: {
    position: 'relative',
    textAlign: 'center',
    color: 'white',
    zIndex: 3,
    padding: '0 16px',
  },

  title: {
    fontSize: '40px',
    fontWeight: 'bold',
    marginBottom: '12px',
  },

  subtitle: {
    fontSize: '24px',
    opacity: 0.8,
    maxWidth: '500px',
    lineHeight: 1.5,
    textAlign: 'center',
  },

  orbit: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    borderRadius: '50%',
    transformOrigin: '50% 50%',
    zIndex: 2,
  },

  balloon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    borderRadius: '50%',
    background: '#1c1c24',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 15px rgba(255, 255, 255, 0.2)',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    willChange: 'transform',
  },

  image: {
    width: '70%',
    height: '70%',
    objectFit: 'contain',
    pointerEvents: 'none',
  },

  tooltip: {
    position: 'absolute',
    bottom: '110%',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'rgba(0,0,0,0.8)',
    color: 'white',
    padding: '6px 12px',
    borderRadius: '6px',
    fontSize: '14px',
    whiteSpace: 'nowrap',
    zIndex: 10,
  },
};

export { styleJourney };
