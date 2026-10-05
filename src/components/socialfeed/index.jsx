import { motion, useReducedMotion } from 'framer-motion';
import { FaArrowUpRightFromSquare, FaInstagram } from 'react-icons/fa6';
import aiStylesPost from '../../assets/instagram/DOKFka6kWV5.jpg';
import aiToolsPost from '../../assets/instagram/DOEDRfFEXR6.jpg';
import { motionState, reveal, revealSoft, stagger } from '../../styles/motion';
import * as S from './styles';

const instagramUrl = 'https://www.instagram.com/igorteufel.ux/';
const highlights = [
  { image: aiStylesPost, index: '01', label: 'IA · Processo criativo', title: 'Explorando estilos com IA no Design', link: 'https://www.instagram.com/p/DOKFka6kWV5/?img_index=1' },
  { image: aiToolsPost, index: '02', label: 'IA · Ferramentas de design', title: 'As ferramentas de IA que fazem parte do meu dia a dia', link: 'https://www.instagram.com/p/DOEDRfFEXR6/?img_index=1' },
];

const MotionHeader = motion.create(S.Header);
const MotionGrid = motion.create(S.Grid);

export default function SocialFeed() {
  const shouldReduceMotion = useReducedMotion();
  const state = motionState(shouldReduceMotion);

  return (
    <S.Section id="instagram" aria-labelledby="instagram-title">
      <S.Inner>
        <MotionHeader {...state} variants={reveal}>
          <div>
            <S.Kicker href={instagramUrl} target="_blank" rel="noreferrer"><FaInstagram /> @igorteufel.ux</S.Kicker>
            <S.Title id="instagram-title">Ideias que continuam <em>fora daqui.</em></S.Title>
          </div>
          <S.Intro>Também compartilho curiosidades, referências e provocações sobre produto, UX/UI e tecnologia no Instagram.</S.Intro>
        </MotionHeader>

        <MotionGrid {...state} variants={stagger}>
          {highlights.map((post) => (
            <motion.article key={post.index} variants={revealSoft}>
              <S.PostLink href={post.link} target="_blank" rel="noreferrer" aria-label={`Abrir publicação no Instagram: ${post.title}`}>
                <S.Media>
                  <S.MediaBackdrop src={post.image} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                  <S.PostImage src={post.image} alt={`Capa da publicação ${post.title}`} loading="lazy" decoding="async" />
                </S.Media>
                <S.Overlay aria-hidden="true" />
                <S.PostNumber>{post.index}</S.PostNumber>
                <S.Open><FaArrowUpRightFromSquare /></S.Open>
                <S.PostCopy><span>{post.label}</span><strong>{post.title}</strong></S.PostCopy>
              </S.PostLink>
            </motion.article>
          ))}
        </MotionGrid>

        <S.ProfileLink href={instagramUrl} target="_blank" rel="noreferrer">Ver todos os conteúdos no Instagram <FaArrowUpRightFromSquare /></S.ProfileLink>
      </S.Inner>
    </S.Section>
  );
}
