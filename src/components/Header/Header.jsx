import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Logo from './Logo';

export default function Header() {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}
const Wrapper = styled.header`
  display: flex;
  width: 1920px;
  height: 64px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1px;
  flex-shrink: 0;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 944px;
`;
const Button = styled.button`
  display: flex;
  height: 40px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 6px;
  border: 1px solid var(--gray-300, #ccc);
  background: var(--white, #fff);
`;
