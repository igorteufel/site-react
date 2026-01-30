export const stylePort = {
  section: {
    width: '100%',
    padding: '100px 0',
    color: 'white',
  },

  title: {
    fontSize: '40px',
    fontWeight: 'bold',
    marginBottom: '32px',
    color: 'white',
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
  },

  card: {
    background: '#1a1a1d',
    borderRadius: '12px',
    overflow: 'hidden',
    cursor: 'pointer',
    position: 'relative',
    textDecoration: 'none',
    color: 'white',
    aspectRatio: '1 / 1',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
  },

  cardHover: {
    transform: 'translateY(-6px)',
    boxShadow: '0 12px 24px rgba(0,0,0,0.35)',
  },

  imageWrapper: {
    flex: 1,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },

  cardTitle: {
    padding: '12px',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: '16px',
    background: '#1a1a1d',
  },

  badge: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    padding: '8px 16px',
    borderRadius: '40px',
    fontSize: '12px',
    color: '#B5FF49',
    background: 'rgba(255,255,255,0.08)',
    border: '1px solid rgba(255,255,255,0.2)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    zIndex: 2,
  },
};
