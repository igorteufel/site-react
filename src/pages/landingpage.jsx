import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';

import Hero from '../components/hero';
import Portfolio from '../components/portfolio';
import About from '../components/about';
import Works from '../components/works';
import Footer from '../components/footer';
import Certify from '../components/certify';
import Insta from '../components/insta';
import SocialFeed from '../components/socialfeed';
import Header from '../components/header';

import * as S from './styles';

const MotionProgress = motion.create(S.Progress);

function Landingpage() {
  const [showButton, setShowButton] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <S.LandingPage>
      {!shouldReduceMotion && <MotionProgress style={{ scaleX: progress }} />}
      <S.LandingPageContainer>
        <Header />
        <main>
          <Hero />
          <About />
          <Portfolio />
          <Works />
          <Certify />
          <SocialFeed />
          <Insta />
        </main>
        <Footer />
      </S.LandingPageContainer>

      {showButton && (
        <S.BackToTopButton type="button" onClick={scrollToTop} aria-label="Voltar ao topo">
          <FaArrowUp />
        </S.BackToTopButton>
      )}
    </S.LandingPage>
  );
}

export default Landingpage;
