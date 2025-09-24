import { useRef } from 'react';
import { stylePort } from './styles';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import helpsiImg from '../../assets/Card01.png';
import coopspartyImg from '../../assets/Card02.png';
import petcareImg from '../../assets/Card03.png';
import evaImg from '../../assets/Card04.png';
import lotusIMG from '../../assets/Card05.png';

const projects = [
  {
    id: 2,
    title: 'Coopsparty',
    image: coopspartyImg,
    link: 'https://www.behance.net/gallery/216374769/Aplicativo-Coopsparty',
  },
  {
    id: 3,
    title: 'Petcare',
    image: petcareImg,
    link: 'https://www.behance.net/gallery/230323907/PETCARE',
  },
  {
    id: 4,
    title: 'Eva Design System',
    image: evaImg,
    link: 'https://www.behance.net/gallery/148180513/Design-System-EVA',
  },
  {
    id: 5,
    title: 'Lotus Design System',
    image: lotusIMG,
    link: '', // 👉 coloca o link real depois
  },
  {
    id: 1,
    title: 'Helpsi 2024',
    image: helpsiImg,
    link: '', // 👉 coloca o link real depois
  },
];

function Portfolio() {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 320;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section style={stylePort.section}>
      <h1 style={stylePort.title}>Portfólio</h1>

      <div style={stylePort.wrapper}>
        {/* seta esquerda */}
        <button
          style={{ ...stylePort.arrow, ...stylePort.arrowLeft }}
          onClick={() => scroll('left')}
        >
          <FaChevronLeft />
        </button>

        {/* cards */}
        <div ref={carouselRef} style={stylePort.carousel}>
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              style={stylePort.card}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = 'scale(1.05)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = 'scale(1)')
              }
            >
              {/* Badge neon apenas no Helpsi e Lotus */}
              {(project.title.includes('Helpsi') ||
                project.title.includes('Lotus')) && (
                <div style={stylePort.badge} className="badge-neon">
                  Em andamento
                </div>
              )}

              <img
                src={project.image}
                alt={project.title}
                style={stylePort.image}
              />
              <p style={stylePort.cardTitle}>{project.title}</p>
            </a>
          ))}
        </div>

        {/* seta direita */}
        <button
          style={{ ...stylePort.arrow, ...stylePort.arrowRight }}
          onClick={() => scroll('right')}
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Portfolio;
