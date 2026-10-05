import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaXmark } from 'react-icons/fa6';
import * as S from './styles';
import c1 from '../../assets/certify01.png'; import c2 from '../../assets/certify02.png';
import c3 from '../../assets/certify03.png'; import c4 from '../../assets/certify04.png';
import c5 from '../../assets/certify05.png'; import c6 from '../../assets/certify06.png';
import c7 from '../../assets/certify07.png'; import c8 from '../../assets/certify08.png';
import c9 from '../../assets/certify09.png'; import c10 from '../../assets/certify10.png';
import { motionState, reveal } from '../../styles/motion';

const certificates = [c1,c2,c3,c4,c5,c6,c7,c8,c9,c10];
const MotionHeader = motion.create(S.Header);

const getOffset = (index, active) => {
  let offset = index - active;
  if (offset > certificates.length / 2) offset -= certificates.length;
  if (offset < -certificates.length / 2) offset += certificates.length;
  return offset;
};

export default function Certify() {
  const [selected, setSelected] = useState(null);
  const [active, setActive] = useState(0);
  const dragStart = useRef(null);
  const didDrag = useRef(false);
  const shouldReduceMotion = useReducedMotion();
  const move = (amount) => setActive((current) => (current + amount + certificates.length) % certificates.length);

  useEffect(() => {
    if (selected === null) return undefined;
    const close = (event) => event.key === 'Escape' && setSelected(null);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', close);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', close); };
  }, [selected]);

  const handlePointerUp = (event) => {
    if (dragStart.current === null) return;
    const distance = event.clientX - dragStart.current;
    dragStart.current = null;
    didDrag.current = Math.abs(distance) >= 48;
    if (didDrag.current) move(distance < 0 ? 1 : -1);
  };

  return (
    <S.Section aria-labelledby="certificates-title">
      <S.Inner>
        <MotionHeader {...motionState(shouldReduceMotion)} variants={reveal}>
          <S.Kicker><span>04</span> Aprendizado contínuo</S.Kicker>
          <S.Title id="certificates-title">Repertório nunca fica pronto.</S.Title>
          <p>Cursos e certificações fazem parte de uma prática que continua em movimento.</p>
        </MotionHeader>

        <S.Carousel aria-roledescription="carrossel" aria-label="Certificados de Igor Teufel">
          <S.Viewport
            tabIndex="0"
            onPointerDown={(event) => { dragStart.current = event.clientX; }}
            onPointerUp={handlePointerUp}
            onPointerCancel={() => { dragStart.current = null; }}
            onKeyDown={(event) => {
              if (event.key === 'ArrowRight') move(1);
              if (event.key === 'ArrowLeft') move(-1);
            }}
          >
            {certificates.map((image, index) => {
              const offset = getOffset(index, active);
              const visible = Math.abs(offset) <= 1;
              const isActive = index === active;
              return (
                <S.Slide key={image} $offset={offset} $active={isActive} aria-hidden={!visible}>
                  <S.Card
                    type="button"
                    tabIndex={visible ? 0 : -1}
                    onClick={() => {
                      if (didDrag.current) { didDrag.current = false; return; }
                      if (isActive) setSelected(index); else setActive(index);
                    }}
                    aria-label={isActive ? `Ampliar certificado ${index + 1}` : `Selecionar certificado ${index + 1}`}
                  >
                    <img src={image} alt="" loading="lazy" decoding="async" />
                    <S.Caption><span>{isActive ? 'Em destaque' : 'Certificado'}</span><strong>Certificado {String(index + 1).padStart(2, '0')}</strong></S.Caption>
                  </S.Card>
                </S.Slide>
              );
            })}
          </S.Viewport>

          <S.Toolbar>
            <S.ActiveCopy aria-live="polite"><span>{String(active + 1).padStart(2, '0')} / {String(certificates.length).padStart(2, '0')}</span><strong>Clique no certificado central para ampliar</strong></S.ActiveCopy>
            <S.Controls>
              <button type="button" onClick={() => move(-1)} aria-label="Certificado anterior"><FaArrowLeft /></button>
              <S.Dots aria-label="Selecionar certificado">
                {certificates.map((image, index) => <button key={image} type="button" className={index === active ? 'active' : ''} onClick={() => setActive(index)} aria-label={`Ver certificado ${index + 1}`} aria-current={index === active ? 'true' : undefined} />)}
              </S.Dots>
              <button type="button" onClick={() => move(1)} aria-label="Próximo certificado"><FaArrowRight /></button>
            </S.Controls>
          </S.Toolbar>
        </S.Carousel>
      </S.Inner>

      {selected !== null && (
        <S.Overlay role="dialog" aria-modal="true" aria-label={`Certificado ${selected + 1}`} onClick={() => setSelected(null)}>
          <S.Dialog onClick={(event) => event.stopPropagation()}>
            <S.Close type="button" onClick={() => setSelected(null)} aria-label="Fechar certificado"><FaXmark /></S.Close>
            <img src={certificates[selected]} alt={`Certificado ${selected + 1} de Igor Teufel`} />
          </S.Dialog>
        </S.Overlay>
      )}
    </S.Section>
  );
}
