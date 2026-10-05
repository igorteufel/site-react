import { useReducedMotion } from 'framer-motion';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import profile from '../../assets/img3.png';
import * as S from './styles';

const navigation = [
  { label: 'Sobre', href: 'about' },
  { label: 'Projetos', href: 'portfolio' },
  { label: 'Trajetória', href: 'works' },
  { label: 'Instagram', href: 'instagram' },
];

export default function Header() {
  const shouldReduceMotion = useReducedMotion();
  const goTo = (id) => (event) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth', block: 'start' });
  };

  return (
    <S.Header>
      <S.Inner>
        <S.Brand href="#inicio" onClick={goTo('inicio')} aria-label="Igor Teufel — início">
          <S.Avatar src={profile} alt="" /><strong>Igor Teufel</strong>
        </S.Brand>
        <S.Nav aria-label="Navegação principal">
          {navigation.map((item) => (
            <S.NavLink key={item.href} href={`#${item.href}`} onClick={goTo(item.href)}>{item.label}</S.NavLink>
          ))}
        </S.Nav>
        <S.Contact href="#contact" onClick={goTo('contact')}>
          Vamos conversar <FaArrowUpRightFromSquare aria-hidden="true" />
        </S.Contact>
      </S.Inner>
    </S.Header>
  );
}
