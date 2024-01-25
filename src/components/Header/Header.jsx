import { Link, useLocation } from 'react-router-dom';
import * as S from './Header.style';

import Logo from './Logo';

export default function Header() {
  const location = useLocation();
  const isButtonPage =
    location.pathname === '/' || location.pathname === '/list';
  const navigationClass = !isButtonPage && 'navNoShow';
  return (
    <S.Wrapper>
      <S.Navigation className={navigationClass}>
        <Link to="/">
          <Logo />
        </Link>
        {isButtonPage && (
          <Link to="/post">
            <S.Button>롤링 페이퍼 만들기</S.Button>
          </Link>
        )}
      </S.Navigation>
    </S.Wrapper>
  );
}
