import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import * as S from './styles';

function Social() {
  return (
    <S.Wrapper id="insta">
      <S.Section>
        <S.Content>
          <S.Title>Vamos nos conectar?</S.Title>

          <S.Icons>
            <S.IconLink
              href="https://instagram.com/igorteufel.ux"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </S.IconLink>

            <S.IconLink
              href="https://linkedin.com/in/igor-teufel/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </S.IconLink>

            <S.IconLink
              href="https://wa.me/5512988194507?text=Oie%20Igor%20%E2%9C%8C%F0%9F%8F%BB"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </S.IconLink>
          </S.Icons>
        </S.Content>
      </S.Section>
    </S.Wrapper>
  );
}

export default Social;
