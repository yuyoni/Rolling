import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header/Header';

export default function Layout() {
  return (
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  @media (max-width: 768px) {
    max-width: 768px;
  }
  @media (max-width: 360px) {
    max-width: 360px;
  }
`;
