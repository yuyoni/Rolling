import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as S from './Header.style';

import Logo from './Logo';

export default function Header() {
  const [isMobile, setMobile] = useState(false);
  const location = useLocation();
  const isButtonPage =
    location.pathname === '/' || location.pathname === '/list';

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!isButtonPage && isMobile) {
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
