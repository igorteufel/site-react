import { motion, useReducedMotion } from 'framer-motion';
import { FaArrowTrendUp, FaLayerGroup, FaPeopleGroup } from 'react-icons/fa6';
import profile from '../../assets/img3.png';
import pets from '../../assets/img1.png';
import family from '../../assets/img4.jpg';
import couple from '../../assets/img5.jpg';
import { motionState, reveal, revealSoft, stagger } from '../../styles/motion';
import * as S from './styles';

const principles = [
  { icon: FaPeopleGroup, title: 'Pessoas antes da tela', text: 'Decisões de design começam pelo contexto, não pela interface.' },
  { icon: FaLayerGroup, title: 'Sistemas que escalam', text: 'Consistência para transformar boas decisões em produto.' },
  { icon: FaArrowTrendUp, title: 'Impacto mensurável', text: 'Clareza para equilibrar experiência, tecnologia e negócio.' },
];

const MotionHeader = motion.create(S.Header);
const MotionManifesto = motion.create(S.Manifesto);
const MotionGallery = motion.create(S.Gallery);
const MotionPrinciples = motion.create(S.Principles);

export default function About() {
  const shouldReduceMotion = useReducedMotion();
  const state = motionState(shouldReduceMotion);

  return (
    <S.Section id="about" aria-labelledby="about-title">
      <S.Inner>
        <MotionHeader {...state} variants={reveal}>
          <S.Kicker><span>01</span> Sobre mim</S.Kicker>
          <S.Intro id="about-title">Entre estratégia, interface e código, eu desenho caminhos mais simples.</S.Intro>
        </MotionHeader>

        <S.Content>
          <MotionManifesto {...state} variants={reveal}>
            <S.Title>Curioso por natureza.<br /><em>Designer por escolha.</em></S.Title>
            <S.Text>Há mais de 5 anos trabalho com produtos digitais para web e mobile. Gosto de entrar em problemas complexos, fazer as perguntas certas e construir experiências que as pessoas entendem sem esforço.</S.Text>
            <S.Text>Minha prática conecta pesquisa, produto, UI e Design Systems — sempre em parceria com tecnologia e negócio.</S.Text>
            <S.Signature>IGOR T. <small>Product Designer</small></S.Signature>
          </MotionManifesto>

          <MotionGallery {...state} variants={revealSoft}>
            <S.MainPhoto src={profile} alt="Igor Teufel em um momento ao ar livre" loading="lazy" />
            <S.SecondPhoto src={pets} alt="Igor com sua família e seus cachorros em ilustração" loading="lazy" />
            <S.ThirdPhoto src={family} alt="Igor em um momento em família" loading="lazy" />
            <S.FourthPhoto src={couple} alt="Igor e sua companheira ao ar livre" loading="lazy" />
            <S.PhotoLabel>Design também é repertório.</S.PhotoLabel>
          </MotionGallery>
        </S.Content>

        <MotionPrinciples {...state} variants={stagger}>
          {principles.map(({ icon: Icon, title, text }, index) => (
            <motion.article key={title} variants={reveal}>
              <S.PrincipleTop><span>0{index + 1}</span><Icon aria-hidden="true" /></S.PrincipleTop>
              <h3>{title}</h3><p>{text}</p>
            </motion.article>
          ))}
        </MotionPrinciples>
      </S.Inner>
    </S.Section>
  );
}
