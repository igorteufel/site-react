import { useState } from 'react';
import { heroStyles } from './styles';
import behancelogo from '../../assets/behancelogo.svg';
import doclogo from '../../assets/pdflogo.svg';

function Hero() {
  const [hovered, setHovered] = useState(null);

  return (
    <section style={heroStyles.hero}>
      <div style={heroStyles.content}>
        <p style={heroStyles.body}>Igor Josef Teufel</p>

        <p style={heroStyles.complement}>
          Transformo ideias em experiências digitais
        </p>

        <h1 style={heroStyles.title}>UX/UI Designer</h1>

        <div style={heroStyles.buttonContainer}>
          {/* Botão Behance */}
          <a
            href="https://www.behance.net/igor_teufel"
            target="_blank"
            rel="noreferrer"
            style={{
              ...heroStyles.button,
              ...(hovered === 'behance' ? heroStyles.buttonHover : {}),
            }}
            onMouseEnter={() => setHovered('behance')}
            onMouseLeave={() => setHovered(null)}
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
            style={{
              ...heroStyles.button,
              ...(hovered === 'pdf' ? heroStyles.buttonHover : {}),
            }}
            onMouseEnter={() => setHovered('pdf')}
            onMouseLeave={() => setHovered(null)}
          >
            <img src={doclogo} alt="pdf" style={heroStyles.buttonLogo} />

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
