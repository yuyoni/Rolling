import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.2rem 2rem;
  width: 120rem;
`;

export const Button = styled.button`
  position: fixed;
  bottom: 4rem;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  width: 28rem;
  padding: 1.4rem 2.4rem;
  justify-content: center;
  align-items: center;
  border-radius: 1.2rem;
  background: var(--Purple-600);

  color: var(--white);
  text-align: center;
  font-family: Pretendard;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.8rem;
  letter-spacing: -0.018rem;

  &:hover {
    background: var(--Purple-700);
  }
`;
