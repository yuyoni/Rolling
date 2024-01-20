import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  width: 1200px;
`;

export const Button = styled.button`
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  width: 280px;
  padding: 14px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: var(--Purple-600);

  color: var(--white);
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.18px;

  &:hover {
    background: var(--Purple-700);
  }
`;
