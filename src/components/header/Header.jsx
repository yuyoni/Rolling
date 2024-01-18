import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Logo from './Logo';

export default function Header() {
  return (
    <div>
      <h2>로고</h2>
      <Nav>
        <div>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div>
          <Link to="/post">
            <Button>롤링 페이퍼 만들기</Button>
          </Link>
        </div>
      </Nav>
    </div>
  );
}
const Nav = styled.nav`
  display: flex;
  align-items: center;
  // gap: 944px;
`;
const Button = styled.button`
  background-color: #6750a4;
  border: none;
  color: #ffffff;
  padding: 16px;
`;
