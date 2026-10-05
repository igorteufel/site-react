import { motion, useReducedMotion } from 'framer-motion';
import next from '../../assets/logos/next-reference.png';
import weni from '../../assets/logos/weni-icon.jpg';
import duo from '../../assets/logos/duosystem-icon.png';
import track from '../../assets/logos/track-icon.png';
import cooper from '../../assets/logos/coopersystem-icon.png';
import { motionState, reveal, stagger } from '../../styles/motion';
import * as S from './styles';

const companies = [
  { name: 'Next Tecnologia', logo: next, note: 'Onde a jornada começou', surface: 'dark', scale: 1.22 },
  { name: 'Weni', logo: weni, note: 'Experiências conversacionais', scale: 1.08, offsetX: -7 },
  { name: 'Duosystem', logo: duo, note: 'Produtos e problemas complexos', scale: 1.08, offsetY: -8 },
  { name: 'Track.co', logo: track, note: 'Experiência orientada por dados', scale: .92 },
  { name: 'Coopersystem', logo: cooper, note: 'Design em escala · hoje', scale: .88 },
];

const MotionHeader = motion.create(S.Header);
const MotionOrbit = motion.create(S.Orbit);

export default function Works() {
  const shouldReduceMotion = useReducedMotion();
  const state = motionState(shouldReduceMotion);

  return (
    <S.Section id="works" aria-labelledby="works-title">
      <S.Inner>
        <MotionHeader {...state} variants={reveal}>
          <S.Kicker><span>03</span> Trajetória</S.Kicker>
          <S.Title id="works-title">Uma jornada de<br /><em>evolução contínua.</em></S.Title>
          <S.Intro>Mais de 5 anos atravessando contextos, negócios e produtos diferentes. Cada etapa ampliou meu repertório e a forma como eu projeto.</S.Intro>
        </MotionHeader>

        <MotionOrbit {...state} variants={stagger} aria-label="Linha do tempo profissional de Igor Teufel">
          <S.Ring $outer aria-hidden="true" />
          <S.Ring aria-hidden="true" />
          <S.Center variants={reveal}>
            <strong>+05</strong>
            <span>anos criando<br />produtos digitais</span>
          </S.Center>
          <S.CompanyList>
            {companies.map((company, index) => (
              <S.CompanyNode key={company.name} $index={index} variants={reveal}>
                <S.Step>{String(index + 1).padStart(2, '0')}</S.Step>
                <S.LogoWrap $surface={company.surface} $scale={company.scale} $offsetX={company.offsetX} $offsetY={company.offsetY}><img src={company.logo} alt={`Logo da ${company.name}`} loading="lazy" /></S.LogoWrap>
                <S.CompanyCopy><strong>{company.name}</strong><span>{company.note}</span></S.CompanyCopy>
              </S.CompanyNode>
            ))}
          </S.CompanyList>
          <S.Direction aria-hidden="true"><span>Início</span><i /><span>Hoje</span></S.Direction>
        </MotionOrbit>

        <S.Expertise><span>UX Strategy</span><span>Product Design</span><span>UI Design</span><span>Design Systems</span><span>Prototipação</span><span>Handoff</span></S.Expertise>
      </S.Inner>
    </S.Section>
  );
}
