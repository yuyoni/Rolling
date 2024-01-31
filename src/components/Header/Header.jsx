import { Link, useLocation } from 'react-router-dom';
import * as S from './Header.style';

import Logo from './Logo';

export default function Header() {
  const location = useLocation();
  const isButtonPage =
    location.pathname === '/' || location.pathname === '/list';

  if (!isButtonPage) {
    return null;
  }

  return (
    <S.Wrapper>
      <S.Navigation>
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
