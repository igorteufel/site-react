import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as S from './styles';
import { useResponsive } from '../../hooks/useResponsive';

import Next from '../../assets/nextcircle.png';
import Weni from '../../assets/wenicircle.png';
import Duosystem from '../../assets/duocircle.png';
import Track from '../../assets/trackcircle.png';
import CooperSystem from '../../assets/coopercircle.png';

export default function Works() {
  const { isMobile, isTablet } = useResponsive();
  const [hovered, setHovered] = useState(null);

  const responsive = {
    balloonSize: isMobile ? 60 : isTablet ? 80 : 100,
    imageSize: isMobile ? '60%' : isTablet ? '70%' : '70%',
  };

  const balloons = [
    {
      id: 1,
      logo: Next,
      name: 'Next Tecnologia',
      radius: isMobile ? 100 : isTablet ? 130 : 150,
      speed: 12,
    },
    {
      id: 2,
      logo: Weni,
      name: 'Weni',
      radius: isMobile ? 130 : isTablet ? 170 : 200,
      speed: 18,
    },
    {
      id: 3,
      logo: Duosystem,
      name: 'Duosystem',
      radius: isMobile ? 150 : isTablet ? 200 : 250,
      speed: 15,
    },
    {
      id: 4,
      logo: Track,
      name: 'Track.co',
      radius: isMobile ? 120 : isTablet ? 150 : 180,
      speed: 20,
    },
    {
      id: 5,
      logo: CooperSystem,
      name: 'Coopersystem',
      radius: isMobile ? 140 : isTablet ? 180 : 220,
      speed: 14,
    },
  ];

  return (
    <S.Container id="works">
      {/* TEXTO FIXO NO CENTRO */}
      <S.CenterText>
        <S.Title>A Jornada até aqui</S.Title>

        <S.Subtitle>
          Há mais de 5 anos atuo como UX/UI Design, criando produtos digitais
          para web e mobile. Passei por empresas como Next Tecnologia, Weni,
          Duosystem, Track.co e, atualmente, Coopersystem, sempre unindo design
          e estratégia para entregar experiências consistentes e evoluir Design
          Systems.
        </S.Subtitle>
      </S.CenterText>

      {/* BALÕES ORBITANDO */}
      {balloons.map((b) => {
        const randomAngle = Math.random() * 360;

        return (
          <motion.div
            key={b.id}
            initial={{ rotate: randomAngle }}
            animate={{ rotate: 360 + randomAngle }}
            transition={{
              repeat: Infinity,
              duration: b.speed,
              ease: 'linear',
            }}
            style={{
              width: b.radius * 2,
              height: b.radius * 2,
              marginLeft: -b.radius,
              marginTop: -b.radius,
              position: 'absolute',
              top: '50%',
              left: '50%',
            }}
          >
            <S.Orbit>
              <S.Balloon
                style={{
                  width: responsive.balloonSize,
                  height: responsive.balloonSize,
                  transform: `translate(${b.radius}px, 0) translate(50%, -50%)`,
                }}
                onMouseEnter={() => setHovered(b.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <S.Logo
                  src={b.logo}
                  alt={b.name}
                  style={{
                    width: responsive.imageSize,
                    height: responsive.imageSize,
                  }}
                />

                {hovered === b.id && <S.Tooltip>{b.name}</S.Tooltip>}
              </S.Balloon>
            </S.Orbit>
          </motion.div>
        );
      })}
    </S.Container>
  );
}
