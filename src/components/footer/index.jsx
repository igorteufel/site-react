import stylesFooter from './styles';
import Joia from '../../assets/joia.gif';

export default function Footer() {
  return (
    <footer style={stylesFooter.section}>
      <div style={stylesFooter.container}>
        <p style={stylesFooter.title}>Obrigado por chegar até aqui</p>
        <p style={stylesFooter.subtitle}>
          Acredito que um bom designer nunca para de aprender e por isso, estou
          constantemente me atualizando por meio de cursos, certificações e
          estudos contínuos, fortalecendo tanto minha base técnica quanto
          estratégica.
        </p>

        <img src={Joia} alt="emoji animado" style={stylesFooter.joia} />
      </div>
    </footer>
  );
}
