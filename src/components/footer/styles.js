const stylesFooter = {
  section: {
    position: 'relative',
    width: '100%',
    minHeight: '400px',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '80px 0 0',
  },

  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
  },

  container: {
    position: 'relative',
    zIndex: 1,
    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '24px',
    boxSizing: 'border-box',
  },

  title: {
    fontSize: 'clamp(24px, 4vw, 40px)', // 👈 responsivo automático
    fontWeight: 'bold',
    margin: 0,
    textAlign: 'center',
    color: 'white',
  },

  subtitle: {
    fontSize: 'clamp(14px, 2vw, 20px)', // 👈 responsivo automático
    color: 'white',
    textAlign: 'center',
    margin: 0,
    maxWidth: '600px',
    fontWeight: '400',
    lineHeight: '1.4',
    opacity: 0.85,
  },

  iconsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '24px',
    marginTop: '24px',
  },

  icon: {
    width: '40px',
    height: '40px',
    cursor: 'pointer',
  },

  joia: {
    display: 'block',
    marginTop: '24px',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 'clamp(200px, 30vw, 400px)', // 👈 responsivo igual fizemos no outro
    height: 'auto',
  },
};

export default stylesFooter;
