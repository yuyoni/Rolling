import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import * as S from './Layout.style';

export default function Layout() {
  return (
    <S.Wrapper>
      <S.Page>
        <Header />
        <Outlet />
      </S.Page>
    </S.Wrapper>
  );
}
