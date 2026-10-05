import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { FaArrowDown, FaArrowRight, FaBehance } from 'react-icons/fa6';
import portrait from '../../assets/Igor.png';
import { reveal, revealMask, stagger } from '../../styles/motion';
import * as S from './styles';

const MotionCopy = motion.create(S.Copy);
const MotionPortrait = motion.create(S.PortraitWrap);

export default function Hero() {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <S.Section id="inicio" ref={sectionRef}>
      <S.Grid aria-hidden="true" /><S.Glow aria-hidden="true" />
      <S.Inner>
        <MotionCopy style={shouldReduceMotion ? undefined : { y: copyY }} initial={shouldReduceMotion ? false : 'hidden'} animate="visible" variants={stagger}>
          <motion.div variants={reveal}><S.Eyebrow><i /> Product designer · Design systems · UX/UI</S.Eyebrow></motion.div>
          <motion.div variants={revealMask}><S.Title>Design que organiza o <em>complexo.</em></S.Title></motion.div>
          <motion.div variants={reveal}><S.Description>Eu sou Igor Teufel. Transformo problemas reais em produtos digitais claros, consistentes e prontos para evoluir.</S.Description></motion.div>
          <motion.div variants={reveal}>
            <S.Actions>
              <S.Primary href="#portfolio">Ver projetos <FaArrowDown aria-hidden="true" /></S.Primary>
              <S.Secondary href="https://www.behance.net/igor_teufel" target="_blank" rel="noreferrer">Behance <FaBehance aria-hidden="true" /></S.Secondary>
            </S.Actions>
          </motion.div>
        </MotionCopy>

        <MotionPortrait style={shouldReduceMotion ? undefined : { y: portraitY, scale: portraitScale }} initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}>
          <S.NameTag><span>Igor</span> Teufel</S.NameTag>
          <S.Portrait src={portrait} alt="Igor Teufel, Product Designer" fetchPriority="high" />
          <S.Availability><i /> Disponível para criar produtos melhores</S.Availability>
          <S.FloatMark aria-hidden="true">05+</S.FloatMark>
        </MotionPortrait>
      </S.Inner>
      <S.BottomLine><span>São Paulo · Brasil</span><a href="#about">Conheça meu trabalho <FaArrowRight /></a><span>Scroll para explorar</span></S.BottomLine>
      <S.GiantWord aria-hidden="true">DESIGNER</S.GiantWord>
    </S.Section>
  );
}
