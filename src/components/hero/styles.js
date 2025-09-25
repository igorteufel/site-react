import meImage from '../../assets/Igor.png';

export const heroStyles = {
  hero: {
    height: '100vh',
    display: 'flex',
    backgroundImage: `url(${meImage})`, // usa a variável importada
    backgroundSize: 'cover',
    backgroundPosition: 'right center',
    backgroundRepeat: 'no-repeat',
  },

  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 8,
    color: 'white',
    maxWidth: '80%', // garante que o texto não passe do meio
  },

  body: {
    color: '#B7F62B',
    fontSize: '24px',
    margin: 0,
    padding: '4px 0px 0px',
    fontWeight: 'lighter',
  },

  complement: {
    color: '#EDEDF3',
    fontSize: '24px',
    margin: 0,
    padding: '4px 0px 0px',
    fontWeight: 'lighter',
  },

  title: {
    fontSize: 'clamp(80px, 5vw, 64px)',
    fontWeight: 'bold',
    margin: 0,
    lineHeight: 1.1,
    color: '#fff',
  },

  buttonContainer: {
    display: 'flex',
    gap: 16,
    marginTop: 24,
    flexWrap: 'wrap',
  },

  button: {
    width: 216,
    height: 32,
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    border: '2px solid #1F1B26',
    borderRadius: 12,
    padding: 16,
    cursor: 'pointer',
    backgroundColor: '#0B090D',
    transition: 'transform 0.2s ease, background-color 0.2s ease',
  },

  buttonText: {
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
    gap: 2,
  },

  buttonTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  buttonBody: {
    fontSize: 14,
    opacity: 0.8,
  },

  buttonLogo: {
    width: 28,
    height: 28,
  },
};
