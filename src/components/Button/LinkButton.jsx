import { Link } from 'react-router-dom';
import styled from 'styled-components';

function LinkButton({ value, link }) {
  return (
    <ButtonArea>
      <Link to={link}>
        <Button>{value}</Button>
      </Link>
    </ButtonArea>
  );
}

export default LinkButton;

const Button = styled.button`
  display: flex;
  width: 280px;
  padding: 14px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 12px;
  background: var(--Purple-600, #9935ff);

  color: var(--white, #fff);
  text-align: center;

  font-family: Pretendard;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.18px;

  &:hover {
    background: var(--Purple-700);
    transition: all 0.3s;
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const ButtonArea = styled.div`
  display: flex;
  width: 100%;
  padding: 24px 0px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  @media (max-width: 768px) {
    padding: 2.4rem;
    a {
      width: 100%;
    }
  }
`;
