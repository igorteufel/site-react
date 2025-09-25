// src/components/hero/index.jsx
import { heroStyles } from './styles';
import behancelogo from '../../assets/behancelogo.svg';
import doclogo from '../../assets/pdflogo.svg';

function Hero() {
  return (
    <section style={heroStyles.hero}>
      <div style={heroStyles.content}>
        <p style={heroStyles.body}> Igor Josef Teufel </p>
        <p style={heroStyles.complement}>
          {' '}
          Transformo ideias em experiências digitais{' '}
        </p>
        <h1 style={heroStyles.title}>UX/UI Designer</h1>

        <div style={heroStyles.buttonContainer}>
          {/* Botão Behance */}
          <a
            href="https://www.behance.net/igor_teufel"
            target="_blank"
            rel="noreferrer"
            style={{ ...heroStyles.button, textDecoration: 'none' }}
          >
            <img
              src={behancelogo}
              alt="behance"
              style={heroStyles.buttonLogo}
            />
            <div style={heroStyles.buttonText}>
              <span style={heroStyles.buttonBody}>Meu portfólio</span>
              <span style={heroStyles.buttonTitle}>Behance</span>
            </div>
          </a>

          {/* Botão PDF */}
          <a
            href="/curriculo.pdf"
            download="curriculo.pdf"
            style={{ ...heroStyles.button, textDecoration: 'none' }}
          >
            <img src={doclogo} alt="pdfLogo" style={heroStyles.buttonLogo} />
            <div style={heroStyles.buttonText}>
              <span style={heroStyles.buttonBody}>Meu currículo</span>
              <span style={heroStyles.buttonTitle}>Download</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
