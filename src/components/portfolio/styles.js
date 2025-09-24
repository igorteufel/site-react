export const stylePort = {
  section: {
    width: '100%',
    padding: '100px 0',
    color: 'white',
  },

  title: {
    fontSize: '40px',
    fontWeight: 'bold',
    margin: 0,
    marginBottom: '32px',
    textAlign: 'left',
    color: 'white',
  },

  wrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },

  carousel: {
    display: 'flex',
    gap: '24px',
    overflowX: 'hidden',
    scrollBehavior: 'smooth',
    flex: 1,
    padding: '20px 0',
  },

  card: {
    flex: '0 0 280px',
    background: '#1a1a1d',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
    overflow: 'hidden',
    transition: 'transform 0.2s ease',
    cursor: 'pointer',
    position: 'relative', // 👈 necessário pro badge
    textDecoration: 'none', // remove underline
    color: 'inherit', // herda a cor do pai (ou defina 'white')
  },

  image: {
    width: '100%',
    display: 'block',
  },

  cardTitle: {
    padding: '12px',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: '16px',
    color: 'white',
    textDecoration: 'none', // remove o underline
  },

  arrow: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '48px',
    height: '48px',
    background: 'rgba(0,0,0,0.5)',
    border: 'none',
    fontSize: '20px',
    color: 'white',
    cursor: 'pointer',
    borderRadius: '50%',
    zIndex: 2,
    padding: 0,
    lineHeight: 1,
  },

  arrowLeft: {
    left: '-20px',
  },

  arrowRight: {
    right: '-20px',
  },

  // 🌟 Badge Liquid Glass Neon
  badge: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    padding: '8px 16px',
    borderRadius: '40px',
    fontSize: '12px',
    fontWeight: 'regular',
    color: '#B5FF49',
    background: 'rgba(255, 255, 255, 0.08)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    zIndex: 3,
  },
};
