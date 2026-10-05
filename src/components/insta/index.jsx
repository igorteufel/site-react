import { motion, useReducedMotion } from 'framer-motion';
import { FaArrowRightLong, FaBehance, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';
import { motionState, reveal, revealMask } from '../../styles/motion';
import * as S from './styles';

const MotionContent = motion.create(S.Content);

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <S.Section id="contact" aria-labelledby="contact-title">
      <S.Decoration aria-hidden="true">LET'S TALK</S.Decoration>
      <MotionContent {...motionState(shouldReduceMotion)}>
        <motion.p variants={reveal}>Tem um produto, desafio ou ideia?</motion.p>
        <motion.div variants={revealMask}><S.Title id="contact-title">Vamos construir algo que faça <em>sentido.</em></S.Title></motion.div>
        <motion.div variants={reveal}>
          <S.Whatsapp href="https://wa.me/5512988194507?text=Oi%20Igor!%20Vi%20seu%20portf%C3%B3lio%20e%20quero%20conversar." target="_blank" rel="noreferrer">Começar uma conversa <FaArrowRightLong /></S.Whatsapp>
        </motion.div>
        <motion.div variants={reveal}>
          <S.Socials aria-label="Redes sociais">
            <a href="https://linkedin.com/in/igor-teufel/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://www.behance.net/igor_teufel" target="_blank" rel="noreferrer" aria-label="Behance"><FaBehance /></a>
            <a href="https://instagram.com/igorteufel.ux" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://wa.me/5512988194507" target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
          </S.Socials>
        </motion.div>
      </MotionContent>
    </S.Section>
  );
}
