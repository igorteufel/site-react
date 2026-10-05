import * as S from './styles';
export default function Footer() {
  return (
    <S.Footer>
      <S.Brand><span>IT</span><div><strong>Igor Teufel</strong><small>Product Designer · UX/UI</small></div></S.Brand>
      <S.Copy>© {new Date().getFullYear()} · Projetado com intenção e construído com código.</S.Copy>
      <S.Top href="#inicio">Voltar ao topo ↑</S.Top>
    </S.Footer>
  );
}
