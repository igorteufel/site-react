import behancelogo from '../../assets/behancelogo.svg';
import doclogo from '../../assets/pdflogo.svg';
import * as S from './styles';

function Hero() {
  return (
    <S.HeroSection>
      <S.Content>
        <S.Body>Igor Josef Teufel</S.Body>

        <S.Complement>Transformo ideias em experiências digitais</S.Complement>

        <S.Title>UX/UI Designer</S.Title>

        <S.ButtonContainer>
          <S.Button
            href="https://www.behance.net/igor_teufel"
            target="_blank"
            rel="noreferrer"
          >
            <S.ButtonLogo src={behancelogo} alt="behance" />

            <S.ButtonText>
              <S.ButtonBody>Meu portfólio</S.ButtonBody>
              <S.ButtonTitle>Behance</S.ButtonTitle>
            </S.ButtonText>
          </S.Button>

          <S.Button href="/curriculo.pdf" download="curriculo.pdf">
            <S.ButtonLogo src={doclogo} alt="pdf" />

            <S.ButtonText>
              <S.ButtonBody>Meu currículo</S.ButtonBody>
              <S.ButtonTitle>Download</S.ButtonTitle>
            </S.ButtonText>
          </S.Button>
        </S.ButtonContainer>

        <S.imageSection> </S.imageSection>
      </S.Content>
    </S.HeroSection>
  );
}

export default Hero;
