import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

import Hero from '../components/hero';
import Portfolio from '../components/portfolio';
import About from '../components/about';
import Works from '../components/works';
import Footer from '../components/footer';
import Certify from '../components/certify';
import Insta from '../components/insta';
import Header from '../components/header';

import styles from './styles';

function Landingpage() {
  const [showButton, setShowButton] = useState(false);

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
      behavior: 'smooth',
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <Header />

        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="portfolio">
          <Portfolio />
        </section>

        <section id="works">
          <Works />
        </section>

        <section id="certify">
          <Certify />
        </section>

        <section id="insta">
          <Insta />
        </section>

        <Footer />
      </div>

      {showButton && (
        <button
          onClick={scrollToTop}
          style={styles.backToTop}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')
          }
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}

export default Landingpage;
