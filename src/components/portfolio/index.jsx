import { motion, useReducedMotion } from 'framer-motion';
import { FaArrowRightLong, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import mei from '../../assets/Card06.png';
import coopsparty from '../../assets/Card02.png';
import petcare from '../../assets/Card03.png';
import eva from '../../assets/Card04.png';
import lotus from '../../assets/Card05.png';
import helpsico from '../../assets/Card01.png';
import { motionState, reveal, revealSoft, stagger } from '../../styles/motion';
import * as S from './styles';

const projects = [
  { title: 'Redesign App MEI', type: 'Produto digital · UX/UI', image: mei, link: 'https://www.behance.net/gallery/237371305/Redesign-App-MEI', description: 'Uma experiência mais clara para quem precisa cuidar do negócio sem complicação.' },
  { title: 'Coopsparty', type: 'Aplicativo · Produto', image: coopsparty, link: 'https://www.behance.net/gallery/216374769/Aplicativo-Coopsparty', description: 'Conexão, colaboração e comunidade traduzidas em uma jornada mobile.' },
  { title: 'Petcare', type: 'Aplicativo · UX/UI', image: petcare, link: 'https://www.behance.net/gallery/230323907/PETCARE', description: 'Cuidado e rotina dos pets organizados em uma experiência acolhedora.' },
  { title: 'EVA Design System', type: 'Design System', image: eva, link: 'https://www.behance.net/gallery/148180513/Design-System-EVA', description: 'Fundação visual e componentes para produtos mais consistentes e escaláveis.' },
  { title: 'Lotus Design System', type: 'Design System · Em evolução', image: lotus, description: 'Tokens, padrões e decisões compartilhadas para acelerar o produto.' },
  { title: 'Helpsi', type: 'SaaS · Product Design', image: helpsico, link: 'https://www.helpsico.com.br/', description: 'Uma plataforma de gestão desenhada em torno da rotina de psicólogos.' },
];

const MotionHeader = motion.create(S.Header);
const MotionGrid = motion.create(S.Grid);
const MotionCard = motion.create(S.Card);

export default function Portfolio() {
  const shouldReduceMotion = useReducedMotion();
  const state = motionState(shouldReduceMotion);

  return (
    <S.Section id="portfolio" aria-labelledby="portfolio-title">
      <S.Inner>
        <MotionHeader {...state} variants={reveal}>
          <S.Kicker><span>02</span> Projetos selecionados</S.Kicker>
          <S.Title id="portfolio-title">Trabalho que une <em>clareza</em> e intenção.</S.Title>
          <S.HeaderText>Uma seleção de produtos, experiências e sistemas que mostram como penso — do problema à interface.</S.HeaderText>
        </MotionHeader>

        <MotionGrid {...state} variants={stagger}>
          {projects.map((project, index) => {
            const cardProps = project.link ? { as: 'a', href: project.link, target: '_blank', rel: 'noreferrer' } : { as: 'article' };
            return (
              <MotionCard key={project.title} variants={revealSoft} {...cardProps}>
                <S.Visual>
                  <S.ProjectNumber>0{index + 1}</S.ProjectNumber>
                  <S.ProjectImage src={project.image} alt={`Capa do projeto ${project.title}`} loading="lazy" />
                  {project.link && <S.OpenIcon aria-hidden="true"><FaArrowUpRightFromSquare /></S.OpenIcon>}
                </S.Visual>
                <S.CardBody>
                  <div><S.Type>{project.type}</S.Type><h3>{project.title}</h3></div>
                  <p>{project.description}</p>
                  <S.CardAction>{project.link ? 'Ver estudo de caso' : 'Em desenvolvimento'} <FaArrowRightLong /></S.CardAction>
                </S.CardBody>
              </MotionCard>
            );
          })}
        </MotionGrid>

        <S.AllWork href="https://www.behance.net/igor_teufel" target="_blank" rel="noreferrer">Explorar portfólio completo no Behance <FaArrowRightLong /></S.AllWork>
      </S.Inner>
    </S.Section>
  );
}
