const styleCertify = {
  section: {
    width: '100%',
    color: 'white',
    padding: '80px 0',
    display: 'flex',
    justifyContent: 'center',
  },

  container: {
    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
  },

  title: {
    fontSize: 'clamp(28px, 5vw, 40px)',
    fontWeight: 'bold',
    margin: 0,
  },

  wrapper: {
    width: '100%',
    overflow: 'hidden',
  },

  carousel: {
    display: 'flex',
    gap: '24px',
    width: 'max-content',
    animation: 'scroll 50s linear infinite',
  },

  card: {
    flex: '0 0 auto',
    width: 'clamp(200px, 30vw, 400px)',
    borderRadius: 12,
    background: '#1a1a1d',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
  },

  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },

  // Modal styles
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    cursor: 'pointer',
  },

  modalContent: {
    backgroundColor: '#1a1a1d',
    borderRadius: '12px',
    padding: '20px',
    maxWidth: '90%',
    maxHeight: '90%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
};

export { styleCertify };
