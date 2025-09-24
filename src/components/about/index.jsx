import stylesAbout from './styles';
import Img1 from '../../assets/img1.png';
import Img2 from '../../assets/img2.png';
import Img3 from '../../assets/img3.png';

function About() {
  return (
    <section style={stylesAbout.section}>
      <h1 style={stylesAbout.title}>Sobre mim</h1>
      <p style={stylesAbout.subtitle}>
        Sou movido pelo desafio de simplificar o complexo. Como Designer, minha
        missão é criar experiências digitais intuitivas, acessíveis e com
        impacto real. Ao longo da minha jornada, descobri que ensinar e
        compartilhar também fazem parte do meu caminho.
      </p>
      <p style={stylesAbout.subtitle}>
        Evoluir, criar e colaborar estão no centro de tudo que faço e é só o
        começo.
      </p>

      <div style={stylesAbout.imagesContainer}>
        {[Img1, Img2, Img3].map((img, idx) => (
          <div key={idx} style={stylesAbout.imageWrapper}>
            <img
              src={img}
              alt={`Imagem ${idx + 1}`}
              style={stylesAbout.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
