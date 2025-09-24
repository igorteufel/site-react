import { socialStyles } from './styles';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

function Social() {
  return (
    // wrapper só pra dar espaçamento entre sessões
    <div style={socialStyles.wrapper}>
      <section style={socialStyles.section}>
        <div style={socialStyles.content}>
          <h1 style={socialStyles.title}>
            Vamos nos <br /> conectar? <br />
          </h1>

          <div style={socialStyles.icons}>
            <a
              href="https://instagram.com/igorteufel.ux"
              target="_blank"
              rel="noreferrer"
              style={socialStyles.icon}
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com/in/igor-teufel/"
              target="_blank"
              rel="noreferrer"
              style={socialStyles.icon}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/5512988194507?text=Oie%20Igor%20%E2%9C%8C%F0%9F%8F%BB"
              target="_blank"
              rel="noreferrer"
              style={socialStyles.icon}
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Social;
