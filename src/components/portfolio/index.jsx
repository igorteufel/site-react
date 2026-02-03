import * as S from './styles';

import helpsiImg from '../../assets/Card01.png';
import coopspartyImg from '../../assets/Card02.png';
import petcareImg from '../../assets/Card03.png';
import evaImg from '../../assets/Card04.png';
import lotusIMG from '../../assets/Card05.png';
import Mei from '../../assets/Card06.png';

const projects = [
  {
    id: 1,
    title: 'Redesign Mei',
    image: Mei,
    link: 'https://www.behance.net/gallery/237371305/Redesign-App-MEI',
  },
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
    id: 6,
    title: 'Helpsi 2024',
    image: helpsiImg,
    link: '',
  },
];

function Portfolio() {
  return (
    <S.Section id="portfolio">
      <S.Title>Portfólio</S.Title>

      <S.Grid>
        {projects.map((project) => {
          const isWip =
            project.title.includes('Helpsi') || project.title.includes('Lotus');

          return (
            <S.Card
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              {isWip && <S.Badge>Em andamento</S.Badge>}

              <S.ImageWrapper>
                <S.Image src={project.image} alt={project.title} />
              </S.ImageWrapper>

              <S.CardTitle>{project.title}</S.CardTitle>
            </S.Card>
          );
        })}
      </S.Grid>
    </S.Section>
  );
}

export default Portfolio;
