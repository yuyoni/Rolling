import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  position: absolute;
  bottom: -6.4rem;
  left: 50%;
  transform: translate(-50%, 50%);

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
  line-height: 2.8rem;

  &:hover {
    background: var(--Purple-700);
  }

  @media (max-width: 768px) {
    left: 2.4rem;
    right: 2.4rem;
    bottom: -6.4rem;
    width: auto;
    transform: translateY(50%);
  }
`;
