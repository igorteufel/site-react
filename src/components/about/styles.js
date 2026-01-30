const stylesAbout = {
  section: {
    color: 'white',
    padding: '80px 0',
  },

  title: {
    fontSize: 'clamp(28px, 5vw, 40px)',
    fontWeight: 'bold',
    marginBottom: '32px',
  },

  subtitle: {
    fontSize: 'clamp(16px, 2vw, 24px)',
    opacity: 0.8,
    lineHeight: 1.5,
    marginBottom: '16px',
  },

  wrapper: {
    overflow: 'hidden',
    marginTop: '32px',
  },

  carousel: {
    display: 'flex',
    gap: '24px',
    width: 'fit-content',
    animation: 'aboutScroll 40s linear infinite',
    willChange: 'transform',
  },

  slide: {
    flex: '0 0 360px',
    aspectRatio: '4 / 3',
  },

  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '12px',
    display: 'block',
  },
};

export default stylesAbout;
