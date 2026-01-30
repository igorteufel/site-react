import stylesAbout from './styles';

import Img1 from '../../assets/img1.png';
import Img2 from '../../assets/img2.png';
import Img3 from '../../assets/img3.png';
import Img4 from '../../assets/img4.jpg';
import Img5 from '../../assets/img5.jpg';
import Img6 from '../../assets/img6.jpg';
import Img7 from '../../assets/img7.png';

const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7];

// duplica pra loop infinito
const loopImages = [...images, ...images];

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

      <div style={stylesAbout.wrapper}>
        <div style={stylesAbout.carousel}>
          {loopImages.map((img, idx) => (
            <div key={idx} style={stylesAbout.slide}>
              <img src={img} alt="" style={stylesAbout.image} />
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes aboutScroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </section>
  );
}

export default About;
