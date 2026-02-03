import * as S from './styles';
import Joia from '../../assets/joia.gif';

export default function Footer() {
  return (
    <S.Section>
      <S.Container>
        <S.Title>Obrigado por chegar até aqui</S.Title>

        <S.Subtitle>
          Acredito que um bom designer nunca para de aprender e por isso, estou
          constantemente me atualizando por meio de cursos, certificações e
          estudos contínuos, fortalecendo tanto minha base técnica quanto
          estratégica.
        </S.Subtitle>

        <S.Joia src={Joia} alt="emoji animado" />
      </S.Container>
    </S.Section>
  );
}
