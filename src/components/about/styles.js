const stylesAbout = {
  section: {
    color: 'white',
    padding: '80px 0',
  },

  title: {
    fontSize: 'clamp(28px, 5vw, 40px)', // responsivo natural
    fontWeight: 'bold',
    margin: 0,
    marginBottom: '32px',
    textAlign: 'left',
    color: 'white',
  },

  subtitle: {
    fontSize: 'clamp(16px, 2vw, 24px)', // responsivo natural
    fontWeight: '400',
    opacity: 0.8,
    lineHeight: 1.5,
    marginBottom: '16px',
    textAlign: 'left',
  },

  imagesContainer: {
    display: 'flex',
    flexWrap: 'wrap', // 👈 evita quebrar feio
    gap: '24px',
    padding: '32px 0 0',
  },

  imageWrapper: {
    flex: '1 1 300px', // 👈 cada imagem ocupa mínimo 300px
    maxWidth: 'auto',
  },

  image: {
    width: '100%',
    borderRadius: '12px',
    objectFit: 'cover',
  },
};

export default stylesAbout;
