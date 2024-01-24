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

  /* Font/18 Bold */
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 155.556% */
  letter-spacing: -0.18px;
`;

const ButtonArea = styled.div`
  display: flex;
  width: 100%;
  height: 104px;
  padding: 24px 0px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;
