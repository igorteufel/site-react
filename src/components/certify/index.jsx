import { useState } from 'react';
import { styleCertify } from './styles';

import certificado01 from '../../assets/certify01.png';
import certificado02 from '../../assets/certify02.png';
import certificado03 from '../../assets/certify03.png';
import certificado04 from '../../assets/certify04.png';
import certificado05 from '../../assets/certify05.png';
import certificado06 from '../../assets/certify06.png';
import certificado07 from '../../assets/certify07.png';
import certificado08 from '../../assets/certify08.png';
import certificado09 from '../../assets/certify09.png';
import certificado10 from '../../assets/certify10.png';

const projects = [
  { id: 1, title: 'Certificado 01', image: certificado01 },
  { id: 2, title: 'Certificado 02', image: certificado02 },
  { id: 3, title: 'Certificado 03', image: certificado03 },
  { id: 4, title: 'Certificado 04', image: certificado04 },
  { id: 5, title: 'Certificado 05', image: certificado05 },
  { id: 6, title: 'Certificado 06', image: certificado06 },
  { id: 7, title: 'Certificado 07', image: certificado07 },
  { id: 8, title: 'Certificado 08', image: certificado08 },
  { id: 9, title: 'Certificado 09', image: certificado09 },
  { id: 10, title: 'Certificado 10', image: certificado10 },
];

// duplica p/ efeito de loop infinito
const loopProjects = [...projects, ...projects];

export default function Certify() {
  const [selected, setSelected] = useState(null);

  const handleClick = (project) => {
    setSelected(project);
  };

  const handleClose = () => {
    setSelected(null);
  };

  return (
    <section style={styleCertify.section}>
      <div style={styleCertify.container}>
        <h1 style={styleCertify.title}>Certificados</h1>

        <div style={styleCertify.wrapper}>
          <div
            style={{
              ...styleCertify.carousel,
              animationPlayState: selected ? 'paused' : 'running',
            }}
          >
            {loopProjects.map((project, i) => (
              <div
                key={i}
                style={styleCertify.card}
                onClick={() => handleClick(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={styleCertify.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div style={styleCertify.modalOverlay} onClick={handleClose}>
          <div
            style={styleCertify.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.image}
              alt={selected.title}
              style={styleCertify.modalImage}
            />
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </section>
  );
}
