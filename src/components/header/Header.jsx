import { Link } from 'react-router-dom';
import * as S from './Header.style';

import Logo from './Logo';

export default function Header() {
  return (
    <S.Wrapper>
      <S.Nav>
        <div>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div>
          <Link to="/post">
            <S.Button>롤링 페이퍼 만들기</S.Button>
          </Link>
        </div>
      </S.Nav>
    </S.Wrapper>
  );
}
