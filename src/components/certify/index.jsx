import { useState } from 'react';
import * as S from './styles';

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

// duplica p/ loop infinito
const loopProjects = [...projects, ...projects];

export default function Certify() {
  const [selected, setSelected] = useState(null);

  return (
    <S.Section>
      <S.Container>
        <S.Title>Certificados</S.Title>

        <S.Wrapper>
          <S.Carousel paused={!!selected}>
            {loopProjects.map((project, i) => (
              <S.Card key={i} onClick={() => setSelected(project)}>
                <S.Image src={project.image} alt={project.title} />
              </S.Card>
            ))}
          </S.Carousel>
        </S.Wrapper>
      </S.Container>

      {selected && (
        <S.ModalOverlay onClick={() => setSelected(null)}>
          <S.ModalContent onClick={(e) => e.stopPropagation()}>
            <S.ModalImage src={selected.image} alt={selected.title} />
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </S.Section>
  );
}
