import { useState } from 'react';
import { stylePort } from './styles';

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
    link: '',
  },
  {
    id: 1,
    title: 'Helpsi 2024',
    image: helpsiImg,
    link: '',
  },
];

function Portfolio() {
  const [hovered, setHovered] = useState(null);

  return (
    <section style={stylePort.section}>
      <h1 style={stylePort.title}>Portfólio</h1>

      <div style={stylePort.grid}>
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            style={{
              ...stylePort.card,
              ...(hovered === project.id ? stylePort.cardHover : {}),
            }}
            onMouseEnter={() => setHovered(project.id)}
            onMouseLeave={() => setHovered(null)}
          >
            {(project.title.includes('Helpsi') ||
              project.title.includes('Lotus')) && (
              <div style={stylePort.badge}>Em andamento</div>
            )}

            <div style={stylePort.imageWrapper}>
              <img
                src={project.image}
                alt={project.title}
                style={stylePort.image}
              />
            </div>

            <p style={stylePort.cardTitle}>{project.title}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
